// src/sections/Hero.jsx
import React from "react";
import robotImg from "../assets/robot.png";
import { IconArrowRight, IconCheck } from "../components/Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        pt-14 md:pt-20
        bg-black md:bg-transparent
      "
    >
      {/* DESKTOP/TABLET: imagem de fundo */}
      <div
        className="hidden md:block absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* MOBILE: base preta */}
      <div className="absolute inset-0 -z-30 block md:hidden bg-black" aria-hidden="true" />

      {/* MOBILE: acentos azuis (radiais) nas laterais para não ficar chapado */}
      <div
        className="absolute -z-20 md:hidden pointer-events-none right-[-20%] top-[-10%] w-[140%] h-[140%] opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(60% 55% at 85% 35%, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0.15) 35%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -z-20 md:hidden pointer-events-none left-[-35%] bottom-[-15%] w-[150%] h-[150%] opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(55% 50% at 10% 85%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.10) 35%, rgba(0,0,0,0) 68%)",
        }}
        aria-hidden="true"
      />

      {/* DESKTOP: overlay suave atrás do texto */}
      <div
        className="
          pointer-events-none
          absolute left-0 top-0 bottom-0 w-[68%] max-w-[780px]
          -z-10 hidden md:block
          bg-gradient-to-r from-black/70 via-black/45 to-transparent
        "
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-8 md:py-14 grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* COLUNA DE TEXTO */}
        <div className="relative">
          {/* Mobile: NÃO uso overlay sólido para não matar a aura do robô.
              Se quiser reforçar, descomente o bloco abaixo e ajuste opacidade. */}
          {/*
          <div
            className="absolute inset-0 -z-10 rounded-2xl md:hidden bg-gradient-to-r from-black/85 via-black/60 to-transparent"
            aria-hidden="true"
          />
          */}
          <h1 className="text-[28px] leading-[1.15] md:text-5xl md:leading-tight font-extrabold">
            Mais segurança, menos riscos: o futuro do transporte é{" "}
            <span className="text-blue-400">ONROTA.</span>
          </h1>

          <p className="mt-3 md:mt-5 text-white/80 text-[15px] md:text-lg max-w-xl">
            Nós combinamos <strong>tecnologia antifraude</strong> e <strong>automação</strong> para
            eliminar erros manuais e aumentar a confiabilidade das suas rotas. Reduza custos e opere
            com mais segurança.
          </p>

          <div className="mt-5 md:mt-7 flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 md:px-5 md:py-3 bg-indigo-600 hover:bg-indigo-700 text-sm md:text-base"
            >
              Conhecer o OnCad <IconArrowRight />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 md:px-5 md:py-3 bg-white text-black hover:bg-white/90 text-sm md:text-base"
            >
              Fale com a OnRota
            </a>
          </div>

          <div className="mt-6 md:mt-8 grid gap-3 text-white/90 text-sm">
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>Foco exclusivo no transporte rodoviário</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>Sistema antifraude para validação</span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>Automação logística que elimina erros</span>
            </div>
          </div>
        </div>

        {/* COLUNA DO ROBÔ — maior + aura + sombra de chão */}
        <div className="relative flex justify-center lg:justify-end items-end">
          {/* Aura azul ampla atrás do robô */}
          <div
            className="
              absolute -z-10
              top-2 md:top-4
              left-1/2 -translate-x-1/2
              w-[16rem] h-[16rem] sm:w-[18rem] sm:h-[18rem] md:w-[24rem] md:h-[24rem]
              rounded-full bg-blue-500/25 blur-3xl
            "
            aria-hidden="true"
          />
          {/* Glow secundário mais suave para preencher (opcional) */}
          <div
            className="
              absolute -z-10
              top-10 md:top-12
              left-1/2 -translate-x-1/2
              w-[22rem] h-[22rem] md:w-[30rem] md:h-[30rem]
              rounded-full bg-indigo-500/15 blur-[100px]
            "
            aria-hidden="true"
          />

          {/* Robô com leve drop-shadow */}
          <img
            src={robotImg}
            alt="Robô OnRota"
            className="
              relative z-10
              w-36 sm:w-44 md:w-72
              lg:w-[22rem] xl:w-[24rem]
              drop-shadow-2xl
              animate-float
            "
          />

          {/* Sombra de chão (elipse) */}
          <div
            className="
              absolute -z-10
              bottom-1 md:bottom-2
              left-1/2 -translate-x-1/2
              w-[62%] md:w-[65%]
              h-[10px] md:h-[14px]
              rounded-full
              bg-black/50
              blur-[6px] md:blur-[10px]
              opacity-85
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
