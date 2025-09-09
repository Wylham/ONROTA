// src/sections/Hero.jsx
import React from "react";
import { IconArrowRight, IconCheck } from "../components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 md:pt-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-14">
        {/* bloco único (sem coluna do card) */}
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Transforme sua operação logística com a OnRota
          </h1>

          <p className="mt-5 text-white/80 text-lg">
            Nosso produto OnCad automatiza o cadastro de motoristas e caminhões com OCR, integra ao
            seu ERP via API e elimina erros humanos.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Conhecer o OnCad <IconArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-black hover:bg-white/90 transition-colors"
            >
              Entre em contato
            </a>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-6 text-white/90 text-sm">
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>Profissionais e serviços especializados</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>Qualidade e segurança de dados</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>Resultados rápidos e mensuráveis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
