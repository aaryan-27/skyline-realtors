import type { Metadata } from "next";
import { Store, Building2, LayoutGrid, UtensilsCrossed, Briefcase, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PropertyExplorer } from "@/components/projects/PropertyExplorer";
import { ROICalculator } from "@/components/tools/ROICalculator";
import { EMICalculator } from "@/components/tools/EMICalculator";
import { LeadSection } from "@/components/home/LeadSection";
import { CTABanner } from "@/components/ui/CTABanner";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";
import { COMMERCIAL_PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Commercial Property in Gurgaon — Shops & Offices in Palam Vihar",
  description:
    "Invest in commercial property in Gurgaon — retail shops, showrooms and office units in established markets across Palam Vihar and Sectors 21–23. Use our ROI & rental-yield calculators and get an investment analysis.",
  alternates: { canonical: "/commercial" },
  keywords: ["Commercial Property Gurgaon", "Shops in Sector 22 Gurgaon", "Office Space Palam Vihar", "Retail Shops Gurgaon"],
};

const CATEGORIES = [
  { icon: Store, title: "Retail Shops", desc: "High-street shops in established, high-footfall HUDA markets." },
  { icon: Briefcase, title: "Office Units", desc: "Compact, well-located office units in busy commercial pockets." },
  { icon: LayoutGrid, title: "Showrooms", desc: "Main-road showrooms with strong frontage and visibility." },
  { icon: UtensilsCrossed, title: "Pre-leased Units", desc: "Rented shops and offices offering ready, assured rental income." },
  { icon: Building2, title: "Neighbourhood Complexes", desc: "Shop-and-office complexes serving dense residential catchments." },
];

export default function CommercialPage() {
  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Commercial Property", url: "/commercial" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Commercial", href: "/commercial" },
        ]}
        eyebrow="Income & Appreciation"
        title={
          <>
            Commercial <span className="text-gold-foil">Investments</span> in Gurgaon
          </>
        }
        subtitle="Retail shops, showrooms and office units in established Gurgaon markets — chosen for rental income and steady appreciation, with full investment analysis, ROI projections and leasing support."
        image="/photos/p045.jpg"
      />

      {/* Category cards */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title={<>Commercial asset classes we <span className="text-gold-foil">specialise in</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 5) * 0.08}>
                <div className="group h-full rounded-2xl border border-navy/5 bg-cloud/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-luxe">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-gold-gradient group-hover:text-navy">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="section bg-cloud">
        <div className="container">
          <SectionHeading
            eyebrow="Investment Tools"
            title={<>Model your <span className="text-gold-foil">returns</span> before you invest</>}
            subtitle="Project appreciation, rental income and loan EMIs with our investor-grade calculators."
          />
          <div className="mt-12 space-y-8">
            <Reveal>
              <ROICalculator />
            </Reveal>
            <Reveal delay={0.1}>
              <EMICalculator />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Investment analysis strip */}
      <section className="section bg-navy text-white">
        <div className="container grid gap-10 lg:grid-cols-3">
          {[
            { stat: "5–7%", label: "Rental Yields", desc: "Steady yields on shops in established, high-footfall markets." },
            { stat: "9–13%", label: "Total Annual ROI", desc: "On well-located retail and office units in prime localities." },
            { stat: "100%", label: "Title-Clear", desc: "Every commercial unit we deal in is title-verified and due-diligenced." },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="flex items-start gap-4">
                <TrendingUp className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="font-display text-4xl font-bold text-gold">{s.stat}</p>
                  <p className="mt-1 font-semibold text-white">{s.label}</p>
                  <p className="mt-1 text-sm text-white/60">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Commercial listings */}
      <section className="section bg-cloud">
        <div className="container">
          <SectionHeading
            eyebrow="Available Now"
            title={<>Featured <span className="text-gold-foil">commercial projects</span></>}
          />
          <div className="mt-10">
            <PropertyExplorer projects={COMMERCIAL_PROJECTS} />
          </div>
        </div>
      </section>

      <LeadSection />
      <CTABanner title="Want a personalised commercial investment analysis?" />
    </>
  );
}
