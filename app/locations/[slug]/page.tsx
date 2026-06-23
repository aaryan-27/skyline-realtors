import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Train,
  Building,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  TrendingUp,
  CheckCircle2,
  Star,
  IndianRupee,
  Percent,
} from "lucide-react";
import { LOCATIONS, getLocation } from "@/lib/data/locations";
import { projectsByLocation } from "@/lib/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PriceTrendChart } from "@/components/ui/PriceTrendChart";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FAQ } from "@/components/ui/FAQ";
import { LeadForm } from "@/components/forms/LeadForm";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return { title: "Location Not Found" };
  return {
    title: `${loc.name} Property — Prices, Projects & Investment Analysis`,
    description: `${loc.name} real estate guide: average prices ${loc.avgPrice}, rental yield ${loc.rentalYield}, ${loc.growthPotential.toLowerCase()} growth. Connectivity, infrastructure, price trends & available projects.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: { images: [loc.heroImage] },
  };
}

function InfoList({ icon: Icon, title, items }: { icon: typeof Train; title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-navy/5 bg-white p-6 shadow-card">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-gold">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg text-navy">{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-ink/70">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const projects = projectsByLocation(loc.slug);

  return (
    <>
      <Schema json={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Locations", url: "/locations" },
        { name: loc.name, url: `/locations/${loc.slug}` },
      ])} />
      <Schema json={faqSchema(loc.faqs)} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
          { name: loc.name, href: `/locations/${loc.slug}` },
        ]}
        eyebrow="Locality Guide"
        title={<><span className="text-gold-foil">{loc.name}</span> Property Guide</>}
        subtitle={loc.tagline}
        image={loc.heroImage}
      >
        <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { icon: IndianRupee, label: "Avg. Price", value: loc.avgPrice.split("–")[0].trim() + "+" },
            { icon: Percent, label: "Rental Yield", value: loc.rentalYield },
            { icon: TrendingUp, label: "Growth", value: loc.growthPotential },
            { icon: Star, label: "Infra Rating", value: `${loc.infraRating}/5` },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <m.icon className="mb-2 h-5 w-5 text-gold" />
              <p className="text-sm font-semibold text-white">{m.value}</p>
              <p className="text-xs text-white/55">{m.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section bg-cloud">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">Overview</h2>
              <p className="mt-4 leading-relaxed text-ink/70">{loc.overview}</p>
            </Reveal>

            <Reveal>
              <PriceTrendChart data={loc.priceTrend} />
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal><InfoList icon={Train} title="Connectivity" items={loc.connectivity} /></Reveal>
              <Reveal delay={0.08}><InfoList icon={Building} title="Infrastructure" items={loc.infrastructure} /></Reveal>
              <Reveal><InfoList icon={GraduationCap} title="Top Schools" items={loc.schools} /></Reveal>
              <Reveal delay={0.08}><InfoList icon={Stethoscope} title="Hospitals" items={loc.hospitals} /></Reveal>
              <Reveal><InfoList icon={ShoppingBag} title="Malls & Retail" items={loc.malls} /></Reveal>
              <Reveal delay={0.08}><InfoList icon={TrendingUp} title="Future Growth Drivers" items={loc.futureGrowth} /></Reveal>
            </div>

            <Reveal>
              <div className="rounded-2xl bg-navy p-7 text-white md:p-8">
                <span className="eyebrow !text-gold-300">Investment Analysis</span>
                <p className="mt-4 text-lg leading-relaxed text-white/85">{loc.investmentAnalysis}</p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">Frequently Asked Questions</h2>
              <div className="mt-5">
                <FAQ items={loc.faqs} />
              </div>
            </Reveal>
          </div>

          {/* Sticky lead form */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-navy/5 bg-white p-6 shadow-luxe">
                <h3 className="font-display text-xl text-navy">Invest in {loc.shortName}</h3>
                <p className="mt-1 text-sm text-ink/55">Get curated projects &amp; the latest price trends.</p>
                <div className="mt-5">
                  <LeadForm source={`location-${loc.slug}`} compact cta="Get Project List" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available projects */}
      {projects.length > 0 && (
        <section className="section bg-white">
          <div className="container">
            <h2 className="font-display text-2xl text-navy md:text-3xl">
              Available Projects in {loc.shortName}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
