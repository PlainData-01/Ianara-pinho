"use client";

import { useEffect, useRef, useState } from "react";
import { PROVA_SOCIAL } from "@/lib/constants";

function Contador({ valor, sufixo }: { valor: number; sufixo: string }) {
  const [atual, setAtual] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animou = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animou.current) {
          animou.current = true;
          const inicio = performance.now();
          const tick = (agora: number) => {
            const p = Math.min((agora - inicio) / 1500, 1);
            setAtual(Math.floor(valor * p));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [valor]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-semibold text-paper md:text-5xl">
        {atual}
        {sufixo && <span className="text-2xl text-brass-soft md:text-3xl">{sufixo}</span>}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-paper/10 bg-petrol text-paper">
      <div className="wrap py-16">
        <p className="kicker mb-10 text-center text-brass-soft">Números que falam</p>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {PROVA_SOCIAL.map((item) => (
            <div key={item.rotulo}>
              <Contador valor={item.valor} sufixo={item.sufixo} />
              <p className="mt-2 text-center text-sm text-paper/70">{item.rotulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
