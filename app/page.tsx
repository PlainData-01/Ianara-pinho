import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import About from "@/components/home/About";
import Treatments from "@/components/home/Treatments";
import Timeline from "@/components/home/Timeline";
import VideoSection from "@/components/home/VideoSection";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/ui/FAQ";

const homeFaq = [
  {
    q: "Quais são os diferenciais da clínica Ianara Pinho em Brasília?",
    a: "A clínica se destaca por atendimento humanizado e personalizado, estrutura moderna com tecnologia avançada, equipe especializada em diversas áreas, foco em estética e funcionalidade e acompanhamento individual em todas as etapas.",
  },
  {
    q: "Quais tratamentos são oferecidos na clínica?",
    a: "Uma ampla variedade de tratamentos, como implantes dentários, lentes de contato dental, clareamento, harmonização orofacial, ortodontia, alinhadores, endodontia, cirurgia, odontopediatria e mais.",
  },
  {
    q: "Quantas unidades a clínica possui?",
    a: "São 3 unidades em Brasília: Águas Claras, Asa Sul e Asa Norte, todas com estrutura completa e a mesma qualidade de atendimento.",
  },
  {
    q: "Como faço para agendar uma consulta?",
    a: "Você pode agendar diretamente pelo WhatsApp, por telefone ou pelo formulário da página de contato. Nossa equipe ajuda a escolher o melhor horário e unidade.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Treatments />
      <Timeline />
      <VideoSection />
      <Testimonials />
      <section className="bg-paper">
        <div className="wrap py-20 md:py-28">
          <FAQ items={homeFaq} title="Dúvidas frequentes" />
        </div>
      </section>
      <CTA />
    </>
  );
}
