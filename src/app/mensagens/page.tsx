"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Filter, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const categories = ["Todos", "Palavra", "Worship", "Conferências"];

const sermons = [
  {
    title: "O Poder da Fé Inabalável",
    pastor: "Pr. Alexandre Mendes",
    date: "19 Mai 2026",
    videoId: "b_HE28-RsUQ",
    category: "Palavra",
  },
  {
    title: "A Presença de Deus em Tempos Difíceis",
    pastor: "Pr. Alexandre Mendes",
    date: "12 Mai 2026",
    videoId: "drhZx5RtXCI",
    category: "Palavra",
  },
  {
    title: "Caminhos de Restauração",
    pastor: "Pr. Alexandre Mendes",
    date: "5 Mai 2026",
    videoId: "b_HE28-RsUQ",
    category: "Palavra",
  },
  {
    title: "A Força da Oração",
    pastor: "Pr. Alexandre Mendes",
    date: "28 Abr 2026",
    videoId: "drhZx5RtXCI",
    category: "Palavra",
  },
  {
    title: "Noite de Adoração Especial",
    pastor: "Ministério de Louvor",
    date: "21 Abr 2026",
    videoId: "b_HE28-RsUQ",
    category: "Worship",
  },
  {
    title: "Conferência de Avivamento 2026",
    pastor: "Pr. Alexandre Mendes",
    date: "14 Abr 2026",
    videoId: "drhZx5RtXCI",
    category: "Conferências",
  },
  {
    title: "Vivendo com Propósito",
    pastor: "Pr. Alexandre Mendes",
    date: "7 Abr 2026",
    videoId: "b_HE28-RsUQ",
    category: "Palavra",
  },
  {
    title: "Worship Night — Março",
    pastor: "Ministério de Louvor",
    date: "31 Mar 2026",
    videoId: "drhZx5RtXCI",
    category: "Worship",
  },
];

export default function MensagensPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? sermons
      : sermons.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
            Canal de Mensagens
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Assista às <span className="text-secondary">Pregações</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Reviva os momentos mais poderosos dos nossos cultos. Mensagens que
            transformam vidas, disponíveis a qualquer momento.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-secondary hover:text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sermon Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((sermon, i) => (
              <a
                key={`${sermon.videoId}-${i}`}
                href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-stone-100 mb-3 shadow-md">
                  <Image
                    src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-lg">
                      <Play className="w-6 h-6 text-primary ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/80 text-white text-[10px] font-semibold uppercase tracking-wider rounded-full backdrop-blur-sm">
                      {sermon.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-sm text-stone-900 group-hover:text-primary transition-colors line-clamp-2">
                  {sermon.title}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {sermon.pastor} &middot; {sermon.date}
                </p>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-stone-300 mx-auto mb-4" />
              <p className="text-stone-500">
                Nenhuma mensagem encontrada nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
