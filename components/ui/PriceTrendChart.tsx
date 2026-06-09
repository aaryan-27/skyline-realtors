type Point = { year: string; price: number };

/** Lightweight SVG bar chart for Rs./sqft price trends — server-rendered, no deps. */
export function PriceTrendChart({ data }: { data: Point[] }) {
  const max = Math.max(...data.map((d) => d.price));
  const first = data[0].price;
  const last = data[data.length - 1].price;
  const growth = (((last - first) / first) * 100).toFixed(0);

  return (
    <div className="rounded-2xl border border-navy/5 bg-white p-6 shadow-card">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider2 text-ink/45">Avg. Rs./sq.ft. Trend</p>
          <p className="font-display text-2xl font-bold text-navy">5-Year Appreciation</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
          +{growth}%
        </span>
      </div>
      <div className="flex h-48 items-end justify-between gap-3">
        {data.map((d, i) => {
          const h = (d.price / max) * 100;
          const isLast = i === data.length - 1;
          return (
            <div key={d.year} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-[11px] font-semibold text-navy">
                Rs.{(d.price / 1000).toFixed(1)}k
              </span>
              <div
                className={`w-full rounded-t-lg transition-all ${
                  isLast ? "bg-gold-gradient" : "bg-navy/15"
                }`}
                style={{ height: `${h}%` }}
              />
              <span className="text-xs text-ink/50">{d.year}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
