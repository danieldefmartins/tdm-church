import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso da TDM Church — Templo dos Milagres.",
};

export default function TermosPage() {
  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-display mb-8">
          Termos de Uso
        </h1>

        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 text-sm leading-relaxed">
          <p>
            <strong>Última atualização:</strong> Maio de 2026
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            1. Aceitação dos Termos
          </h2>
          <p>
            Ao acessar e utilizar o site da TDM Church (tdmchurch.com), você
            concorda com estes termos de uso. Se não concordar, por favor não
            utilize o site.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            2. Uso do Site
          </h2>
          <p>
            Este site é disponibilizado para fins informativos sobre a TDM
            Church, seus ministérios, eventos e atividades. O conteúdo é
            protegido por direitos autorais e não pode ser reproduzido sem
            autorização.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            3. Doações e Contribuições
          </h2>
          <p>
            Todas as doações realizadas através do site são voluntárias e
            processadas por provedores de pagamento seguros. Doações não são
            reembolsáveis, exceto em casos de erro comprovado.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            4. Conteúdo de Terceiros
          </h2>
          <p>
            Nosso site pode conter links para sites de terceiros. Não nos
            responsabilizamos pelo conteúdo ou práticas de privacidade desses
            sites.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Contato</h2>
          <p>
            Para questões sobre estes termos, entre em contato:
            <br />
            Email: contato@tdmchurch.com
            <br />
            Telefone: (781) 480-3125
          </p>
        </div>
      </div>
    </section>
  );
}
