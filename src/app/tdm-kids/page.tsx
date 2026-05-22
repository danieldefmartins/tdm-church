import type { Metadata } from "next";
import Link from "next/link";
import {
  Baby,
  Heart,
  ShieldCheck,
  BookOpen,
  Palette,
  Music,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Kids",
  description:
    "TDM Kids — ministério infantil da TDM Church. Um ambiente divertido, seguro e cheio de amor onde as crianças aprendem sobre Deus.",
};

const activities = [
  {
    icon: BookOpen,
    title: "Histórias Bíblicas",
    description:
      "As crianças aprendem as histórias da Bíblia de forma interativa e divertida, com dramatizações e recursos visuais.",
  },
  {
    icon: Music,
    title: "Louvor Kids",
    description:
      "Músicas e coreografias feitas especialmente para as crianças adorarem a Deus com alegria.",
  },
  {
    icon: Palette,
    title: "Atividades Criativas",
    description:
      "Artes, jogos e atividades manuais que reforçam o aprendizado bíblico de cada semana.",
  },
  {
    icon: Heart,
    title: "Discipulado Infantil",
    description:
      "Formação de caráter e valores cristãos de forma apropriada para cada faixa etária.",
  },
];

const ageGroups = [
  {
    range: "0–2 anos",
    name: "Berçário",
    description: "Cuidado especial com os bebês em ambiente seguro e acolhedor.",
  },
  {
    range: "3–5 anos",
    name: "Pequenos Adoradores",
    description:
      "Primeiros passos na fé com histórias, músicas e atividades lúdicas.",
  },
  {
    range: "6–8 anos",
    name: "Exploradores",
    description:
      "Descobrindo as verdades da Bíblia com atividades interativas e jogos.",
  },
  {
    range: "9–11 anos",
    name: "Desbravadores",
    description:
      "Aprofundamento bíblico, projetos e preparação para o ministério jovem.",
  },
];

export default function TdmKidsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-primary to-rose-900" />
        <div className="absolute inset-0 bg-[url('/images/cross-blue-sunset.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <Baby className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-white">
              Ministério Infantil
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            TDM <span className="text-secondary">Kids</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Um ambiente divertido, seguro e cheio de amor onde seus filhos
            aprendem sobre Deus e crescem na fé.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="O que fazemos"
            title="Aprender Sobre Deus é Divertido!"
            description="Cada domingo é uma aventura de fé com atividades pensadas para encantar e ensinar os pequenos."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:border-pink-200 transition-all duration-700 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-700">
                  <activity.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary">
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

      {/* Age Groups */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Faixas Etárias"
            title="Um Lugar Para Cada Idade"
            description="Programação específica para cada fase do desenvolvimento da criança."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group) => (
              <div
                key={group.range}
                className="bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-lg transition-shadow duration-700"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-pink-500" />
                </div>
                <p className="text-sm font-semibold text-secondary">
                  {group.range}
                </p>
                <h3 className="text-lg font-bold text-primary mt-1">
                  {group.name}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <ShieldCheck className="w-7 h-7 text-green-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-display">
                Segurança em Primeiro Lugar
              </h2>
              <p className="mt-4 text-stone-500 leading-relaxed">
                A segurança dos seus filhos é nossa prioridade absoluta. Todos
                os nossos voluntários passam por treinamento, e temos protocolos
                rigorosos de check-in e check-out para garantir que cada criança
                esteja sempre protegida.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Voluntários treinados e verificados",
                  "Sistema de check-in e check-out seguro",
                  "Ambiente limpo e adequado para crianças",
                  "Supervisão constante em todas as atividades",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-stone-600">
                    <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-600/10 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-10 h-10 text-pink-500" />
                </div>
                <p className="text-stone-500 text-sm">Foto do kids aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-pink-900 via-primary to-rose-900">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Quer Ser Voluntário?
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Faça parte da equipe que cuida e ensina a próxima geração. Sua
            dedicação pode impactar a vida de uma criança para sempre.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors duration-700"
          >
            Quero Ser Voluntário
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
