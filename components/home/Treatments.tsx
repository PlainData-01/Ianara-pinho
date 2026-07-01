import Link from "next/link";
import {
  CATEGORIES,
  FEATURED_TREATMENTS,
  treatmentsByCategory,
  type TreatmentCategory,
} from "@/lib/treatments";

const HOME_CATEGORIES: TreatmentCategory[] = ["Estética", "Reabilitação", "Cirurgia", "Clínico"];

export default function Treatments() {
  return (
    <section id="tratamentos" className="bg-petrol-deep text-paper">
      <div className="wrap py-14 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="kicker text-brass-soft">Tratamentos</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              Todas as especialidades, em um só lugar
            </h2>
          </div>
          <Link
            href="/tratamentos"
            className="btn-outline shrink-0 px-5 py-2.5 text-sm text-paper"
          >
            Ver índice completo
          </Link>
        </div>

        {/* Destaques — linha compacta */}
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_TREATMENTS.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/tratamentos/${t.slug}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-brass/25 bg-brass/10 px-4 py-3 transition-colors hover:border-brass/50 hover:bg-brass/15"
              >
                <span>
                  <span className="block font-display text-base leading-snug text-paper group-hover:text-brass-soft">
                    {t.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-paper/55">{t.category}</span>
                </span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-paper/20 text-xs text-paper/60 transition group-hover:border-brass group-hover:bg-brass group-hover:text-petrol-deep"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Por categoria — colunas densas */}
        <div className="mt-10 grid gap-8 border-t border-paper/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_CATEGORIES.map((cat) => {
            const items = treatmentsByCategory(cat);
            return (
              <div key={cat}>
                <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brass-soft">
                  {cat}
                  <span className="h-px flex-1 bg-paper/10" aria-hidden />
                  <span className="tabular-nums text-paper/40">{items.length}</span>
                </h3>
                <ul className="space-y-0.5">
                  {items.map((t) => (
                    <li key={t.slug}>
                      <Link
                        href={`/tratamentos/${t.slug}`}
                        className="group flex items-center justify-between gap-2 rounded-lg py-2 pl-1 pr-2 text-sm transition-colors hover:bg-paper/5"
                      >
                        <span className="text-paper/85 transition-colors group-hover:text-paper">
                          {t.name}
                        </span>
                        <span
                          className="shrink-0 text-brass/0 transition-all group-hover:translate-x-0.5 group-hover:text-brass-soft"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Unidades + rodapé */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            <span className="mr-1 self-center text-xs uppercase tracking-wider text-paper/45">
              Unidades
            </span>
            {treatmentsByCategory("Unidades").map((t) => (
              <Link
                key={t.slug}
                href={`/tratamentos/${t.slug}`}
                className="rounded-full border border-paper/15 px-3 py-1 text-xs text-paper/75 transition hover:border-brass/40 hover:text-brass-soft"
              >
                {t.name.replace(/^Dentista (em|na) /, "")}
              </Link>
            ))}
          </div>
          <p className="text-xs text-paper/45">
            {CATEGORIES.reduce(
              (n, c) => n + treatmentsByCategory(c).length,
              0
            )}{" "}
            tratamentos · estrutura all-in-one em Brasília
          </p>
        </div>
      </div>
    </section>
  );
}
