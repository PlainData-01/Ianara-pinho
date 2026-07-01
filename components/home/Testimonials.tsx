import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Atendimento impecável do começo ao fim. Fiz meus implantes e resolvi tudo na mesma clínica, sem correria entre lugares.",
    name: "Paciente · Unidade Asa Sul",
    detail: "Implantes dentários",
  },
  {
    quote:
      "Sempre tive medo de dentista. A sedação e a equipe fizeram toda a diferença — foi tranquilo e sem dor.",
    name: "Paciente · Unidade Águas Claras",
    detail: "Sedação consciente",
  },
  {
    quote:
      "Estrutura de primeira e equipe muito atenciosa. As lentes ficaram naturais, exatamente como eu queria.",
    name: "Paciente · Unidade Asa Norte",
    detail: "Lentes de contato dental",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper-warm">
      <div className="wrap py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="kicker">Prova social e autoridade</p>
          <h2 className="mt-3 font-display text-display text-ink">
            Mais de 790 avaliações no Google, nota média 4,9
          </h2>
          <p className="mt-4 max-w-prose text-ink-soft">
            A confiança dos pacientes reforça nosso compromisso com atendimento humanizado e
            resultados reais, em todas as unidades da Ianara Pinho Odontologia.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col justify-between rounded-2xl bg-white/70 p-8 shadow-[0_1px_0_rgba(26,35,33,0.06)]">
                <div>
                  <div className="text-brass" aria-label="5 estrelas">
                    ★★★★★
                  </div>
                  <blockquote className="mt-4 font-display text-lg leading-snug text-ink">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
