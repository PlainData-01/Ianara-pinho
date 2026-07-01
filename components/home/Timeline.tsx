"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { TIMELINE } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Assinatura visual: linha do tempo interativa "16 anos em Brasília".
export default function Timeline() {
  const [active, setActive] = useState(TIMELINE.length - 1);
  const reduce = useReducedMotion();
  const current = TIMELINE[active];

  return (
    <section className="bg-petrol-deep text-paper">
      <div className="wrap py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="kicker text-brass-soft">16 anos em Brasília</p>
          <h2 className="mt-3 font-display text-display text-paper">
            De uma unidade a uma rede de referência no DF
          </h2>
        </div>

        {/* Trilha de anos */}
        <div className="mt-16 overflow-x-auto pb-2">
          <div className="relative flex min-w-[640px] items-start justify-between">
            <div className="absolute left-0 right-0 top-[7px] h-px bg-paper/15" aria-hidden />
            <motion.div
              className="absolute left-0 top-[7px] h-px bg-brass"
              initial={false}
              animate={{
                width: `${(active / (TIMELINE.length - 1)) * 100}%`,
              }}
              transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden
            />
            {TIMELINE.map((item, i) => (
              <button
                key={item.year}
                onClick={() => setActive(i)}
                className="relative z-10 flex flex-col items-center gap-3"
                aria-pressed={i === active}
                aria-label={`Ano ${item.year}`}
              >
                <span
                  className={cn(
                    "h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 ease-out-quart",
                    i <= active
                      ? "border-brass bg-brass"
                      : "border-paper/30 bg-petrol-deep"
                  )}
                />
                <span
                  className={cn(
                    "font-display text-lg transition-colors",
                    i === active ? "text-brass-soft" : "text-paper/50"
                  )}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detalhe do marco */}
        <motion.div
          key={active}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-2xl"
        >
          <h3 className="font-display text-2xl text-paper md:text-3xl">{current.title}</h3>
          <p className="mt-3 text-paper/70">{current.detail}</p>
        </motion.div>
      </div>
    </section>
  );
}
