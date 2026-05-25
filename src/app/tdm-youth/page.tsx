import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  Users,
  Music,
  BookOpen,
  Heart,
  Calendar,
  ArrowRight,
  Zap,
} from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Youth",
  description:
    "TDM Youth — o ministério jovem da TDM Church. Encontros, retiros, louvor e comunidade para jovens que querem viver com propósito.",
};

const activities = [
  {
    icon: BookOpen,
    title: "Estudo Bíblico",
    description:
      "Mergulhamos na Palavra de Deus com relevância para a geração atual.",
  },
  {
    icon: Music,
    title: "Worship Nights",
    description:
      "Noites de louvor e adoração com a banda do youth, com energia e presença de Deus.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Grupos de vida, atividades sociais e amizades que duram para sempre.",
  },
  {
    icon: Heart,
    title: "Servir",
    description:
      "Oportunidades de voluntariado e missões para fazer a diferença no mundo.",
  },
];

export default function TdmYouthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-40 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('/images/Photos-Videos/670290276_18576905548038256_5755455007463808641_n.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <Rocket className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-white">
              Ministério Jovem
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            TDM <span className="text-secondary">Youth</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Uma geração apaixonada por Deus. Aqui você encontra comunidade,
            propósito e uma fé que é real.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors"
            >
              <Zap className="w-5 h-5" />
              Quero Participar
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="O que fazemos"
            title="Mais do que um Encontro"
            description="No TDM Youth, cada momento é uma oportunidade de crescer na fé, construir amizades e descobrir seu chamado."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="group bg-white rounded-lg p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-700 text-center"
              >
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-700">
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-black">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Times */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                Quando nos encontramos
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display">
                Nossos <span className="italic">Encontros</span>
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Sexta-feira</p>
                    <p className="text-sm text-stone-500">
                      20:00 — Encontro Semanal do Youth
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Mensal</p>
                    <p className="text-sm text-stone-500">
                      Worship Night — último sábado do mês
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl relative">
              <Image
                src="/images/Photos-Videos/548296443_18401838529143219_902555118183139563_n.jpg"
                alt="Jovem adorando com mão levantada na TDM Youth"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Sua Geração. Seu Momento.
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Você não precisa caminhar sozinho. Venha fazer parte de uma
            comunidade que vai te desafiar a viver o melhor de Deus.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors duration-700"
          >
            Fale com a Gente
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
