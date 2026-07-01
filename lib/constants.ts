/** Gerado automaticamente pelo scraping-agent — não editar manualmente. */

export const SITE = {
  nome: "Ianara Pinho Odontologia",
  name: "Ianara Pinho Odontologia",
  nomeCurto: "Ianara",
  shortName: "Ianara",
  profissional: "Ianara Pinho Odontologia",
  tipo: "Clínica odontológica multi-unidade",
  cidade: "Brasília",
  desde: 2010,
  url: "https://ianarapinho.odo.br",
  descricaoCurta:
    "A Ianara Pinho Odontologia é uma rede de clínicas odontológicas com 3 unidades em Brasília (Águas Claras, Asa Sul e Asa Norte), oferecendo tratamentos completos como implantes, lentes de contato dental, ortodontia, cirurgia bucomaxilofacial e odontopediatria.",
  descricaoLonga:
    "A Ianara Pinho Odontologia é uma rede de clínicas odontológicas com 3 unidades em Brasília (Águas Claras, Asa Sul e Asa Norte), oferecendo tratamentos completos como implantes, lentes de contato dental, ortodontia, cirurgia bucomaxilofacial e odontopediatria. Com 16 anos de tradição, mais de 60 mil pacientes atendidos e estrutura all-in-one com radiologia integrada e centro cirúrgico, é uma das referências em odontologia no Distrito Federal.",
  description:
    "A Ianara Pinho Odontologia é uma rede de clínicas odontológicas com 3 unidades em Brasília (Águas Claras, Asa Sul e Asa Norte), oferecendo tratamentos completos como implantes, lentes de contato dental, ortodontia, cirurgia bucomaxilofacial e odontopediatria. Com 16 anos de tradição, mais de 60 mil pacientes atendidos e estrutura all-in-one com radiologia integrada e centro cirúrgico, é uma das referências em odontologia no Distrito Federal.",
} as const;

export const HERO = {
  rotulo: "Atendimento odontológico completo",
  titulo: "Mais perto de você!",
  subtitulo:
    "Implantes, lentes, ortodontia e todas as especialidades em Águas Claras, Asa Sul e Asa Norte — com a mesma estrutura e qualidade em cada unidade.",
  ctaPrimario: "Agendar consulta pelo WhatsApp",
  ctaSecundario: "Ver tratamentos",
  avisoDestaque: "Atendimento particular · 16 anos em Brasília · +60 mil pacientes",
  aboutRotulo: "Sobre Ianara",
} as const;

