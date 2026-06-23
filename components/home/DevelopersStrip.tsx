import Link from "next/link";
import { DEVELOPER_LOGOS, DEVELOPERS } from "@/lib/data/developers";
import { SectionHeading } from "@/components/ui/SectionHeading";

const slugFor = (name: string) =>
  DEVELOPERS.find((d) => d.name.toLowerCase().includes(name.toLowerCase().split(" ")[0]))?.slug;

export function DevelopersStrip() {
  const row = [...DEVELOPER_LOGOS, ...DEVELOPER_LOGOS];

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Trusted Builder Partners"
          title={
            <>
              Title-clear inventory from <span className="text-gold-foil">trusted local builders</span>
            </>
          }
          subtitle="We work with established builders across Palam Vihar and Sectors 21–23 — bringing you verified builder floors, flats and plots at the right price."
        />
      </div>

      {/* Marquee */}
      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-4 hover:[animation-play-state:paused]">
          {row.map((name, i) => {
            const slug = slugFor(name);
            const content = (
              <div className="grid h-24 w-44 place-items-center rounded-2xl border border-navy/5 bg-cloud/70 px-6 transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-card">
                <span className="font-display text-xl font-bold tracking-tight text-navy/70 transition-colors hover:text-navy">
                  {name}
                </span>
              </div>
            );
            return slug ? (
              <Link key={`${name}-${i}`} href={`/developers/${slug}`}>
                {content}
              </Link>
            ) : (
              <div key={`${name}-${i}`}>{content}</div>
            );
          })}
        </div>
      </div>

      <div className="container mt-12 text-center">
        <Link href="/developers" className="btn-outline">
          Explore All Builder Partners
        </Link>
      </div>
    </section>
  );
}
