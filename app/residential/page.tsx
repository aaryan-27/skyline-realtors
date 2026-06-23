import type { Metadata } from "next";
import { Building2, Home, Layers, TreePine } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { PropertyExplorer } from "@/components/projects/PropertyExplorer";
import { CTABanner } from "@/components/ui/CTABanner";
import { LeadSection } from "@/components/home/LeadSection";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";
import { RESIDENTIAL_PROJECTS } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Residential Property in Gurgaon — Builder Floors, Flats & Plots",
  description:
    "Explore title-verified builder floors, flats and residential plots in Palam Vihar and Sectors 21–23, Gurgaon. Filter by budget, location, builder & possession.",
  alternates: { canonical: "/residential" },
  keywords: ["Builder Floors Palam Vihar", "Flats in Sector 23 Gurgaon", "Residential Plots Gurgaon", "Property in Palam Vihar"],
};

const HIGHLIGHTS = [
  { icon: Layers, label: "Builder Floors", value: "2–4 BHK" },
  { icon: Home, label: "Independent Flats", value: "Gated" },
  { icon: TreePine, label: "Residential Plots", value: "Clear Title" },
  { icon: Building2, label: "Ready to Move", value: "Available" },
];

export default function ResidentialPage() {
  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Residential Projects", url: "/residential" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Residential", href: "/residential" },
        ]}
        eyebrow="Homes in Gurgaon"
        title={
          <>
            Residential <span className="text-gold-foil">Property</span> in Gurgaon
          </>
        }
        subtitle="Handpicked, title-verified builder floors, flats and plots across Palam Vihar and Sectors 21–23 — with layouts, price lists and site visits on request."
        image="/photos/p086.jpg"
      >
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <h.icon className="mb-2 h-5 w-5 text-gold" />
              <p className="text-sm font-semibold text-white">{h.value}</p>
              <p className="text-xs text-white/55">{h.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section bg-cloud">
        <div className="container">
          <PropertyExplorer projects={RESIDENTIAL_PROJECTS} />
        </div>
      </section>

      <LeadSection />
      <CTABanner title="Can't find the right home? Let us shortlist for you." />
    </>
  );
}
