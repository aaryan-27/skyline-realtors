import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Award, CheckCircle2, Building2, Trophy, Sparkles } from "lucide-react";
import { DEVELOPERS, getDeveloper } from "@/lib/data/developers";
import { projectsByDeveloper } from "@/lib/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { LeadSection } from "@/components/home/LeadSection";
import { CTABanner } from "@/components/ui/CTABanner";
import { Schema } from "@/components/seo/Schema";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return DEVELOPERS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dev = getDeveloper(slug);
  if (!dev) return { title: "Developer Not Found" };
  return {
    title: `${dev.name} Projects in Gurgaon — History, Projects & Reviews`,
    description: `${dev.name}: ${dev.tagline}. Founded ${dev.founded}. ${dev.about.slice(0, 120)}… Explore ${dev.name} projects in Gurgaon with DLF Privana Amraj Infra.`,
    alternates: { canonical: `/developers/${dev.slug}` },
  };
}

export default async function DeveloperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dev = getDeveloper(slug);
  if (!dev) notFound();

  const projects = projectsByDeveloper(dev.slug);

  return (
    <>
      <Schema json={breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Developers", url: "/developers" },
        { name: dev.name, url: `/developers/${dev.slug}` },
      ])} />

      <PageHero
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Developers", href: "/developers" },
          { name: dev.name, href: `/developers/${dev.slug}` },
        ]}
        eyebrow={`Established ${dev.founded} · ${dev.headquarters}`}
        title={<><span className="text-gold-foil">{dev.name}</span></>}
        subtitle={dev.tagline}
      >
        <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
          {[
            { value: `${dev.completed}M+`, label: "Sq.ft. Delivered" },
            { value: dev.ongoing, label: "Ongoing Projects" },
            { value: dev.founded, label: "Established" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <p className="font-display text-2xl font-bold text-gold">{s.value}</p>
              <p className="text-xs text-white/55">{s.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl text-navy md:text-3xl">About {dev.name}</h2>
              <p className="mt-4 leading-relaxed text-ink/70">{dev.about}</p>
            </Reveal>

            <Reveal>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-navy/5 bg-cloud/60 p-6">
                  <Trophy className="h-6 w-6 text-gold-600" />
                  <h3 className="mt-3 font-display text-lg text-navy">Key Achievements</h3>
                  <ul className="mt-4 space-y-2.5">
                    {dev.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-ink/70">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-navy/5 bg-cloud/60 p-6">
                  <Award className="h-6 w-6 text-gold-600" />
                  <h3 className="mt-3 font-display text-lg text-navy">Awards &amp; Recognition</h3>
                  <ul className="mt-4 space-y-2.5">
                    {dev.awards.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-ink/70">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-navy/5 bg-cloud/60 p-6">
                <Building2 className="h-6 w-6 text-gold-600" />
                <h3 className="mt-3 font-display text-lg text-navy">Signature Projects</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {dev.signatureProjects.map((p) => (
                    <span key={p} className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 rounded-3xl bg-navy p-6 text-white shadow-luxe">
              <h3 className="font-display text-xl">Enquire about {dev.name}</h3>
              <p className="mt-1 text-sm text-white/55">
                Get the latest {dev.name} inventory, pricing &amp; launch offers.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                {["Preferred-partner pricing", "Priority unit allotment", "Pre-launch access"].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" /> {b}
                  </li>
                ))}
              </ul>
              <a
                href="#enquire"
                className="btn-gold mt-6 w-full"
              >
                Get {dev.name} Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section bg-cloud">
          <div className="container">
            <h2 className="font-display text-2xl text-navy md:text-3xl">
              {dev.name} Projects in Gurgaon
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <LeadSection />
      <CTABanner title={`Want exclusive ${dev.name} launch pricing?`} />
    </>
  );
}
