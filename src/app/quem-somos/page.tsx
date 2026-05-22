import type { Metadata } from "next";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Users,
  BookOpen,
  Heart,
  Target,
  Eye,
  Gem,
  ArrowRight,
  Church,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a história da TDM Church — Templo dos Milagres. Desde 1996 transformando vidas em Malden, MA, sob a liderança do Pastor Alexandre Mendes.",
};

const timeline = [
  {
    year: "1996",
    title: "O Início",
    description:
      "Pastor Alexandre Mendes chega aos Estados Unidos com um chamado no coração. Começa as primeiras cruzadas e campanhas de milagres em Malden, MA.",
  },
  {
    year: "2002",
    title: "Crescimento",
    description:
      "A comunidade cresce e a igreja se estabelece com cultos regulares, atraindo famílias brasileiras e de diversas nacionalidades.",
  },
  {
    year: "2010",
    title: "Departamentos",
    description:
      "Surgem os ministérios TDM Youth, TDM Kids e TDM Missions, alcançando todas as gerações com programas específicos.",
  },
  {
    year: "2018",
    title: "Expansão Digital",
    description:
      "A TDM Church abraça a tecnologia com transmissões ao vivo, podcast TDM Talk e presença ativa nas redes sociais.",
  },
  {
    year: "Hoje",
    title: "Uma Família Global",
    description:
      "Quase 30 anos depois, a TDM Church é uma comunidade multicultural vibrante com múltiplos ministérios, impactando vidas local e internacionalmente.",
  },
];

const stats = [
  { value: "30", label: "Anos de Ministério", icon: Clock },
  { value: "6+", label: "Ministérios Ativos", icon: BookOpen },
  { value: "1000+", label: "Vidas Impactadas", icon: Users },
  { value: "3", label: "Cultos Semanais", icon: Church },
];

const values = [
  {
    icon: Heart,
    title: "Amor",
    description:
      "Somos movidos pelo amor de Cristo. Cada pessoa é acolhida com carinho e respeito, independente de sua história.",
  },
  {
    icon: BookOpen,
    title: "Palavra",
    description:
      "A Bíblia é nosso fundamento. Ensinamos e vivemos de acordo com os princípios das Escrituras Sagradas.",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Somos uma família. Crescemos juntos, nos apoiamos mutuamente e celebramos cada vitória como um só corpo.",
  },
  {
    icon: Gem,
    title: "Excelência",
    description:
      "Servimos a Deus com excelência em tudo que fazemos, buscando sempre oferecer o melhor para Sua glória.",
  },
];

export default function QuemSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="absolute inset-0 bg-[url('/images/cross-city-sunrise.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
            Desde 1996
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Nossa História é de{" "}
            <span className="text-secondary">Fé e Milagres</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Do chamado de um jovem pastor à construção de uma comunidade que
            transforma vidas. Conheça a jornada do Templo dos Milagres.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-3xl sm:text-4xl font-bold text-primary font-display">
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

      {/* History */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                Nossa História
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
                Um chamado que
                <br />
                mudou vidas
              </h2>
              <p className="mt-6 text-base sm:text-lg text-stone-500 leading-relaxed">
                Em 1996, o Pastor Alexandre Mendes chegou aos Estados Unidos
                ainda jovem, com um chamado no coração e a Palavra de Deus como
                guia. O que começou com cruzadas e campanhas de milagres se
                tornou uma comunidade vibrante de fé que há quase 30 anos
                transforma vidas em Malden, Massachusetts.
              </p>
              <p className="mt-4 text-base sm:text-lg text-stone-500 leading-relaxed">
                Ao lado de sua esposa, Pastora Rebecca Mendes, o Pastor
                Alexandre construiu mais do que uma igreja — construiu uma
                família. Hoje, a TDM Church é referência de acolhimento, fé e
                restauração para a comunidade brasileira e multicultural da
                região de Boston.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <MapPin className="w-4 h-4 text-secondary" />
                  539 Salem St, Malden, MA
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/woman-worship.jpg"
                  alt="Momento de adoração na TDM Church"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Linha do Tempo"
            title="Marcos da Nossa Jornada"
            description="Quase três décadas de fé, milagres e vidas transformadas."
          />

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-stone-200 sm:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-warm-white -translate-x-2 sm:-translate-x-2 mt-1.5 z-10" />
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <span className="text-sm font-bold text-secondary">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-primary mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 sm:py-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Propósito"
            title="Missão, Visão e Valores"
            light
          />

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Nossa Missão
              </h3>
              <p className="text-white/70 leading-relaxed">
                Proclamar o evangelho de Jesus Cristo, restaurar vidas quebradas
                e edificar uma comunidade de fé onde cada pessoa encontre
                propósito, cura e esperança.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Nossa Visão
              </h3>
              <p className="text-white/70 leading-relaxed">
                Ser uma igreja relevante que impacta gerações, formando
                discípulos que transformam suas famílias, comunidades e nações
                através do amor de Cristo.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-700"
              >
                <value.icon className="w-8 h-8 text-secondary mb-3" />
                <h4 className="font-bold text-white mb-2">{value.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-display">
            Venha Fazer Parte Desta Família
          </h2>
          <p className="mt-4 text-stone-500 text-lg leading-relaxed">
            Não importa de onde você vem ou o que já viveu. Na TDM Church, há um
            lugar preparado para você.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors duration-700"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
}
