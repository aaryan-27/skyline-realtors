"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, CalendarCheck, ChevronDown, Star, MapPin } from "lucide-react";
import { telLink, waLink } from "@/lib/site";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const HERO_LOCATIONS = [
  { slug: "palam-vihar", label: "Palam Vihar" },
  { slug: "sector-21", label: "Sector 21" },
  { slug: "sector-22", label: "Sector 22" },
  { slug: "sector-23", label: "Sector 23" },
  { slug: "sector-23a", label: "Sector 23A" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy">
      {/* Optimized hero background image (LCP) */}
      <Image
        src="/photos/p085.jpg"
        alt="Premium builder floor interior in Palam Vihar, Gurgaon"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-navy/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/20" />
      <div className="absolute inset-0 bg-navy-veil" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-gold/15 blur-[120px]" />

      <div className="container relative z-10 pb-20 pt-32">
        <div className="max-w-3xl">
          <motion.div {...fade(0.1)} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
              ))}
            </span>
            <span className="text-xs font-medium text-white/80">
              Rated 4.9/5 by 180+ families &amp; investors
            </span>
          </motion.div>

          <motion.p {...fade(0.2)} className="eyebrow !text-gold-300 mb-5">
            Palam Vihar · Sector 21 · Sector 22 · Sector 23
          </motion.p>

          <motion.h1
            {...fade(0.3)}
            className="font-display text-4xl font-bold leading-[1.05] text-white text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Find the Perfect <br />
            <span className="text-gold-foil">Place to Build</span> <br />
            Your Future in <span className="text-gold-foil">Gurgaon</span>
          </motion.h1>

          <motion.p
            {...fade(0.45)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 text-pretty md:text-lg"
          >
            Explore premium builder floors, flats, plots and high-return
            investment opportunities — guided by trusted, transparent advice and
            deep local expertise across Palam Vihar and Gurgaon since 2021.
          </motion.p>

          <motion.div {...fade(0.6)} className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/residential" className="btn-gold">
              Explore Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact#book-visit" className="btn-ghost">
              <CalendarCheck className="h-4 w-4" /> Book Consultation
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
            <a href={telLink()} className="btn-ghost">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>

          {/* Location chips */}
          <motion.div {...fade(0.7)} className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="mr-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider2 text-white/60">
              <MapPin className="h-4 w-4 text-gold" /> Our Localities
            </span>
            {HERO_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/85 backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                {loc.label}
              </Link>
            ))}
          </motion.div>

          {/* Trust mini-stats */}
          <motion.div
            {...fade(0.75)}
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { v: "350+", l: "Properties Sold" },
              { v: "500+", l: "Happy Families" },
              { v: "Since 2021", l: "Trusted Locally" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-bold text-white md:text-3xl">{s.v}</p>
                <p className="mt-1 text-xs uppercase tracking-wider2 text-white/55">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-luxe">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
