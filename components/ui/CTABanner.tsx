import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { SITE, telLink, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";

/** Reusable conversion banner placed near the bottom of interior pages. */
export function CTABanner({
  title = "Ready to make a smart property investment?",
  subtitle = "Talk to a Crossroad Consultant Inc advisor today — free, no-obligation guidance tailored to your budget and goals.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center text-white md:px-16 md:py-16">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-balance md:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">{subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a href={telLink()} className="btn-ghost">
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
                <Link href="/contact#book-visit" className="btn-ghost">
                  <CalendarCheck className="h-4 w-4" /> Book Site Visit
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
