import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Sun,
  HandHeart,
  Sparkles,
  Shield,
  Coffee,
  Baby,
  Briefcase,
  Globe,
  Music,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vem Pra Igreja",
  description:
    "Você não precisa caminhar sozinho. Venha para a TDM Church e descubra uma comunidade que te acolhe como você é. Braços abertos, coração cheio de amor.",
};

const verses = [
  {
    text: "Quão bom e quão agradável é que os irmãos vivam em união!",
    ref: "Salmos 133:1",
  },
  {
    text: "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.",
    ref: "Mateus 18:20",
  },
  {
    text: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.",
    ref: "Mateus 11:28",
  },
  {
    text: "Não nos deixemos de congregar, como é costume de alguns, antes, porém, exortemo-nos uns aos outros.",
    ref: "Hebreus 10:25",
  },
  {
    text: "Ele sara os de coração quebrantado e lhes ata as feridas.",
    ref: "Salmos 147:3",
  },
  {
    text: "O Senhor é o meu pastor; nada me faltará.",
    ref: "Salmos 23:1",
  },
];

const reasons = [
  {
    icon: Heart,
    title: "Você é amado",
    description:
      "Antes mesmo de você pisar aqui, já existe um amor preparado para você. Não por quem você é ou o que já fez, mas simplesmente porque você existe.",
  },
  {
    icon: Users,
    title: "Ninguém foi feito para caminhar sozinho",
    description:
      "A vida tem momentos lindos e momentos difíceis. Ter pessoas ao lado que se importam genuinamente com você faz toda a diferença.",
  },
  {
    icon: Shield,
    title: "Um lugar seguro",
    description:
      "Aqui não existe julgamento. Existe acolhimento. Venha como você está — com suas dúvidas, suas lutas, suas vitórias. Todos são bem-vindos.",
  },
  {
    icon: Sun,
    title: "Renovação para sua alma",
    description:
      "Às vezes a vida pesa. A correria do dia a dia nos esgota. Aqui você encontra um momento de paz, de renovação, de conexão com algo maior.",
  },
  {
    icon: HandHeart,
    title: "Propósito e significado",
    description:
      "Existe algo dentro de você que busca mais. Mais sentido, mais propósito. Aqui você descobre que sua vida tem um plano lindo.",
  },
  {
    icon: Sparkles,
    title: "Milagres acontecem",
    description:
      "Há quase 30 anos, testemunhamos vidas transformadas, famílias restauradas, curas e milagres. O impossível se torna possível na presença de Deus.",
  },
];

const departments = [
  {
    icon: Music,
    name: "Louvor & Adoração",
    desc: "Momentos de música e adoração que tocam a alma.",
  },
  {
    icon: Coffee,
    name: "Comunidade",
    desc: "Amizades genuínas e apoio mútuo para a vida toda.",
  },
  {
    icon: Baby,
    name: "Para Toda Família",
    desc: "Programas para crianças, jovens, casais e todos.",
  },
  {
    icon: Briefcase,
    name: "Crescimento",
    desc: "Estudos e grupos que te ajudam a crescer em todas as áreas.",
  },
  {
    icon: Globe,
    name: "Fazer a Diferença",
    desc: "Oportunidades de servir e impactar sua comunidade.",
  },
  {
    icon: BookOpen,
    name: "Palavra de Deus",
    desc: "Mensagens práticas e profundas que falam ao seu coração.",
  },
];

