import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, Award } from "lucide-react";
import { DEVELOPERS } from "@/lib/data/developers";
import { projectsByDeveloper } from "@/lib/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/ui/CTABanner";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Trusted Builder Partners in Gurgaon — Palam Vihar & Sectors 21–23",
  description:
    "Meet the trusted local builders whose builder floors, flats and plots we deal in across Palam Vihar and Sectors 21–23. History, projects, achievements and current inventory.",
  alternates: { canonical: "/developers" },
};

export default function DevelopersPage() {
  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Developers", url: "/developers" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Developers", href: "/developers" },
        ]}
        eyebrow="Trusted Builder Partners"
        title={<>Our Trusted <span className="text-gold-foil">Builder Partners</span></>}
        subtitle="We work with established local builders across Palam Vihar and Sectors 21–23 — giving you access to title-clear builder floors, flats and plots at the right price."
        image="/photos/p095.jpg"
      />

      <section className="section bg-cloud">
        <div className="container grid gap-6 md:grid-cols-2">
          {DEVELOPERS.map((d, i) => {
            const count = projectsByDeveloper(d.slug).length;
            return (
              <Reveal key={d.slug} delay={(i % 2) * 0.08}>
                <Link
                  href={`/developers/${d.slug}`}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-navy/5 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="grid h-16 w-16 place-items-center rounded-xl bg-navy">
                        <span className="font-display text-xl font-bold text-gold">
                          {d.name.split(" ")[0].slice(0, 4)}
                        </span>
                      </div>
                      <span className="rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold text-gold-700">
                        Est. {d.founded}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-navy">{d.name}</h3>
                    <p className="mt-1 text-sm text-gold-700">{d.tagline}</p>
                    <p className="mt-3 line-clamp-2 text-sm text-ink/60">{d.about}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-navy/5 pt-5">
                    <div className="flex gap-5 text-sm">
                      <span className="flex items-center gap-1.5 text-ink/65">
                        <Building2 className="h-4 w-4 text-gold-600" /> {d.completed}+ delivered
                      </span>
                      <span className="flex items-center gap-1.5 text-ink/65">
                        <Award className="h-4 w-4 text-gold-600" /> {count} listed
                      </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-navy transition-colors group-hover:text-gold-700" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTABanner title="Looking for a specific builder's property?" subtitle="We have access to title-clear builder floors, flats and plots across our partner builders — including resale and off-market opportunities." />
    </>
  );
}
