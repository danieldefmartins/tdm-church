import type { Metadata } from "next";
import {
  Heart,
  CreditCard,
  ShieldCheck,
  ArrowRight,
  Church,
  Globe,
  Hammer,
  Gift,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Dízimos & Ofertas",
  description:
    "Contribua com a TDM Church. Dízimos, ofertas, missões e fundo de construção. Pague com cartão de crédito ou Zelle.",
};

const categories = [
  {
    icon: Church,
    title: "Dízimo",
    description: "A fidelidade nos dízimos sustenta a obra de Deus e a vida da nossa igreja.",
  },
  {
    icon: Gift,
    title: "Oferta",
    description: "Sua oferta voluntária abençoa e expande o ministério da TDM Church.",
  },
  {
    icon: Globe,
    title: "Missões",
    description: "Contribua para levar o evangelho e ajuda prática a comunidades ao redor do mundo.",
  },
  {
    icon: Hammer,
    title: "Construção",
    description: "Ajude a expandir e melhorar o espaço físico da nossa igreja para as próximas gerações.",
  },
];

const amounts = [25, 50, 100, 250, 500, 1000];

export default function OfertasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-28 sm:py-36 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
            Dízimos &amp; <span className="text-secondary">Ofertas</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Sua generosidade transforma vidas e sustenta a obra de Deus.
            Contribua com facilidade e segurança.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Categorias"
            title="Escolha Como Contribuir"
            description="Sua contribuição faz a diferença em diferentes áreas do ministério."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-stone-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-700 text-center cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary transition-colors duration-700">
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amount Selection */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Valor"
            title="Selecione o Valor"
            description="Escolha um valor sugerido ou insira um valor personalizado."
          />

          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-lg">
            <div className="grid grid-cols-3 gap-3 mb-6">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className="py-4 rounded-xl border-2 border-stone-200 text-primary font-bold text-lg hover:border-secondary hover:text-secondary transition-colors duration-300"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Outro valor
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold">
                  $
                </span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 rounded-xl border border-stone-200 text-primary font-semibold focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors"
                />
              </div>
            </div>

            <button className="w-full py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary-dark transition-colors flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              Contribuir com Cartão
            </button>

            <div className="flex items-center gap-2 justify-center mt-4">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span className="text-xs text-stone-400">
                Pagamento seguro e criptografado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Zelle Section */}
      <section id="zelle" className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="Zelle"
            title="Envie via Zelle"
            description="Envie seu dízimo ou oferta diretamente pela sua conta bancária usando o Zelle."
          />

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-stone-100">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
                Dados para Envio
              </p>
              <div className="bg-white rounded-xl p-6 border border-stone-200 inline-block">
                <p className="text-lg font-bold text-primary">
                  TDM Church — Templo dos Milagres
                </p>
                <p className="text-stone-500 mt-2">
                  Email ou telefone para Zelle:
                </p>
                <p className="text-xl font-bold text-secondary mt-1">
                  contato@tdmchurch.com
                </p>
              </div>
              <p className="mt-6 text-sm text-stone-500 leading-relaxed max-w-lg mx-auto">
                Ao enviar, inclua na descrição o tipo de contribuição (Dízimo,
                Oferta, Missões ou Construção) e seu nome para registro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Transparência e Confiança
          </h2>
          <p className="mt-4 text-white/70 text-lg leading-relaxed">
            A TDM Church presta contas de todas as contribuições. Cada centavo é
            utilizado com responsabilidade e transparência para a glória de Deus
            e o bem da comunidade.
          </p>
        </div>
      </section>
    </>
  );
}
