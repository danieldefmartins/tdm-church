import type { Metadata } from "next";
import Link from "next/link";
import {
  HandHeart,
  Scale,
  Languages,
  Briefcase,
  Users,
  Heart,
  Phone,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Local",
  description:
    "TDM Local — apoio e orientação para imigrantes nos EUA. Serviços de informação legal, idioma, emprego e comunidade. Você não está sozinho.",
};

const services = [
  {
    icon: Scale,
    title: "Orientação Legal",
    description:
      "Informações e encaminhamento para questões de imigração, documentação e direitos. Conectamos você com profissionais qualificados.",
  },
  {
    icon: Languages,
    title: "Apoio com Idioma",
    description:
      "Aulas de inglês, tradução de documentos e suporte para comunicação em situações do dia a dia nos EUA.",
  },
  {
    icon: Briefcase,
    title: "Suporte de Emprego",
    description:
      "Orientação para busca de emprego, elaboração de currículo e preparação para entrevistas no mercado americano.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Grupos de apoio, eventos de integração e uma rede de brasileiros e imigrantes que se ajudam mutuamente.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description:
      "Informações sobre o sistema educacional americano, escolas, universidades e programas de capacitação.",
  },
  {
    icon: Heart,
    title: "Apoio Emocional",
    description:
      "Aconselhamento pastoral e encaminhamento para suporte psicológico. Cuidamos da sua saúde mental e espiritual.",
  },
];

export default function TdmLocalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('/images/israel-flag-field.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <HandHeart className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-white">
              Apoio ao Imigrante
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            TDM <span className="text-secondary">Local</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Você não está sozinho. A TDM Local existe para apoiar e orientar
            imigrantes nos EUA com amor, respeito e serviços práticos.
          </p>
        </div>
      </section>

      {/* Compassionate Intro */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-black font-display">
            Um Porto Seguro Para Quem Chegou
          </h2>
          <p className="mt-4 text-stone-500 text-lg leading-relaxed">
            Sabemos como é difícil recomeçar em um país novo. A saudade, as
            incertezas, as barreiras do idioma e da cultura. A TDM Local
            nasceu do coração de quem já viveu essa jornada e quer ajudar
            você a encontrar seu caminho nos Estados Unidos.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Nossos Serviços"
            title="Como Podemos Ajudar"
            description="Oferecemos orientação e apoio em diversas áreas para facilitar sua adaptação nos EUA."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-lg p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-700"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-700">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Precisa de Ajuda?
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Não tenha vergonha de pedir ajuda. Estamos aqui para caminhar com
            você. Entre em contato e vamos conversar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors"
            >
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+16174042589"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (617) 404-2589
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
