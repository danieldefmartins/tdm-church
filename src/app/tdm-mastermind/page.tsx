import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Coffee,
  Users,
  Lightbulb,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  TrendingUp,
  Handshake,
  Target,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Mastermind",
  description:
    "TDM Mastermind — encontro quinzenal de empresários cristãos. Networking, café e fé nos negócios. Vagas limitadas.",
};

const benefits = [
  {
    icon: Handshake,
    title: "Networking Estratégico",
    description:
      "Conecte-se com empresários cristãos da região de Boston. Relacionamentos que geram oportunidades de negócios.",
  },
  {
    icon: Lightbulb,
    title: "Mentoria e Insights",
    description:
      "Troca de experiências e sabedoria prática para crescer nos negócios com princípios bíblicos.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento",
    description:
      "Palestras, workshops e discussões que impulsionam seu negócio e carreira profissional.",
  },
  {
    icon: Target,
    title: "Propósito nos Negócios",
    description:
      "Descubra como integrar fé e empreendedorismo, gerando impacto positivo no mercado.",
  },
];

export default function TdmMastermindPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-primary to-orange-900" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-orange-600 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <Briefcase className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-white">
              Empresários Cristãos
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            TDM <span className="text-secondary">Mastermind</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Café, networking e fé nos negócios. Um encontro quinzenal exclusivo
            para empresários e profissionais cristãos.
          </p>
        </div>
      </section>

      {/* Next Meeting */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Próximo Encontro
                  </p>
                  <h3 className="text-xl font-bold text-primary mt-1">
                    TDM Mastermind Coffee
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <span className="flex items-center gap-1.5 text-sm text-stone-500">
                      <Calendar className="w-4 h-4 text-secondary" />7 Jun 2026
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-stone-500">
                      <Clock className="w-4 h-4 text-secondary" />
                      8:00 AM
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-stone-500">
                      <MapPin className="w-4 h-4 text-secondary" />
                      TDM Church, Malden MA
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href="/contato"
                className="px-7 py-3.5 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors shrink-0"
              >
                Reservar Minha Vaga
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Por que participar"
            title="Mais do que Networking"
            description="O TDM Mastermind é um espaço onde fé e negócios caminham juntos, gerando crescimento integral."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:border-amber-200 transition-all duration-700 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-700">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Como Funciona"
            title="Formato do Encontro"
          />

          <div className="space-y-4">
            {[
              {
                time: "8:00",
                title: "Café e Networking",
                description: "Chegada dos participantes com café da manhã e networking informal.",
              },
              {
                time: "8:30",
                title: "Devocional",
                description: "Breve momento de reflexão bíblica aplicada ao mundo dos negócios.",
              },
              {
                time: "8:45",
                title: "Palestra ou Workshop",
                description: "Conteúdo prático sobre empreendedorismo, liderança ou finanças.",
              },
              {
                time: "9:30",
                title: "Mastermind Roundtable",
                description: "Discussão em grupo sobre desafios e oportunidades de negócio.",
              },
              {
                time: "10:00",
                title: "Encerramento e Oração",
                description: "Conclusão com oração pelos negócios e projetos dos participantes.",
              },
            ].map((step) => (
              <div
                key={step.time}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-stone-100"
              >
                <span className="text-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-lg shrink-0">
                  {step.time}
                </span>
                <div>
                  <h3 className="font-bold text-primary">{step.title}</h3>
                  <p className="text-sm text-stone-500 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-900 via-primary to-orange-900">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Vagas Limitadas
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Para manter a qualidade e intimidade do grupo, as vagas são
            limitadas. Garanta seu lugar no próximo encontro.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors duration-700"
          >
            Quero Participar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
