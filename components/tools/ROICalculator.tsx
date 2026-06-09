"use client";

import { useMemo, useState } from "react";
import { TrendingUp, Percent } from "lucide-react";
import { formatINR } from "@/lib/utils";

function NumberField({
  label,
  value,
  suffix,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  suffix?: string;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy/70">{label}</label>
      <div className="flex items-center rounded-xl border border-navy/15 bg-white px-3 focus-within:border-gold focus-within:ring-2 focus-within:ring-gold/20">
        <input
          type="number"
          value={value}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent py-2.5 text-sm text-navy outline-none"
        />
        {suffix && <span className="ml-2 text-xs text-ink/50">{suffix}</span>}
      </div>
    </div>
  );
}

export function ROICalculator() {
  const [price, setPrice] = useState(30_000_000);
  const [years, setYears] = useState(5);
  const [appreciation, setAppreciation] = useState(12);
  const [rentalYield, setRentalYield] = useState(4);

  const result = useMemo(() => {
    const futureValue = price * Math.pow(1 + appreciation / 100, years);
    const capitalGain = futureValue - price;
    // Approximate cumulative rent (assumes rent grows with value)
    let totalRent = 0;
    for (let y = 1; y <= years; y++) {
      totalRent += price * Math.pow(1 + appreciation / 100, y - 1) * (rentalYield / 100);
    }
    const totalReturn = capitalGain + totalRent;
    const totalRoi = (totalReturn / price) * 100;
    const cagr = (Math.pow((price + totalReturn) / price, 1 / years) - 1) * 100;
    return { futureValue, capitalGain, totalRent, totalReturn, totalRoi, cagr };
  }, [price, years, appreciation, rentalYield]);

  return (
    <div className="grid gap-8 rounded-3xl border border-navy/5 bg-white p-6 shadow-card md:grid-cols-2 md:p-8">
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold">
            <TrendingUp className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-xl text-navy">Property ROI Calculator</h3>
            <p className="text-xs text-ink/55">Project your investment returns</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <NumberField label="Investment Amount (Rs.)" value={price} step={500000} onChange={setPrice} />
          </div>
          <NumberField label="Holding Period" value={years} suffix="yrs" onChange={setYears} />
          <NumberField label="Annual Appreciation" value={appreciation} suffix="%" step={0.5} onChange={setAppreciation} />
          <div className="col-span-2">
            <NumberField label="Annual Rental Yield" value={rentalYield} suffix="%" step={0.5} onChange={setRentalYield} />
          </div>
        </div>
        <p className="mt-5 rounded-xl bg-cloud p-3 text-[11px] text-ink/55">
          Tip: Dwarka Expressway has historically delivered 15–22% appreciation;
          SCO plots, 8–10% rental yields. Adjust to your target asset.
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-navy p-8 text-white">
        <p className="text-sm text-white/60">Projected Value in {years} years</p>
        <p className="mt-1 font-display text-4xl font-bold text-gold">
          {formatINR(Math.round(result.futureValue))}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="flex items-center gap-1 text-[11px] uppercase tracking-wider2 text-white/50">
              <Percent className="h-3 w-3" /> Total ROI
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-white">{result.totalRoi.toFixed(0)}%</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <p className="flex items-center gap-1 text-[11px] uppercase tracking-wider2 text-white/50">
              <TrendingUp className="h-3 w-3" /> CAGR
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-gold-200">{result.cagr.toFixed(1)}%</p>
          </div>
        </div>

        <dl className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm">
          <div className="flex justify-between">
            <dt className="text-white/60">Capital Appreciation</dt>
            <dd className="font-semibold">{formatINR(Math.round(result.capitalGain))}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-white/60">Cumulative Rental Income</dt>
            <dd className="font-semibold text-gold-200">{formatINR(Math.round(result.totalRent))}</dd>
          </div>
          <div className="flex justify-between border-t border-white/10 pt-3">
            <dt className="text-white/80">Total Gain</dt>
            <dd className="font-display text-lg font-bold text-gold">{formatINR(Math.round(result.totalReturn))}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
