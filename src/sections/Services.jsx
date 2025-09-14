// src/sections/Services.jsx
import React from "react";
import { IconOCR, IconCadastro, IconAPI, IconValidacao } from "@/components/icons";

export default function Services() {
  const ASSETS = {
    mockup: "/mockups/phone-oncad2.png",
  };

  const features = [
    {
      icon: <IconOCR className="h-8 w-8 text-blue-500" />,
      title: "OCR em PDFs de CNH e CRLV",
      desc: "Leitura precisa, extraindo campos em segundos.",
    },
    {
      icon: <IconCadastro className="h-8 w-8 text-blue-500" />,
      title: "Cadastro automático",
      desc: "Preenche motoristas e veículos sem digitação manual.",
    },
    {
      icon: <IconAPI className="h-8 w-8 text-blue-500" />,
      title: "Integração por API",
      desc: "Envio direto ao seu ERP com logs e rastreabilidade.",
    },
    {
      icon: <IconValidacao className="h-8 w-8 text-blue-500" />,
      title: "Validações e regras",
      desc: "Padronização e antifraude configuráveis para a operação.",
    },
  ];

  return (
    <section
      id="servicos"
      className="relative bg-black text-white py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* HERO estilo anexo */}
        <div className="grid items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-white/80">OnCad</p>
            <h2 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Automatize seu <br className="hidden md:block" />
              cadastro em minutos
            </h2>
            <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl">
              Construa um fluxo que elimina digitação manual, valida dados por OCR e integra direto
              ao seu ERP com rastreabilidade completa.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                           bg-blue-600 hover:bg-blue-500 text-white transition"
              >
                Fale Conosco
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                           border border-white/30 hover:border-white/60 bg-transparent text-white transition"
              >
                Conheça os planos
              </a>
            </div>
          </div>

          <div className="relative text-center">
            {ASSETS.mockup ? (
              <img
                src={ASSETS.mockup}
                alt="Mockup do OnCad"
                className="w-full h-auto md:max-h-[720px] lg:max-h-[820px] xl:max-h-[900px]
                           object-contain mx-auto select-none pointer-events-none"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[16/9] flex items-center justify-center text-xs text-white/60 border border-dashed border-white/20 rounded-xl">
                Adicione /mockups/phone-oncad2.png
              </div>
            )}
          </div>
        </div>

        {/* BLOCO DE FEATURES (cards) */}
        <div className="mt-20">
          <h3 className="text-center text-2xl md:text-3xl font-bold mb-12">
            Recursos que irão inovar o seu cadastro
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] transition"
              >
                <div className="mb-4">{f.icon}</div>
                <p className="font-semibold">{f.title}</p>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Botão centralizado */}
          <div className="mt-12 flex justify-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold
                         bg-blue-600 hover:bg-blue-500 text-white transition"
            >
              Conhecer planos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
