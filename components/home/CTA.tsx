import Link from "next/link";
import { CONTACT, whatsappHref } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="bg-petrol text-paper">
      <div className="wrap py-20 text-center md:py-28">
        <p className="kicker text-brass-soft">Agende sua consulta</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-display font-semibold text-paper">
          Um sorriso saudável começa com uma boa avaliação
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-paper/75">
          Fale com a equipe da Ianara Pinho e escolha o melhor horário para seu atendimento em
          Águas Claras, Asa Sul ou Asa Norte.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-primary">
            Agendar pelo WhatsApp
          </a>
          <a href={`tel:${CONTACT.phoneRaw}`} className="btn-outline text-paper">
            Ligar {CONTACT.phone}
          </a>
        </div>
        <p className="mt-6 text-sm text-paper/60">
          Prefere o formulário?{" "}
          <Link href="/contato" className="underline decoration-brass/60 underline-offset-4 hover:text-paper">
            Fale conosco aqui
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
