import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
import ScrollVideo from "@/components/ScrollVideo";

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

export default function VemPraIgrejaPage() {
  return (
    <>
      {/* ==================== HERO — FULL VIDEO WITH SOUND ==================== */}
      <ScrollVideo
        src="/images/Photos-Videos/Vem-Pra-Igreja1.mp4"
        className="min-h-screen"
      >
        <div className="flex flex-col items-center justify-end min-h-screen px-6 pb-12 sm:pb-16 text-center">
          <div className="bg-black/60 backdrop-blur-sm px-8 sm:px-12 py-6 sm:py-8 rounded-lg border border-white/10">
            <p className="text-secondary text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Templo dos Milagres
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              Você não precisa
              <br />
              caminhar <span className="italic text-secondary">sozinho</span>
            </h1>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
              Continue lendo
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-secondary/40 to-transparent" />
          </div>
        </div>
      </ScrollVideo>

      {/* ==================== CTA BAR ==================== */}
      <section className="bg-black py-8 sm:py-10">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-white/50 text-base sm:text-lg leading-relaxed mb-6">
            Existe um lugar onde você é acolhido exatamente como é. Sem
            julgamento, sem pressão — apenas amor.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cultos"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-base"
            >
              <Heart className="w-5 h-5" />
              Quero Conhecer
            </Link>
            <a
              href="#por-que-vir"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/0 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-base border border-white/30"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PHOTO BREAK — WORSHIP ==================== */}
      <section className="bg-black py-1">
        <div className="grid grid-cols-3 gap-1">
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/Photos-Videos/Culto-de-mulheres2.jpg" alt="Adoração" fill className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/Photos-Videos/548296443_18401838529143219_902555118183139563_n.jpg" alt="Jovem adorando" fill className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/Photos-Videos/Pr-Alexandre.jpg" alt="Pastor Alexandre" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO 1 ==================== */}
      <section className="py-14 sm:py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-black leading-snug italic">
            &ldquo;{verses[0].text}&rdquo;
          </p>
          <p className="mt-4 text-black/50 font-semibold text-xs uppercase tracking-[0.2em]">
            {verses[0].ref}
          </p>
        </div>
      </section>

      {/* ==================== TALVEZ VOCÊ ESTEJA... ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
              A gente entende
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Talvez você esteja passando
              <br />
              por um momento <span className="italic">assim...</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
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
                className="flex items-start gap-4 p-5 bg-warm-50 border border-stone-100 hover:border-secondary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 shrink-0" />
                <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-lg sm:text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto">
            Se você se identificou com alguma dessas situações, saiba que{" "}
            <strong className="text-black">você não está sozinho</strong>. E
            existe um lugar preparado para te receber.
          </p>
        </div>
      </section>

      {/* ==================== VIDEO EMOCIONAL 1 — QUASE 9:16 ==================== */}
      <section className="bg-black flex justify-center">
        <ScrollVideo
          src="/images/Photos-Videos/Vem-Pra-Igreja2.mp4"
          className="w-full max-w-2xl aspect-[3/4] sm:aspect-[3/4]"
        >
          {null}
        </ScrollVideo>
        <div className="bg-black text-center py-10 sm:py-14 px-6">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
            <span className="italic">&ldquo;Vinde a mim,</span>
            <br />
            <span className="text-secondary">todos os que estais cansados&rdquo;</span>
          </p>
          <p className="mt-4 text-white/40 text-sm uppercase tracking-[0.2em]">
            Mateus 11:28
          </p>
        </div>
      </section>

      {/* ==================== POR QUE VIR ==================== */}
      <section id="por-que-vir" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
              Braços Abertos
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Por que vir pra <span className="italic">igreja?</span>
            </h2>
            <div className="w-16 h-px bg-secondary mt-6 mx-auto" />
            <p className="mt-6 text-stone-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Não é sobre religião. É sobre relacionamento. É sobre encontrar
              pessoas que caminham junto com você.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group p-6 sm:p-8 bg-warm-50 border border-stone-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors duration-500">
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

      {/* ==================== PHOTO STRIP — REAL CHURCH MOMENTS ==================== */}
      <section className="bg-black py-2">
        <div className="flex gap-2 overflow-hidden">
          {[
            { src: "/images/Photos-Videos/Pr-Alexandre9.jpg", alt: "Pastor Alexandre" },
            { src: "/images/Photos-Videos/Culto-de-mulheres.jpg", alt: "Culto de mulheres" },
            { src: "/images/Photos-Videos/523098151_18524808037030544_7887472504581379021_n.jpg", alt: "Batismo" },
            { src: "/images/Photos-Videos/526804262_18396594418143219_6247029674856534470_n.jpg", alt: "Adoração" },
            { src: "/images/Photos-Videos/670290276_18576905548038256_5755455007463808641_n.jpg", alt: "Louvor" },
            { src: "/images/Photos-Videos/698483876_18584877088038256_8314401509394760064_n.jpg", alt: "Abraço" },
          ].map((img) => (
            <div
              key={img.src}
              className="relative w-1/3 sm:w-1/6 aspect-square shrink-0 overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ==================== VERSÍCULO — FULL BLEED IMAGE ==================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Photos-Videos/650019878_18429183328143219_5906374747522973205_n.jpg"
            alt="Congregação com velas"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Heart className="w-10 h-10 text-secondary mx-auto mb-6" />
          <p className="text-2xl sm:text-3xl lg:text-5xl font-display font-bold text-white leading-snug italic">
            &ldquo;{verses[4].text}&rdquo;
          </p>
          <p className="mt-6 text-secondary font-semibold text-sm uppercase tracking-[0.2em]">
            {verses[4].ref}
          </p>
        </div>
      </section>

      {/* ==================== O QUE VOCÊ VAI ENCONTRAR ==================== */}
      <section className="py-24 sm:py-32 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
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

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { icon: Music, name: "Louvor & Adoração", desc: "Momentos de música e adoração que tocam a alma.", img: "/images/Photos-Videos/613657908_18419576698143219_257539174028556150_n.jpg" },
              { icon: Coffee, name: "Comunidade", desc: "Amizades genuínas e apoio mútuo para a vida toda.", img: "/images/Photos-Videos/524490633_18524808046030544_6071906744422372845_n.jpg" },
              { icon: Baby, name: "Para Toda Família", desc: "Programas para crianças, jovens, casais e todos.", img: "/images/Photos-Videos/527927531_18396595075143219_1901539867358092896_n.jpg" },
              { icon: Briefcase, name: "Crescimento", desc: "Estudos e grupos que te ajudam a crescer em todas as áreas.", img: "/images/Photos-Videos/Pr-Alexandre2.jpg" },
              { icon: Globe, name: "Fazer a Diferença", desc: "Oportunidades de servir e impactar sua comunidade.", img: "/images/Photos-Videos/Pr-Alexandre14.jpg" },
              { icon: BookOpen, name: "Palavra de Deus", desc: "Mensagens práticas e profundas que falam ao seu coração.", img: "/images/Photos-Videos/Pr-Alexandre.jpg" },
            ].map((dept) => (
              <div
                key={dept.name}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={dept.img}
                  alt={dept.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <dept.icon className="w-5 h-5 text-secondary mb-2" />
                  <h3 className="font-bold text-white text-sm sm:text-base font-display">
                    {dept.name}
                  </h3>
                  <p className="text-white/50 text-xs mt-1 line-clamp-2 hidden sm:block">
                    {dept.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VIDEO EMOCIONAL 2 — QUASE 9:16 ==================== */}
      <section className="bg-black flex justify-center">
        <ScrollVideo
          src="/images/Photos-Videos/Vem-Pra-Igreja3.mp4"
          className="w-full max-w-2xl aspect-[3/4] sm:aspect-[3/4]"
        >
          <div className="text-center px-6">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display drop-shadow-2xl">
              Aqui você encontra
              <br />
              <span className="italic text-secondary">uma família</span>
            </p>
          </div>
        </ScrollVideo>
      </section>

      {/* ==================== PRIMEIRA VEZ? ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
                Pode ficar tranquilo
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
                É sua primeira vez
                <br />
                em uma <span className="italic">igreja?</span>
              </h2>
              <div className="w-12 h-px bg-secondary mt-6 mb-8" />
              <p className="text-stone-500 text-base sm:text-lg leading-relaxed">
                A gente entende que pode ser um passo grande. Mas queremos que
                você saiba:
              </p>

              <div className="mt-8 space-y-5">
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
                  <div key={item.title} className="flex items-start gap-4">
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

            <div className="bg-black p-8 sm:p-10 text-center">
              <p className="text-secondary text-[10px] font-semibold uppercase tracking-[0.3em] mb-6">
                Nossos Cultos
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-white/40 text-sm">Domingo</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    9:30
                  </p>
                </div>
                <div className="w-16 h-px bg-white/10 mx-auto" />
                <div>
                  <p className="text-white/40 text-sm">Quarta-feira</p>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    20:00
                  </p>
                </div>
                <div className="w-16 h-px bg-white/10 mx-auto" />
                <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>539 Salem St, Malden, MA</span>
                </div>
              </div>
              <Link
                href="/cultos"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors w-full justify-center"
              >
                Como Chegar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO + FOTO ==================== */}
      <section className="py-12 sm:py-14 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-black leading-snug italic">
            &ldquo;{verses[1].text}&rdquo;
          </p>
          <p className="mt-3 text-black/50 font-semibold text-xs uppercase tracking-[0.2em]">
            {verses[1].ref}
          </p>
        </div>
      </section>

      {/* ==================== DEPOIMENTOS ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
              Histórias Reais
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
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
                className="bg-warm-50 p-6 sm:p-8 border border-stone-100"
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
                <div className="mt-6 pt-4 border-t border-stone-200">
                  <p className="font-bold text-black text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VIDEO EMOCIONAL 3 ==================== */}
      <section className="bg-black flex justify-center">
        <ScrollVideo
          src="/images/Photos-Videos/Vem-Pra-Igreja1.mp4"
          className="w-full max-w-2xl aspect-[3/4] sm:aspect-[3/4]"
        >
          <div className="text-center px-6">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display drop-shadow-2xl">
              Sua história de fé
              <br />
              <span className="italic text-secondary">começa aqui</span>
            </p>
          </div>
        </ScrollVideo>
      </section>

      {/* ==================== PHOTO BREAK — COMMUNITY ==================== */}
      <section className="bg-black py-1">
        <div className="grid grid-cols-4 gap-1">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/Photos-Videos/Culto-de-mulheres5.jpg" alt="Mulher adorando" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/Photos-Videos/523098151_18524808037030544_7887472504581379021_n.jpg" alt="Batismo" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/Photos-Videos/526804262_18396594418143219_6247029674856534470_n.jpg" alt="Adoração" fill className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/Photos-Videos/Pr-Alexandre9.jpg" alt="Pastor Alexandre" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO ==================== */}
      <section className="py-12 sm:py-14 bg-black">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-snug italic">
            &ldquo;{verses[3].text}&rdquo;
          </p>
          <p className="mt-3 text-secondary font-semibold text-xs uppercase tracking-[0.2em]">
            {verses[3].ref}
          </p>
        </div>
      </section>

      {/* ==================== CARTA DO PASTOR ==================== */}
      <section className="relative py-24 sm:py-32 bg-warm-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Photos-Videos/Pr-Alexandre2.jpg')] bg-cover bg-center opacity-[0.03]" />
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white p-8 sm:p-12 lg:p-16 border border-stone-100 shadow-sm">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-8">
              Uma palavra do Pastor
            </p>

            <div className="space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-black font-display text-xl">
                  Querido amigo, querida amiga,
                </strong>
              </p>
              <p>
                Eu sei que dar o primeiro passo pode parecer difícil. Talvez
                você já tenha tido experiências negativas com igreja. Talvez
                ache que não é bom o suficiente, que precisa mudar antes de
                vir. Eu quero te dizer:{" "}
                <strong className="text-black">venha como você está.</strong>
              </p>
              <p>
                Em 1996, quando eu cheguei nos Estados Unidos, eu era jovem e
                cheio de sonhos. O que eu não esperava era encontrar tantas
                pessoas com o coração partido, longe de casa, precisando de
                alguém que simplesmente dissesse:{" "}
                <em>&ldquo;Você é bem-vindo aqui&rdquo;</em>.
              </p>
              <p>
                Foi assim que nasceu o Templo dos Milagres. Não como um
                prédio, mas como uma{" "}
                <strong className="text-black">família</strong>. E hoje, quase
                30 anos depois, essa família continua crescendo — e tem um
                lugar reservado para você.
              </p>
              <p>
                Não importa de onde você vem, o que já viveu ou o que sente
                agora. Aqui, os braços estão abertos.{" "}
                <strong className="text-black">Sempre.</strong>
              </p>
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/images/Photos-Videos/Pr-Alexandre.jpg"
                    alt="Pastor Alexandre Mendes"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-black font-display text-lg font-bold">
                    Pastor Alexandre Mendes
                  </p>
                  <p className="text-stone-400 text-sm">
                    Fundador da TDM Church
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VERSÍCULO FINAL ==================== */}
      <section className="py-12 sm:py-14 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-black leading-snug italic">
            &ldquo;{verses[5].text}&rdquo;
          </p>
          <p className="mt-3 text-black/50 font-semibold text-xs uppercase tracking-[0.2em]">
            {verses[5].ref}
          </p>
        </div>
      </section>

      {/* ==================== CTA FINAL — FULL BLEED ==================== */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Photos-Videos/Pr-Alexandre9.jpg"
            alt="Pastor Alexandre com mão levantada"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
            O Primeiro Passo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white font-display leading-tight">
            Sua história de fé
            <br />
            <span className="italic text-secondary">começa aqui</span>
          </h2>

          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Dê o primeiro passo. Venha conhecer uma comunidade que vai te
            acolher com o coração aberto. Estamos esperando por você.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://maps.app.goo.gl/sXeS39Yrvdifd2tG6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-base"
            >
              <MapPin className="w-5 h-5" />
              Como Chegar
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-base"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white/40 text-sm">
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
