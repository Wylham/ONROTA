import React from "react";
import {
  IconScan,
  IconShield,
  IconLink,
  IconTruck,
  IconArrowRight,
  IconCheck,
} from "../components/Icons";

export default function Hero() {
  return (
    <section id="home" className="pt-24 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Transforme sua operação logística com a OnRota
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            Nosso produto OnCad automatiza o cadastro de motoristas e caminhões
            com OCR, integra ao seu ERP via API e elimina erros humanos.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-indigo-600 hover:bg-indigo-700"
            >
              Conhecer o OnCad <IconArrowRight />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-black hover:bg-white/90"
            >
              Entre em contato
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-6 text-white/90 text-sm">
            <div className="flex items-start gap-2">
              <IconCheck /> <span>Profissionais e serviços especializados</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck /> <span>Qualidade e segurança de dados</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck /> <span>Resultados rápidos e mensuráveis</span>
            </div>
          </div>
        </div>

        {/* Card branco à direita com bullets (sem dependências) */}
        <div className="rounded-3xl bg-white text-black p-6 shadow-lg border border-slate-200">
          <div className="grid gap-5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-indigo-100">
                <IconScan className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <p className="font-medium">OCR de CNH e CRLV</p>
                <p className="text-sm text-slate-600">
                  Leitura automática e precisa em segundos.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-indigo-100">
                <IconTruck className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <p className="font-medium">Cadastro completo</p>
                <p className="text-sm text-slate-600">
                  Campos preenchidos sem digitação manual.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-indigo-100">
                <IconLink className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <p className="font-medium">Integração com ERP</p>
                <p className="text-sm text-slate-600">
                  Envio via API e rastreabilidade.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-indigo-100">
                <IconShield className="w-5 h-5 text-indigo-700" />
              </div>
              <div>
                <p className="font-medium">Zero erro humano</p>
                <p className="text-sm text-slate-600">
                  Validações e padronização automáticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
