"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, telLink, waLink } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // All pages have a dark hero — header starts transparent over it until scrolled.
  const onDarkHero = !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy/5 bg-white/90 py-2 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        <Logo light={onDarkHero} />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  onDarkHero
                    ? "text-white/85 hover:text-gold-200"
                    : "text-navy/75 hover:text-gold-700",
                  active && (onDarkHero ? "text-gold-200" : "text-gold-700")
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold transition-colors",
              onDarkHero ? "text-white hover:text-gold-200" : "text-navy hover:text-gold-700"
            )}
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold !px-5 !py-2.5">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full lg:hidden",
            onDarkHero ? "text-white" : "text-navy"
          )}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer — portaled to <body> so it escapes the header's
          backdrop-filter containing block and covers the full viewport. */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="lg:hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm"
                />
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-y-0 right-0 z-[70] flex h-[100dvh] w-[82%] max-w-sm flex-col bg-navy text-white"
                >
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <Logo light />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full text-white/80 hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-5">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between border-b border-white/5 py-4 font-display text-xl text-white/90 hover:text-gold-200"
                    >
                      {link.label}
                      <span className="text-gold">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-5">
                <a href={telLink()} className="btn-ghost !py-3">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold !py-3">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </motion.aside>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
