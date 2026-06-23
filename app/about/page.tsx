import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Gem, Quote, Award, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTABanner } from "@/components/ui/CTABanner";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";
import { MILESTONES, VALUES } from "@/lib/data/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Trusted Property Dealer in Gurgaon",
  description:
    "Learn about Skyline Realtors — a trusted property dealer and real estate consultant in Gurgaon since 2021, specialising in premium builder floors, flats and plots across Palam Vihar and Sectors 21–23. Hundreds of families and investors served.",
  alternates: { canonical: "/about" },
};

const TEAM = [
  { name: "Rao Saheb", role: "Founder & Principal Advisor", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" },
  { name: "Anjali Mehta", role: "Head of Sales", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Karan Bhardwaj", role: "Builder Floor & Plot Specialist", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Pooja Sharma", role: "Client Relations", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
];

const GALLERY = [
  "/photos/p069.jpg",
  "/photos/p045.jpg",
  "/photos/p090.jpg",
  "/photos/p097.jpg",
];

export default function AboutPage() {
  return (
    <>
      <Schema
        json={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ])}
      />
      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
        eyebrow={`Established ${SITE.founded}`}
        title={
          <>
            Your trusted <span className="text-gold-foil">property partner</span> in Gurgaon
          </>
        }
        subtitle="Since 2021, we've helped hundreds of families and investors buy, sell and invest with confidence — putting your goals first, backed by deep local expertise and an obsession with transparency."
        image="/photos/p085.jpg"
      />

      {/* Overview */}
      <section className="section bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-4">Our Story</span>
            <h2 className="font-display text-3xl text-navy md:text-4xl">
              Built on trust, driven by results
            </h2>
            <div className="mt-6 space-y-4 text-ink/70">
              <p>
                At Skyline Realtors, we believe real estate is more than just
                buying and selling properties — it&apos;s about finding the perfect
                place to build your future. Founded in {SITE.founded} in Palam
                Vihar, we began with a simple conviction: buyers deserve honest,
                transparent advice, not pressure-selling.
              </p>
              <p>
                Since then, we&apos;ve helped{" "}
                <strong className="text-navy">hundreds of families and investors</strong>{" "}
                make confident real estate decisions through personalised guidance
                and a customer-first approach — specialising in premium{" "}
                <strong className="text-navy">builder floors, flats, plots</strong>{" "}
                and high-return investment opportunities across Gurgaon.
              </p>
              <p>
                With a proven sales track record and deep expertise in{" "}
                <strong className="text-navy">Palam Vihar, Sector 21, Sector 22
                and Sector 23</strong>, we&apos;re dedicated to delivering
                exceptional service and the best real estate opportunities in
                the market — raising the standard of urban living.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "350+", l: "Properties Sold" },
                { v: "500+", l: "Families & Investors" },
                { v: "4", l: "Prime Localities" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-cloud p-4 text-center">
                  <p className="font-display text-2xl font-bold text-navy">{s.v}</p>
                  <p className="mt-1 text-xs text-ink/55">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="corner-frame relative overflow-hidden rounded-3xl">
                <Image
                  src="/photos/p016.jpg"
                  alt="Skyline Realtors advisory office"
                  width={1000}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-gold-gradient p-6 text-navy shadow-gold sm:block">
                <p className="font-display text-3xl font-bold">Since</p>
                <p className="text-sm font-semibold">2021 · Trusted Locally</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Values cards */}
      <section className="section bg-cloud">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", text: "To make buying, selling and investing in property transparent, simple and rewarding for every client — helping families find the perfect place to build their future." },
              { icon: Eye, title: "Our Vision", text: "To be the most trusted property dealer in Gurgaon, known for integrity, deep local expertise and lifelong client relationships." },
              { icon: Gem, title: "Our Promise", text: "Honest advice, title-verified properties and the right price — always putting your goals ahead of any single transaction." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-navy/5 bg-white p-8 shadow-card">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl text-navy">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Why Investors Trust Us"
            title={<>The values that guide <span className="text-gold-foil">every recommendation</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl border border-navy/5 bg-cloud/60 p-6 transition-colors hover:border-gold/30 hover:bg-white">
                  <div className="mb-4 font-display text-4xl font-bold text-gold/40">0{i + 1}</div>
                  <h3 className="font-display text-lg text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="section bg-navy text-white">
        <div className="container">
          <SectionHeading
            light
            eyebrow="Our Journey"
            title={<>Milestones from our <span className="text-gold-foil">journey since 2021</span></>}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={(i % 3) * 0.08}>
                <div className="h-full bg-navy p-7">
                  <p className="font-display text-3xl font-bold text-gold">{m.year}</p>
                  <h3 className="mt-3 font-display text-lg text-white">{m.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="The People Behind the Advice"
            title={<>Meet our <span className="text-gold-foil">expert team</span></>}
            subtitle="A dedicated local team who live and breathe Palam Vihar and Old Gurgaon real estate."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-navy/5 bg-cloud/40 text-center shadow-card">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-navy">{member.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider2 text-gold-700">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="section bg-cloud">
        <div className="container">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white p-8 shadow-card md:p-12">
              <Quote className="h-12 w-12 text-gold/20" />
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-navy md:text-2xl">
                “When we started in 2021, Gurgaon was full of brokers chasing
                commissions. We chose a different path — to be advisors first.
                Every family that trusts us with such an important decision
                deserves honesty, transparency and results. That principle has
                guided us from day one, and it always will.”
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gold-gradient font-display text-lg font-bold text-navy">
                  RS
                </div>
                <div>
                  <p className="font-semibold text-navy">Rao Saheb</p>
                  <p className="text-sm text-ink/55">Founder &amp; Principal Advisor</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Awards + gallery */}
      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-4">Awards &amp; Recognition</span>
            <h2 className="font-display text-3xl text-navy md:text-4xl">Recognised for excellence</h2>
            <ul className="mt-8 space-y-4">
              {[
                "Top Property Dealer — Palam Vihar (2024)",
                "Trusted partnerships with leading local builders",
                "4.9★ Google Rating across 180+ verified reviews",
                "Excellence in Builder Floor & Plot Advisory (2025)",
              ].map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl bg-cloud p-4">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <span className="text-sm text-ink/75">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-2 text-navy">
              <Users className="h-5 w-5 text-gold-600" />
              <span className="eyebrow !text-gold-700">Office Gallery</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {GALLERY.map((src, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image src={src} alt={`Office ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
