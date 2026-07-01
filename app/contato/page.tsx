import type { Metadata } from "next";
import { CONTACT, HOURS, UNITS, whatsappHref } from "@/lib/constants";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contato e unidades",
  description:
    "Fale com a Ianara Pinho Odontologia em Brasília. Agende sua consulta pelo WhatsApp ou telefone nas unidades de Águas Claras, Asa Sul e Asa Norte.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-petrol text-paper">
        <div className="wrap pb-16 pt-36 md:pb-20 md:pt-44">
          <p className="kicker text-brass-soft">Contato</p>
          <h1 className="mt-4 max-w-2xl font-display text-hero font-semibold text-paper">
            Agende sua consulta em Brasília
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            Nossa equipe está pronta para te atender nas unidades de Águas Claras, Asa Sul e Asa
            Norte. Escolha o melhor horário para o seu atendimento.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap grid gap-14 py-20 md:grid-cols-[1fr_1fr] md:py-24">
          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">Fale com a gente</h2>
            <p className="mt-3 max-w-prose text-ink-soft">
              Preencha o formulário e continue a conversa direto no WhatsApp. Você também pode nos
              ligar ou enviar um e-mail.
            </p>

            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-ink-soft">WhatsApp</dt>
                <dd>
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener"
                    className="font-display text-xl text-petrol hover:text-brass-deep"
                  >
                    {CONTACT.whatsappNumber}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">Telefone</dt>
                <dd>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="font-display text-xl text-petrol hover:text-brass-deep"
                  >
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-display text-xl text-petrol hover:text-brass-deep"
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-soft">Horário de atendimento</dt>
                <dd className="mt-1 text-ink">{HOURS}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl bg-paper-warm p-8 shadow-[0_1px_0_rgba(26,35,33,0.06)]">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Unidades com mapa */}
      <section className="bg-paper-warm">
        <div className="wrap py-20 md:py-24">
          <h2 className="font-display text-display text-ink">Nossas unidades</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {UNITS.map((u) => (
              <div key={u.slug} className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10">
                  <iframe
                    title={`Mapa ${u.name}`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      u.mapsQuery
                    )}&output=embed`}
                  />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{u.name}</h3>
                {u.building && <p className="mt-1 text-sm text-ink-soft">{u.building}</p>}
                <p className="text-sm text-ink-soft">{u.address}</p>
                <a
                  href={whatsappHref(
                    `Olá! Gostaria de agendar na ${u.name} da Ianara Pinho.`
                  )}
                  target="_blank"
                  rel="noopener"
                  className="btn-petrol mt-5 w-fit"
                >
                  Agendar nesta unidade
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
