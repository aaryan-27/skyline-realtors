import {
  ShieldCheck,
  LineChart,
  Handshake,
  Route,
  Scale,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  LineChart,
  Handshake,
  Route,
  Scale,
  TrendingUp,
};

export function WhyChooseUs() {
  return (
    <section className="section relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Why Crossroad Consultant Inc"
          title={
            <>
              Advisory you can trust, <span className="text-gold-foil">results you can measure</span>
            </>
          }
          subtitle="We act as your investment advisor — not just a broker. Every recommendation is verified, researched and aligned with your financial goals."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-navy/5 bg-cloud/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white hover:shadow-luxe">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
                  <div className="relative mb-5 grid h-14 w-14 place-items-center rounded-xl bg-navy text-gold transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative font-display text-xl text-navy">{item.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink/60">{item.desc}</p>
                  <span className="relative mt-5 inline-block font-display text-5xl font-bold text-navy/5">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
