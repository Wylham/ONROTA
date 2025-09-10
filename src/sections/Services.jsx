import React from "react";
// se você usa logos do OnCad / prints, mantenha seus imports

export default function Services() {
  return (
    <section id="servicos" className="bg-black text-white py-16 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Serviços</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Automatização de cadastro (OCR), integração via API, validações e rastreabilidade para sua
          operação logística.
        </p>

        {/* Exemplo: grid responsivo para cards ou prints do app */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Coloque aqui seus cards/prints já existentes */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold">OCR de CNH/CRLV</p>
            <p className="mt-1 text-sm text-white/70">Leitura automática e precisa em segundos.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold">Integração com ERP</p>
            <p className="mt-1 text-sm text-white/70">Envio via API com rastreabilidade.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold">Validações</p>
            <p className="mt-1 text-sm text-white/70">
              Padronização automática e redução de erros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
