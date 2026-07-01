// Dados de cada tratamento / página de serviço.
// Renderizados pela rota dinâmica app/tratamentos/[slug]/page.tsx

export type FAQItem = { q: string; a: string };

export type Treatment = {
  slug: string;
  name: string; // rótulo curto (nav, cards)
  category: TreatmentCategory;
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
  kicker: string; // contexto curto acima do título
  headline: string;
  intro: string;
  benefits: string[];
  sections: { title: string; body: string }[];
  faq: FAQItem[];
};

export type TreatmentCategory =
  | "Estética"
  | "Reabilitação"
  | "Cirurgia"
  | "Clínico"
  | "Unidades"
  | "Institucional";

export const CATEGORIES: TreatmentCategory[] = [
  "Estética",
  "Reabilitação",
  "Cirurgia",
  "Clínico",
  "Unidades",
  "Institucional",
];

const brand = "Ianara Pinho Odontologia";

export const TREATMENTS: Treatment[] = [
  {
    slug: "implantes-dentarios-em-brasilia",
    name: "Implantes dentários",
    category: "Reabilitação",
    featured: true,
    metaTitle: "Implante Dentário em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Implantes dentários em Brasília com estrutura all-in-one: do diagnóstico à prótese final no mesmo lugar. 3 unidades, equipe especializada em implantodontia.",
    kicker: "Reabilitação oral",
    headline: "Implantes dentários em Brasília, do diagnóstico à prótese final",
    intro:
      "Recupere dentes perdidos com segurança e volte a mastigar com conforto, estabilidade e estética. Na Ianara Pinho, todas as etapas do implante acontecem na mesma clínica — com radiologia integrada e centro cirúrgico próprio.",
    benefits: [
      "Estrutura completa: 3 unidades com mais de 17 consultórios",
      "Tudo em um só lugar — do diagnóstico ao implante e à prótese",
      "Equipe com ampla experiência em implantodontia",
      "Tecnologia avançada para mais previsibilidade em cada etapa",
    ],
    sections: [
      {
        title: "Por que escolher a Ianara Pinho para seus implantes",
        body: "Estrutura completa, equipe especializada e tecnologia para oferecer mais segurança, conforto e previsibilidade em todas as etapas do tratamento. Do planejamento digital à instalação da prótese, você resolve tudo na mesma clínica, com acompanhamento individual.",
      },
      {
        title: "Nossos números em implantes",
        body: "3 unidades em Águas Claras, Asa Sul e Asa Norte, 16 anos de tradição, mais de 60 mil pacientes atendidos e 1.000m² de estrutura moderna. Uma clínica de implante dentário em Brasília que reúne estrutura, experiência e atendimento.",
      },
    ],
    faq: [
      {
        q: "Quanto tempo dura o tratamento com implante?",
        a: "Varia conforme cada caso. Após a instalação do implante, o período de integração ao osso costuma levar de 3 a 6 meses antes da prótese final. O planejamento é definido na avaliação.",
      },
      {
        q: "O procedimento é doloroso?",
        a: "O implante é feito com anestesia local e, quando indicado, com sedação consciente para maior conforto. A maioria dos pacientes relata desconforto leve no pós-operatório.",
      },
      {
        q: "Posso fazer todas as etapas na mesma clínica?",
        a: "Sim. Do diagnóstico por imagem à cirurgia e à prótese final, tudo acontece na estrutura all-in-one da Ianara Pinho.",
      },
      {
        q: "Existe opção de parcelamento?",
        a: "Sim. Na avaliação apresentamos o plano de tratamento e as condições de pagamento adequadas ao seu caso.",
      },
    ],
  },
  {
    slug: "lente-de-contato-dental",
    name: "Lente de contato dental",
    category: "Estética",
    featured: true,
    metaTitle: "Lente de Contato Dental em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Lentes de contato dental em Brasília para corrigir cor, formato e imperfeições e conquistar um sorriso harmônico. Planejamento individual na Ianara Pinho.",
    kicker: "Estética dental",
    headline: "Lentes de contato dental para um sorriso harmônico",
    intro:
      "Corrija cor, formato e pequenas imperfeições dos dentes para conquistar um sorriso mais harmônico. As lentes são planejadas individualmente, respeitando a proporção do seu rosto.",
    benefits: [
      "Planejamento estético individualizado",
      "Correção de cor, formato e pequenas imperfeições",
      "Procedimento minimamente invasivo",
      "Resultado natural e harmônico",
    ],
    sections: [
      {
        title: "Como funciona o planejamento",
        body: "A consulta é realizada com análise completa, exames quando necessário e identificação precisa das necessidades do seu caso. A partir daí desenhamos o sorriso e definimos o número de lentes e o material.",
      },
    ],
    faq: [
      {
        q: "As lentes danificam os dentes?",
        a: "Não. As lentes de contato dental são finas e exigem preparo mínimo do dente, preservando ao máximo a estrutura natural.",
      },
      {
        q: "Quanto tempo duram as lentes?",
        a: "Com cuidados adequados e acompanhamento periódico, as lentes têm alta durabilidade. Hábitos como bruxismo devem ser avaliados antes.",
      },
      {
        q: "Qualquer pessoa pode fazer?",
        a: "É preciso uma avaliação prévia da saúde bucal. Cáries e problemas gengivais são tratados antes da instalação das lentes.",
      },
    ],
  },
  {
    slug: "clareamento-dental",
    name: "Clareamento dental",
    category: "Estética",
    metaTitle: "Clareamento Dental em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Clareamento dental em Brasília com acompanhamento profissional para um sorriso mais branco com segurança. Avaliação individual na Ianara Pinho Odontologia.",
    kicker: "Estética dental",
    headline: "Clareamento dental com acompanhamento profissional",
    intro:
      "Devolva o brilho ao seu sorriso com segurança. O clareamento é feito com avaliação prévia e acompanhamento, respeitando a sensibilidade dos seus dentes.",
    benefits: [
      "Avaliação prévia da saúde bucal",
      "Clareamento de consultório e/ou supervisionado",
      "Controle da sensibilidade",
      "Resultado uniforme e natural",
    ],
    sections: [
      {
        title: "Segurança em primeiro lugar",
        body: "O clareamento é indicado após a análise das condições dos dentes e gengivas. Isso garante um resultado mais uniforme e reduz o risco de sensibilidade.",
      },
    ],
    faq: [
      {
        q: "O clareamento causa sensibilidade?",
        a: "Pode haver sensibilidade temporária. O protocolo é ajustado ao seu caso para minimizar o desconforto.",
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "Depende de hábitos como consumo de café, chá e cigarro. Manutenções periódicas prolongam o resultado.",
      },
    ],
  },
  {
    slug: "harmonizacao-facial-em-brasilia",
    name: "Harmonização facial",
    category: "Estética",
    metaTitle: "Harmonização Facial em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Harmonização orofacial em Brasília com foco em equilíbrio e naturalidade. Procedimentos planejados individualmente na Ianara Pinho Odontologia.",
    kicker: "Estética orofacial",
    headline: "Harmonização orofacial com equilíbrio e naturalidade",
    intro:
      "Procedimentos que valorizam suas características, com foco em proporção e resultado natural. O planejamento respeita a expressão e a individualidade do rosto.",
    benefits: [
      "Planejamento individual e natural",
      "Profissionais habilitados",
      "Foco em proporção e equilíbrio facial",
      "Integração com o tratamento do sorriso",
    ],
    sections: [
      {
        title: "Estética que acompanha o sorriso",
        body: "A harmonização orofacial complementa tratamentos como lentes e clareamento, criando um resultado coerente entre dentes, lábios e face.",
      },
    ],
    faq: [
      {
        q: "Os resultados são naturais?",
        a: "Sim. O objetivo é valorizar as características do paciente, evitando exageros.",
      },
      {
        q: "É seguro?",
        a: "Os procedimentos são realizados por profissionais habilitados, após avaliação individual.",
      },
    ],
  },
  {
    slug: "gengivoplastia",
    name: "Gengivoplastia",
    category: "Estética",
    metaTitle: "Gengivoplastia em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Gengivoplastia em Brasília para corrigir o contorno gengival e o sorriso gengival. Procedimento estético planejado na Ianara Pinho Odontologia.",
    kicker: "Estética gengival",
    headline: "Gengivoplastia para um contorno de sorriso equilibrado",
    intro:
      "Corrija o excesso ou a desarmonia da gengiva e revele a proporção ideal entre dente e gengiva, para um sorriso mais equilibrado.",
    benefits: [
      "Correção do sorriso gengival",
      "Contorno mais harmônico",
      "Procedimento preciso",
      "Recuperação geralmente rápida",
    ],
    sections: [
      {
        title: "Quando é indicada",
        body: "A gengivoplastia é indicada para pacientes com excesso de gengiva aparente ou contorno irregular, muitas vezes associada a tratamentos estéticos.",
      },
    ],
    faq: [
      {
        q: "A recuperação é demorada?",
        a: "Costuma ser rápida. Orientações de cuidado são passadas após o procedimento.",
      },
    ],
  },
  {
    slug: "bichectomia",
    name: "Bichectomia",
    category: "Estética",
    metaTitle: "Bichectomia em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Bichectomia em Brasília realizada com segurança em centro cirúrgico próprio. Avaliação individual na Ianara Pinho Odontologia.",
    kicker: "Estética facial",
    headline: "Bichectomia com segurança e estrutura cirúrgica própria",
    intro:
      "Procedimento para afinar o terço inferior do rosto, realizado após avaliação criteriosa e com toda a estrutura da clínica.",
    benefits: [
      "Avaliação individual do caso",
      "Centro cirúrgico próprio",
      "Acompanhamento no pós-operatório",
      "Resultado natural",
    ],
    sections: [
      {
        title: "Indicação responsável",
        body: "A bichectomia é indicada apenas para casos apropriados, após análise da estrutura facial e das expectativas do paciente.",
      },
    ],
    faq: [
      {
        q: "Todo mundo pode fazer?",
        a: "Não. A indicação depende da avaliação facial e das características de cada paciente.",
      },
    ],
  },
  {
    slug: "odontologia-estetica",
    name: "Odontologia estética",
    category: "Estética",
    metaTitle: "Odontologia Estética em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Odontologia estética em Brasília: lentes, clareamento, harmonização e reabilitação com foco em beleza e função. Ianara Pinho Odontologia.",
    kicker: "Estética dental",
    headline: "Odontologia estética que une beleza e função",
    intro:
      "Um sorriso bonito começa com saúde. Reunimos lentes, clareamento, harmonização e reabilitação em um plano estético que respeita a função e a naturalidade.",
    benefits: [
      "Plano estético integrado",
      "Foco em estética e funcionalidade",
      "Equipe especializada em diversas áreas",
      "Acompanhamento em todas as etapas",
    ],
    sections: [
      {
        title: "Estética com base clínica",
        body: "Antes de qualquer procedimento estético, avaliamos a saúde bucal completa. Assim o resultado é bonito e duradouro.",
      },
    ],
    faq: [
      {
        q: "Por onde começar?",
        a: "Pela avaliação. A partir dela desenhamos o plano estético ideal para o seu caso.",
      },
    ],
  },
  {
    slug: "protese-dentaria",
    name: "Prótese dentária",
    category: "Reabilitação",
    metaTitle: "Prótese Dentária em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Próteses dentárias em Brasília: fixas, removíveis e sobre implante, com estética e função. Planejamento completo na Ianara Pinho Odontologia.",
    kicker: "Reabilitação oral",
    headline: "Próteses que devolvem função e estética ao sorriso",
    intro:
      "Reabilite dentes perdidos ou desgastados com próteses fixas, removíveis ou sobre implante, planejadas para mastigar bem e sorrir com confiança.",
    benefits: [
      "Próteses fixas, removíveis e sobre implante",
      "Do diagnóstico à prótese final no mesmo lugar",
      "Estética e função integradas",
      "Ajuste e acompanhamento",
    ],
    sections: [
      {
        title: "Reabilitação completa",
        body: "A prótese é a etapa final da reabilitação. Nossa estrutura permite planejar e concluir todas as fases na mesma clínica.",
      },
    ],
    faq: [
      {
        q: "Qual tipo de prótese é melhor?",
        a: "Depende do caso. Fixas, removíveis e sobre implante têm indicações diferentes, definidas na avaliação.",
      },
    ],
  },
  {
    slug: "alinhadores-esteticos",
    name: "Alinhadores estéticos",
    category: "Reabilitação",
    featured: true,
    metaTitle: "Alinhadores Estéticos em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Alinhadores estéticos (invisíveis) em Brasília para corrigir o sorriso com discrição e conforto. Planejamento digital na Ianara Pinho Odontologia.",
    kicker: "Ortodontia",
    headline: "Alinhadores estéticos: corrija o sorriso com discrição",
    intro:
      "Alinhadores transparentes e removíveis que corrigem a posição dos dentes com conforto e sem os fios do aparelho tradicional. Planejamento digital do início ao fim.",
    benefits: [
      "Praticamente invisíveis",
      "Removíveis para comer e higienizar",
      "Planejamento digital do resultado",
      "Mais conforto no dia a dia",
    ],
    sections: [
      {
        title: "Tecnologia a favor do seu sorriso",
        body: "Com o planejamento digital, é possível visualizar as etapas do tratamento antes de começar, trazendo mais previsibilidade ao resultado.",
      },
    ],
    faq: [
      {
        q: "Os alinhadores servem para qualquer caso?",
        a: "Atendem a diversos casos de desalinhamento. A indicação é definida na avaliação ortodôntica.",
      },
      {
        q: "Preciso usar o dia todo?",
        a: "Sim, o uso recomendado costuma ser de cerca de 22 horas por dia, retirando apenas para comer e higienizar.",
      },
    ],
  },
  {
    slug: "ortodontia",
    name: "Ortodontia",
    category: "Reabilitação",
    metaTitle: "Ortodontia em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Ortodontia em Brasília: aparelho fixo e alinhadores para alinhar os dentes e corrigir a mordida. Acompanhamento especializado na Ianara Pinho.",
    kicker: "Ortodontia",
    headline: "Ortodontia para alinhar os dentes e corrigir a mordida",
    intro:
      "Do aparelho fixo aos alinhadores estéticos, planejamos o tratamento ortodôntico ideal para alinhar a dentição, corrigir a mordida e harmonizar o sorriso.",
    benefits: [
      "Aparelho fixo e alinhadores",
      "Correção de mordida e alinhamento",
      "Acompanhamento em todas as fases",
      "Atendimento para adultos e crianças",
    ],
    sections: [
      {
        title: "Como funciona o aparelho fixo",
        body: "O aparelho ortodôntico fixo é composto por tubos, fios e braquetes presos aos dentes. O objetivo é alinhar a dentição, corrigir a mordida e proporcionar um sorriso mais harmônico.",
      },
    ],
    faq: [
      {
        q: "Como funciona o aparelho ortodôntico fixo?",
        a: "É composto por tubos, fios e braquetes presos aos dentes, que alinham a dentição e corrigem a mordida ao longo do tratamento.",
      },
      {
        q: "O que é o mantenedor de espaço?",
        a: "É um aparelho usado quando um dente de leite cai antes do tempo. Ele mantém o espaço aberto para que o dente permanente nasça na posição correta, evitando desalinhamentos.",
      },
      {
        q: "É possível parcelar o tratamento?",
        a: "Sim. As condições são apresentadas na avaliação, de acordo com o plano de tratamento.",
      },
    ],
  },
  {
    slug: "endodontia",
    name: "Endodontia",
    category: "Clínico",
    metaTitle: "Endodontia em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Endodontia (tratamento de canal) em Brasília com tecnologia e conforto. Alívio da dor e preservação do dente na Ianara Pinho Odontologia.",
    kicker: "Tratamento de canal",
    headline: "Endodontia para aliviar a dor e preservar o dente",
    intro:
      "O tratamento de canal remove a infecção interna do dente, alivia a dor e preserva a estrutura natural, evitando a extração sempre que possível.",
    benefits: [
      "Alívio da dor",
      "Preservação do dente natural",
      "Tecnologia para mais precisão",
      "Atendimento de urgência",
    ],
    sections: [
      {
        title: "Salvar o dente sempre que possível",
        body: "Com diagnóstico preciso e tecnologia adequada, o tratamento endodôntico permite manter o dente natural em função por muitos anos.",
      },
    ],
    faq: [
      {
        q: "Tratamento de canal dói?",
        a: "É realizado com anestesia e costuma ser confortável. O objetivo é justamente eliminar a dor causada pela infecção.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Depende do caso. Muitos tratamentos são concluídos em poucas sessões.",
      },
    ],
  },
  {
    slug: "periodontia",
    name: "Periodontia",
    category: "Clínico",
    metaTitle: "Periodontista em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Periodontia em Brasília: tratamento de gengiva, gengivite e periodontite. Saúde do sorriso começa pela gengiva. Ianara Pinho Odontologia.",
    kicker: "Saúde da gengiva",
    headline: "Periodontia: a saúde do sorriso começa na gengiva",
    intro:
      "Tratamento e prevenção de doenças da gengiva, como gengivite e periodontite, essenciais para a sustentação dos dentes e o sucesso de outros tratamentos.",
    benefits: [
      "Tratamento de gengivite e periodontite",
      "Base saudável para implantes e próteses",
      "Prevenção da perda óssea",
      "Acompanhamento periódico",
    ],
    sections: [
      {
        title: "Fundamento de qualquer tratamento",
        body: "Gengivas saudáveis são a base para implantes, próteses e estética. Por isso a periodontia é parte central do cuidado.",
      },
    ],
    faq: [
      {
        q: "Sangramento na gengiva é normal?",
        a: "Não. Pode ser sinal de gengivite e deve ser avaliado por um profissional.",
      },
    ],
  },
  {
    slug: "prevencao-odontologica",
    name: "Prevenção odontológica",
    category: "Clínico",
    metaTitle: "Prevenção Odontológica em Brasília — Ianara Pinho Odontologia",
    metaDescription:
      "Prevenção odontológica em Brasília: consultas periódicas, limpeza e orientação para manter a saúde bucal. Ianara Pinho Odontologia.",
    kicker: "Saúde bucal",
    headline: "Prevenção: o cuidado que evita tratamentos maiores",
    intro:
      "Consultas periódicas, limpeza profissional e orientação individual mantêm sua saúde bucal em dia e evitam problemas mais complexos no futuro.",
    benefits: [
      "Consultas e limpezas periódicas",
      "Diagnóstico precoce",
      "Orientação de higiene individual",
      "Menos tratamentos complexos no futuro",
    ],
    sections: [
      {
        title: "Prevenir custa menos",
        body: "O acompanhamento regular permite identificar cáries e problemas gengivais cedo, quando o tratamento é mais simples.",
      },
    ],
    faq: [
      {
        q: "De quanto em quanto tempo devo ir ao dentista?",
        a: "Em geral, a cada seis meses. O intervalo ideal é definido conforme o seu caso.",
      },
    ],
  },
  {
    slug: "odontopediatria",
    name: "Odontopediatria",
    category: "Clínico",
    metaTitle: "Odontopediatria em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Odontopediatria em Brasília: atendimento acolhedor para crianças, com foco em prevenção e boa relação com o dentista. Ianara Pinho Odontologia.",
    kicker: "Odontologia infantil",
    headline: "Odontopediatria: cuidado acolhedor para as crianças",
    intro:
      "Atendimento voltado para bebês, crianças e adolescentes, com foco em prevenção e em construir uma relação positiva com o dentista desde cedo.",
    benefits: [
      "Ambiente acolhedor para crianças",
      "Foco em prevenção",
      "Orientação para pais e responsáveis",
      "Acompanhamento do desenvolvimento bucal",
    ],
    sections: [
      {
        title: "Uma boa relação desde cedo",
        body: "Quando a criança tem experiências positivas no consultório, cresce cuidando melhor da saúde bucal ao longo da vida.",
      },
    ],
    faq: [
      {
        q: "Com que idade levar a criança ao dentista?",
        a: "Recomenda-se a primeira visita por volta do primeiro ano de vida ou com o nascimento dos primeiros dentes.",
      },
    ],
  },
  {
    slug: "estomatologia-em-brasilia",
    name: "Estomatologia",
    category: "Clínico",
    metaTitle: "Estomatologia em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Estomatologia em Brasília: diagnóstico de lesões e alterações da boca. Avaliação especializada na Ianara Pinho Odontologia.",
    kicker: "Diagnóstico bucal",
    headline: "Estomatologia: diagnóstico das lesões da boca",
    intro:
      "Especialidade dedicada ao diagnóstico e acompanhamento de lesões e alterações da mucosa bucal, fundamental para a saúde e a detecção precoce.",
    benefits: [
      "Diagnóstico de lesões bucais",
      "Detecção precoce",
      "Acompanhamento especializado",
      "Integração com outras especialidades",
    ],
    sections: [
      {
        title: "Atenção aos sinais da boca",
        body: "Manchas, feridas que não cicatrizam e alterações na mucosa devem ser avaliadas. O diagnóstico precoce faz diferença.",
      },
    ],
    faq: [
      {
        q: "Quando procurar um estomatologista?",
        a: "Sempre que houver feridas persistentes, manchas ou alterações na boca que não cicatrizam em duas semanas.",
      },
    ],
  },
  {
    slug: "dtm",
    name: "Tratamento de DTM",
    category: "Clínico",
    metaTitle: "Tratamento para DTM em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Tratamento para DTM (disfunção temporomandibular) em Brasília: alívio da dor facial, do bruxismo e dos ruídos na mandíbula. Ianara Pinho Odontologia.",
    kicker: "Disfunção temporomandibular",
    headline: "Tratamento para DTM: alívio da dor na mandíbula",
    intro:
      "A DTM afeta a articulação temporomandibular e pode causar dor facial, dificuldade ao mastigar e ruídos na mandíbula. O tratamento devolve conforto e função.",
    benefits: [
      "Alívio de dores faciais e de cabeça",
      "Controle do bruxismo",
      "Avaliação da mordida",
      "Abordagem individual",
    ],
    sections: [
      {
        title: "O que é DTM e quais os sintomas",
        body: "A DTM é uma condição que afeta a articulação temporomandibular, causando dor facial, dificuldade ao mastigar e ruídos na mandíbula. Os sintomas incluem dor na mandíbula, dor de ouvido e dificuldade ao abrir ou fechar a boca.",
      },
      {
        title: "Principais causas",
        body: "As principais causas incluem estresse, bruxismo (ranger dos dentes), má oclusão, lesões na mandíbula e artrite. Fatores psicológicos e genéticos também podem contribuir.",
      },
    ],
    faq: [
      {
        q: "O que é DTM e quais são seus sintomas?",
        a: "A DTM é uma condição que afeta a articulação temporomandibular, causando dor facial, dificuldade ao mastigar e ruídos na mandíbula. Os sintomas incluem dor na mandíbula, dor de ouvido e dificuldade ao abrir ou fechar a boca.",
      },
      {
        q: "Quais são as principais causas da DTM?",
        a: "As principais causas incluem estresse, bruxismo, má oclusão, lesões na mandíbula e artrite. Fatores psicológicos e genéticos também podem contribuir.",
      },
    ],
  },
  {
    slug: "odontologia-do-sono",
    name: "Odontologia do sono",
    category: "Clínico",
    metaTitle: "Odontologia do Sono em Brasília DF — Ianara Pinho Odontologia",
    metaDescription:
      "Odontologia do sono em Brasília: tratamento do ronco e da apneia com aparelhos intraorais. Avaliação na Ianara Pinho Odontologia.",
    kicker: "Ronco e apneia",
    headline: "Odontologia do sono: contra o ronco e a apneia",
    intro:
      "Tratamento do ronco e da apneia obstrutiva do sono com aparelhos intraorais, melhorando a qualidade do sono e a saúde geral.",
    benefits: [
      "Aparelhos intraorais sob medida",
      "Melhora da qualidade do sono",
      "Redução do ronco",
      "Trabalho integrado com a medicina",
    ],
    sections: [
      {
        title: "Dormir bem é saúde",
        body: "A apneia do sono impacta o coração, o humor e a disposição. A odontologia do sono é um recurso importante em casos selecionados.",
      },
    ],
    faq: [
      {
        q: "O aparelho intraoral substitui o CPAP?",
        a: "Em alguns casos, sim. A indicação depende do diagnóstico do sono e da avaliação conjunta com o médico.",
      },
    ],
  },
  {
    slug: "cirurgia-bucomaxilofacial",
    name: "Cirurgia bucomaxilofacial",
    category: "Cirurgia",
    metaTitle: "Cirurgia Bucomaxilofacial em Brasília — Ianara Pinho Odontologia",
    metaDescription:
      "Cirurgia bucomaxilofacial em Brasília em centro cirúrgico próprio: extrações complexas, cistos e correções. Ianara Pinho Odontologia.",
    kicker: "Cirurgia bucomaxilo",
    headline: "Cirurgia bucomaxilofacial com estrutura própria",
    intro:
      "Procedimentos cirúrgicos da boca, face e mandíbula realizados em centro cirúrgico próprio, com segurança e acompanhamento em todas as etapas.",
    benefits: [
      "Centro cirúrgico próprio",
      "Equipe cirúrgica especializada",
      "Sedação consciente quando indicada",
      "Acompanhamento no pós-operatório",
    ],
    sections: [
      {
        title: "Segurança de um centro cirúrgico",
        body: "Ter estrutura cirúrgica própria significa mais controle, segurança e conforto para procedimentos mais complexos.",
      },
    ],
    faq: [
      {
        q: "As cirurgias exigem internação?",
        a: "A maioria dos procedimentos é ambulatorial. Os detalhes são definidos na avaliação de cada caso.",
      },
    ],
  },
  {
    slug: "cirurgia-ortognatica-brasilia",
    name: "Cirurgia ortognática",
    category: "Cirurgia",
    metaTitle: "Cirurgia Ortognática em Brasília — Ianara Pinho Odontologia",
    metaDescription:
      "Cirurgia ortognática em Brasília para corrigir a posição dos maxilares, a mordida e a estética facial. Planejamento integrado na Ianara Pinho.",
    kicker: "Correção dos maxilares",
    headline: "Cirurgia ortognática: função e estética facial",
    intro:
      "Corrige a posição dos maxilares, melhora a mordida, a respiração e a harmonia do rosto, com planejamento integrado entre ortodontia e cirurgia.",
    benefits: [
      "Correção de mordida e maxilares",
      "Melhora funcional e estética",
      "Planejamento ortodôntico-cirúrgico",
      "Estrutura cirúrgica completa",
    ],
    sections: [
      {
        title: "Planejamento integrado",
        body: "O sucesso da cirurgia ortognática depende de um planejamento conjunto entre ortodontista e cirurgião, do início ao fim.",
      },
    ],
    faq: [
      {
        q: "A cirurgia ortognática é só estética?",
        a: "Não. Ela corrige questões funcionais como mordida e respiração, com benefício estético associado.",
      },
    ],
  },
  {
    slug: "extracao-de-siso-em-brasilia",
    name: "Extração de siso",
    category: "Cirurgia",
    metaTitle: "Extração de Siso em Brasília — Ianara Pinho Odontologia",
    metaDescription:
      "Extração de siso em Brasília com segurança e conforto, inclusive sedação quando indicada. Centro cirúrgico próprio na Ianara Pinho.",
    kicker: "Cirurgia oral",
    headline: "Extração de siso com conforto e segurança",
    intro:
      "Remoção dos terceiros molares (sisos) quando há dor, impactação ou risco à saúde bucal, com estrutura cirúrgica e opção de sedação.",
    benefits: [
      "Avaliação por imagem",
      "Sedação consciente quando indicada",
      "Centro cirúrgico próprio",
      "Orientação de pós-operatório",
    ],
    sections: [
      {
        title: "Quando extrair o siso",
        body: "A indicação depende da posição do dente, do espaço disponível e do risco de complicações, avaliados com exames de imagem.",
      },
    ],
    faq: [
      {
        q: "Preciso tirar todos os sisos?",
        a: "Nem sempre. A necessidade é avaliada caso a caso, com base em exames e sintomas.",
      },
      {
        q: "Posso fazer com sedação?",
        a: "Sim. A sedação consciente está disponível para maior conforto durante o procedimento.",
      },
    ],
  },
  {
    slug: "sedacao",
    name: "Sedação consciente",
    category: "Cirurgia",
    metaTitle: "Dentista com Sedação Consciente — Ianara Pinho Odontologia",
    metaDescription:
      "Sedação consciente em Brasília para tratamentos odontológicos com mais conforto e sem medo. Estrutura completa na Ianara Pinho Odontologia.",
    kicker: "Conforto no tratamento",
    headline: "Sedação consciente: tratamento sem medo",
    intro:
      "Para quem sente ansiedade ou vai passar por procedimentos mais longos, a sedação consciente traz relaxamento e conforto, com segurança.",
    benefits: [
      "Ideal para ansiedade e medo do dentista",
      "Mais conforto em procedimentos longos",
      "Acompanhamento durante o atendimento",
      "Estrutura completa e segura",
    ],
    sections: [
      {
        title: "Para quem é indicada",
        body: "A sedação consciente é indicada para pacientes ansiosos, procedimentos cirúrgicos e casos que exigem mais tempo de cadeira.",
      },
    ],
    faq: [
      {
        q: "Vou ficar inconsciente?",
        a: "Não. Na sedação consciente você permanece relaxado e responsivo, com muito mais conforto.",
      },
    ],
  },
  {
    slug: "emergencia-odontologica-brasilia",
    name: "Emergência odontológica",
    category: "Cirurgia",
    metaTitle: "Emergência Odontológica em Brasília/DF — Ianara Pinho",
    metaDescription:
      "Emergência odontológica em Brasília: atendimento para dor de dente, trauma e urgências. Fale agora com a equipe da Ianara Pinho Odontologia.",
    kicker: "Urgência",
    headline: "Emergência odontológica em Brasília",
    intro:
      "Dor intensa, dente quebrado ou trauma não podem esperar. Fale com nossa equipe pelo WhatsApp e receba orientação e atendimento o quanto antes.",
    benefits: [
      "Atendimento para dor e trauma",
      "Orientação imediata pelo WhatsApp",
      "3 unidades em Brasília",
      "Estrutura completa",
    ],
    sections: [
      {
        title: "O que fazer em uma emergência",
        body: "Mantenha a calma, controle o sangramento e entre em contato com a clínica. Em casos de dente avulsionado, guarde o dente em leite ou soro e procure atendimento imediatamente.",
      },
    ],
    faq: [
      {
        q: "Vocês atendem urgência no mesmo dia?",
        a: "Sempre que possível. Entre em contato pelo WhatsApp para orientação e encaixe conforme a disponibilidade da unidade.",
      },
    ],
  },
  {
    slug: "dentista-asa-sul",
    name: "Dentista na Asa Sul",
    category: "Unidades",
    featured: true,
    metaTitle: "Dentista na Asa Sul em Brasília — Ianara Pinho",
    metaDescription:
      "Dentista na Asa Sul em Brasília: atendimento completo no Centro Clínico Linea Vitta, SGAS 616. +757 avaliações. Ianara Pinho Odontologia.",
    kicker: "Unidade Asa Sul",
    headline: "Dentista na Asa Sul: Clínica Odontológica Ianara Pinho",
    intro:
      "Atendimento odontológico completo na Asa Sul, em Brasília DF, com estrutura moderna, equipe especializada e tratamentos em implantes, próteses, estética dental, ortodontia, alinhadores e muito mais. Mais de 757 avaliações positivas reforçam a confiança dos pacientes que procuram um dentista na Asa Sul.",
    benefits: [
      "+757 avaliações positivas",
      "Centro Clínico Linea Vitta, SGAS 616",
      "Atendimento completo em um só lugar",
      "Equipe especializada",
    ],
    sections: [
      {
        title: "Onde fica a clínica na Asa Sul",
        body: "A unidade Asa Sul da Ianara Pinho Odontologia está localizada no Centro Clínico Linea Vitta, na SGAS 616, uma região tradicional de Brasília para serviços de saúde. A localização facilita o acesso de pacientes do Plano Piloto e regiões próximas que buscam um dentista na Asa Sul com estrutura completa.",
      },
      {
        title: "Tratamentos na Asa Sul",
        body: "Implantes, estética dental, ortodontia, cirurgia e cuidados completos para tratar dor, recuperar dentes, melhorar o sorriso e cuidar da saúde bucal em um só lugar.",
      },
    ],
    faq: [
      {
        q: "Onde encontrar dentista bem avaliado na Asa Sul?",
        a: "A Clínica Ianara Pinho Odontologia atende na Asa Sul, em Brasília, com estrutura moderna, equipe especializada e tratamentos em diferentes áreas. É indicada para quem busca atendimento completo, planejamento individualizado e acompanhamento em todas as etapas.",
      },
      {
        q: "A clínica fica no Centro Clínico Linea Vitta?",
        a: "Sim. A unidade Asa Sul da Ianara Pinho fica no Centro Clínico Linea Vitta, na SGAS 616.",
      },
    ],
  },
  {
    slug: "dentista-aguas-claras",
    name: "Dentista em Águas Claras",
    category: "Unidades",
    metaTitle: "Dentista em Águas Claras Brasília — Ianara Pinho",
    metaDescription:
      "Dentista em Águas Claras, Brasília: estrutura moderna e tratamentos completos em uma das unidades da Ianara Pinho Odontologia.",
    kicker: "Unidade Águas Claras",
    headline: "Dentista em Águas Claras: estrutura completa e moderna",
    intro:
      "Atendimento odontológico completo em Águas Claras, com equipe especializada e todos os tratamentos em um só lugar — do diagnóstico à reabilitação.",
    benefits: [
      "Localização acessível em Águas Claras",
      "Estrutura moderna e tecnologia",
      "Todas as especialidades",
      "Equipe especializada",
    ],
    sections: [
      {
        title: "Cuidado completo perto de você",
        body: "A unidade de Águas Claras faz parte da rede Ianara Pinho, com a mesma estrutura all-in-one: radiologia, especialidades e acompanhamento individual.",
      },
    ],
    faq: [
      {
        q: "Quais tratamentos são oferecidos em Águas Claras?",
        a: "Implantes, ortodontia, estética, cirurgia, endodontia, periodontia e mais — todos em uma estrutura completa.",
      },
    ],
  },
  {
    slug: "dentista-asa-norte",
    name: "Dentista na Asa Norte",
    category: "Unidades",
    metaTitle: "Dentista na Asa Norte em Brasília — Ianara Pinho",
    metaDescription:
      "Dentista na Asa Norte, Brasília: atendimento completo e equipe especializada em uma das unidades da Ianara Pinho Odontologia.",
    kicker: "Unidade Asa Norte",
    headline: "Dentista na Asa Norte: atendimento completo",
    intro:
      "A unidade Asa Norte oferece a mesma estrutura de excelência da rede Ianara Pinho, com todas as especialidades e acompanhamento personalizado.",
    benefits: [
      "Estrutura completa na Asa Norte",
      "Todas as especialidades",
      "Equipe especializada",
      "Atendimento humanizado",
    ],
    sections: [
      {
        title: "A rede perto de você",
        body: "Com 3 unidades em Brasília, a Ianara Pinho leva estrutura all-in-one e atendimento humanizado para diferentes regiões da cidade.",
      },
    ],
    faq: [
      {
        q: "A unidade Asa Norte atende todas as especialidades?",
        a: "Sim. A rede oferece atendimento completo em todas as unidades, com a mesma estrutura de excelência.",
      },
    ],
  },
  {
    slug: "consultorio",
    name: "Estrutura all-in-one",
    category: "Institucional",
    metaTitle: "Consultório All In One — Clínica Odontológica Ianara Pinho",
    metaDescription:
      "Conheça a estrutura all-in-one da Ianara Pinho: 1.000m², radiologia integrada, centro cirúrgico e todas as especialidades em 3 unidades em Brasília.",
    kicker: "Estrutura",
    headline: "Consultório all-in-one: tudo em um só lugar",
    intro:
      "1.000m² de estrutura moderna com radiologia integrada, centro cirúrgico e todas as especialidades. Do diagnóstico ao tratamento final, você resolve tudo na mesma clínica.",
    benefits: [
      "1.000m² de estrutura moderna",
      "Radiologia integrada",
      "Centro cirúrgico próprio",
      "Mais de 17 consultórios",
    ],
    sections: [
      {
        title: "Recepção ampla",
        body: "Ambiente confortável e organizado para receber pacientes com mais tranquilidade desde a chegada à clínica.",
      },
      {
        title: "Tudo em um só lugar",
        body: "Do diagnóstico ao implante e à prótese final, você resolve todas as etapas na mesma clínica, com tecnologia avançada e equipe especializada.",
      },
    ],
    faq: [
      {
        q: "O que significa estrutura all-in-one?",
        a: "Significa reunir radiologia, centro cirúrgico e todas as especialidades no mesmo espaço, evitando encaminhamentos e tornando o tratamento mais integrado.",
      },
    ],
  },
  {
    slug: "dentistas",
    name: "Nossos dentistas",
    category: "Institucional",
    metaTitle: "Nossos Dentistas — Clínica Odontológica Ianara Pinho",
    metaDescription:
      "Conheça a equipe de dentistas da Ianara Pinho Odontologia: especialistas em implantes, ortodontia, cirurgia, estética e mais, em Brasília.",
    kicker: "Equipe",
    headline: "Nossos dentistas: especialistas comprometidos com você",
    intro:
      "Uma equipe multidisciplinar com ampla experiência, comprometida com excelência e resultados reais. Cada especialidade conta com profissionais dedicados a cuidar do seu caso.",
    benefits: [
      "Equipe multidisciplinar",
      "Especialistas em cada área",
      "Atendimento humanizado",
      "Acompanhamento individual",
    ],
    sections: [
      {
        title: "Excelência em cada especialidade",
        body: "Da implantodontia à ortodontia, da cirurgia à odontopediatria, nossa equipe reúne experiência e formação para oferecer o melhor cuidado.",
      },
    ],
    faq: [
      {
        q: "Posso escolher o profissional?",
        a: "O encaminhamento é feito conforme a especialidade necessária. Fale com nossa equipe para mais informações.",
      },
    ],
  },
  {
    slug: "historias-marcantes",
    name: "Histórias marcantes",
    category: "Institucional",
    metaTitle: "Histórias Marcantes — Clínica Odontológica Ianara Pinho",
    metaDescription:
      "Histórias marcantes de pacientes da Ianara Pinho Odontologia: transformações reais de sorrisos e qualidade de vida em Brasília.",
    kicker: "Prova social",
    headline: "Histórias marcantes: sorrisos que transformamos",
    intro:
      "Mais do que números, cada paciente tem uma história. Reunimos transformações reais que mostram o impacto de um sorriso saudável na vida das pessoas.",
    benefits: [
      "Transformações reais",
      "+60 mil pacientes atendidos",
      "4,9 estrelas de média no Google",
      "Confiança construída em 16 anos",
    ],
    sections: [
      {
        title: "A confiança dos pacientes",
        body: "Mais de 3.086 avaliações no Google com nota média de 4,9 estrelas reforçam nosso compromisso com atendimento humanizado e resultados reais.",
      },
    ],
    faq: [
      {
        q: "Posso ver casos antes e depois?",
        a: "Sim. Na avaliação apresentamos exemplos de casos semelhantes ao seu, respeitando a privacidade dos pacientes.",
      },
    ],
  },
];

export function getTreatment(slug: string) {
  return TREATMENTS.find((t) => t.slug === slug);
}

export function treatmentsByCategory(category: TreatmentCategory) {
  return TREATMENTS.filter((t) => t.category === category);
}

export const FEATURED_TREATMENTS = TREATMENTS.filter((t) => t.featured);
