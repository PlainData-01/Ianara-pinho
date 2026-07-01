import Link from "next/link";
import { CONTACT, HOURS, SITE, SOCIAL, UNITS, whatsappHref } from "@/lib/constants";
import { FEATURED_TREATMENTS } from "@/lib/treatments";

const socialLinks = [
  { label: "Instagram", href: SOCIAL.instagram },
  { label: "Facebook", href: SOCIAL.facebook },
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "YouTube", href: SOCIAL.youtube },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="bg-petrol-deep text-paper/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-paper">Ianara Pinho</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-brass">
            Odontologia · Brasília
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            A rede odontológica de Brasília com estrutura all-in-one de 1.000m² — 3 unidades,
            todas as especialidades e mais de 60 mil pacientes em 16 anos.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="hover:text-brass-soft"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Tratamentos
          </h3>
          <ul className="space-y-2.5 text-sm">
            {FEATURED_TREATMENTS.map((t) => (
              <li key={t.slug}>
                <Link href={`/tratamentos/${t.slug}`} className="hover:text-paper">
                  {t.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tratamentos" className="font-medium text-brass-soft hover:text-paper">
                Ver todos →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Unidades
          </h3>
          <ul className="space-y-4 text-sm">
            {UNITS.map((u) => (
              <li key={u.slug}>
                <p className="font-medium text-paper">{u.name}</p>
                <p className="text-paper/60">{u.building ? `${u.building}, ` : ""}{u.address}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">
            Contato
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener" className="hover:text-paper">
                WhatsApp {CONTACT.whatsappNumber}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-paper">
                Telefone {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-paper">
                {CONTACT.email}
              </a>
            </li>
            <li className="pt-2 text-paper/60">{HOURS}</li>
          </ul>
          <a href={whatsappHref()} target="_blank" rel="noopener" className="btn-primary mt-6">
            Agendar consulta
          </a>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-xs text-paper/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>Brasília — Distrito Federal · Águas Claras · Asa Sul · Asa Norte</p>
        </div>
      </div>
    </footer>
  );
}
