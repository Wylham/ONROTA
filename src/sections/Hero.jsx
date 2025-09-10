import React from "react";
import { IconArrowRight, IconCheck } from "../components/Icons";
import robotSrc from "../assets/robot.png"; // ajuste o caminho se necessário

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 md:pt-24 pb-24 md:pb-36 scroll-mt-24 md:scroll-mt-28"
    >
      {/* Overlay para legibilidade sobre o background global */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.40)_35%,rgba(0,0,0,0.55)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* MOBILE (até md) */}
        <div className="md:hidden">
          <h1 className="text-[34px] leading-[1.1] font-extrabold text-white">
            Transforme sua operação logística com a OnRota
          </h1>
          <p className="mt-3 text-white/85">
            Cadastro com OCR, integração via API e validações automáticas — menos erros, mais
            velocidade.
          </p>

          <div className="mt-5 grid gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-blue-600 hover:bg-blue-500 transition"
            >
              Conhecer o OnCad <IconArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-white text-black hover:bg-white/90 transition"
            >
              Entre em contato
            </a>
          </div>

          <div className="mt-6 grid gap-3 text-white/90 text-sm">
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5 w-4 h-4 text-blue-400" />
              <span>Profissionais e serviços especializados</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5 w-4 h-4 text-blue-400" />
              <span>Qualidade e segurança de dados</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5 w-4 h-4 text-blue-400" />
              <span>Resultados rápidos e mensuráveis</span>
            </div>
          </div>

          {/* Robô MOBILE — centralizado HORIZONTALMENTE e flutuando */}
          <div className="relative mt-8 mx-auto w-[240px] sm:w-[280px]">
            {/* AURA (brilho abaixo) */}
            <div className="pointer-events-none absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 rounded-full bg-blue-500/30 blur-2xl opacity-70" />
            <img
              src={robotSrc}
              alt=""
              className="w-full h-auto animate-float drop-shadow-[0_25px_55px_rgba(59,130,246,0.35)]"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>

        {/* ===== DESKTOP / TABLET (md+) ===== */}
        <div className="hidden md:grid lg:grid-cols-2 gap-10 items-center">
          {/* Coluna ESQUERDA: texto/CTAs */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              Transforme sua operação logística com a OnRota
            </h1>
            <p className="mt-5 text-white/85 text-lg">
              Nosso produto OnCad automatiza o cadastro de motoristas e caminhões com OCR, integra
              ao seu ERP via API e elimina erros humanos.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-blue-600 hover:bg-blue-500 transition"
              >
                Conhecer o OnCad <IconArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-black hover:bg-white/90 transition"
              >
                Entre em contato
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-6 text-white/90 text-sm">
              <div className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-400" />
                <span>Profissionais e serviços especializados</span>
              </div>
              <div className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-400" />
                <span>Qualidade e segurança de dados</span>
              </div>
              <div className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-400" />
                <span>Resultados rápidos e mensuráveis</span>
              </div>
            </div>
          </div>

          {/* Coluna DIREITA: Robô flutuante centralizado HORIZONTALMENTE */}
          <div className="relative flex items-end justify-center">
            {/* Aura/Glow abaixo do robô */}
            <div className="pointer-events-none absolute -bottom-2 w-3/4 h-10 rounded-full bg-blue-500/30 blur-3xl opacity-70" />
            <img
              src={robotSrc}
              alt=""
              className="w-[340px] lg:w-[420px] h-auto animate-float drop-shadow-[0_30px_65px_rgba(59,130,246,0.35)]"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
