import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  Headphones,
  Play,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  Star,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "TDM Talk",
  description:
    "TDM Talk — o podcast da TDM Church. Conversas profundas sobre fé, liderança e propósito com os maiores nomes do Brasil e do mundo.",
};

const episodes = [
  {
    number: "EP 12",
    title: "Fé e Empreendedorismo — Como Deus guia seus negócios",
    guest: "Pr. Alexandre Mendes",
    duration: "45 min",
    date: "15 Mai 2026",
  },
  {
    number: "EP 11",
    title: "Criando Filhos com Propósito na América",
    guest: "Pra. Rebecca Mendes",
    duration: "38 min",
    date: "1 Mai 2026",
  },
  {
    number: "EP 10",
    title: "A Força da Comunidade na Diáspora Brasileira",
    guest: "Convidado Especial",
    duration: "42 min",
    date: "17 Abr 2026",
  },
  {
    number: "EP 09",
    title: "Saúde Mental e Espiritualidade",
    guest: "Convidado Especial",
    duration: "50 min",
    date: "3 Abr 2026",
  },
  {
    number: "EP 08",
    title: "Liderança Servidora — O Modelo de Jesus",
    guest: "Pr. Alexandre Mendes",
    duration: "40 min",
    date: "20 Mar 2026",
  },
];

const platforms = [
  { name: "YouTube", href: "#" },
  { name: "Spotify", href: "#" },
  { name: "Apple Podcasts", href: "#" },
  { name: "Google Podcasts", href: "#" },
];

export default function TdmTalkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-light rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                  Podcast
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
                TDM <span className="text-secondary">Talk</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Conversas profundas sobre fé, liderança e propósito com os
                maiores nomes do Brasil e do mundo. Cada episódio é uma jornada
                de inspiração e transformação.
              </p>

              {/* Platform Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                  >
                    <Headphones className="w-4 h-4" />
                    {platform.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

            {/* Podcast Art */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/hand-worship-purple.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-stone-900/20" />
                <div className="relative w-full h-full flex items-end justify-center p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/30 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-bold text-3xl font-display">
                      TDM Talk
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Episode — Tiago Brunet */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-secondary" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                    Próximo Episódio
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                  Tiago Brunet
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Autor best-seller, fundador do Instituto Destiny, coach de
                  líderes e palestrante internacional com milhões de seguidores.
                  Tiago Brunet compartilha sua visão sobre fé, liderança e
                  propósito em uma conversa exclusiva.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1.5 text-sm text-white/60">
                    <Calendar className="w-4 h-4 text-secondary" />
                    30 Mai 2026
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-white/60">
                    <Clock className="w-4 h-4 text-secondary" />
                    19:30
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Autor", "Coach", "Palestrante", "Fundador"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guest Photo Placeholder */}
              <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-secondary/20 to-primary-light/20 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-white font-bold text-lg">Tiago Brunet</p>
                  <p className="text-white/50 text-sm mt-1">
                    Foto do convidado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode List */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Episódios"
            title="Ouça os Episódios"
            description="Reviva as melhores conversas do TDM Talk."
          />

          <div className="space-y-4">
            {episodes.map((ep) => (
              <a
                key={ep.number}
                href="#"
                className="group flex items-center gap-4 sm:gap-6 bg-white rounded-2xl p-5 sm:p-6 border border-stone-100 hover:shadow-lg hover:border-secondary/30 transition-all duration-700"
              >
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors duration-700">
                  <Play className="w-6 h-6 text-white ml-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-secondary">
                      {ep.number}
                    </span>
                    <span className="text-xs text-stone-400">
                      {ep.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-stone-500 mt-0.5">
                    {ep.guest} &middot; {ep.duration}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-700 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
