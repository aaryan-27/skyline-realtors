import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, TrendingUp, Star, MapPin } from "lucide-react";
import { LOCATIONS } from "@/lib/data/locations";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/ui/CTABanner";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Property Locations in Gurgaon — Palam Vihar & Sectors 21–23",
  description:
    "Explore Gurgaon's most established residential micro-markets — Palam Vihar, Palam Vihar Extension, Sector 21, Sector 22 and Sector 23. Compare builder-floor and plot prices, rental yields and growth potential.",
  alternates: { canonical: "/locations" },
};

const growthColor: Record<string, string> = {
  "Very High": "bg-emerald-50 text-emerald-700",
  High: "bg-gold-50 text-gold-700",
  Moderate: "bg-navy-50 text-navy",
};

export default function LocationsPage() {
  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Locations", href: "/locations" },
        ]}
        eyebrow="Micro-Market Intelligence"
        title={
          <>
            Our Prime <span className="text-gold-foil">Gurgaon Localities</span>
          </>
        }
        subtitle="Deep local knowledge of Palam Vihar and Sectors 21, 22 & 23 — explore each locality's pricing, rental yield, infrastructure and growth outlook so you buy and invest with confidence."
        image="/photos/p079.jpg"
      />

      <section className="section bg-cloud">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={l.heroImage}
                    alt={l.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold ${growthColor[l.growthPotential]}`}>
                    {l.growthPotential} Growth
                  </span>
                  <div className="absolute inset-x-4 bottom-4 text-white">
                    <h3 className="font-display text-2xl">{l.name}</h3>
                    <p className="text-sm text-gold-200">{l.tagline}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider2 text-ink/40">Avg Price</p>
                      <p className="mt-0.5 text-xs font-semibold text-navy">{l.avgPrice.split("–")[0].trim()}+</p>
                    </div>
                    <div className="border-x border-navy/5">
                      <p className="text-[10px] uppercase tracking-wider2 text-ink/40">Yield</p>
                      <p className="mt-0.5 text-xs font-semibold text-navy">{l.rentalYield}</p>
                    </div>
                    <div>
                      <p className="flex items-center justify-center gap-0.5 text-[10px] uppercase tracking-wider2 text-ink/40">
                        Infra
                      </p>
                      <p className="mt-0.5 flex items-center justify-center gap-0.5 text-xs font-semibold text-navy">
                        <Star className="h-3 w-3 fill-gold text-gold" /> {l.infraRating}
                      </p>
                    </div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold-700">
                    View Investment Analysis <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner title="Not sure which locality fits your goals?" subtitle="Our advisors will match you to the right Palam Vihar or sector micro-market based on your budget, timeline and needs." />
    </>
  );
}
