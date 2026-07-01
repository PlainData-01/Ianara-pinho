import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import Timeline from "@/components/home/Timeline";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sobre a clínica",
  description:
    "A Ianara Pinho Odontologia é uma rede de clínicas odontológicas com 3 unidades em Brasília (Águas Claras, Asa Sul e Asa Norte), 16 anos de tradição e mais de 60 mil pacientes atendidos.",
};

const values = [
  {
    title: "Autoridade construída no tempo",
    body: "16 anos de tradição em odontologia no Distrito Federal, com mais de 60 mil pacientes atendidos.",
  },
  {
    title: "Estrutura que resolve",
    body: "1.000m² com radiologia integrada, centro cirúrgico próprio e mais de 17 consultórios em 3 unidades.",
  },
  {
    title: "Cuidado que acolhe",
    body: "Atendimento humanizado, planejamento individual e acompanhamento em todas as etapas.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-petrol text-paper">
        <div className="wrap pb-16 pt-36 md:pb-24 md:pt-44">
          <p className="kicker text-brass-soft">A clínica</p>
          <h1 className="mt-4 max-w-3xl font-display text-hero font-semibold text-paper">
            Uma rede de saúde bucal que Brasília confia
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/80">
            {SITE.name} é uma rede de clínicas odontológicas com 3 unidades em Brasília — Águas
            Claras, Asa Sul e Asa Norte. Oferecemos tratamentos completos, de implantes e lentes a
            ortodontia, cirurgia bucomaxilofacial e odontopediatria.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={IMAGES.team}
                alt="Equipe de dentistas da Ianara Pinho Odontologia"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <h2 className="font-display text-display text-ink">
              Séria como um especialista, próxima como quem cuida de você
            </h2>
            <p className="mt-5 max-w-prose text-ink-soft">
              Nascemos com o compromisso de unir tecnologia e atendimento humanizado. Ao longo de
              16 anos, crescemos de uma unidade para uma rede consolidada, sempre com o mesmo
              cuidado: entender cada paciente e planejar o tratamento certo para o seu caso.
            </p>
            <ul className="mt-8 space-y-6">
              {values.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="mt-2 h-px w-8 shrink-0 bg-brass" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg text-ink">{v.title}</h3>
                    <p className="mt-1 max-w-prose text-sm text-ink-soft">{v.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Assinatura: linha do tempo de 16 anos */}
      <Timeline />

      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
