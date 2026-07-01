"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT, SITE, whatsappHref } from "@/lib/constants";
import { CATEGORIES, treatmentsByCategory } from "@/lib/treatments";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Tratamentos", href: "/tratamentos", dropdown: true },
  { label: "A clínica", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[var(--z-sticky)] transition-all duration-500 ease-out-quart",
        scrolled
          ? "bg-petrol-deep/95 backdrop-blur-md shadow-[0_1px_0_rgba(184,147,90,0.15)]"
          : "bg-transparent"
      )}
    >
      <div className="wrap flex h-20 items-center justify-between">
        <Link href="/" className="group flex flex-col leading-none" aria-label={SITE.name}>
          <span className="font-display text-xl font-semibold tracking-tight text-paper">
            Ianara Pinho
          </span>
          <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.35em] text-brass-soft">
            Odontologia · DF
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setTreatOpen(true)}
                onMouseLeave={() => setTreatOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-paper/85 hover:text-paper"
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </Link>
                <div
                  className={cn(
                    "absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-5 transition-all duration-300 ease-out-quart",
                    treatOpen
                      ? "pointer-events-auto opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 -translate-y-1"
                  )}
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6 rounded-2xl border border-brass/20 bg-petrol-deep p-8 shadow-2xl">
                    {CATEGORIES.map((cat) => {
                      const items = treatmentsByCategory(cat);
                      if (!items.length) return null;
                      return (
                        <div key={cat}>
                          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brass">
                            {cat}
                          </p>
                          <ul className="space-y-1.5">
                            {items.map((t) => (
                              <li key={t.slug}>
                                <Link
                                  href={`/tratamentos/${t.slug}`}
                                  className="text-sm text-paper/70 hover:text-brass-soft"
                                >
                                  {t.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-paper/85 hover:text-paper"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="text-sm font-medium text-paper/80 hover:text-paper"
          >
            {CONTACT.phone}
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-primary">
            Agendar consulta
          </a>
        </div>

        <button
          className="lg:hidden text-paper"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            {open ? (
              <path d="M6 6 20 20M20 6 6 20" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-[var(--z-sticky)] bg-petrol-deep px-6 pb-10 pt-6 transition-all duration-400 ease-out-quart lg:hidden",
          open ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-full opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-paper/10 py-4 font-display text-2xl text-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
          className="btn-primary mt-8 w-full"
        >
          Agendar pelo WhatsApp
        </a>
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="mt-3 block text-center text-sm text-paper/70"
        >
          Ligar {CONTACT.phone}
        </a>
      </div>
    </header>
  );
}
