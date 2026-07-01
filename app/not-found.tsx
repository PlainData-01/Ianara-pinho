import Link from "next/link";
import { whatsappHref } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-petrol text-paper">
      <div className="wrap text-center">
        <p className="kicker text-brass-soft">Erro 404</p>
        <h1 className="mt-4 font-display text-hero font-semibold text-paper">
          Página não encontrada
        </h1>
        <p className="mx-auto mt-5 max-w-md text-paper/75">
          O endereço que você procura não existe ou foi movido. Que tal voltar ao início ou falar
          com a nossa equipe?
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            Voltar ao início
          </Link>
          <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-outline text-paper">
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
