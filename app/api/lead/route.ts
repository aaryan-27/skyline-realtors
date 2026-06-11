import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  budget?: string;
  interest?: string;
  location?: string;
  message?: string;
  source?: string;
  project?: string;
};

function isValid(lead: LeadPayload) {
  if (!lead.name || lead.name.trim().length < 2) return false;
  if (!lead.phone || !/^[0-9+\s-]{10,15}$/.test(lead.phone)) return false;
  return true;
}

// ── Integrations (each fails soft so one outage never blocks a lead) ──

async function saveToSupabase(lead: LeadPayload) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return;
  const supabase = createClient(url, key);
  await supabase.from("leads").insert({
    name: lead.name,
    phone: lead.phone,
    email: lead.email ?? null,
    budget: lead.budget ?? null,
    interest: lead.interest ?? null,
    location: lead.location ?? null,
    message: lead.message ?? null,
    source: lead.source ?? "website",
    project: lead.project ?? null,
    created_at: new Date().toISOString(),
  });
}

async function notifyWhatsApp(lead: LeadPayload) {
  const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const to = process.env.WHATSAPP_BUSINESS_NUMBER;
  if (!phoneId || !token || !to) return;

  const body = [
    "🏠 *New Lead — Crossroad Consultant Inc*",
    `*Name:* ${lead.name}`,
    `*Phone:* ${lead.phone}`,
    lead.email ? `*Email:* ${lead.email}` : null,
    lead.interest ? `*Interest:* ${lead.interest}` : null,
    lead.budget ? `*Budget:* ${lead.budget}` : null,
    lead.location ? `*Location:* ${lead.location}` : null,
    lead.project ? `*Project:* ${lead.project}` : null,
    lead.message ? `*Message:* ${lead.message}` : null,
    `*Source:* ${lead.source ?? "website"}`,
  ]
    .filter(Boolean)
    .join("\n");

  await fetch(`https://graph.facebook.com/v21.0/${phoneId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body },
    }),
  });
}

async function notifyEmail(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_NOTIFY_EMAIL;
  if (!apiKey || !toEmail) return;

  const html = `
    <h2 style="font-family:Georgia,serif;color:#0B1F3A">New Lead — Crossroad Consultant Inc</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;color:#1A1A1A">
      <tr><td><b>Name</b></td><td>${lead.name}</td></tr>
      <tr><td><b>Phone</b></td><td>${lead.phone}</td></tr>
      ${lead.email ? `<tr><td><b>Email</b></td><td>${lead.email}</td></tr>` : ""}
      ${lead.interest ? `<tr><td><b>Interest</b></td><td>${lead.interest}</td></tr>` : ""}
      ${lead.budget ? `<tr><td><b>Budget</b></td><td>${lead.budget}</td></tr>` : ""}
      ${lead.location ? `<tr><td><b>Location</b></td><td>${lead.location}</td></tr>` : ""}
      ${lead.project ? `<tr><td><b>Project</b></td><td>${lead.project}</td></tr>` : ""}
      ${lead.message ? `<tr><td><b>Message</b></td><td>${lead.message}</td></tr>` : ""}
      <tr><td><b>Source</b></td><td>${lead.source ?? "website"}</td></tr>
    </table>`;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Crossroad Consultant Inc <leads@crossroadconsultant.in>",
      to: [toEmail],
      subject: `🏠 New Lead: ${lead.name} (${lead.interest ?? "General"})`,
      html,
    }),
  });
}

async function pushToSheets(lead: LeadPayload) {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhook) return;
  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, timestamp: new Date().toISOString() }),
  });
}

export async function POST(request: Request) {
  let lead: LeadPayload;
  try {
    lead = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValid(lead)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid name and phone number." },
      { status: 422 }
    );
  }

  // Fire integrations in parallel; never let one failure reject the lead.
  const results = await Promise.allSettled([
    saveToSupabase(lead),
    notifyWhatsApp(lead),
    notifyEmail(lead),
    pushToSheets(lead),
  ]);

  results.forEach((r, i) => {
    if (r.status === "rejected") {
      console.error(`Lead integration ${i} failed:`, r.reason);
    }
  });

  return NextResponse.json({ ok: true, message: "Lead received" });
}
