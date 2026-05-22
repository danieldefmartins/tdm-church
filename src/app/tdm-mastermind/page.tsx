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
  BookOpen,
  Heart,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Mastermind",
  description:
    "TDM Mastermind — encontro quinzenal para empresários e futuros empresários cristãos. Networking, oração e direção de Deus para seus negócios.",
};

const benefits = [
  {
    icon: Handshake,
    title: "Networking Genuíno",
    description:
      "Conecte-se com empresários e futuros empresários cristãos da região de Boston. Relacionamentos que geram confiança e oportunidades.",
  },
  {
    icon: BookOpen,
    title: "Oração pelos Negócios",
    description:
      "Cada encontro é um momento de buscar a direção de Deus para seus projetos, empreendimentos e carreira profissional.",
  },
  {
    icon: Lightbulb,
    title: "Direção e Sabedoria",
    description:
      "Troca de experiências, conselhos e sabedoria prática de quem também empreende com princípios bíblicos.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Integral",
    description:
      "Não é só sobre lucro — é sobre crescer como profissional, como líder e como servo de Deus nos negócios.",
  },
];

const whoIsItFor = [
  "Donos de negócios buscando crescimento com propósito",
  "Profissionais que sonham em empreender",
  "Freelancers e autônomos querendo estruturar seus projetos",
  "Líderes que desejam integrar fé e trabalho",
  "Qualquer pessoa que acredita que Deus tem um plano para sua carreira",
];

export default function TdmMastermindPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-primary to-orange-900" />
        <div className="absolute inset-0 bg-[url('/images/cross-city-sunrise.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
            <Briefcase className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-white">
              Empresários &amp; Futuros Empresários
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
            TDM <span className="text-secondary">Mastermind</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Um encontro quinzenal de café, networking, oração e direção de Deus
            para a sua vida profissional e seus negócios.
          </p>
        </div>
      </section>

      {/* Versículo */}
      <section className="bg-secondary py-8 sm:py-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-lg sm:text-xl font-display font-bold text-primary italic">
            &ldquo;Confia ao Senhor as tuas obras, e teus pensamentos serão
            estabelecidos.&rdquo;
          </p>
          <p className="mt-2 text-primary/60 font-semibold text-xs uppercase tracking-wider">
            Provérbios 16:3
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
                Quero Participar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                O Que É
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
                Café, Oração &amp;
                <br />
                Direção nos Negócios
              </h2>
              <p className="mt-6 text-base sm:text-lg text-stone-500 leading-relaxed">
                O TDM Mastermind é um encontro quinzenal onde empresários e
                futuros empresários se reúnem em um ambiente acolhedor para
                tomar um café, compartilhar experiências, orar uns pelos outros
                e buscar a direção de Deus para seus negócios e carreiras.
              </p>
              <p className="mt-4 text-base sm:text-lg text-stone-500 leading-relaxed">
                Não é um curso. Não é uma palestra. É um encontro de pessoas
                que acreditam que Deus tem um plano para cada área da vida —
                inclusive a profissional. É networking com propósito, oração
                com fé e conversa com sabedoria.
              </p>
              <blockquote className="mt-6 pl-4 border-l-2 border-secondary/40 italic text-stone-600">
                &ldquo;Porque onde estiverem dois ou três reunidos em meu nome,
                aí estou eu no meio deles.&rdquo;
                <span className="block text-secondary font-semibold mt-1 not-italic text-xs">
                  — Mateus 18:20
                </span>
              </blockquote>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center">
              <div className="text-center p-8">
                <Coffee className="w-20 h-20 text-secondary/30 mx-auto mb-4" />
                <p className="text-stone-400 text-sm">
                  Foto do encontro aqui
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Por Que Participar"
            title="Mais do Que Networking"
            description="O TDM Mastermind é um espaço onde fé e negócios caminham juntos, gerando crescimento para todas as áreas da vida."
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

      {/* Who is it for */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              Para Quem É
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Quem Pode Participar?
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg">
              O Mastermind é aberto para qualquer pessoa que deseja crescer
              profissionalmente com a direção de Deus.
            </p>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            {whoIsItFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <Target className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 sm:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Como Funciona"
            title="Formato do Encontro"
            description="Cada encontro de 2 horas combina networking, oração e troca de experiências em um ambiente descontraído."
          />

          <div className="space-y-4">
            {[
              {
                time: "8:00",
                title: "Café e Boas-Vindas",
                description:
                  "Chegada dos participantes com café da manhã. Momento de se conhecer e criar conexões genuínas.",
              },
              {
                time: "8:30",
                title: "Devocional de Negócios",
                description:
                  "Reflexão bíblica aplicada ao mundo profissional. Princípios de sabedoria para sua carreira e empreendimentos.",
              },
              {
                time: "8:50",
                title: "Rodada de Apresentações",
                description:
                  "Cada participante compartilha quem é, o que faz e no que precisa de oração e direção.",
              },
              {
                time: "9:15",
                title: "Troca de Experiências",
                description:
                  "Discussão aberta sobre desafios, oportunidades e aprendizados. Conselhos práticos de quem já passou pelo mesmo.",
              },
              {
                time: "9:45",
                title: "Oração e Encerramento",
                description:
                  "Oração específica pelos negócios, projetos e sonhos de cada participante. Deus guia cada passo.",
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

      {/* Versículo + CTA */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-amber-900 via-primary to-orange-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cross-city-sunrise.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
          <p className="text-xl sm:text-2xl font-display font-bold text-white italic leading-snug">
            &ldquo;Tudo quanto fizerdes, fazei-o de todo o coração, como ao
            Senhor e não aos homens.&rdquo;
          </p>
          <p className="mt-3 text-secondary font-semibold text-xs uppercase tracking-wider">
            Colossenses 3:23
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display mt-10">
            Venha Para o Próximo Encontro
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            Seja você um empresário experiente ou alguém que está começando a
            sonhar com o seu negócio, este encontro é para você. Traga seu café,
            sua fé e seus sonhos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors"
            >
              Quero Participar
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
              <Calendar className="w-4 h-4 text-secondary" />
              <span>A cada duas semanas &middot; Sábados 8h</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
