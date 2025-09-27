// src/sections/Services.jsx
import React from "react";
import { IconOCR, IconCadastro, IconAPI, IconValidacao } from "@/components/icons.jsx";

export default function Services() {
  const ASSETS = {
    mockup: "/mockups/phone-oncad2.webp",
    oncadLogo: "/logos/opt/oncad.webp",
  };

  const features = [
    {
      icon: <IconOCR className="h-7 w-7" style={{ color: "#1da7e5" }} />,
      title: "OCR em PDFs de CNH e CRLV",
      desc: "Leitura precisa, extraindo campos em segundos.",
    },
    {
      icon: <IconCadastro className="h-7 w-7" style={{ color: "#1da7e5" }} />,
      title: "Cadastro automático",
      desc: "Preenche motoristas e veículos sem digitação manual.",
    },
    {
      icon: <IconAPI className="h-7 w-7" style={{ color: "#1da7e5" }} />,
      title: "Integração por API",
      desc: "Envio direto ao seu ERP com logs e rastreabilidade.",
    },
    {
      icon: <IconValidacao className="h-7 w-7" style={{ color: "#1da7e5" }} />,
      title: "Validações e regras",
      desc: "Padronização e antifraude configuráveis para a operação.",
    },
  ];

  return (
    <section
      id="servicos"
      className="relative bg-[#121212] text-white py-12 md:py-16 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Cabeçalho + Mockup */}
        <div className="grid items-center gap-8 md:gap-10 lg:gap-12 md:grid-cols-2">
          <div>
            {/* Logo OnCad */}
            <img
              src={ASSETS.oncadLogo}
              alt="OnCad"
              className="h-10 md:h-11 w-auto opacity-90"
              loading="lazy"
              decoding="async"
            />

            <h2 className="mt-3 text-[32px] md:text-[44px] font-extrabold leading-[1.08] tracking-tight">
              Automatize seu cadastro em segundos com o OnCad.
            </h2>

            <p className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-relaxed max-w-xl">
              Construa um fluxo que elimina digitação manual, valida dados por OCR e integra direto
              ao seu ERP com rastreabilidade completa.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-[#1da7e5] hover:bg-[#168fc3] transition"
              >
                Agendar Demo Gratuita
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold border border-white/20 hover:bg-white/10 text-white transition"
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
                className="w-full h-auto md:max-h-[640px] lg:max-h-[720px] object-contain mx-auto select-none pointer-events-none"
                loading="lazy"
              />
            ) : (
              <div className="w-full aspect-[16/9] flex items-center justify-center text-xs text-white/60 border border-dashed border-white/15 rounded-xl">
                Adicione /mockups/phone-oncad2.webp
              </div>
            )}
          </div>
        </div>

        {/* PAINEL DE FEATURES */}
        <div className="mt-10 md:mt-12">
          <div className="rounded-3xl bg-[#101216] text-white p-6 md:p-8 ring-1 ring-white/10 shadow-lg">
            <h3 className="text-center text-[22px] md:text-[26px] font-bold mb-8 md:mb-10">
              Recursos que irão inovar o seu cadastro
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10 hover:bg-white/8 transition"
                >
                  <div className="mb-3">{f.icon}</div>
                  <p className="font-semibold leading-tight">{f.title}</p>
                  <p className="mt-2 text-sm text-white/75">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA final dentro do painel */}
            <div className="mt-8 md:mt-10 flex justify-center">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-[#1da7e5] hover:bg-[#168fc3] transition"
              >
                Conhecer planos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
