"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Download, TrendingUp, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";

type FormValues = { name: string; email: string; phone: string };

const STORAGE_KEY = "gp_exit_guide_seen";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(STORAGE_KEY)) return;

    let armed = false;
    const armTimer = setTimeout(() => (armed = true), 6000);

    const onLeave = (e: MouseEvent) => {
      if (armed && e.clientY <= 0) trigger();
    };
    // Mobile fallback: trigger after dwell + scroll depth
    const onScroll = () => {
      if (armed && window.scrollY > document.body.scrollHeight * 0.45) trigger();
    };
    const trigger = () => {
      setOpen(true);
      cleanup();
    };
    const cleanup = () => {
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(armTimer);
    };

    document.addEventListener("mouseout", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return cleanup;
  }, []);

  const close = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const onSubmit = async (data: FormValues) => {
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "exit-intent-guide", interest: "Investment Guide 2026" }),
      });
    } catch {
      /* non-blocking */
    }
    localStorage.setItem(STORAGE_KEY, "1");
    setDone(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-navy/70 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-luxe md:grid-cols-2"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-navy shadow-sm hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Visual side */}
            <div className="relative hidden flex-col justify-between bg-navy p-8 text-white md:flex">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative">
                <span className="eyebrow !text-gold-300">Free Download</span>
                <h3 className="mt-4 font-display text-3xl leading-tight">
                  Buyer&apos;s Guide to Builder Floors, Flats &amp; Plots in Gurgaon 2026
                </h3>
              </div>
              <ul className="relative space-y-3 text-sm text-white/80">
                {[
                  "Locality-by-locality price & yield data",
                  "Title checks & paperwork made simple",
                  "How to buy and sell at the right price",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form side */}
            <div className="p-8">
              {done ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="mt-5 font-display text-2xl text-navy">Check your inbox!</h4>
                  <p className="mt-2 text-sm text-ink/60">
                    Your 2026 investment guide is on its way. Our advisor will also reach out shortly.
                  </p>
                  <button onClick={close} className="btn-navy mt-6">
                    Continue Browsing
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-700">
                    <TrendingUp className="h-3.5 w-3.5" /> 2026 Investor Report
                  </div>
                  <h4 className="font-display text-2xl text-navy">
                    Get the free guide before you go
                  </h4>
                  <p className="mt-2 text-sm text-ink/60">
                    Enter your details and we&apos;ll instantly send the report to your inbox.
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3">
                    <div>
                      <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Full Name"
                        className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" },
                        })}
                        placeholder="Email Address"
                        className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: { value: /^[0-9+\s-]{10,15}$/, message: "Enter a valid phone" },
                        })}
                        placeholder="Mobile Number"
                        className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn-gold w-full">
                      <Download className="h-4 w-4" />
                      {isSubmitting ? "Sending…" : "Download Free Guide"}
                    </button>
                    <p className="text-center text-[11px] text-ink/40">
                      We respect your privacy. No spam, unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
