import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { SITE, NAV_LINKS, SERVICE_AREAS, telLink, waLink } from "@/lib/site";
import { LOCATIONS } from "@/lib/data/locations";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy pb-16 text-white/70 md:pb-0">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.04]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      {/* CTA strip */}
      <div className="relative border-b border-white/10">
        <div className="container flex flex-col items-center justify-between gap-6 py-12 text-center md:flex-row md:text-left">
          <div>
            <p className="eyebrow !text-gold-300 mb-3">Ready to Move?</p>
            <h3 className="font-display text-2xl text-white md:text-3xl">
              Let&apos;s find your perfect property in Gurgaon.
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a href={telLink()} className="btn-ghost">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="relative container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
            {SITE.tagline}. A trusted property dealer in Gurgaon since 2021,
            specialising in premium builder floors, flats and plots across Palam
            Vihar and Sectors 21–23 — helping hundreds of families and investors
            buy, sell and invest with confidence.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="mb-5 font-display text-base text-white">Explore</h4>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className="lg:col-span-3">
          <h4 className="mb-5 font-display text-base text-white">Our Localities</h4>
          <ul className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            {LOCATIONS.slice(0, 8).map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="transition-colors hover:text-gold-200"
                >
                  {l.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="mb-5 font-display text-base text-white">Visit Our Office</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="flex flex-col">
                <a href={telLink()} className="hover:text-gold-200">
                  {SITE.phone}
                </a>
                <a href={telLink(SITE.phone2Raw)} className="hover:text-gold-200">
                  {SITE.phone2}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-200">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-200 hover:text-gold"
          >
            Get Directions →
          </a>
        </div>
      </div>

      {/* Service-area SEO ribbon */}
      <div className="relative border-t border-white/10">
        <div className="container py-6">
          <p className="text-center text-xs leading-relaxed text-white/40">
            <span className="font-semibold text-white/60">Serving:</span>{" "}
            {SERVICE_AREAS.join(" · ")}
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 md:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved. RERA-compliant advisory.
          </p>
          <p>
            Managed by{" "}
            <a
              href="https://pixelpulsemarketing.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold-200 hover:text-gold"
            >
              Pixel Pulse Marketing
            </a>
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gold-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-200">
              Terms of Use
            </Link>
            <Link href="/disclaimer" className="hover:text-gold-200">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
