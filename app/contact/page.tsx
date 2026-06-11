import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us — Property Dealer & Real Estate Consultant in Gurugram",
  description: `Contact Crossroad Consultant Inc — call ${SITE.phone}, WhatsApp, or visit our office at ${SITE.address.full}. Book a free consultation or site visit today.`,
  alternates: { canonical: "/contact" },
};

const OFFICE_IMAGES = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80",
];

export default function ContactPage() {
  return (
    <>
      <Schema json={organizationSchema()} />
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
        eyebrow="Let's Talk"
        title={<>Get in <span className="text-gold-foil">Touch</span></>}
        subtitle="Visit our office in the heart of New Gurgaon, or reach us by phone and WhatsApp. Our advisors are ready to help you find the right property investment."
      />

      <section className="section bg-cloud">
        <div className="container grid gap-10 lg:grid-cols-2">
          {/* Info + booking form */}
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Phone, label: "Call Us", value: SITE.phone, href: telLink() },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with an advisor", href: waLink() },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Clock, label: "Office Hours", value: SITE.hours },
              ].map((c) => {
                const Inner = (
                  <div className="h-full rounded-2xl border border-navy/5 bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-luxe">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-xs uppercase tracking-wider2 text-ink/45">{c.label}</p>
                    <p className="mt-1 text-sm font-semibold text-navy">{c.value}</p>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-navy/5 bg-white p-5 shadow-card">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              <div>
                <p className="text-xs uppercase tracking-wider2 text-ink/45">Our Office</p>
                <p className="mt-1 text-sm text-ink/75">{SITE.address.full}</p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 hover:text-gold"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {OFFICE_IMAGES.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={src} alt={`Crossroad Consultant Inc office ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <div id="book-visit" className="scroll-mt-28 rounded-3xl border border-navy/5 bg-white p-6 shadow-luxe sm:p-8">
              <h2 className="font-display text-2xl text-navy">Book a Free Consultation</h2>
              <p className="mt-1 text-sm text-ink/55">
                Share your requirement and we&apos;ll call you within 2 working hours.
              </p>
              <div className="mt-6">
                <LeadForm source="contact-page" cta="Book Consultation" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pb-20">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-card">
            <iframe
              title="Crossroad Consultant Inc office location"
              src={SITE.mapsEmbed}
              width="100%"
              height="460"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale-[0.2]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