export const CONTATO = {
  whatsappNumero: "5561994177264",
  whatsappMensagem:
    "Olá! Vim pelo site da Ianara Pinho Odontologia e gostaria de mais informações.",
  telefoneExibicao: "(61) 3246-8837",
  email: "contato@ianarapinho.odo.br",
  endereco: {
    logradouro: "R. 7 Norte, 7 - Loja 21",
    bairro: "Águas Claras",
    cidade: "Brasília",
    uf: "DF",
    cep: "71908-180",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=R.%207%20Norte%2C%207%20-%20Loja%2021%2C%20%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20-DF&output=embed",
  mapsLink:
    "https://maps.google.com/?q=R.%207%20Norte%2C%207%20-%20Loja%2021%2C%20%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20-DF",
} as const;

export const whatsappLink = (mensagem?: string) => {
  if (CONTATO.whatsappNumero) {
    return `https://wa.me/${CONTATO.whatsappNumero}?text=${encodeURIComponent(
      mensagem ?? CONTATO.whatsappMensagem
    )}`;
  }
  return REDES.instagram || "";
};

export const REDES = {
  instagram: "https://www.instagram.com/ianara.odontologia/",
  facebook: "https://www.facebook.com/ianara.odontologia/",
} as const;

export const PROVA_SOCIAL = [
  { valor: 60, sufixo: "mil+", rotulo: "Pacientes atendidos" },
  { valor: 16, sufixo: "anos", rotulo: "Anos de experiência" },
  { valor: 3, sufixo: "", rotulo: "Unidades em Brasília" },
  { valor: 100, sufixo: "%", rotulo: "Atendimento particular" },
] as const;

export const NAV = [
  { label: "Início", href: "/" },
  { label: "Tratamentos", href: "/tratamentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;

// Compatibilidade com componentes do template (inglês)
const phoneDigits = CONTATO.telefoneExibicao.replace(/\D/g, "");

export const CONTACT = {
  whatsappNumber: "(61) 99417-7264",
  phone: CONTATO.telefoneExibicao,
  phoneRaw: phoneDigits.startsWith("55") ? phoneDigits : `55${phoneDigits}`,
  email: CONTATO.email,
} as const;

export const SOCIAL = {
  instagram: REDES.instagram,
  facebook: REDES.facebook,
  linkedin: "",
  youtube: "https://www.youtube.com/@ianarapinho/videos",
  youtubeEmbedId: "vTTs5XC5fXA",
} as const;

export const whatsappHref = whatsappLink;

export const HOURS =
  "Segunda a sexta, 8h às 22h · Sábados, 8h às 14h (horários podem variar por unidade)";

export const UNITS = [
  {
    slug: "aguas-claras",
    name: "Águas Claras",
    building: "",
    address: "R. 7 Norte, 7 - Loja 21 - Águas Claras, Brasília - DF, 71908-180",
    mapsQuery: "R. 7 Norte, 7 - Loja 21 - Águas Claras, Brasília - DF, 71908-180",
    googleReviews: 2034,
  },
  {
    slug: "asa-sul",
    name: "Asa Sul",
    building: "Centro Clínico Linea Vitta",
    address: "SGAS 616 BL B Loja 05 - Asa Sul, Brasília - DF, 70200-760",
    mapsQuery: "SGAS II SGAS 616 BL B Loja 05 - Asa Sul, Brasília - DF, 70200-760",
    googleReviews: 757,
  },
  {
    slug: "asa-norte",
    name: "Asa Norte",
    building: "Edifício Biosphere",
    address: "Setor SHLN Conj. I Bloco A, Loja 07 - Asa Norte, Brasília - DF, 70770-560",
    mapsQuery:
      "Edifício Biosphere - Setor SHLN Conj. I Bloco A, Loja 07 - Asa Norte, Brasília - DF, 70770-560",
    googleReviews: 295,
  },
] as const;

export const TOTAL_GOOGLE_REVIEWS = UNITS.reduce((sum, u) => sum + u.googleReviews, 0);

export const TIMELINE = [
  {
    year: 2010,
    title: "Primeira unidade em Brasília",
    detail:
      "Início da trajetória da Ianara Pinho Odontologia no Distrito Federal, com foco em atendimento humanizado e odontologia de qualidade.",
  },
  {
    year: 2014,
    title: "Expansão da estrutura clínica",
    detail:
      "Ampliação dos consultórios e investimento em tecnologia para oferecer diagnóstico e tratamento em um só lugar.",
  },
  {
    year: 2018,
    title: "Segunda unidade — Asa Sul",
    detail:
      "Abertura da unidade na Asa Sul, no Centro Clínico Linea Vitta, levando a mesma estrutura all-in-one para o Plano Piloto.",
  },
  {
    year: 2022,
    title: "Terceira unidade e rede consolidada",
    detail:
      "Inauguração da unidade Asa Norte e consolidação da rede com 3 endereços, radiologia integrada e centro cirúrgico próprio.",
  },
  {
    year: 2026,
    title: "Referência em odontologia no DF",
    detail:
      "Mais de 60 mil pacientes atendidos, 1.000m² de estrutura e nota 4,9 no Google — uma das redes odontológicas mais bem avaliadas de Brasília.",
  },
] as const;
