import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { HERO, whatsappHref } from "@/lib/constants";
import { IMAGENS } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

const unidades = [
  {
    nome: "Asa Sul",
    imagem: IMAGENS.unidades.asaSul,
    href: "/tratamentos/dentista-asa-sul",
    tilt: "-rotate-2 -translate-y-1",
  },
  {
    nome: "Águas Claras",
    imagem: IMAGENS.unidades.aguasClaras,
    href: "/tratamentos/dentista-aguas-claras",
    tilt: "rotate-0",
  },
  {
    nome: "Asa Norte",
    imagem: IMAGENS.unidades.asaNorte,
    href: "/tratamentos/dentista-asa-norte",
    tilt: "rotate-2 translate-y-1",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] text-paper">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f2344] via-[#0a1628] to-petrol-deep"
        aria-hidden
      />

      {/* Mobile */}
      <div className="relative flex justify-center px-4 pb-2 pt-28 md:hidden">
        <div className="relative h-[min(420px,58vh)] w-full max-w-md">
          <Image
            src={IMAGENS.heroPortrait}
            alt="Ianara Pinho — fundadora da clínica odontológica em Brasília"
            fill
            className="object-contain object-bottom drop-shadow-[0_16px_32px_rgba(0,0,0,0.35)]"
            sizes="420px"
            priority
          />
        </div>
      </div>

      <div className="wrap relative pb-14 pt-4 md:pb-16 md:pt-32 lg:pt-36">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(320px,46%)_1fr] lg:gap-12 xl:gap-16">
          <Reveal className="relative mx-auto hidden w-full md:block">
            <div className="relative flex h-[min(680px,82vh)] w-full items-end justify-center">
              <div
                className="pointer-events-none absolute bottom-1/4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-brass/10 blur-3xl"
                aria-hidden
              />
              <div className="relative h-full w-full max-w-[min(520px,100%)]">
                <Image
                  src={IMAGENS.heroPortrait}
                  alt="Ianara Pinho — fundadora da clínica odontológica em Brasília"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                  sizes="(max-width: 1280px) 480px, 520px"
                  priority
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brass-soft">
              {HERO.rotulo}
            </p>
            <h1 className="mt-3 font-display text-[2.5rem] font-semibold leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-[3.25rem]">
              {HERO.titulo}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
              {HERO.subtitulo}
            </p>

            <div className="mt-9 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-5">
              {unidades.map((u) => (
                <Link key={u.nome} href={u.href} className={`group text-center ${u.tilt}`}>
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[148px] overflow-hidden rounded-lg border-2 border-paper/20 shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-brass group-hover:shadow-xl sm:max-w-[168px]">
                    <Image
                      src={u.imagem}
                      alt={`Unidade ${u.nome} — Ianara Pinho Odontologia`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="168px"
                    />
                  </div>
                  <p className="mt-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-paper/75 transition group-hover:text-brass-soft sm:mt-3 sm:text-xs">
                    {u.nome}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-base shadow-[0_12px_36px_rgba(184,147,90,0.28)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {HERO.ctaPrimario}
              </a>
              <Link href="/contato" className="btn-outline px-8 py-4 text-base text-paper">
                Escolher unidade
              </Link>
            </div>

            {HERO.avisoDestaque && (
              <p className="mt-4 text-sm text-paper/55">{HERO.avisoDestaque}</p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
