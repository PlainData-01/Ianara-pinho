import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { TREATMENTS, getTreatment } from "@/lib/treatments";
import { faqSchema, serviceSchema } from "@/lib/schema";
import TreatmentHero from "@/components/tratamento/TreatmentHero";
import TreatmentContent from "@/components/tratamento/TreatmentContent";
import TreatmentCTA from "@/components/tratamento/TreatmentCTA";
import FAQ from "@/components/ui/FAQ";

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = getTreatment(params.slug);
  if (!t) return {};
  const url = `${SITE.url}/tratamentos/${t.slug}`;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url,
      type: "article",
    },
  };
}

export default function TreatmentPage({ params }: { params: { slug: string } }) {
  const treatment = getTreatment(params.slug);
  if (!treatment) notFound();

  const url = `${SITE.url}/tratamentos/${treatment.slug}`;
  const related = TREATMENTS.filter(
    (t) => t.category === treatment.category && t.slug !== treatment.slug
  ).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(treatment.name, treatment.metaDescription, url)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(treatment.faq)) }}
      />

      <TreatmentHero treatment={treatment} />
      <TreatmentContent treatment={treatment} />

      <section className="bg-paper-warm">
        <div className="wrap py-20 md:py-24">
          <FAQ items={treatment.faq} title={`Dúvidas sobre ${treatment.name.toLowerCase()}`} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper">
          <div className="wrap py-16">
            <h2 className="font-display text-2xl text-ink">
              Tratamentos relacionados em {treatment.category.toLowerCase()}
            </h2>
            <div className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/tratamentos/${r.slug}`}
                  className="group flex items-center justify-between gap-4 border-b border-ink/10 py-5"
                >
                  <span className="font-display text-lg text-ink transition-colors group-hover:text-petrol">
                    {r.name}
                  </span>
                  <span className="text-brass-deep transition-transform duration-300 ease-out-quart group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <TreatmentCTA treatment={treatment} />
    </>
  );
}
