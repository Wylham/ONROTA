// src/sections/Hero.jsx
import React from "react";
import robotImg from "../assets/robot.png";
import { IconCheck } from "../components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 md:pt-28">
      {/* DESKTOP: imagem de fundo */}
      <div
        className="hidden md:block absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-hidden="true"
      />

      {/* DESKTOP: overlay acima da imagem (sombra de contraste) */}
      <div
        className="hidden md:block absolute inset-0 z-0
                   bg-gradient-to-r from-black/20 via-black/60 to-black/30"
        aria-hidden="true"
      />

      {/* CONTEÚDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:py-14 grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* COLUNA TEXTO */}
        <div className="relative order-1 md:order-none">
          <div className="text-white space-y-4 md:space-y-5 max-w-[22rem] md:max-w-xl">
            {/* Título */}
            <h1 className="text-[24px] sm:text-[26px] md:text-5xl leading-snug md:leading-tight font-extrabold">
              Mais segurança, menos riscos: o futuro do transporte é{" "}
              <span className="text-blue-400">ONROTA.</span>
            </h1>

            {/* Texto de apoio com respiro */}
            <p className="mt-5 text-white/85 text-[14px] sm:text-[15px] md:text-lg leading-relaxed md:text-white/90">
              Nós combinamos <strong>tecnologia antifraude</strong> e <strong>automação</strong>{" "}
              para eliminar erros manuais e aumentar a confiabilidade das suas rotas. Reduza custos
              e opere com mais segurança.
            </p>

            {/* Bullets + CTAs */}
            <div className="mt-6 space-y-5">
              {/* MOBILE: chips horizontais */}
              <div className="flex md:hidden flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                  <IconCheck className="h-4 w-4" />
                  <span>Rodoviário</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                  <IconCheck className="h-4 w-4" />
                  <span>Antifraude</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs">
                  <IconCheck className="h-4 w-4" />
                  <span>Automação</span>
                </span>
              </div>

              {/* TABLET/DESKTOP: lista original */}
              <div className="hidden md:grid gap-3 text-white/90 text-sm">
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

              {/* CTAs */}
              <div className="flex flex-row gap-3">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-lg px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-[13px] font-medium"
                >
                  Conhecer mais
                </a>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-lg px-3 py-2 border border-white text-white font-bold text-[13px] hover:bg-white/10"
                >
                  Fale conosco
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA ROBÔ */}
        <div className="relative order-2 md:order-none flex justify-center lg:justify-end items-end pt-4 md:pt-6">
          <div className="relative">
            {/* Aura */}
            <div className="absolute inset-0 -z-10 grid place-items-center" aria-hidden="true">
              <div
                className="
                  w-[80%] h-[80%] rounded-full blur-2xl
                  bg-blue-500/10
                  md:w-[135%] md:h-[135%] md:bg-blue-500/15
                  lg:w-[150%] lg:h-[150%] lg:bg-blue-500/10
                "
              />
              <div
                className="
                  absolute w-[130%] h-[130%] rounded-full
                  bg-indigo-500/10 blur-[60px]
                  md:w-[170%] md:h-[170%] md:bg-indigo-500/15 md:blur-[100px]
                  lg:w-[190%] lg:h-[190%] lg:bg-indigo-500/20 lg:blur-[120px]
                "
              />
            </div>

            <img
              src={robotImg}
              alt="Robô OnRota"
              className="relative z-10 w-36 sm:w-44 md:w-72 lg:w-[22rem] xl:w-[24rem] drop-shadow-2xl animate-float"
            />

            <div
              className="absolute -z-0 left-1/2 -translate-x-1/2 -bottom-1 md:-bottom-2 w-[60%] md:w-[65%] h-[10px] md:h-[14px] rounded-full bg-black/50 blur-[6px] md:blur-[10px] opacity-85"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
