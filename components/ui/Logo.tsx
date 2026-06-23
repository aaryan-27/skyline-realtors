import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Wordmark logo — the Skyline Realtors skyline mark + serif wordmark. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)} aria-label="Skyline Realtors — Home">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-lg shadow-gold transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/brand/mark.png"
          alt="Skyline Realtors logo"
          width={44}
          height={44}
          priority
          className="h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            light ? "text-white" : "text-navy"
          )}
        >
          Skyline <span className="text-gold-foil">Realtors</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-wider2",
            light ? "text-white/55" : "text-ink/50"
          )}
        >
          Property Dealer · Gurgaon
        </span>
      </span>
    </Link>
  );
}
