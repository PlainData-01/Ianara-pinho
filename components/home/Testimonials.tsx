import Image from "next/image";
import { SITE, TOTAL_GOOGLE_REVIEWS, UNITS } from "@/lib/constants";
import { IMAGENS } from "@/lib/images";
import { formatReviewCount } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const unitImages: Record<string, string> = {
  "aguas-claras": IMAGENS.unidades.aguasClaras,
  "asa-sul": IMAGENS.unidades.asaSul,
  "asa-norte": IMAGENS.unidades.asaNorte,
};

export default function Testimonials() {
  return (
    <section className="bg-paper-warm">
      <div className="wrap py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="kicker">Prova social e autoridade</p>
          <h2 className="mt-3 font-display text-display text-ink">
            Mais de {formatReviewCount(TOTAL_GOOGLE_REVIEWS)} avaliações no Google, nota média 4,9
          </h2>
          <p className="mt-4 max-w-prose text-ink-soft">
            A confiança dos pacientes reforça nosso compromisso com atendimento humanizado,
            dedicação, ética e resultados reais em Águas Claras, Asa Sul e Asa Norte.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {UNITS.map((unit, i) => (
            <Reveal key={unit.slug} delay={i * 0.08}>
              <figure className="overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(26,35,33,0.06)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={unitImages[unit.slug]}
                    alt={`${SITE.name} ${unit.name}`}
                    fill
                    className="object-cover"
                    sizes="360px"
                  />
                </div>
                <figcaption className="p-6 text-center">
                  <p className="text-sm font-semibold text-ink">
                    {formatReviewCount(unit.googleReviews)} Avaliações
                  </p>
                  <div className="mt-2 text-brass" aria-label="5 estrelas">
                    ★★★★★
                  </div>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                    {SITE.name} {unit.name}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
