import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Heart,
  Clock,
  MapPin,
  Users,
  Globe,
  BookOpen,
  Lightbulb,
  HandHeart,
  Baby,
  Rocket,
  Briefcase,
  ArrowRight,
  Calendar,
  Mic,
  Headphones,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import LiveBadge from "@/components/LiveBadge";
import HeroCarousel from "@/components/HeroCarousel";

const heroSlides = [
  {
    src: "/images/pastor-alexandre-preaching.jpg",
    alt: "Pastor Alexandre pregando na TDM Church",
  },
  {
    src: "/images/worship-crowd-hands.jpg",
    alt: "Congregação adorando com mãos levantadas",
  },
  {
    src: "/images/worship-crowd-lights.jpg",
    alt: "Culto de adoração na TDM Church",
  },
  {
    src: "/images/woman-worship.jpg",
    alt: "Momento de adoração",
  },
  {
    src: "/images/baptism-church.jpg",
    alt: "Batismo na TDM Church",
  },
];

const departments = [
  {
    name: "TDM Youth",
    description:
      "Uma geração apaixonada por Deus. Encontros, retiros e comunidade para jovens.",
    icon: Rocket,
    href: "/tdm-youth",
    image: "/images/worship-crowd-excited.jpg",
  },
  {
    name: "TDM Kids",
    description:
      "Ensinando os pequenos a conhecer e amar a Deus de forma divertida e segura.",
    icon: Baby,
    href: "/tdm-kids",
    image: "/images/kids/kids-circle-smiling.jpg",
  },
  {
    name: "TDM Missions",
    description:
      "Levando o evangelho ao mundo através de missões locais e internacionais.",
    icon: Globe,
    href: "/tdm-missions",
    image: "/images/cross-sunset-dramatic.jpg",
  },
  {
    name: "TDM Mastermind",
    description:
      "Encontro quinzenal de empresários e futuros empresários. Café, oração e negócios.",
    icon: Briefcase,
    href: "/tdm-mastermind",
    image: "/images/cross-city-sunrise.jpg",
  },
  {
    name: "TDM Local",
    description:
      "Apoio e orientação para imigrantes nos EUA. Você não está sozinho.",
    icon: HandHeart,
    href: "/tdm-local",
    image: "/images/israel-flag-field.jpg",
  },
  {
    name: "TDM Mulheres",
    description:
      "Comunidade feminina de oração, adoração e fortalecimento espiritual.",
    icon: Heart,
    href: "#",
    image: "/images/hands-worship-golden.jpg",
  },
];

const sermons = [
  {
    title: "O Poder da Fé Inabalável",
    pastor: "Pr. Alexandre Mendes",
    date: "19 Mai 2026",
    thumbnail: "https://img.youtube.com/vi/b_HE28-RsUQ/maxresdefault.jpg",
    videoId: "b_HE28-RsUQ",
  },
  {
    title: "A Presença de Deus em Tempos Difíceis",
    pastor: "Pr. Alexandre Mendes",
    date: "12 Mai 2026",
    thumbnail: "https://img.youtube.com/vi/drhZx5RtXCI/maxresdefault.jpg",
    videoId: "drhZx5RtXCI",
  },
  {
    title: "Caminhos de Restauração",
    pastor: "Pr. Alexandre Mendes",
    date: "5 Mai 2026",
    thumbnail: "https://img.youtube.com/vi/b_HE28-RsUQ/maxresdefault.jpg",
    videoId: "b_HE28-RsUQ",
  },
  {
    title: "A Força da Oração",
    pastor: "Pr. Alexandre Mendes",
    date: "28 Abr 2026",
    thumbnail: "https://img.youtube.com/vi/drhZx5RtXCI/maxresdefault.jpg",
    videoId: "drhZx5RtXCI",
  },
];

