import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/home/CTA";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdos sobre saúde bucal, tratamentos e cuidados com o sorriso, escritos pela equipe da Ianara Pinho Odontologia em Brasília.",
};

const posts = [
  {
    slug: "implante-ou-protese",
    category: "Reabilitação",
    title: "Implante ou prótese: qual a melhor escolha para o seu caso?",
    excerpt:
      "Entenda as diferenças entre implantes e próteses e como definimos a indicação ideal em cada avaliação.",
    date: "Junho de 2026",
  },
  {
    slug: "lentes-de-contato-dental-valem-a-pena",
    category: "Estética",
    title: "Lentes de contato dental valem a pena? O que considerar antes",
    excerpt:
      "Durabilidade, indicações e cuidados: o que você precisa saber antes de decidir pelas lentes.",
    date: "Maio de 2026",
  },
  {
    slug: "medo-de-dentista-sedacao",
    category: "Conforto",
    title: "Medo de dentista? Como a sedação consciente muda a experiência",
    excerpt:
      "Para quem sente ansiedade, a sedação consciente traz tranquilidade sem perder o controle.",
    date: "Abril de 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-petrol text-paper">
        <div className="wrap pb-16 pt-36 md:pb-20 md:pt-44">
          <p className="kicker text-brass-soft">Blog</p>
          <h1 className="mt-4 max-w-2xl font-display text-hero font-semibold text-paper">
            Saúde bucal, sem enrolação
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper/80">
            Conteúdos claros sobre tratamentos, cuidados e decisões de sorriso, escritos pela
            equipe da Ianara Pinho.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="wrap py-20 md:py-28">
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <article className="group flex h-full flex-col">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-petrol/10 px-3 py-1 font-medium text-petrol">
                      {p.category}
                    </span>
                    <span className="text-ink-soft">{p.date}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl leading-snug text-ink transition-colors group-hover:text-petrol">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.excerpt}</p>
                  <span className="mt-5 text-sm font-medium text-brass-deep">Ler artigo →</span>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-16 max-w-prose text-sm text-ink-soft">
            Novos conteúdos em breve. Enquanto isso, tire suas dúvidas diretamente com nossa equipe
            —{" "}
            <Link href="/contato" className="text-petrol underline decoration-brass/60 underline-offset-4">
              fale conosco
            </Link>
            .
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
