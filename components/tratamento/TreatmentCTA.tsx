import { whatsappHref } from "@/lib/constants";
import type { Treatment } from "@/lib/treatments";

export default function TreatmentCTA({ treatment }: { treatment: Treatment }) {
  return (
    <section className="bg-brass">
      <div className="wrap flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-display text-2xl font-semibold text-petrol-deep md:text-3xl">
            Pronto para cuidar do seu sorriso?
          </h2>
          <p className="mt-2 max-w-xl text-petrol-deep/80">
            Agende sua avaliação de {treatment.name.toLowerCase()} com a equipe da Ianara Pinho em
            Brasília.
          </p>
        </div>
        <a
          href={whatsappHref(
            `Olá! Quero agendar uma avaliação de ${treatment.name} na Ianara Pinho.`
          )}
          target="_blank"
          rel="noopener"
          className="btn bg-petrol-deep text-paper hover:bg-petrol"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
