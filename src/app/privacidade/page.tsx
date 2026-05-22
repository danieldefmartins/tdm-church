import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da TDM Church — Templo dos Milagres.",
};

export default function PrivacidadePage() {
  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary font-display mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-stone max-w-none space-y-6 text-stone-700 text-sm leading-relaxed">
          <p>
            <strong>Última atualização:</strong> Maio de 2026
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            1. Informações que Coletamos
          </h2>
          <p>
            A TDM Church coleta informações fornecidas voluntariamente por você,
            incluindo nome, email, telefone e mensagens enviadas através dos
            nossos formulários de contato, cadastro de membros e pedidos de
            oração.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            2. Como Usamos Suas Informações
          </h2>
          <p>
            Utilizamos suas informações para: comunicação sobre eventos e
            atividades da igreja, processamento de contribuições e doações,
            responder a suas perguntas e pedidos de oração, e enviar informações
            relevantes sobre nossos ministérios.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            3. Proteção de Dados
          </h2>
          <p>
            Implementamos medidas de segurança para proteger suas informações
            pessoais. Dados de pagamento são processados por provedores de
            pagamento seguros e não são armazenados em nossos servidores.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">
            4. Compartilhamento
          </h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais
            com terceiros, exceto quando necessário para processamento de
            pagamentos ou quando exigido por lei.
          </p>

          <h2 className="text-xl font-bold text-primary mt-8">5. Contato</h2>
          <p>
            Para questões sobre privacidade, entre em contato:
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
