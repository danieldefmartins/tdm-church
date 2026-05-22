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

const departments = [
  {
    name: "TDM Youth",
    description:
      "Uma geração apaixonada por Deus. Encontros, retiros e comunidade para jovens.",
    icon: Rocket,
    href: "/tdm-youth",
    color: "from-blue-600 to-indigo-700",
  },
  {
    name: "TDM Kids",
    description:
      "Ensinando os pequenos a conhecer e amar a Deus de forma divertida e segura.",
    icon: Baby,
    href: "/tdm-kids",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "TDM Missions",
    description:
      "Levando o evangelho ao mundo através de missões locais e internacionais.",
    icon: Globe,
    href: "/tdm-missions",
    color: "from-emerald-600 to-teal-700",
  },
  {
    name: "TDM Mastermind",
    description:
      "Encontro quinzenal de empresários cristãos. Networking, café e fé nos negócios.",
    icon: Briefcase,
    href: "/tdm-mastermind",
    color: "from-amber-600 to-orange-700",
  },
  {
    name: "TDM Local",
    description:
      "Apoio e orientação para imigrantes nos EUA. Você não está sozinho.",
    icon: HandHeart,
    href: "/tdm-local",
    color: "from-violet-600 to-purple-700",
  },
  {
    name: "TDM Mulheres",
    description:
      "Comunidade feminina de oração, adoração e fortalecimento espiritual.",
    icon: Heart,
    href: "#",
    color: "from-rose-500 to-pink-600",
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
      "Café da manhã de networking para empresários cristãos. Vagas limitadas.",
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="absolute inset-0 bg-[url('/images/pastor-alexandre-preaching.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <LiveBadge />
              <span className="text-white/70 text-sm">
                Domingos 9:30 &amp; 19h
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white font-display">
              Bem-vindo ao
              <br />
              <span className="text-secondary">Templo dos Milagres</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
              Uma comunidade de fé, cura e restauração espiritual dentro do amor
              de Deus. Desde 1996 transformando vidas em Malden, MA.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/cultos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors text-base"
              >
                <Play className="w-5 h-5" />
                Assistir Ao Vivo
              </Link>
              <Link
                href="/quem-somos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm text-base border border-white/20"
              >
                Conheça Nossa Igreja
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 sm:gap-8">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4 text-secondary" />
                <span>Desde 1996</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Malden, MA</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Users className="w-4 h-4 text-secondary" />
                <span>Comunidade Ativa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE TIMES BAR ==================== */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 sm:gap-10">
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Domingo
                </p>
                <p className="text-lg font-bold text-primary">
                  9:30 &amp; 19:00
                </p>
              </div>
              <div className="w-px h-10 bg-stone-200 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Quarta-feira
                </p>
                <p className="text-lg font-bold text-primary">19:45</p>
              </div>
              <div className="w-px h-10 bg-stone-200 hidden sm:block" />
              <div className="text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Endereço
                </p>
                <p className="text-sm font-medium text-stone-700">
                  539 Salem St, Malden, MA
                </p>
              </div>
            </div>
            <Link
              href="/cultos"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              <Play className="w-4 h-4" />
              Assistir Ao Vivo
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== QUEM SOMOS PREVIEW ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                Desde 1996
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary font-display">
                Uma história de fé
                <br />e milagres
              </h2>
              <p className="mt-6 text-base sm:text-lg text-stone-500 leading-relaxed">
                Em 1996, o Pastor Alexandre Mendes chegou aos Estados Unidos
                ainda jovem, com um chamado no coração e a Palavra de Deus como
                guia. O que começou com cruzadas e campanhas de milagres se
                tornou uma comunidade vibrante de fé que há quase 30 anos
                transforma vidas em Malden, Massachusetts.
              </p>
              <p className="mt-4 text-base sm:text-lg text-stone-500 leading-relaxed">
                Hoje, a TDM Church é uma família multicultural unida pelo amor
                de Cristo, com ministérios que alcançam todas as gerações e
                necessidades.
              </p>
              <Link
                href="/quem-somos"
                className="inline-flex items-center gap-2 mt-8 text-secondary font-semibold hover:text-secondary-dark transition-colors group"
              >
                Conheça nossa história
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/church-building.jpg"
                  alt="Prédio da TDM Church em Malden, MA"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-stone-100">
                <p className="text-3xl font-bold text-primary">30</p>
                <p className="text-xs text-stone-500 uppercase tracking-wider">
                  Anos de Ministério
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== THIS WEEKEND ==================== */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-3">
                Este Domingo
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
                Culto Especial de Adoração
              </h2>
              <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
                Venha viver uma experiência transformadora com pregação da
                Palavra, louvor e adoração. Traga sua família e amigos para este
                momento especial na presença de Deus.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>9:30 &amp; 19:00</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Users className="w-4 h-4 text-secondary" />
                  <span>Pr. Alexandre Mendes</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cultos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors"
                >
                  <Play className="w-4 h-4" />
                  Assistir Ao Vivo
                </Link>
                <Link
                  href="/eventos"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                >
                  Ver Programação
                </Link>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/worship-crowd-hands.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-primary/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-7 h-7 text-primary ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERMON CHANNEL (NETFLIX) ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Canal de Mensagens"
            title="Assista às Pregações"
            description="Reviva os momentos mais poderosos dos nossos cultos. Mensagens que transformam vidas, disponíveis a qualquer momento."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sermons.map((sermon) => (
              <Link
                key={sermon.title}
                href={`/mensagens?v=${sermon.videoId}`}
                className="group"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 mb-3 shadow-md">
                  <Image
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-primary ml-0.5" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-stone-900 group-hover:text-primary transition-colors line-clamp-2">
                  {sermon.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {sermon.pastor} &middot; {sermon.date}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/mensagens"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
            >
              Ver Todas as Mensagens
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TDM TALK PODCAST ==================== */}
      <section className="py-16 sm:py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Podcast
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
                TDM Talk
              </h2>
              <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
                Conversas profundas sobre fé, liderança e propósito com os
                maiores nomes do Brasil e do mundo. Cada episódio é uma jornada
                de inspiração.
              </p>

              <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2">
                  Próximo Episódio
                </p>
                <h3 className="text-xl font-bold text-white">Tiago Brunet</h3>
                <p className="text-white/60 text-sm mt-1">
                  Autor best-seller, fundador do Instituto Destiny. Coach de
                  líderes e palestrante internacional com milhões de seguidores.
                </p>
                <div className="mt-4">
                  <Link
                    href="/tdm-talk"
                    className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-dark transition-colors w-fit"
                  >
                    <Headphones className="w-4 h-4" />
                    Saiba Mais
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/hand-worship-purple.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-stone-900/20" />
                <div className="relative w-full h-full flex items-end justify-center p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-bold text-2xl font-display">
                      TDM Talk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEPARTMENTS ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Ministérios"
            title="Encontre Sua Comunidade"
            description="Na TDM Church, temos um lugar para cada pessoa. Descubra o ministério que fala ao seu coração."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.name}
                href={dept.href}
                className="group relative p-6 sm:p-8 bg-white rounded-2xl border border-stone-100 hover:border-secondary/30 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center mb-4`}
                >
                  <dept.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {dept.name}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {dept.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-secondary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== EVENTS ==================== */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Agenda"
            title="Próximos Eventos"
            description="Não perca nenhum momento especial. Confira o que está acontecendo na TDM."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-lg font-bold leading-none">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider">
                      {event.date.split(" ")[1]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">{event.title}</h3>
                    <p className="text-xs text-stone-500 flex items-center gap-1">
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

          <div className="text-center mt-10">
            <Link
              href="/eventos"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-secondary-dark transition-colors group"
            >
              <Calendar className="w-4 h-4" />
              Ver Todos os Eventos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== OFFERING CTA ==================== */}
      <section className="relative py-16 sm:py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/cross-sunset-dramatic.jpg')] bg-cover bg-center opacity-15" />
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Dízimos &amp; Ofertas
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Sua generosidade transforma vidas e sustenta a obra de Deus.
            Contribua com facilidade usando cartão de crédito ou Zelle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ofertas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors text-base"
            >
              <Heart className="w-5 h-5" />
              Contribuir Agora
            </Link>
            <Link
              href="/ofertas#zelle"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Enviar via Zelle
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== LOCATION MAP ==================== */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeading
                label="Localização"
                title="Venha Nos Visitar"
                center={false}
              />
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Endereço</p>
                    <p className="text-stone-500 text-sm">
                      539 Salem St, Malden, MA 02148
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Horários</p>
                    <p className="text-stone-500 text-sm">
                      Domingo: 9:30 &amp; 19:00
                    </p>
                    <p className="text-stone-500 text-sm">Quarta: 19:45</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-primary">Primeira Vez?</p>
                    <p className="text-stone-500 text-sm">
                      Não se preocupe! Temos uma equipe pronta para recebê-lo.
                      Vista-se como quiser e venha como está.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/sXeS39Yrvdifd2tG6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
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
