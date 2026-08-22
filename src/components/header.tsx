"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = solid || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${
          open
            ? "text-bone"
            : light
              ? "border-b border-line bg-bone/85 text-ink backdrop-blur-md"
              : "border-b border-transparent text-bone"
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-baseline gap-3" aria-label="Strata — home">
            <span className="font-semibold tracking-[0.32em]">STRATA</span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 lg:inline">
              Arch · Eng · Con
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((n) => {
              const active =
                pathname === n.href || pathname.startsWith(n.href + "/");
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-100 ${
                    active ? "underline underline-offset-8" : "opacity-70"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              href="/commission"
              className={`ml-2 border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                open
                  ? "border-bone/40 hover:bg-bone hover:text-ink"
                  : light
                    ? "border-ink/30 hover:bg-ink hover:text-bone"
                    : "border-bone/50 hover:bg-bone hover:text-ink"
              }`}
            >
              Commission
            </Link>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-[60] font-mono text-[11px] uppercase tracking-[0.24em] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink text-bone transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="container-site flex h-full flex-col justify-center gap-1 pt-16">
          {[...nav, { href: "/commission", label: "Commission" }].map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              className={`group flex items-baseline justify-between border-b border-bone/10 py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${120 + i * 60}ms` }}
            >
              <span className="display text-4xl">{n.label}</span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-bone/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <div
            className={`mt-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-bone/50 transition-all delay-500 duration-700 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>{site.email}</span>
            <span>Oslo — Lisbon</span>
          </div>
        </nav>
      </div>
    </>
  );
}
