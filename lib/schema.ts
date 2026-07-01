import { CONTACT, HOURS, SITE, SOCIAL, UNITS } from "@/lib/constants";

// Schema.org JSON-LD para rede de clínicas odontológicas.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "$$$",
    image: `${SITE.url}/og.jpg`,
    medicalSpecialty: "Dentistry",
    areaServed: "Brasília, Distrito Federal",
    openingHours: HOURS,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.linkedin, SOCIAL.youtube],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "790",
    },
    department: UNITS.map((u) => ({
      "@type": "Dentist",
      name: `${SITE.shortName} — ${u.name}`,
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: u.building ? `${u.building}, ${u.address}` : u.address,
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url,
    provider: { "@id": `${SITE.url}/#organization` },
  };
}
