import Link from "next/link";
import { whatsappHref } from "@/lib/constants";
import type { Treatment } from "@/lib/treatments";

export default function TreatmentHero({ treatment }: { treatment: Treatment }) {
  return (
    <section className="relative overflow-hidden bg-petrol text-paper">
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-petrol-soft/50 blur-3xl"
        aria-hidden
      />
      <div className="wrap relative pb-16 pt-36 md:pb-20 md:pt-44">
        <nav className="mb-8 flex items-center gap-2 text-xs text-paper/60" aria-label="Trilha">
          <Link href="/" className="hover:text-paper">
            Início
          </Link>
          <span aria-hidden>/</span>
          <Link href="/tratamentos" className="hover:text-paper">
            Tratamentos
          </Link>
          <span aria-hidden>/</span>
          <span className="text-brass-soft">{treatment.name}</span>
        </nav>

        <p className="kicker text-brass-soft">{treatment.kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-display font-semibold text-paper">
          {treatment.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80">{treatment.intro}</p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={whatsappHref(
              `Olá! Tenho interesse em ${treatment.name} na Ianara Pinho Odontologia.`
            )}
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            Agendar avaliação
          </a>
          <Link href="/tratamentos" className="btn-outline text-paper">
            Outros tratamentos
          </Link>
        </div>
      </div>
    </section>
  );
}