export default function VemPraIgrejaPage() {
  return (
    <>
      {/* ==================== HERO — ACOLHEDOR ==================== */}
      <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('/images/hands-worship-golden.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 text-center">
          <p className="text-secondary text-sm sm:text-base font-semibold tracking-[0.25em] uppercase mb-8">
            Templo dos Milagres
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white font-display">
            Você não precisa
            <br />
            caminhar <span className="text-secondary">sozinho</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Existe um lugar onde você é acolhido exatamente como é. Sem
            julgamento, sem pressão — apenas amor. E esse lugar está te
            esperando.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cultos"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors text-base"
            >
              <Heart className="w-5 h-5" />
              Quero Conhecer
            </Link>
            <a
              href="#por-que-vir"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm text-base border border-white/20"
            >
              Saiba Mais
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-16 flex flex-col items-center gap-2">
            <span className="text-white/30 text-xs tracking-widest uppercase">
              Continue lendo
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-secondary/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO 1 ==================== */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary leading-snug italic">
            &ldquo;{verses[0].text}&rdquo;
          </p>
          <p className="mt-4 text-primary/60 font-semibold text-sm uppercase tracking-wider">
            {verses[0].ref}
          </p>
        </div>
      </section>

      {/* ==================== TALVEZ VOCÊ ESTEJA... ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              A gente entende
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Talvez você esteja passando
              <br />
              por um momento <span className="italic">assim...</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              "Sentindo que falta algo na vida, mesmo quando tudo parece bem",
              "Passando por um momento difícil e precisando de apoio",
              "Querendo recomeçar, mas sem saber por onde começar",
              "Longe de casa, em um país novo, sentindo falta de comunidade",
              "Curioso sobre fé, mas com medo de não ser aceito",
              "Cansado, sobrecarregado, precisando de um momento de paz",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-100 hover:border-secondary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 shrink-0" />
                <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto">
            Se você se identificou com alguma dessas situações, saiba que{" "}
            <strong className="text-black">você não está sozinho</strong>. E
            existe um lugar preparado para te receber.
          </p>
        </div>
      </section>

      {/* ==================== VERSÍCULO 2 ==================== */}
      <section className="py-14 sm:py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-snug italic">
            &ldquo;{verses[2].text}&rdquo;
          </p>
          <p className="mt-4 text-secondary font-semibold text-sm uppercase tracking-wider">
            {verses[2].ref}
          </p>
        </div>
      </section>

      {/* ==================== POR QUE VIR ==================== */}
      <section id="por-que-vir" className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              Braços Abertos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Por que vir pra <span className="italic">igreja?</span>
            </h2>
            <p className="mt-4 text-stone-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Não é sobre religião. É sobre relacionamento. É sobre encontrar
              pessoas que caminham junto com você.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group p-6 sm:p-8 bg-white rounded-2xl border border-stone-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors duration-500">
                  <reason.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-secondary transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO 3 — FULL WIDTH ==================== */}
      <section className="relative py-20 sm:py-28 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white leading-snug italic">
            &ldquo;{verses[4].text}&rdquo;
          </p>
          <p className="mt-4 text-secondary font-semibold text-sm uppercase tracking-wider">
            {verses[4].ref}
          </p>
        </div>
      </section>

      {/* ==================== COMO É AQUI DENTRO ==================== */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              O Que Você Vai Encontrar
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Mais do que uma <span className="italic">igreja</span>
            </h2>
            <p className="mt-4 text-stone-500 text-base sm:text-lg max-w-2xl mx-auto">
              Uma família. Uma comunidade. Um lugar onde sua vida ganha um novo
              significado.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-100 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <dept.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h3 className="font-bold text-black text-sm sm:text-base">
                  {dept.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1.5 leading-relaxed">
                  {dept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRIMEIRA VEZ? ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                Pode ficar tranquilo
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display">
                É sua primeira vez
                <br />
                em uma <span className="italic">igreja?</span>
              </h2>
              <p className="mt-6 text-stone-500 text-base sm:text-lg leading-relaxed">
                A gente entende que pode ser um passo grande. Mas queremos que
                você saiba:
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Vista-se como quiser",
                    desc: "Não existe dress code. Venha de jeans, de vestido, de tênis. O que importa é você estar aqui.",
                  },
                  {
                    title: "Venha sozinho ou acompanhado",
                    desc: "Traga sua família, um amigo, ou venha sozinho. Você vai encontrar pessoas acolhedoras.",
                  },
                  {
                    title: "Não precisa saber nada",
                    desc: "Nunca abriu uma Bíblia? Tudo bem. Estamos aqui para caminhar junto com você, no seu ritmo.",
                  },
                  {
                    title: "Sem pressão, sem constrangimento",
                    desc: "Você é livre para observar, participar, perguntar. Aqui ninguém te obriga a nada.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-3 h-3 text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm">
                        {item.title}
                      </p>
                      <p className="text-stone-500 text-sm mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black rounded-2xl p-8 sm:p-10 text-center">
              <p className="text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
                Nossos Cultos
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-white/50 text-sm">Domingo</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    9:30
                  </p>
                </div>
                <div className="w-12 h-px bg-white/10 mx-auto" />
                <div>
                  <p className="text-white/50 text-sm">Quarta-feira</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    20:00
                  </p>
                </div>
                <div className="w-12 h-px bg-white/10 mx-auto" />
                <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>539 Salem St, Malden, MA</span>
                </div>
              </div>
              <Link
                href="/cultos"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors w-full justify-center"
              >
                Como Chegar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO 4 ==================== */}
      <section className="py-14 sm:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary leading-snug italic">
            &ldquo;{verses[1].text}&rdquo;
          </p>
          <p className="mt-4 text-primary/60 font-semibold text-sm uppercase tracking-wider">
            {verses[1].ref}
          </p>
        </div>
      </section>

      {/* ==================== DEPOIMENTOS ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
              Histórias Reais
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display">
              Vidas que foram <span className="italic">transformadas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                text: "Cheguei nos EUA sozinha, sem família, sem amigos. A TDM me acolheu como se eu fosse filha. Hoje tenho uma família enorme que me ama de verdade.",
                name: "C.S.",
                detail: "Membro desde 2019",
              },
              {
                text: "Eu nunca tinha ido a uma igreja. Um amigo me convidou e desde o primeiro dia me senti em casa. Ninguém me julgou, ninguém me pressionou. Só amor.",
                name: "R.M.",
                detail: "Membro desde 2022",
              },
              {
                text: "Meu casamento estava destruído. Através da TDM, encontrei restauração, propósito e um milagre que eu não acreditava mais ser possível.",
                name: "A.L.",
                detail: "Membro desde 2018",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-100"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-4 h-4 text-secondary fill-secondary"
                    />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <p className="font-bold text-black text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO 5 ==================== */}
      <section className="py-14 sm:py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-snug italic">
            &ldquo;{verses[3].text}&rdquo;
          </p>
          <p className="mt-4 text-secondary font-semibold text-sm uppercase tracking-wider">
            {verses[3].ref}
          </p>
        </div>
      </section>

      {/* ==================== CARTA DO PASTOR ==================== */}
      <section className="relative py-20 sm:py-28 bg-cream overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/woman-worship.jpg')] bg-cover bg-center opacity-5" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-100 shadow-sm">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-6">
              Uma palavra do Pastor
            </p>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-black">Querido amigo, querida amiga,</strong>
              </p>
              <p>
                Eu sei que dar o primeiro passo pode parecer difícil. Talvez
                você já tenha tido experiências negativas com igreja. Talvez
                ache que não é bom o suficiente, que precisa mudar antes de
                vir. Eu quero te dizer: venha como você está.
              </p>
              <p>
                Em 1996, quando eu cheguei nos Estados Unidos, eu era jovem e
                cheio de sonhos. O que eu não esperava era encontrar tantas
                pessoas com o coração partido, longe de casa, precisando de
                alguém que simplesmente dissesse: &ldquo;Você é bem-vindo
                aqui&rdquo;.
              </p>
              <p>
                Foi assim que nasceu o Templo dos Milagres. Não como um
                prédio, mas como uma família. E hoje, quase 30 anos depois,
                essa família continua crescendo — e tem um lugar reservado
                para você.
              </p>
              <p>
                Não importa de onde você vem, o que já viveu ou o que sente
                agora. Aqui, os braços estão abertos. Sempre.
              </p>
              <p className="mt-6">
                <strong className="text-black">Com amor,</strong>
                <br />
                <span className="text-black font-display text-xl font-bold">
                  Pastor Alexandre Mendes
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO FINAL ==================== */}
      <section className="py-14 sm:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary leading-snug italic">
            &ldquo;{verses[5].text}&rdquo;
          </p>
          <p className="mt-4 text-primary/60 font-semibold text-sm uppercase tracking-wider">
            {verses[5].ref}
          </p>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Heart className="w-12 h-12 text-secondary mx-auto mb-6" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-tight">
            Sua história de fé
            <br />
            <span className="text-secondary">começa aqui</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo. Venha conhecer uma comunidade que vai te
            acolher com o coração aberto. Estamos esperando por você.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/sXeS39Yrvdifd2tG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors text-base"
            >
              <MapPin className="w-5 h-5" />
              Como Chegar
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm text-base"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Dom 9:30 | Qua 20h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              <span>539 Salem St, Malden, MA</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
