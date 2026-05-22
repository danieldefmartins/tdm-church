import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Heart,
  Users,
  HandHeart,
  BookOpen,
  ArrowRight,
  Utensils,
  Home,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Missions",
  description:
    "TDM Missions — missões locais e internacionais da TDM Church. Levando o evangelho, esperança e ajuda prática ao mundo.",
};

const missionAreas = [
  {
    icon: MapPin,
    title: "Missões Locais",
    description:
      "Servimos a comunidade de Malden e região de Boston com programas de assistência social, alimentação e apoio espiritual.",
  },
  {
    icon: Globe,
    title: "Missões Internacionais",
    description:
      "Enviamos equipes ao Brasil e outros países para campanhas de evangelismo, projetos sociais e treinamento de líderes.",
  },
  {
    icon: Utensils,
    title: "Alimentação",
    description:
      "Distribuição de alimentos e refeições para famílias em situação de vulnerabilidade na comunidade.",
  },
  {
    icon: Home,
    title: "Apoio Comunitário",
    description:
      "Projetos de habitação, roupas e itens essenciais para famílias que precisam de ajuda imediata.",
  },
  {
    icon: BookOpen,
    title: "Evangelismo",
    description:
      "Cruzadas, campanhas e estudos bíblicos que levam a mensagem de Cristo a quem ainda não conhece.",
  },
  {
    icon: HandHeart,
    title: "Treinamento",
    description:
      "Formação de líderes e voluntários locais para multiplicar o impacto missionário em suas comunidades.",
  },
];

const stats = [
  { value: "5+", label: "Países Alcançados" },
  { value: "500+", label: "Famílias Ajudadas" },
  { value: "50+", label: "Voluntários Ativos" },
  { value: "30", label: "Anos de Missões" },
];

export default function TdmMissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('/images/cross-sunset-dramatic.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <Globe className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-white">Missões</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            TDM <span className="text-secondary">Missions</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Levando o evangelho, esperança e ajuda prática às nações. Deus nos
            chamou para fazer a diferença — local e globalmente.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-black font-display">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-stone-500 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Areas */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Áreas de Atuação"
            title="Onde Estamos Presentes"
            description="Nossas missões alcançam diferentes áreas de necessidade, levando a presença de Cristo a cada lugar."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionAreas.map((area) => (
              <div
                key={area.title}
                className="group bg-white rounded-lg p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-700"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-700">
                  <area.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-secondary transition-colors">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Participe"
            title="Como Se Envolver"
            description="Existem diversas formas de fazer parte das missões da TDM Church."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ore",
                description:
                  "A oração é o fundamento das missões. Interceda pelas equipes e pelas vidas que serão alcançadas.",
                icon: Heart,
              },
              {
                title: "Contribua",
                description:
                  "Sua oferta para missões sustenta os projetos e equipes que estão no campo. Cada centavo importa.",
                icon: HandHeart,
              },
              {
                title: "Vá",
                description:
                  "Junte-se a uma equipe missionária. Treinamos e enviamos voluntários para missões locais e internacionais.",
                icon: Users,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-stone-100 text-center hover:shadow-lg transition-shadow duration-700"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                  {item.description}
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
            Faça Parte Desta Missão
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            O mundo precisa de você. Junte-se a nós e leve esperança a quem
            mais precisa.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors"
            >
              Quero Participar
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/ofertas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Contribuir para Missões
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
