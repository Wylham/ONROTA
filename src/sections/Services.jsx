// src/sections/Services.jsx
import React from "react";
import oncadLogo from "../assets/oncad-logo.png";
import { IconScan, IconTruck, IconLink, IconShield, IconArrowRight } from "../components/Icons";

export default function Services() {
  return (
    <section id="servicos" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Cabeçalho enxuto */}
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Conheça o <span className="text-indigo-400">OnCad</span>
          </h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Automatize cadastros com OCR (CNH/CRLV), integre ao seu ERP via API e elimine erros
            humanos com validações e rastreabilidade ponta a ponta.
          </p>
        </header>

        {/* Grid principal: sem espaços sobrando e preenchendo a altura visual */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          {/* Lado do conteúdo (informações do app) */}
          <div className="md:col-span-6 flex">
            <div className="my-auto w-full">
              {/* Bullets com ícones (compactos) */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <li className="flex items-start gap-3">
                  <div className="shrink-0 p-2 rounded-xl bg-indigo-500/15">
                    <IconScan className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="leading-snug">
                    <p className="font-semibold">OCR de CNH e CRLV</p>
                    <p className="text-sm text-white/70">
                      Leitura automática e precisa em segundos.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="shrink-0 p-2 rounded-xl bg-indigo-500/15">
                    <IconTruck className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="leading-snug">
                    <p className="font-semibold">Cadastro completo</p>
                    <p className="text-sm text-white/70">
                      Campos preenchidos sem digitação manual.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="shrink-0 p-2 rounded-xl bg-indigo-500/15">
                    <IconLink className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="leading-snug">
                    <p className="font-semibold">Integração com ERP</p>
                    <p className="text-sm text-white/70">Envio via API com rastreabilidade.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="shrink-0 p-2 rounded-xl bg-indigo-500/15">
                    <IconShield className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="leading-snug">
                    <p className="font-semibold">Zero erro humano</p>
                    <p className="text-sm text-white/70">Validações e padronização automáticas.</p>
                  </div>
                </li>
              </ul>

              {/* CTA compacta */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-indigo-600 hover:bg-indigo-500 transition-colors"
                >
                  Solicitar demonstração <IconArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#clientes"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-white/15 hover:border-white/30 transition-colors"
                >
                  Ver clientes
                </a>
              </div>
            </div>
          </div>

          {/* Lado da logo — novo “painel inovador” sem textos abaixo e sem sobras */}
          <div className="md:col-span-6 flex">
            <div className="relative w-full my-auto">
              {/* aura externa (profundidade) */}
              <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />

              {/* painel principal com shape inovador */}
              <div
                className="
                  relative overflow-hidden isolate
                  rounded-[2rem]
                  border border-white/10
                  bg-gradient-to-br from-white/10 to-white/[0.04]
                  backdrop-blur-xl shadow-2xl
                  min-h-[22rem]
                  flex items-center justify-center
                "
              >
                {/* faixa diagonal translúcida - “transbordando” */}
                <div
                  className="
                    absolute -left-24 md:-left-20 -top-16
                    h-64 w-[130%] rotate-[-8deg]
                    bg-gradient-to-r from-indigo-500/30 via-transparent to-transparent
                    blur-xl
                  "
                />

                {/* layers de brilho */}
                <div className="absolute -inset-24 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.08),transparent_35%)]" />
                <div className="absolute -inset-28 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_60%)]" />

                {/* Logo com leve flutuação */}
                <img
                  src={oncadLogo}
                  alt="OnCad"
                  className="relative w-64 md:w-72 h-auto drop-shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-transform duration-500 ease-out will-change-transform
                            group-hover:translate-y-[-2px]"
                />

                {/* sombra de projeção */}
                <div className="absolute -bottom-6 left-10 right-10 h-12 rounded-full blur-2xl bg-black/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
