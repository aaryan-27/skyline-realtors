import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, ArrowUpRight, MessageCircle } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { formatINR } from "@/lib/utils";
import { waLink } from "@/lib/site";

const statusColor: Record<string, string> = {
  "Ready to Move": "bg-emerald-500/90",
  "Under Construction": "bg-gold-500/90",
  "New Launch": "bg-navy/90",
  "Pre-Launch": "bg-purple-600/90",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe">
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name} by ${project.builder} in ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm ${
            statusColor[project.possession] ?? "bg-navy/90"
          }`}
        >
          {project.possession}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy">
          {project.category}
        </span>

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
          <div>
            <p className="text-[11px] uppercase tracking-wider2 text-gold-200">
              {project.builder}
            </p>
            <h3 className="font-display text-xl leading-tight">{project.name}</h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-sm text-ink/60">
          <MapPin className="h-4 w-4 text-gold-600" />
          {project.location}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/60">
          <Building2 className="h-4 w-4 text-gold-600" />
          {project.type}
        </p>

        <div className="mt-4 flex items-end justify-between border-t border-navy/5 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider2 text-ink/40">Starting</p>
            <p className="font-display text-xl font-semibold text-navy">
              {formatINR(project.priceFrom)} onwards
            </p>
          </div>
          <p className="text-right text-xs text-ink/50">
            Possession
            <br />
            <span className="font-semibold text-navy">{project.possessionDate}</span>
          </p>
        </div>

        <div className="mt-5 flex gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy-700"
          >
            View Details <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={waLink(`Hi, I'm interested in ${project.name} by ${project.builder}. Please share details.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${project.name} on WhatsApp`}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
