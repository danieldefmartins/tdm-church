import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Users,
  Music,
  Mic,
  Coffee,
  BookOpen,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Confira a agenda de eventos da TDM Church. Cultos, conferências, encontros de jovens, podcast e muito mais.",
};

const events = [
  {
    title: "Culto de Domingo",
    date: "25 Mai",
    day: "25",
    month: "Mai",
    time: "9:30",
    description:
      "Culto de celebração com louvor, adoração e pregação da Palavra de Deus. Venha adorar conosco!",
    location: "TDM Church, 539 Salem St, Malden MA",
    icon: Music,
    category: "Culto",
    recurring: true,
  },
  {
    title: "Culto de Quarta — Oração e Estudo",
    date: "28 Mai",
    day: "28",
    month: "Mai",
    time: "20:00",
    description:
      "Estudo bíblico aprofundado e momento de oração e intercessão pela igreja e famílias.",
    location: "TDM Church, 539 Salem St, Malden MA",
    icon: BookOpen,
    category: "Culto",
    recurring: true,
  },
  {
    title: "TDM Talk — Tiago Brunet",
    date: "30 Mai",
    day: "30",
    month: "Mai",
    time: "19:30",
    description:
      "Entrevista exclusiva com Tiago Brunet, autor best-seller, fundador do Instituto Destiny, coach e palestrante internacional.",
    location: "TDM Church, 539 Salem St, Malden MA",
    icon: Mic,
    category: "Podcast",
    recurring: false,
  },
  {
    title: "TDM Youth — Encontro Semanal",
    date: "30 Mai",
    day: "30",
    month: "Mai",
    time: "20:00",
    description:
      "Encontro semanal do ministério jovem com louvor, Palavra e comunidade.",
    location: "TDM Church, 539 Salem St, Malden MA",
    icon: Users,
    category: "Youth",
    recurring: true,
  },
  {
    title: "TDM Mastermind Coffee",
    date: "7 Jun",
    day: "7",
    month: "Jun",
    time: "8:00",
    description:
      "Café da manhã de networking para empresários cristãos. Vagas limitadas — garanta a sua!",
    location: "TDM Church, 539 Salem St, Malden MA",
    icon: Coffee,
    category: "Mastermind",
    recurring: false,
  },
  {
    title: "Noite de Adoração",
    date: "14 Jun",
    day: "14",
    month: "Jun",
    time: "20:00",
    description:
      "Uma noite especial de louvor e adoração com a banda da TDM Church. Traga sua família!",
    location: "TDM Church, 539 Salem St, Malden MA",
    icon: Music,
    category: "Especial",
    recurring: false,
  },
];

export default function EventosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('/images/Photos-Videos/526804262_18396594418143219_6247029674856534470_n.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
            Agenda
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Próximos <span className="text-secondary italic">Eventos</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Não perca nenhum momento especial. Confira a programação completa
            da TDM Church.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-6">
            {events.map((event, i) => (
              <div
                key={`${event.title}-${i}`}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-700"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Date Box */}
                  <div className="w-20 h-20 bg-black rounded-2xl flex flex-col items-center justify-center text-white shrink-0 group-hover:bg-secondary transition-colors duration-700">
                    <span className="text-2xl font-bold leading-none">
                      {event.day}
                    </span>
                    <span className="text-xs uppercase tracking-wider mt-0.5">
                      {event.month}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {event.category}
                      </span>
                      {event.recurring && (
                        <span className="px-2.5 py-0.5 bg-stone-100 text-stone-500 text-[10px] font-bold uppercase tracking-wider rounded-full">
                          Semanal
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-black group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                      {event.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-1.5 text-sm text-stone-500">
                        <Clock className="w-4 h-4 text-secondary" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-stone-500">
                        <MapPin className="w-4 h-4 text-secondary" />
                        TDM Church, Malden MA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-black">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Calendar className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Quer Receber Atualizações?
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            Entre em contato e receba informações sobre nossos eventos
            diretamente no seu celular.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors duration-700"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