const upcomingEvents = [
  {
    title: "Culto de Domingo",
    date: "25 Mai",
    time: "9:30 & 19:00",
    description: "Venha adorar conosco neste domingo especial.",
  },
  {
    title: "TDM Talk — Tiago Brunet",
    date: "30 Mai",
    time: "19:30",
    description:
      "Entrevista exclusiva com Tiago Brunet, autor best-seller e líder de milhões.",
  },
  {
    title: "TDM Mastermind Coffee",
    date: "7 Jun",
    time: "8:00",
    description:
      "Café da manhã de networking para empresários cristãos.",
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO CAROUSEL ==================== */}
      <HeroCarousel slides={heroSlides} interval={5000}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <LiveBadge />
              <span className="text-white/60 text-sm">
                Domingos 9:30 &amp; 19h
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-white font-display">
              Templo dos
              <br />
              <span className="text-secondary">Milagres</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-white/70 max-w-lg leading-relaxed">
              Uma comunidade de fé, cura e restauração espiritual.
              Desde 1996 transformando vidas em Malden, MA.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cultos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-base"
              >
                <Play className="w-5 h-5" />
                Assistir Ao Vivo
              </Link>
              <Link
                href="/quem-somos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/0 text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-base border border-white/30"
              >
                Conheça Nossa Igreja
              </Link>
            </div>
          </div>
        </div>
      </HeroCarousel>

      {/* ==================== SERVICE TIMES BAR ==================== */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary">
                  Domingo
                </p>
                <p className="text-lg font-bold text-white">
                  9:30 &amp; 19:00
                </p>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary">
                  Quarta-feira
                </p>
                <p className="text-lg font-bold text-white">19:45</p>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary">
                  Endereço
                </p>
                <p className="text-sm font-medium text-white/70">
                  539 Salem St, Malden, MA
                </p>
              </div>
            </div>
            <Link
              href="/cultos"
              className="flex items-center gap-2 px-6 py-2.5 bg-secondary text-black text-sm font-bold rounded-lg hover:bg-secondary-light transition-colors"
            >
              <Play className="w-3.5 h-3.5" />
              Ao Vivo
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== QUEM SOMOS — MAGAZINE LAYOUT ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
                Desde 1996
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black font-display leading-[1.05]">
                Uma história
                <br />
                de fé e <span className="italic">milagres</span>
              </h2>
              <div className="w-16 h-px bg-secondary mt-8 mb-8" />
              <p className="text-base sm:text-lg text-stone-500 leading-relaxed">
                Em 1996, o Pastor Alexandre Mendes chegou aos Estados Unidos
                ainda jovem, com um chamado no coração e a Palavra de Deus como
                guia. O que começou com cruzadas e campanhas de milagres se
                tornou uma comunidade vibrante de fé que há quase 30 anos
                transforma vidas em Malden, Massachusetts.
              </p>
              <Link
                href="/quem-somos"
                className="inline-flex items-center gap-2 mt-8 text-black font-semibold hover:text-secondary transition-colors group text-sm uppercase tracking-wider"
              >
                Conheça nossa história
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/church-building.jpg"
                  alt="Prédio da TDM Church em Malden, MA"
                  width={800}
                  height={1067}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-black text-white p-6 sm:p-8">
                <p className="text-4xl sm:text-5xl font-extrabold font-display">30</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mt-1">
                  Anos de Ministério
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== THIS WEEKEND — FULL BLEED ==================== */}
      <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/worship-crowd-hands.jpg"
            alt="Culto de adoração"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
              Este Domingo
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display leading-tight">
              Culto Especial
              <br />
              de <span className="italic">Adoração</span>
            </h2>
            <div className="w-12 h-px bg-secondary mt-6 mb-6" />
            <p className="text-white/60 text-base sm:text-lg leading-relaxed">
              Venha viver uma experiência transformadora com pregação da
              Palavra, louvor e adoração. Traga sua família e amigos.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Clock className="w-4 h-4 text-secondary" />
                <span>9:30 &amp; 19:00</span>
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <Users className="w-4 h-4 text-secondary" />
                <span>Pr. Alexandre Mendes</span>
              </div>
            </div>
            <div className="mt-8 flex gap-3">
              <Link
                href="/cultos"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
              >
                <Play className="w-4 h-4" />
                Assistir Ao Vivo
              </Link>
              <Link
                href="/eventos"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Programação
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERMON CHANNEL (NETFLIX) ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
                Canal de Mensagens
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
                Assista às Pregações
              </h2>
            </div>
            <Link
              href="/mensagens"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-secondary transition-colors uppercase tracking-wider group"
            >
              Ver todas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sermons.map((sermon) => (
              <Link
                key={sermon.title}
                href={`/mensagens?v=${sermon.videoId}`}
                className="group"
              >
                <div className="relative aspect-video rounded-sm overflow-hidden bg-stone-100 mb-4">
                  <Image
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-5 h-5 text-black ml-0.5" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-black group-hover:text-secondary transition-colors line-clamp-2">
                  {sermon.title}
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  {sermon.pastor} &middot; {sermon.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TDM TALK PODCAST ==================== */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5 text-black" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
                  Podcast
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
                TDM <span className="italic">Talk</span>
              </h2>
              <p className="mt-6 text-white/50 text-base sm:text-lg leading-relaxed">
                Conversas profundas sobre fé, liderança e propósito com os
                maiores nomes do Brasil e do mundo.
              </p>

              <div className="mt-10 p-6 sm:p-8 bg-white/5 border border-white/10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
                  Próximo Episódio
                </p>
                <h3 className="text-2xl font-bold text-white font-display">
                  Tiago Brunet
                </h3>
                <p className="text-white/40 text-sm mt-2 leading-relaxed">
                  Autor best-seller, fundador do Instituto Destiny. Coach de
                  líderes e palestrante internacional com milhões de seguidores.
                </p>
                <Link
                  href="/tdm-talk"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 bg-secondary text-black text-sm font-bold rounded-lg hover:bg-secondary-light transition-colors"
                >
                  <Headphones className="w-4 h-4" />
                  Saiba Mais
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden relative">
                <Image
                  src="/images/hand-worship-purple.jpg"
                  alt="TDM Talk Podcast"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="w-14 h-14 bg-secondary/30 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <Headphones className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white font-bold text-3xl font-display">
                    TDM <span className="italic">Talk</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEPARTMENTS — MAGAZINE GRID ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
              Ministérios
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
              Encontre Sua <span className="italic">Comunidade</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <Link
                key={dept.name}
                href={dept.href}
                className="group relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/70 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <dept.icon className="w-4 h-4 text-secondary" />
                    <p className="text-secondary text-[10px] font-semibold uppercase tracking-[0.2em]">
                      Ministério
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {dept.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-1 line-clamp-2 leading-relaxed">
                    {dept.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-secondary text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Saiba mais
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EVENTS ==================== */}
      <section className="py-20 sm:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-3">
                Agenda
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black font-display">
                Próximos Eventos
              </h2>
            </div>
            <Link
              href="/eventos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-secondary transition-colors uppercase tracking-wider group"
            >
              Ver todos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white p-6 sm:p-8 border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-black flex flex-col items-center justify-center text-white shrink-0">
                    <span className="text-lg font-bold leading-none">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-white/60">
                      {event.date.split(" ")[1]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{event.title}</h3>
                    <p className="text-xs text-stone-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== OFFERING CTA — FULL BLEED ==================== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cross-sunset-dramatic.jpg"
            alt="Cruz ao pôr do sol"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
            Generosidade
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            Dízimos &amp; <span className="italic">Ofertas</span>
          </h2>
          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sua generosidade transforma vidas e sustenta a obra de Deus.
            Contribua com facilidade usando cartão de crédito ou Zelle.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ofertas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-base"
            >
              <Heart className="w-5 h-5" />
              Contribuir Agora
            </Link>
            <Link
              href="/ofertas#zelle"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Enviar via Zelle
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== LOCATION ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
                Localização
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black font-display">
                Venha Nos <span className="italic">Visitar</span>
              </h2>
              <div className="w-12 h-px bg-secondary mt-6 mb-8" />

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-black text-sm">Endereço</p>
                    <p className="text-stone-500 text-sm">
                      539 Salem St, Malden, MA 02148
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-black text-sm">Horários</p>
                    <p className="text-stone-500 text-sm">
                      Domingo: 9:30 &amp; 19:00
                    </p>
                    <p className="text-stone-500 text-sm">Quarta: 19:45</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-black text-sm">Primeira Vez?</p>
                    <p className="text-stone-500 text-sm">
                      Vista-se como quiser e venha como está.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/sXeS39Yrvdifd2tG6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-colors text-sm"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>

            <div className="aspect-[4/3] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.5!2d-71.0544!3d42.4264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e373d355d52bc9%3A0x6934ee719c9a2dd7!2sTDM%20Church%20-%20Igreja%20Evang%C3%A9lica!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TDM Church Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
