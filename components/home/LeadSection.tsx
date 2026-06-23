import { Phone, MessageCircle, Clock, ShieldCheck, Award } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/ui/Reveal";

export function LeadSection() {
  return (
    <section id="enquire" className="section relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Pitch */}
        <Reveal>
          <span className="eyebrow !text-gold-300 mb-5">Free, No-Obligation Consultation</span>
          <h2 className="font-display text-3xl leading-tight text-white text-balance sm:text-4xl md:text-[2.75rem]">
            Get expert advice on your <span className="text-gold-foil">next property move</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            Share your requirement and our advisor will call you within
            2 working hours with handpicked, title-verified options matched to your
            budget and goals — builder floors, flats and plots across Gurgaon.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { icon: ShieldCheck, text: "Title-verified, due-diligenced properties only" },
              { icon: Award, text: "Right-price guidance via trusted builder tie-ups" },
              { icon: Clock, text: "End-to-end support — site visit to registry" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-white/80">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={telLink()} className="btn-ghost">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Now
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
            <h3 className="font-display text-2xl text-white">Get Expert Advice</h3>
            <p className="mt-1 text-sm text-white/55">
              Fill in your details — it takes less than 30 seconds.
            </p>
            <div className="mt-6">
              <LeadForm source="home-lead-section" variant="dark" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
