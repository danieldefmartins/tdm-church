import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const quickLinks = [
  { name: "Quem Somos", href: "/quem-somos" },
  { name: "Liderança", href: "/lideranca" },
  { name: "Cultos", href: "/cultos" },
  { name: "Eventos", href: "/eventos" },
  { name: "Contato", href: "/contato" },
];

const ministryLinks = [
  { name: "TDM Youth", href: "/tdm-youth" },
  { name: "TDM Kids", href: "/tdm-kids" },
  { name: "TDM Missions", href: "/tdm-missions" },
  { name: "TDM Mastermind", href: "/tdm-mastermind" },
  { name: "TDM Local", href: "/tdm-local" },
];

const mediaLinks = [
  { name: "Mensagens", href: "/mensagens" },
  { name: "TDM Talk Podcast", href: "/tdm-talk" },
  { name: "Ao Vivo", href: "/cultos" },
  { name: "Ofertas", href: "/ofertas" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/tdmchurch",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@tdmsede",
    icon: YoutubeIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/tdmchurch",
    icon: FacebookIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Banner */}
      <div className="bg-secondary py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
            Venha nos visitar
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Junte-se a nós neste domingo. Uma comunidade de fé, amor e milagres
            esperando por você.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cultos"
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-colors border border-white/20"
            >
              Horários dos Cultos
            </Link>
            <Link
              href="/contato"
              className="px-8 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/tdm-logo.png"
                alt="TDM Church"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-lg tracking-tight leading-none">
                  TDM Church
                </p>
                <p className="text-white/60 text-xs tracking-wider uppercase">
                  Templo dos Milagres
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Uma comunidade de fé dedicada à adoração, discipulado e missões
              globais. Enraizados na verdade, alcançando o mundo em amor. Desde
              1996.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
              Igreja
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
              Ministérios
            </h4>
            <ul className="space-y-2.5">
              {ministryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17814803125"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary" />
                  (781) 480-3125
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@tdmchurch.com"
                  className="flex items-center gap-2.5 text-sm text-white/70 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary" />
                  contato@tdmchurch.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/sXeS39Yrvdifd2tG6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-white/70 hover:text-secondary transition-colors"
                >
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  539 Salem St, Malden, MA 02148
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/70">
                <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p>Dom: 9:30</p>
                  <p>Qua: 20:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} TDM Church — Templo dos Milagres.
            Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacidade"
              className="text-xs text-white/50 hover:text-white/70 transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-xs text-white/50 hover:text-white/70 transition-colors"
            >
              Termos
            </Link>
          </div>
        </div>
      </div>

      {/* Gold accent bottom */}
      <div className="h-1 bg-secondary" />
    </footer>
  );
}
