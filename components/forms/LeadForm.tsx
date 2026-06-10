"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { BUDGET_RANGES, PROPERTY_INTERESTS, SERVICE_AREAS } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  budget: string;
  interest: string;
  location: string;
  message: string;
};

type Props = {
  source?: string;
  project?: string;
  variant?: "light" | "dark";
  compact?: boolean;
  cta?: string;
};

const field =
  "w-full rounded-xl border bg-white/95 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-gold focus:ring-2 focus:ring-gold/20";

export function LeadForm({
  source = "website",
  project,
  variant = "light",
  compact = false,
  cta = "Get Expert Advice",
}: Props) {
  const dark = variant === "dark";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState("");

  const labelCls = cn("mb-1.5 block text-xs font-semibold", dark ? "text-white/80" : "text-navy/80");
  const borderCls = dark ? "border-white/15" : "border-navy/15";

  const onSubmit = async (data: FormValues) => {
    setServerError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source, project }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong. Please try again.");
      }
      // Push conversion event if GTM/GA present
      if (typeof window !== "undefined" && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: "lead_submit", source });
      }
      reset();
      setDone(true);
    } catch (e) {
      setServerError(e instanceof Error ? e.message : "Please try again.");
    }
  };

  if (done) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-2xl p-10 text-center",
          dark ? "bg-white/5" : "bg-gold/5"
        )}
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h4 className={cn("mt-5 font-display text-2xl", dark ? "text-white" : "text-navy")}>
          Thank you! We&apos;ll be in touch.
        </h4>
        <p className={cn("mt-2 max-w-sm text-sm", dark ? "text-white/65" : "text-ink/60")}>
          Our investment advisor will call you within 2 working hours with
          handpicked options that match your requirement.
        </p>
        <button onClick={() => setDone(false)} className="btn-outline mt-6">
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className={cn("grid gap-4", compact ? "sm:grid-cols-1" : "sm:grid-cols-2")}>
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            {...register("name", { required: "Required", minLength: { value: 2, message: "Too short" } })}
            placeholder="Your name"
            className={cn(field, borderCls)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Mobile Number *</label>
          <input
            {...register("phone", {
              required: "Required",
              pattern: { value: /^[0-9+\s-]{10,15}$/, message: "Enter a valid number" },
            })}
            placeholder="+91  XXXXX XXXXX"
            className={cn(field, borderCls)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
      </div>

      <div className={cn("grid gap-4", compact ? "sm:grid-cols-1" : "sm:grid-cols-2")}>
        <div>
          <label className={labelCls}>Email</label>
          <input
            {...register("email", { pattern: { value: /^\S+@\S+$/, message: "Invalid email" } })}
            placeholder="you@email.com"
            className={cn(field, borderCls)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelCls}>Budget</label>
          <select {...register("budget")} className={cn(field, borderCls)} defaultValue="">
            <option value="" disabled>
              Select budget
            </option>
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={cn("grid gap-4", compact ? "sm:grid-cols-1" : "sm:grid-cols-2")}>
        <div>
          <label className={labelCls}>Property Interest</label>
          <select {...register("interest")} className={cn(field, borderCls)} defaultValue="">
            <option value="" disabled>
              Select type
            </option>
            {PROPERTY_INTERESTS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>Preferred Location</label>
          <select {...register("location")} className={cn(field, borderCls)} defaultValue="">
            <option value="" disabled>
              Select location
            </option>
            {SERVICE_AREAS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Message</label>
        <textarea
          {...register("message")}
          rows={compact ? 2 : 3}
          placeholder="Tell us what you're looking for…"
          className={cn(field, borderCls, "resize-none")}
        />
      </div>

      {serverError && <p className="text-sm text-red-400">{serverError}</p>}

      <button type="submit" disabled={isSubmitting} className="btn-gold w-full">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? "Submitting…" : cta}
      </button>
      <p className={cn("text-center text-[11px]", dark ? "text-white/40" : "text-ink/40")}>
        By submitting, you agree to be contacted by GOPAL ESTATES. Your data is
        secure &amp; never shared.
      </p>
    </form>
  );
}
