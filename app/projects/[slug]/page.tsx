import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Building2,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Download,
  Phone,
  MessageCircle,
  ShieldCheck,
  IndianRupee,
} from "lucide-react";
import { PROJECTS, getProject } from "@/lib/data/projects";
import { getDeveloper } from "@/lib/data/developers";
import { formatINR } from "@/lib/utils";
import { SITE, telLink, waLink } from "@/lib/site";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { FAQ } from "@/components/ui/FAQ";
import { Reveal } from "@/components/ui/Reveal";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema, productSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} by ${project.builder} — ${project.location}`,
    description: `${project.name}: ${project.type} in ${project.location}. ${project.about.slice(0, 120)}… Price from ${formatINR(project.priceFrom)}. Book a site visit with DLF Privana Amraj Infra.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { images: [project.heroImage] },
  };
}

const PAYMENT_PLANS = [
  { stage: "On Booking", pct: "10%" },
  { stage: "Within 45 Days", pct: "15%" },
  { stage: "On Excavation", pct: "10%" },
  { stage: "Construction-Linked", pct: "55%" },
  { stage: "On Possession", pct: "10%" },
];

const FALLBACK_FAQS = (name: string) => [
  { q: `Is ${name} RERA-approved?`, a: `Yes. ${name} is registered under HARERA. We share the full RERA registration and all approvals during your consultation.` },
  { q: `What is the payment plan for ${name}?`, a: `${name} offers flexible construction-linked and possession-linked payment plans. Our advisors will walk you through the best option and any current offers.` },
  { q: `Can I book a site visit for ${name}?`, a: `Absolutely. We arrange complimentary, chauffeured site visits — including virtual tours for NRI and outstation buyers. Just request a visit and we'll schedule it.` },
  { q: `Are home loans available for ${name}?`, a: `Yes, ${name} is approved by leading banks and NBFCs. We help you compare rates and arrange financing with our banking partners.` },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const developer = getDeveloper(project.builderSlug);
  const related = PROJECTS.filter(
    (p) => p.slug !== project.slug && (p.locationSlug === project.locationSlug || p.builderSlug === project.builderSlug)
  ).slice(0, 3);

  const faqs = FALLBACK_FAQS(project.name);

  return (
    <>
      <Schema json={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: project.category, url: project.category === "Commercial" || project.category === "SCO" ? "/commercial" : "/residential" },
        { name: project.name, url: `/projects/${project.slug}` },
      ])} />
      <Schema json={productSchema({
        name: project.name,
        description: project.about,
        image: project.heroImage,
        url: `/projects/${project.slug}`,
        priceFrom: project.priceFrom,
        builder: project.builder,
      })} />
      <Schema json={faqSchema(faqs)} />

      {/* Top bar */}
      <section className="bg-navy pt-28 pb-8 text-white md:pt-32">
        <div className="container">
          <Breadcrumbs
            light
            items={[
              { name: "Home", href: "/" },
              { name: project.category, href: project.category === "Commercial" || project.category === "SCO" ? "/commercial" : "/residential" },
              { name: project.name, href: `/projects/${project.slug}` },
            ]}
          />
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-navy">{project.possession}</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white">{project.category}</span>
                {project.tags.slice(0, 2).map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/70">{t}</span>
                ))}
              </div>
              <p className="text-sm uppercase tracking-wider2 text-gold-200">{project.builder}</p>
              <h1 className="mt-1 font-display text-4xl font-bold md:text-5xl">{project.name}</h1>
              <p className="mt-3 flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4 text-gold" /> {project.location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-wider2 text-white/50">Starting Price</p>
              <p className="font-display text-3xl font-bold text-gold">{formatINR(project.priceFrom)}*</p>
              {project.pricePerSqft && (
                <p className="text-sm text-white/55">≈ Rs.{project.pricePerSqft.toLocaleString("en-IN")}/sq.ft.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-navy pb-12">
        <div className="container">
          <ProjectGallery images={project.gallery} name={project.name} />
        </div>
      </section>

      {/* Main content + sticky form */}
      <section className="section bg-cloud">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {/* Quick facts */}
            <Reveal>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Type", value: project.type, icon: Building2 },
                  { label: "Possession", value: project.possessionDate, icon: CalendarCheck },
                  { label: "Price/sqft", value: project.pricePerSqft ? `Rs.${project.pricePerSqft.toLocaleString("en-IN")}` : "On Request", icon: IndianRupee },
                  { label: "RERA", value: "Registered", icon: ShieldCheck },
                ].map((f) => (
                  <div key={f.label} className="rounded-2xl border border-navy/5 bg-white p-5 shadow-card">
                    <f.icon className="mb-2 h-5 w-5 text-gold-600" />
                    <p className="text-[11px] uppercase tracking-wider2 text-ink/45">{f.label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-navy">{f.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* About */}
            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">About {project.name}</h2>
              <p className="mt-4 leading-relaxed text-ink/70">{project.about}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 rounded-xl bg-white p-4 shadow-card">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                    <span className="text-sm text-ink/75">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Configurations / price list */}
            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">Configurations &amp; Price List</h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-navy/10 bg-white">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="px-5 py-3.5 font-semibold">Configuration</th>
                      <th className="px-5 py-3.5 font-semibold">Carpet / Built-up</th>
                      <th className="px-5 py-3.5 text-right font-semibold">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy/5">
                    {project.configurations.map((c) => (
                      <tr key={c.type} className="transition-colors hover:bg-gold/5">
                        <td className="px-5 py-4 font-medium text-navy">{c.type}</td>
                        <td className="px-5 py-4 text-ink/65">{c.area}</td>
                        <td className="px-5 py-4 text-right font-semibold text-gold-700">{c.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-ink/45">*Prices are indicative and subject to change. Request the latest price list &amp; offers.</p>
            </Reveal>

            {/* Amenities */}
            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">World-Class Amenities</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2.5 rounded-xl border border-navy/5 bg-white px-4 py-3 text-sm text-ink/75">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold-600" />
                    {a}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Master plan / floor plan + payment plan */}
            <Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-navy/5 bg-white p-6 shadow-card">
                  <FileText className="h-6 w-6 text-gold-600" />
                  <h3 className="mt-3 font-display text-lg text-navy">Floor Plans &amp; Master Plan</h3>
                  <p className="mt-2 text-sm text-ink/60">Detailed unit layouts, master plan and brochure available on request.</p>
                  <a href={waLink(`Please share floor plans & brochure for ${project.name}.`)} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 !px-5 !py-2.5">
                    <Download className="h-4 w-4" /> Request Floor Plans
                  </a>
                </div>
                <div className="rounded-2xl border border-navy/5 bg-white p-6 shadow-card">
                  <h3 className="font-display text-lg text-navy">Indicative Payment Plan</h3>
                  <ul className="mt-4 space-y-2.5">
                    {PAYMENT_PLANS.map((p) => (
                      <li key={p.stage} className="flex items-center justify-between text-sm">
                        <span className="text-ink/65">{p.stage}</span>
                        <span className="font-semibold text-navy">{p.pct}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Builder */}
            {developer && (
              <Reveal>
                <div className="rounded-2xl bg-navy p-7 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider2 text-gold-200">About the Developer</p>
                      <h3 className="mt-1 font-display text-2xl">{developer.name}</h3>
                    </div>
                    <Link href={`/developers/${developer.slug}`} className="btn-ghost !px-5 !py-2.5">
                      View Profile
                    </Link>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{developer.about}</p>
                  <div className="mt-5 flex gap-6 border-t border-white/10 pt-5 text-sm">
                    <div>
                      <p className="font-display text-2xl font-bold text-gold">{developer.completed}M+</p>
                      <p className="text-white/55">Sq.ft. Delivered</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-gold">{developer.ongoing}</p>
                      <p className="text-white/55">Ongoing Projects</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-gold">{developer.founded}</p>
                      <p className="text-white/55">Established</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Location map */}
            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">Location &amp; Connectivity</h2>
              <div className="mt-5 overflow-hidden rounded-2xl border border-navy/10">
                <iframe
                  title={`${project.name} location map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(project.location + " Gurugram")}&output=embed`}
                  width="100%"
                  height="360"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </Reveal>

            {/* FAQ */}
            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">Frequently Asked Questions</h2>
              <div className="mt-5">
                <FAQ items={faqs} />
              </div>
            </Reveal>
          </div>

          {/* Sticky form */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-navy/5 bg-white p-6 shadow-luxe">
                <h3 className="font-display text-xl text-navy">Enquire About This Project</h3>
                <p className="mt-1 text-sm text-ink/55">Get price list, floor plans &amp; a free site visit.</p>
                <div className="mt-5">
                  <LeadForm source={`project-${project.slug}`} project={project.name} compact cta="Request Details" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-navy/5 pt-5">
                  <a href={telLink()} className="btn-outline !px-4 !py-2.5 text-xs">
                    <Phone className="h-4 w-4" /> Call
                  </a>
                  <a href={waLink(`Hi, I'm interested in ${project.name}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-white">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="font-display text-2xl text-navy md:text-3xl">Similar Projects You May Like</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
