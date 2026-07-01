/** Gerado automaticamente pelo scraping-agent — não editar manualmente. */

export const IMAGENS = {
  logo: "/images/logo-branco.png",
  // heroPortrait: retrato do banner (moletom branco), fundo removido via scripts/process-hero-image.py
  hero: "/images/ianara-pinho-hero.png",
  heroPortrait: "/images/ianara-pinho-hero.png",
  heroBannerDesktop: "/images/hero-banner-desktop.webp",
  heroBannerMobile: "/images/hero-banner-mobile.webp",
  about: "/images/clinica-estrutura.jpg",
  unidades: {
    asaSul: "/images/unidade-asa-sul.webp",
    aguasClaras: "/images/unidade-aguas-claras.webp",
    asaNorte: "/images/unidade-asa-norte.webp",
  },
} as const;

export const IMAGEM_POR_SERVICO: Record<string, string> = {
  "dentista-asa-sul": "/images/unidade-asa-sul.webp",
  "implantes-dentarios-em-brasilia": "/images/servico-implantes-dentarios-em-brasilia.jpg",
  "dentista-aguas-claras": "/images/unidade-aguas-claras.webp",
  "endodontia": "/images/servico-endodontia.jpg",
  "alinhadores-esteticos": "/images/servico-alinhadores-esteticos.jpg",
  "protese-dentaria": "/images/servico-protese-dentaria.jpg",
  "dentista-asa-norte": "/images/unidade-asa-norte.webp",
  "cirurgia-ortognatica-brasilia": "/images/servico-cirurgia-ortognatica-brasilia.jpg",
  "extracao-de-siso-em-brasilia": "/images/servico-extracao-de-siso-em-brasilia.jpg",
  "dtm": "/images/servico-dtm.jpg",
  "prevencao-odontologica": "/images/servico-prevencao-odontologica.jpg",
  "cirurgia-bucomaxilofacial": "/images/servico-cirurgia-bucomaxilofacial.jpg",
  "consultorio": "/images/servico-consultorio.jpg",
  "odontopediatria": "/images/servico-odontopediatria.jpg",
  "dentistas": "/images/servico-dentistas.jpg",
  "ortodontia": "/images/servico-ortodontia.jpg",
  "sedacao": "/images/servico-sedacao.jpg",
  "gengivoplastia": "/images/servico-gengivoplastia.jpg",
  "clareamento-dental": "/images/servico-clareamento-dental.jpg",
  "bichectomia": "/images/servico-bichectomia.jpg",
  "harmonizacao-facial-em-brasilia": "/images/servico-harmonizacao-facial-em-brasilia.jpg",
  "odontologia-do-sono": "/images/servico-odontologia-do-sono.jpg",
  "historias-marcantes": "/images/servico-historias-marcantes.jpg",
  "estomatologia-em-brasilia": "/images/servico-estomatologia-em-brasilia.jpg",
  "emergencia-odontologica-brasilia": "/images/servico-emergencia-odontologica-brasilia.jpg",
  "periodontia": "/images/servico-periodontia.jpg",
  "odontologia-estetica": "/images/servico-odontologia-estetica.jpg",
};

// Compatibilidade com componentes do template (inglês)
export const IMAGES = {
  logo: IMAGENS.logo,
  hero: IMAGENS.heroPortrait,
  about: IMAGENS.about,
  team: IMAGENS.about,
} as const;
