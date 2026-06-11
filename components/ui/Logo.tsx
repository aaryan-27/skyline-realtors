import Link from "next/link";
import { cn } from "@/lib/utils";

/** Wordmark logo — a gold monogram lockup with serif wordmark. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Crossroad Consultant Inc — Home">
      <span className="relative grid h-11 w-11 place-items-center rounded-lg bg-gold-gradient shadow-gold transition-transform duration-300 group-hover:scale-105">
        <span className="font-display text-lg font-bold leading-none text-navy">CC</span>
        <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/30" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            light ? "text-white" : "text-navy"
          )}
        >
          Crossroad <span className="text-gold-foil">Consultant</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-wider2",
            light ? "text-white/55" : "text-ink/50"
          )}
        >
          Real Estate Consultant Gurugram
        </span>
      </span>
    </Link>
  );
}
