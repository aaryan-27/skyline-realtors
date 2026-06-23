"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Play, BadgeCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data/content";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;
  const t = TESTIMONIALS[index];

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section className="section relative overflow-hidden bg-cloud">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Client Stories"
          title={
            <>
              Trusted by <span className="text-gold-foil">hundreds of families &amp; investors</span>
            </>
          }
          subtitle="Real stories from families and investors who bought, sold and invested with confidence through our guidance — backed by genuine Google reviews."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-12">
          {/* Featured testimonial */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 text-white md:p-10"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
                <Quote className="h-12 w-12 text-gold/30" />
                <div className="mt-4 flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-white/90 md:text-2xl">
                  “{t.quote}”
                </blockquote>
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-gradient font-display text-lg font-bold text-navy">
                      {t.initials}
                    </div>
                    <div>
                      <p className="flex items-center gap-1.5 font-semibold text-white">
                        {t.name} <BadgeCheck className="h-4 w-4 text-gold" />
                      </p>
                      <p className="text-sm text-white/55">{t.role}</p>
                    </div>
                  </div>
                  <div className="hidden text-right sm:block">
                    <p className="text-[11px] uppercase tracking-wider2 text-white/40">Invested</p>
                    <p className="text-sm font-semibold text-gold-200">{t.invested}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid h-11 w-11 place-items-center rounded-full border border-navy/15 text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="ml-2 flex gap-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-gold" : "w-1.5 bg-navy/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Video testimonials + Google rating */}
          <div className="grid gap-6 lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {TESTIMONIALS.filter((x) => x.videoThumb).slice(0, 2).map((v) => (
                <button
                  key={v.name}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={v.videoThumb!}
                    alt={`Video testimonial — ${v.name}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/40 transition-colors group-hover:bg-navy/20" />
                  <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-navy" />
                  </span>
                  <p className="absolute inset-x-3 bottom-3 text-left text-xs font-semibold text-white">
                    {v.name}
                  </p>
                </button>
              ))}
            </div>

            <div className="flex flex-1 flex-col justify-center rounded-2xl border border-navy/5 bg-white p-6 text-center shadow-card">
              <div className="mx-auto flex items-center gap-2">
                <span className="font-display text-4xl font-bold text-navy">4.9</span>
                <div className="text-left">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-xs text-ink/50">180+ Google Reviews</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink/60">
                Consistently rated among the top property consultants in Gurugram.
              </p>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold"
              >
                Read all reviews on Google →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
