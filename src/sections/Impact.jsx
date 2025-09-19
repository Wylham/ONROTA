// src/sections/Impact.jsx
import React from "react";
import { IconValidacao, IconOCR, IconAPI } from "@/components/Icons";

const CARDS = [
  {
    icon: IconValidacao,
    title: "Risco sob controle",
    desc: "Validações automáticas de motorista e veículo (OCR + regras + score de risco) reduzem fraudes e liberam decisões seguras.",
  },
  {
    icon: IconOCR,
    title: "Menos digitação, mais precisão",
    desc: "Leitura automática de documentos via OCR elimina erros humanos, reduz retrabalho e acelera o cadastro, garantindo evidências de compliance.",
  },
  {
    icon: IconAPI,
    title: "Integração simples",
    desc: "APIs e Webhooks conectam o ONCAD ao seu ERP/TMS. Status, evidências e eventos fluem automaticamente entre sistemas.",
  },
];

export default function Impact({
  headingTop = "Por que escolher o ONCAD?",
  headingBottom = "Porque por aqui, só há vantagens!",
  cards = CARDS,
}) {
  return (
    <section className="bg-white text-slate-900 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-2 pt-12 md:pt-16 pb-2 md:pb-4">
        {/* Heading */}
        <header className="text-center mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{headingTop}</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">{headingBottom}</p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm flex flex-col"
            >
              <Icon className="w-10 h-10 text-indigo-600" />
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-slate-600 flex-grow">{desc}</p>

              <a
                href="#planos"
                className="mt-5 inline-block font-semibold text-indigo-700 hover:text-indigo-900 transition-colors no-underline"
              >
                Ver planos
              </a>
            </article>
          ))}
        </div>

        {/* Logos de integrações */}
        <div className="mt-12 md:mt-14">
          <p className="text-center text-slate-500">
            Realizamos integrações com os principais sistemas do mercado.
          </p>
          <ul className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 opacity-90">
            <li className="flex items-center justify-center h-28 md:h-32">
              <img src="/integrations/atua.webp" alt="Atua" className="max-h-full object-contain" />
            </li>
            <li className="flex items-center justify-center h-28 md:h-32">
              <img
                src="/integrations/sankhya.webp"
                alt="Sankhya"
                className="max-h-full object-contain"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
