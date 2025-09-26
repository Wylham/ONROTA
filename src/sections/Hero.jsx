// src/sections/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "88vh",
        backgroundImage: "url('/mockups/bg-robot.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#121212", // dark fallback
      }}
    >
      {/* Degradê suave para legibilidade (curva que você definiu) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.62) 42%, rgba(0,0,0,0.38) 65%, rgba(0,0,0,0.18) 75%, rgba(0,0,0,0.00) 95%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 md:py-20 text-white">
        <div className="max-w-[22rem] sm:max-w-xl md:max-w-3xl space-y-5 md:space-y-6">
          {/* Eyebrow com a mesma estética do título, menor */}
          <p className="font-extrabold tracking-tight leading-tight text-[22px] sm:text-[28px] md:text-[30px]">
            Mais segurança, menos riscos:
          </p>

          {/* Título em duas linhas controladas */}
          <h1 className="font-extrabold tracking-tight leading-[1.04]">
            <span className="block text-[30px] sm:text-[40px] md:text-[48px] sm:whitespace-nowrap">
              O futuro do transporte
            </span>
            <span className="block text-[36px] sm:text-[48px] md:text-[68px] text-[#1da7e5]">
              é OnRota.
            </span>
          </h1>

          {/* Parágrafo (aproximado das infos seguintes) */}
          <p className="text-white/90 text-[14px] md:text-[15px] leading-relaxed md:leading-[1.7] max-w-[65ch]">
            Combinamos <strong>tecnologia antifraude</strong> e <strong>automação</strong> para
            eliminar erros
            <br /> manuais, reduzir custos e aumentar a confiabilidade das suas rotas.
          </p>

          {/* Observações — texto pequeno e coeso */}
          <p className="text-white/75 text-[12px] md:text-[12.5px] leading-snug max-w-[70ch] mt-1">
            Foco exclusivo no transporte rodoviário, Sistema antifraude para validação e <br />
            Automação logística que elimina erros.
          </p>

          {/* CTAs — primário (azul padrão) + fantasma */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-[13px] font-medium bg-[#168fc3] hover:bg-[#168fc3]"
            >
              Conhecer mais
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 border border-white/20 text-white/90 hover:bg-white/10 text-[13px]"
            >
              Nossos Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
