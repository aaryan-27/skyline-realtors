"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Star, ArrowUpRight, IndianRupee, Percent } from "lucide-react";
import { LOCATIONS } from "@/lib/data/locations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const HOTSPOTS = LOCATIONS.filter((l) =>
  [
    "palam-vihar",
    "palam-vihar-extension",
    "sector-21",
    "sector-22",
    "sector-23",
    "dwarka-expressway",
  ].includes(l.slug)
);

const growthColor: Record<string, string> = {
  "Very High": "text-emerald-600 bg-emerald-50",
  High: "text-gold-700 bg-gold-50",
  Moderate: "text-navy bg-navy-50",
};

export function Hotspots() {
  const [active, setActive] = useState(HOTSPOTS[0].slug);
  const current = HOTSPOTS.find((l) => l.slug === active)!;

  return (
    <section className="section relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold/10 blur-[120px]" />
      <div className="container relative">
        <SectionHeading
          light
          eyebrow="Where we know every street"
          title={
            <>
              Our Prime <span className="text-gold-foil">Gurgaon Localities</span>
            </>
          }
          subtitle="Compare pricing, rental yields and growth potential across Palam Vihar and Sectors 21, 22 & 23 — then dive into a full locality analysis."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Selector list */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {HOTSPOTS.map((l) => (
                <button
                  key={l.slug}
                  onMouseEnter={() => setActive(l.slug)}
                  onFocus={() => setActive(l.slug)}
                  onClick={() => setActive(l.slug)}
                  className={`group rounded-xl border p-4 text-left transition-all duration-300 ${
                    active === l.slug
                      ? "border-gold bg-gold/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/30"
                  }`}
                >
                  <p className="font-display text-base text-white">{l.shortName}</p>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-white/55">
                    <TrendingUp className="h-3 w-3 text-gold" /> {l.growthPotential} growth
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={current.heroImage}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-display text-2xl text-white">{current.name}</h3>
                    <p className="text-sm text-gold-200">{current.tagline}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
                  {[
                    { icon: IndianRupee, label: "Avg. Price", value: current.avgPrice },
                    { icon: Percent, label: "Rental Yield", value: current.rentalYield },
                    { icon: TrendingUp, label: "Growth", value: current.growthPotential },
                    { icon: Star, label: "Infra Rating", value: `${current.infraRating}/5` },
                  ].map((m) => (
                    <div key={m.label} className="bg-navy p-4">
                      <m.icon className="mb-2 h-4 w-4 text-gold" />
                      <p className="text-[10px] uppercase tracking-wider2 text-white/45">
                        {m.label}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">{m.value}</p>
                    </div>
                  ))}
                </div>

                <div className="p-5">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${growthColor[current.growthPotential]}`}
                  >
                    {current.growthPotential} Growth Potential
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3">
                    {current.overview}
                  </p>
                  <Link
                    href={`/locations/${current.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-200 hover:text-gold"
                  >
                    Full Locality Analysis <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
