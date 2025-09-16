// src/sections/Proof.jsx
import React from "react";
import { WHATSAPP_LINK } from "@/constants";

/** Ajuste esses dados com números reais de clientes/cases */
const KPIS = [
  { label: "Redução de fraudes", value: "37%", caption: "Média após 60 dias" },
  { label: "Agilidade no cadastro", value: "-58%", caption: "Tempo por motorista" },
  { label: "Produtividade da equipe", value: "+22%", caption: "Cadastros/hora" },
  { label: "Aprovação em 1ª análise", value: "81%", caption: "Sem retrabalho" },
];

const TESTIMONIALS = [
  {
    name: "Bruna Andrade",
    role: "Gerente de Operações",
    company: "ShrLog",
    quote:
      "O ONCAD padronizou o cadastro e reduziu drasticamente retrabalho. Em 2 semanas já vimos ganho real.",
  },
  {
    name: "Rafael Mota",
    role: "Diretor",
    company: "Boa Viagem",
    quote:
      "Passamos a ter visão clara do risco por motorista. Decisão rápida, com segurança jurídica.",
  },
  {
    name: "Paula Reis",
    role: "Coordenadora",
    company: "Pianetto",
    quote:
      "Os alertas automáticos cortaram passos manuais. A equipe agradece — e o cliente final também.",
  },
];

function encodeMsg(msg) {
  return encodeURIComponent(msg);
}

export default function Proof() {
  const whatsMsg =
    "Acabei de ver o site da OnRota e quero saber mais sobre o ONCAD — como vocês mantêm minha operação mais segura, eficiente e livre de fraude. Podemos falar?";

  return (
    <section id="prova-social" className="relative py-16 sm:py-20">
      {/* fundo leve para destacar a seção */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/0 via-slate-900/20 to-slate-900/0 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4">
        {/* título */}
        <header className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Resultados que falam por si
          </h2>
          <p className="mt-2 text-slate-300">
            Alguns impactos observados por clientes após implementar o ONCAD.
          </p>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold">{kpi.value}</div>
              <div className="mt-1 text-sm font-medium">{kpi.label}</div>
              <div className="mt-1 text-xs text-slate-400">{kpi.caption}</div>
            </div>
          ))}
        </div>

        {/* Depoimentos: carrossel horizontal no mobile, grid no desktop */}
        <div className="no-scrollbar -mx-4 px-4 overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-[85%] gap-4 md:grid-flow-row md:auto-cols-auto md:grid-cols-3 md:gap-6">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <p className="text-slate-200 leading-relaxed">“{t.quote}”</p>

                <div className="mt-5 flex items-center gap-3">
                  {/* avatar com iniciais */}
                  <div className="h-10 w-10 grid place-items-center rounded-full bg-white/10 text-sm font-bold">
                    {t.name
                      .split(" ")
                      .slice(0, 2)
                      .map((s) => s[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-slate-400">
                      {t.role} • {t.company}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA contextual */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href={`${WHATSAPP_LINK}?text=${encodeMsg(whatsMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold
                       bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors
                       shadow-lg shadow-blue-600/20"
            onClick={() => {
              window?.gtag?.("event", "cta_whatsapp_prova_social", {
                section: "prova_social",
                action: "click",
              });
            }}
          >
            Falar com um especialista
          </a>

          <p className="text-sm text-slate-400">
            Quer ver na prática? No próximo passo vamos liberar demo em vídeo e teste.
          </p>
        </div>
      </div>
    </section>
  );
}
