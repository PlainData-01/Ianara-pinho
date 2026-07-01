import type { Treatment } from "@/lib/treatments";
import Reveal from "@/components/ui/Reveal";

export default function TreatmentContent({ treatment }: { treatment: Treatment }) {
  return (
    <section className="bg-paper">
      <div className="wrap grid gap-14 py-20 md:grid-cols-[1.4fr_0.9fr] md:py-24">
        <div className="space-y-12">
          {treatment.sections.map((s) => (
            <Reveal key={s.title}>
              <article>
                <h2 className="font-display text-2xl text-ink md:text-3xl">{s.title}</h2>
                <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <aside className="md:sticky md:top-28 md:self-start">
          <div className="rounded-2xl bg-petrol p-8 text-paper">
            <h3 className="font-display text-xl text-paper">Por que a Ianara Pinho</h3>
            <ul className="mt-5 space-y-4">
              {treatment.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-paper/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
