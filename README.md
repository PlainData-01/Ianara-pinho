# Ianara Pinho Odontologia — Site

Site institucional e de conversão para a **Ianara Pinho Odontologia**, rede odontológica com 3 unidades em Brasília (Águas Claras, Asa Sul e Asa Norte).

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** para animações
- Schema.org JSON-LD, GTM e Facebook Pixel integrados

## Rodar localmente

```bash
npm install
cp .env.local.example .env.local   # preencha os IDs de GTM/Pixel
npm run dev
```

Acesse http://localhost:3000

## Identidade visual

- **Cores:** petróleo profundo (`#123B3E`) como cor dominante, off-white quente (`#F3F1EC`) para leitura e latão (`#B8935A`) como acento premium. Definidas em `tailwind.config.ts`.
- **Tipografia:** Fraunces (serifada editorial) nos títulos + IBM Plex Sans (sans técnica) no corpo.
- **Assinatura:** linha do tempo interativa de "16 anos em Brasília" (`components/home/Timeline.tsx`), presente na home e na página Sobre.

## Estrutura

- `app/` — páginas (home, tratamentos, sobre, contato, blog) e rota dinâmica `tratamentos/[slug]`.
- `components/` — layout, seções da home, páginas de tratamento e UI reutilizável.
- `lib/constants.ts` — dados do cliente (contatos, unidades, números, timeline).
- `lib/treatments.ts` — conteúdo de todas as especialidades.
- `lib/schema.ts` — geração de JSON-LD (Dentist, MedicalProcedure, FAQPage).

> `lib/constants.ts`, `lib/images.ts` e alguns componentes da home podem ser sobrescritos pelo pipeline de scraping com dados reais.

## Conversão

- Botão flutuante de WhatsApp em todas as páginas.
- CTAs de WhatsApp/telefone em todas as seções.
- Formulário de contato que direciona para o WhatsApp com a mensagem pré-preenchida.
- Mapas do Google por unidade na página de contato.
