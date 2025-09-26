// src/sections/Impact.jsx
import React from "react";
import { IconValidacao, IconOCR, IconAPI } from "@/components/icons.jsx";

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

        {/* Cards: fundo azul #1da7e5 + textos brancos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="rounded-2xl bg-[#1da7e5] p-6 md:p-8 shadow-sm flex flex-col"
            >
              <Icon className="w-10 h-10 text-white" />
              <h3 className="mt-5 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-white/95 flex-grow">{desc}</p>

              <a
                href="#planos"
                className="mt-5 inline-block font-semibold text-white hover:opacity-90 transition-opacity no-underline"
              >
                Ver planos
              </a>
            </article>
          ))}
        </div>

        {/* Logos de integrações */}
        <div className="mt-10 md:mt-12">
          <p className="text-center text-sm md:text-base text-slate-500">
            Realizamos integrações com os principais sistemas do mercado.
          </p>

          {/* MOBILE: 3 logos na MESMA LINHA (sem quebra). DESKTOP: layout espaçado como antes */}
          <ul
            className="
              mt-6 md:mt-8
              flex flex-nowrap md:flex-wrap
              items-center justify-between md:justify-center
              gap-x-4 md:gap-x-14 gap-y-0 md:gap-y-10
            "
          >
            <li className="w-1/3 md:w-auto flex items-center justify-center h-16 md:h-32">
              <img
                src="/integrations/atua.webp"
                alt="Atua"
                className="max-h-full object-contain"
                loading="lazy"
              />
            </li>
            <li className="w-1/3 md:w-auto flex items-center justify-center h-16 md:h-32">
              <img
                src="/integrations/sankhya.webp"
                alt="Sankhya"
                className="max-h-full object-contain"
                loading="lazy"
              />
            </li>
            <li className="w-1/3 md:w-auto flex items-center justify-center h-16 md:h-32">
              <img
                src="/integrations/sat.webp"
                alt="Sat"
                className="max-h-full object-contain"
                loading="lazy"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
