"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  MapPin,
  Play,
  Heart,
} from "lucide-react";

const ministries = [
  { name: "TDM Youth", href: "/tdm-youth" },
  { name: "TDM Kids", href: "/tdm-kids" },
  { name: "TDM Missions", href: "/tdm-missions" },
  { name: "TDM Mastermind", href: "/tdm-mastermind" },
  { name: "TDM Local", href: "/tdm-local" },
];

const mediaLinks = [
  { name: "Mensagens", href: "/mensagens" },
  { name: "TDM Talk Podcast", href: "/tdm-talk" },
  { name: "Cultos Ao Vivo", href: "/cultos" },
  { name: "Eventos", href: "/eventos" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent bar */}
      <div className="h-[3px] bg-secondary" />

      {/* Info bar */}
      <div className="bg-primary text-white text-xs sm:text-sm h-8 sm:h-10 flex items-center justify-center gap-4 sm:gap-8 px-4">
        <a
          href="tel:+17814803125"
          className="flex items-center gap-1.5 hover:text-secondary transition-colors"
        >
          <Phone className="w-3 h-3" />
          <span>(781) 480-3125</span>
        </a>
        <span className="hidden sm:flex items-center gap-1.5 text-white/70">
          <MapPin className="w-3 h-3" />
          539 Salem St, Malden, MA
        </span>
        <span className="hidden md:inline text-white/70">
          Dom 9:30 & 19h &middot; Qua 19:45
        </span>
      </div>

      {/* Main nav */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/tdm-logo.png"
                alt="TDM Church"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
              />
              <div className="hidden sm:block">
                <p className="text-primary font-bold text-lg lg:text-xl tracking-tight leading-none">
                  TDM Church
                </p>
                <p className="text-stone-500 text-[10px] lg:text-xs tracking-wider uppercase">
                  Templo dos Milagres
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/quem-somos"
                className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-primary transition-colors"
              >
                Quem Somos
              </Link>

              <Link
                href="/cultos"
                className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-primary transition-colors"
              >
                Cultos
              </Link>

              {/* Ministérios dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-stone-700 hover:text-primary transition-colors">
                  Ministérios
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {ministries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-warm-50 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mídia dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-stone-700 hover:text-primary transition-colors">
                  Mídia
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {mediaLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-warm-50 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contato"
                className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-primary transition-colors"
              >
                Contato
              </Link>
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/cultos"
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-light transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                Ao Vivo
              </Link>
              <Link
                href="/ofertas"
                className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-secondary-dark transition-colors"
              >
                <Heart className="w-3.5 h-3.5" />
                Ofertar
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-stone-700"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-stone-100 pb-6">
            <div className="px-4 py-3 space-y-1">
              <Link
                href="/quem-somos"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-warm-50 rounded-lg"
              >
                Quem Somos
              </Link>
              <Link
                href="/cultos"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-warm-50 rounded-lg"
              >
                Cultos
              </Link>

              {/* Mobile Ministérios */}
              <button
                onClick={() => setMinistriesOpen(!ministriesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-stone-700 hover:bg-warm-50 rounded-lg"
              >
                Ministérios
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${ministriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {ministriesOpen && (
                <div className="pl-6 space-y-1">
                  {ministries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-sm text-stone-500 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Mobile Mídia */}
              <button
                onClick={() => setMediaOpen(!mediaOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-stone-700 hover:bg-warm-50 rounded-lg"
              >
                Mídia
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${mediaOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mediaOpen && (
                <div className="pl-6 space-y-1">
                  {mediaLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-sm text-stone-500 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-stone-700 hover:bg-warm-50 rounded-lg"
              >
                Contato
              </Link>
            </div>

            {/* Mobile CTAs */}
            <div className="px-4 mt-4 flex gap-3">
              <Link
                href="/cultos"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white text-sm font-semibold rounded-lg"
              >
                <Play className="w-4 h-4" />
                Ao Vivo
              </Link>
              <Link
                href="/ofertas"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-white text-sm font-semibold rounded-lg"
              >
                <Heart className="w-4 h-4" />
                Ofertar
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
