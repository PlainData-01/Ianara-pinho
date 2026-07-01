import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { AnalyticsBody, AnalyticsHead } from "@/components/Analytics";
import { SITE } from "@/lib/constants";
import { organizationSchema } from "@/lib/schema";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Ianara Pinho Odontologia — Clínica odontológica multi-unidade em Brasília",
    template: "%s — Ianara Pinho Odontologia",
  },
  description: SITE.description,
  keywords: [
    "dentista em Brasília",
    "implantes dentários Brasília",
    "clínica odontológica DF",
    "dentista Asa Sul",
    "dentista Águas Claras",
    "dentista Asa Norte",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title: "Ianara Pinho Odontologia — Rede odontológica premium em Brasília",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ianara Pinho Odontologia",
    description: SITE.description,
  },
  alternates: { canonical: SITE.url },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <head>
        <AnalyticsHead />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <AnalyticsBody />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
