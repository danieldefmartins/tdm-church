import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Play, Users, BookOpen, Music } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import LiveBadge from "@/components/LiveBadge";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "Cultos",
  description:
    "Assista aos cultos ao vivo da TDM Church. Domingos às 9:30 e 19h, quartas às 19:45. Transmissão ao vivo pelo YouTube.",
};

const serviceTimes = [
  {
    day: "Domingo Manhã",
    time: "9:30",
    description: "Culto de Celebração — Louvor, adoração e Palavra de Deus.",
    icon: Music,
  },
  {
    day: "Domingo Noite",
    time: "19:00",
    description:
      "Culto da Família — Um momento especial de ensino e comunhão.",
    icon: Users,
  },
  {
    day: "Quarta-feira",
    time: "19:45",
    description:
      "Culto de Oração e Estudo — Aprofundamento na Palavra e intercessão.",
    icon: BookOpen,
  },
];

export default function CultosPage() {
  return (
    <>
      {/* Hero with Live Stream */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="absolute inset-0 bg-[url('/images/worship-crowd-lights.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <LiveBadge size="lg" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
              Cultos <span className="text-secondary">Ao Vivo</span>
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
              Assista de qualquer lugar. A presença de Deus não tem fronteiras.
            </p>
          </div>

          {/* YouTube Embed */}
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              videoId="b_HE28-RsUQ"
              title="TDM Church — Culto Ao Vivo"
              className="shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Programação"
            title="Horários dos Cultos"
            description="Venha adorar conosco. Temos cultos durante a semana para que você possa participar."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {serviceTimes.map((service) => (
              <div
                key={service.day}
                className="group bg-white rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-700 text-center"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary transition-colors duration-700">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {service.day}
                </h3>
                <p className="text-4xl font-bold text-secondary font-display mt-2">
                  {service.time}
                </p>
                <p className="mt-4 text-sm text-stone-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 sm:py-20 bg-cream">
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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Primeira Vez?
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Não se preocupe! Temos uma equipe pronta para recebê-lo. Vista-se
            como quiser e venha como está. Você é bem-vindo!
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quem-somos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors"
            >
              Conheça a Igreja
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
