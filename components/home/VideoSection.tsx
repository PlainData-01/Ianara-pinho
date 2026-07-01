import { SOCIAL } from "@/lib/constants";

export default function VideoSection() {
  return (
    <section className="bg-paper">
      <div className="wrap py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="kicker">Conheça a clínica</p>
            <h2 className="mt-3 font-display text-display text-ink">
              Um tour pela estrutura all-in-one
            </h2>
            <p className="mt-5 max-w-prose text-ink-soft">
              Recepção ampla, consultórios equipados, radiologia integrada e centro cirúrgico
              próprio. Veja de perto o ambiente pensado para receber você com tranquilidade desde a
              chegada.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-ink/10 shadow-lg">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${SOCIAL.youtubeEmbedId}`}
              title="Tour pela clínica Ianara Pinho Odontologia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
