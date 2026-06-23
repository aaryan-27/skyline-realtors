import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="section bg-cloud">
      <div className="container">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Handpicked Inventory"
            title={
              <>
                Featured <span className="text-gold-foil">Premium Projects</span>
              </>
            }
            subtitle="A handpicked selection of builder floors, flats and plots across Palam Vihar and Sectors 21–23 — title-verified and chosen for genuine value and livability."
          />
          <Reveal delay={0.1}>
            <Link
              href="/residential"
              className="hidden items-center gap-2 text-sm font-semibold text-navy hover:text-gold-700 md:inline-flex"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/residential" className="btn-outline">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
