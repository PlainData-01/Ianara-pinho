import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES, treatmentsByCategory } from "@/lib/treatments";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Tratamentos odontológicos em Brasília",
  description:
    "Todas as especialidades odontológicas da Ianara Pinho em Brasília: implantes, estética, ortodontia, cirurgia, clínico geral e unidades em Águas Claras, Asa Sul e Asa Norte.",
};

export default function TreatmentsIndex() {
  return (
    <>
      <section className="bg-petrol text-paper">
        <div className="wrap pb-16 pt-36 md:pb-20 md:pt-44">
          <p className="kicker text-brass-soft">Tratamentos</p>
          <h1 className="mt-4 max-w-3xl font-display text-hero font-semibold text-paper">
            Todas as especialidades, em um só lugar
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            Implantes, estética, ortodontia, cirurgia e cuidados completos para tratar dor,
            recuperar dentes, melhorar o sorriso e cuidar da sua saúde bucal — com a estrutura
            all-in-one da Ianara Pinho.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap space-y-20 py-20 md:py-28">
          {CATEGORIES.map((cat) => {
            const items = treatmentsByCategory(cat);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <div className="flex items-baseline gap-4">
                  <h2 className="font-display text-2xl text-ink md:text-3xl">{cat}</h2>
                  <span className="h-px flex-1 bg-ink/10" aria-hidden />
                  <span className="text-sm text-ink-soft">{items.length}</span>
                </div>
                <div className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((t, i) => (
                    <Reveal key={t.slug} delay={Math.min(i * 0.04, 0.2)}>
                      <Link
                        href={`/tratamentos/${t.slug}`}
                        className="group flex items-start justify-between gap-4 border-b border-ink/10 py-5"
                      >
                        <span>
                          <span className="font-display text-lg text-ink transition-colors group-hover:text-petrol">
                            {t.name}
                          </span>
                          <span className="mt-1 block max-w-xs text-sm text-ink-soft">
                            {t.kicker}
                          </span>
                        </span>
                        <span
                          className="mt-1 text-brass-deep transition-transform duration-300 ease-out-quart group-hover:translate-x-1"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
