import Image from "next/image";
import Link from "next/link";
import { SITE, HERO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section className="bg-paper">
      <div className="wrap grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <Reveal className="order-2 md:order-1">
          <p className="kicker">{HERO.aboutRotulo}</p>
          <h2 className="mt-3 font-display text-display text-ink">{SITE.name}</h2>
          <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">{SITE.descricaoLonga}</p>
          <Link href="/sobre" className="btn-petrol mt-8">
            Conheça nossa história
          </Link>
        </Reveal>
        {IMAGES.about && (
          <Reveal delay={0.1} className="order-1 md:order-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 shadow-lg">
              <Image
                src={IMAGES.about}
                alt="Estrutura all-in-one da Ianara Pinho Odontologia em Brasília"
                fill
                className="object-cover object-center"
                sizes="560px"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
