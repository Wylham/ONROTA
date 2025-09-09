// src/sections/Services.jsx
import React from "react";
import oncadLogo from "../assets/oncad-logo.png";
import { IconScan, IconTruck, IconLink, IconShield, IconArrowRight } from "../components/Icons";

// Placeholder (portrait) para prints de smartphone
const SCREEN_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0b0b0f"/>
        <stop offset="100%" stop-color="#141420"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <g fill="none" stroke="#7aa2ff" stroke-opacity="0.35">
      <rect x="150" y="250" width="600" height="1100" rx="40"/>
      <circle cx="220" cy="340" r="120"/>
      <circle cx="700" cy="1280" r="150"/>
    </g>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
          fill="#9aa4ff" font-size="34" font-family="Inter, Arial, sans-serif" opacity="0.85">
      Preview (placeholder)
    </text>
  </svg>
`);

export default function Services() {
  return (
    <section id="servicos" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Cabeçalho */}
        <header className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Conheça o <span className="text-indigo-400">OnCad</span>
          </h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Automatize cadastros com OCR (CNH/CRLV), integre ao seu ERP via API e elimine erros
            humanos com validações e rastreabilidade.
          </p>
        </header>

        {/* Linha 1 — Info do app + LOGO em retângulo cinza */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Coluna: informações do app */}
          <div className="md:col-span-7">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <li className="flex items-start gap-3">
                <div className="shrink-0 p-2 rounded-xl bg-indigo-500/15">
                  <IconScan className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="leading-snug">
                  <p className="font-semibold">OCR de CNH e CRLV</p>
                  <p className="text-sm text-white/70">Leitura automática e precisa em segundos.</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="shrink-0 p-2 rounded-xl bg-indigo-500/15">
                  <IconTruck className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="leading-snug">
                  <p className="font-semibold">Cadastro completo</p>
                  <p className="text-sm text-white/70">Campos preenchidos sem digitação manual.</p>
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

            <div className="mt-8">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                Solicitar demonstração <IconArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna: LOGO em retângulo cinza */}
          <div className="md:col-span-5">
            <div
              className="
                rounded-3xl bg-neutral-900 border border-neutral-700
                p-8 md:p-10 shadow-2xl flex items-center justify-center
                min-h-[220px]
              "
            >
              <img
                src={oncadLogo}
                alt="OnCad"
                className="w-56 md:w-64 lg:w-72 h-auto select-none"
                draggable="false"
                onError={(e) => {
                  e.currentTarget.src = LOGO_ICON_PLACEHOLDER;
                }}
              />
            </div>
          </div>
        </div>

        {/* Linha 2 — Prints do app (smartphone) com moldura */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-5">Mais sobre o OnCad</h3>

          {/* Grid de “phones” — 3 no desktop, empilha no mobile */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/assets/app-screen-1.png",
              "/assets/app-screen-2.png",
              "/assets/app-screen-3.png",
            ].map((src, i) => (
              <div
                key={i}
                className="
                  relative mx-auto w-full max-w-[320px]
                  rounded-[1.7rem] bg-neutral-900 border border-neutral-800 shadow-xl
                  p-2
                "
              >
                {/* “Moldura” do smartphone (borda interna) */}
                <div className="rounded-[1.3rem] bg-black overflow-hidden ring-1 ring-white/5">
                  {/* notch (bem sutil) */}
                  <div className="mx-auto mt-2 mb-1 h-1.5 w-24 rounded-full bg-white/10" />
                  {/* Tela (imagem) — 9:16 */}
                  <div className="px-2 pb-2">
                    <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg bg-white/5">
                      <img
                        src={src}
                        alt={`Tela do OnCad ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = SCREEN_PLACEHOLDER;
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* sombra suave embaixo */}
                <div className="absolute -bottom-3 left-10 right-10 h-6 rounded-full bg-black/60 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
