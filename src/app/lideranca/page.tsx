import type { Metadata } from "next";
import { Mail, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Liderança",
  description:
    "Conheça os pastores e líderes da TDM Church. Uma equipe dedicada a servir a Deus e cuidar de cada membro da nossa comunidade.",
};

const leaders = [
  {
    name: "Pr. Alexandre Mendes",
    role: "Pastor Presidente",
    bio: "Fundador da TDM Church, o Pastor Alexandre lidera a congregação desde 1996 com uma visão de fé, milagres e restauração. Sua paixão é ver vidas transformadas pelo poder de Deus.",
    color: "from-primary to-primary-light",
  },
  {
    name: "Pra. Rebecca Mendes",
    role: "Co-Pastora",
    bio: "Ao lado do Pastor Alexandre, a Pastora Rebecca é o coração da TDM Church. Seu ministério de acolhimento e cuidado pastoral toca profundamente cada família da congregação.",
    color: "from-secondary to-secondary-light",
  },
  {
    name: "Pr. Daniel Silva",
    role: "Pastor Associado — TDM Youth",
    bio: "Apaixonado pela nova geração, o Pastor Daniel lidera o ministério jovem com energia, criatividade e profundidade bíblica. Acredita que os jovens são o presente da igreja.",
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "Pra. Ana Costa",
    role: "Pastora Associada — TDM Kids",
    bio: "Com formação em educação infantil e um chamado ministerial, a Pastora Ana cuida dos pequenos com amor e dedicação, ensinando os princípios da fé de forma lúdica e segura.",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Pr. Lucas Oliveira",
    role: "Pastor Associado — TDM Missions",
    bio: "O Pastor Lucas coordena as missões locais e internacionais da TDM Church. Sua visão missionária leva esperança e ajuda prática a comunidades ao redor do mundo.",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "Pr. Marcos Santos",
    role: "Pastor Associado — Louvor e Adoração",
    bio: "Músico e adorador, o Pastor Marcos lidera o ministério de louvor com excelência e unção. Cada culto é uma experiência de adoração que marca a presença de Deus.",
    color: "from-violet-600 to-purple-700",
  },
];

export default function LiderancaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
            Nossos Líderes
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Liderança que <span className="text-secondary">Inspira</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Conheça os pastores e líderes que servem com amor, dedicação e o
            chamado de Deus em suas vidas.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Equipe Pastoral"
            title="Pastores & Líderes"
            description="Uma equipe comprometida em cuidar, ensinar e guiar cada membro da nossa comunidade."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="group bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl hover:border-secondary/30 transition-all duration-700"
              >
                {/* Photo Placeholder */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${leader.color} flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-white/60 text-xs">Foto do líder</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                    {leader.role}
                  </p>
                  <h3 className="text-xl font-bold text-primary font-display group-hover:text-secondary transition-colors duration-700">
                    {leader.name}
                  </h3>
                  <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Quer Conversar com um Pastor?
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Nossa equipe pastoral está disponível para orar, aconselhar e
            caminhar com você. Entre em contato.
          </p>
          <a
            href="/contato"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors duration-700"
          >
            <Mail className="w-5 h-5" />
            Entrar em Contato
          </a>
        </div>
      </section>
    </>
  );
}
