"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { FAQItem } from "@/lib/treatments";
import { cn } from "@/lib/utils";

export default function FAQ({
  items,
  title = "Dúvidas frequentes",
  variant = "light",
}: {
  items: FAQItem[];
  title?: string;
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = variant === "dark";

  return (
    <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
      <div>
        <p className={cn("kicker", dark && "text-brass-soft")}>Perguntas</p>
        <h2
          className={cn(
            "mt-3 font-display text-display",
            dark ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>

      <ul className="divide-y divide-current/10">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={i} className={dark ? "text-paper/85" : "text-ink"}>
              <button
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg leading-snug">{item.q}</span>
                <span
                  className={cn(
                    "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ease-out-quart",
                    dark ? "border-brass/50 text-brass-soft" : "border-brass/60 text-brass-deep",
                    isOpen && "rotate-45"
                  )}
                  aria-hidden
                >
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p
                      className={cn(
                        "max-w-prose pb-6 text-[0.95rem] leading-relaxed",
                        dark ? "text-paper/70" : "text-ink-soft"
                      )}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
