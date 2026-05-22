import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a TDM Church. Envie uma mensagem, ligue ou visite-nos em 539 Salem St, Malden, MA 02148.",
};

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/80" />
        <div className="absolute inset-0 bg-[url('/images/church-building.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
            Fale Conosco
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Entre em <span className="text-secondary italic">Contato</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Tem alguma dúvida, pedido de oração ou quer visitar a igreja?
            Ficaremos felizes em ouvir você.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <SectionHeading
                label="Mensagem"
                title="Envie Sua Mensagem"
                center={false}
              />

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-black focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-black focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(617) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-black focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-black focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <SectionHeading
                label="Informações"
                title="Nossos Contatos"
                center={false}
              />

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-100">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Endereço</p>
                    <p className="text-sm text-stone-500 mt-1">
                      539 Salem St, Malden, MA 02148
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-100">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Telefone</p>
                    <a
                      href="tel:+16174042589"
                      className="text-sm text-stone-500 mt-1 hover:text-secondary transition-colors"
                    >
                      (617) 404-2589
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-100">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-black">E-mail</p>
                    <a
                      href="mailto:contato@tdmchurch.com"
                      className="text-sm text-stone-500 mt-1 hover:text-secondary transition-colors"
                    >
                      contato@tdmchurch.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-stone-100">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-black">Horários dos Cultos</p>
                    <p className="text-sm text-stone-500 mt-1">
                      Domingo: 9:30 &amp; 19:00
                    </p>
                    <p className="text-sm text-stone-500">Quarta: 19:45</p>
                  </div>
                </div>
              </div>

              {/* Map */}
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
        </div>
      </section>
    </>
  );
}
