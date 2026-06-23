"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, SearchX } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";

type Props = {
  projects: Project[];
  showCategory?: boolean;
};

const ALL = "All";

export function PropertyExplorer({ projects, showCategory = true }: Props) {
  const [builder, setBuilder] = useState(ALL);
  const [location, setLocation] = useState(ALL);
  const [category, setCategory] = useState(ALL);
  const [possession, setPossession] = useState(ALL);
  const [budget, setBudget] = useState(ALL);
  const [showFilters, setShowFilters] = useState(false);

  const builders = useMemo(() => [ALL, ...new Set(projects.map((p) => p.builder))], [projects]);
  const locations = useMemo(() => [ALL, ...new Set(projects.map((p) => p.location))], [projects]);
  const categories = useMemo(() => [ALL, ...new Set(projects.map((p) => p.category))], [projects]);
  const statuses = useMemo(() => [ALL, ...new Set(projects.map((p) => p.possession))], [projects]);

  const budgets = [
    { label: ALL, min: 0, max: Infinity },
    { label: "Under Rs.1 Cr", min: 0, max: 10_000_000 },
    { label: "Rs.1 – 2 Cr", min: 10_000_000, max: 20_000_000 },
    { label: "Rs.2 – 3.5 Cr", min: 20_000_000, max: 35_000_000 },
    { label: "Rs.3.5 Cr +", min: 35_000_000, max: Infinity },
  ];

  const filtered = useMemo(() => {
    const b = budgets.find((x) => x.label === budget) ?? budgets[0];
    return projects.filter(
      (p) =>
        (builder === ALL || p.builder === builder) &&
        (location === ALL || p.location === location) &&
        (category === ALL || p.category === category) &&
        (possession === ALL || p.possession === possession) &&
        p.priceFrom >= b.min &&
        p.priceFrom <= b.max
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects, builder, location, category, possession, budget]);

  const reset = () => {
    setBuilder(ALL);
    setLocation(ALL);
    setCategory(ALL);
    setPossession(ALL);
    setBudget(ALL);
  };

  const activeCount = [builder, location, category, possession, budget].filter((v) => v !== ALL).length;

  const Select = ({
    label,
    value,
    onChange,
    options,
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: string[];
  }) => (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy/70">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-20 z-30 rounded-2xl border border-navy/5 bg-white/95 p-4 shadow-card backdrop-blur md:p-5">
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={() => setShowFilters((s) => !s)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy"
          >
            <SlidersHorizontal className="h-4 w-4 text-gold-600" />
            Filters {activeCount > 0 && <span className="rounded-full bg-gold px-2 py-0.5 text-[11px] text-navy">{activeCount}</span>}
          </button>
          <span className="text-sm text-ink/55">{filtered.length} projects</span>
        </div>

        <div className={`${showFilters ? "grid" : "hidden"} mt-4 gap-3 md:mt-0 md:grid md:grid-cols-2 lg:grid-cols-5`}>
          <Select label="Budget" value={budget} onChange={setBudget} options={budgets.map((b) => b.label)} />
          <Select label="Location" value={location} onChange={setLocation} options={locations} />
          <Select label="Builder" value={builder} onChange={setBuilder} options={builders} />
          {showCategory && (
            <Select label="Property Type" value={category} onChange={setCategory} options={categories} />
          )}
          <Select label="Possession" value={possession} onChange={setPossession} options={statuses} />
        </div>

        <div className="mt-4 hidden items-center justify-between md:flex">
          <span className="text-sm text-ink/55">
            Showing <strong className="text-navy">{filtered.length}</strong> of {projects.length} projects
          </span>
          {activeCount > 0 && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 hover:text-gold"
            >
              <X className="h-3.5 w-3.5" /> Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-navy/15 bg-white py-16 text-center">
          <SearchX className="h-10 w-10 text-ink/30" />
          <p className="mt-4 font-display text-xl text-navy">No projects match these filters</p>
          <p className="mt-1 text-sm text-ink/55">Try widening your search, or talk to an advisor for off-market options.</p>
          <button onClick={reset} className="btn-outline mt-6">
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
