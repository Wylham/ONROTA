// src/sections/Hero.jsx
import React from "react";
import robotImg from "../assets/robot.png";
import { IconArrowRight, IconCheck } from "../components/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden">
      {/* BACKGROUND vindo do public/ */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/hero-bg.jpg')", // 👈 usa direto do public/
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 30%, rgba(0,0,0,.60) 0%, rgba(0,0,0,.35) 45%, rgba(0,0,0,0) 70%)," +
            "linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.25) 40%, rgba(0,0,0,.55))",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-2 gap-8 items-center">
        {/* Texto à esquerda */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Mais segurança, menos riscos: o futuro do transporte é{" "}
            <span className="text-blue-400">ONROTA</span>.
          </h1>

          <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl">
            Nós combinamos <strong>tecnologia antifraude</strong> e <strong>automação</strong> para
            eliminar erros manuais e aumentar a confiabilidade das suas rotas. Reduza custos e opere
            com mais segurança no transporte rodoviário.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-sm md:text-base"
            >
              Conhecer o OnCad <IconArrowRight />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-black hover:bg-white/90 text-sm md:text-base"
            >
              Fale com a OnRota
            </a>
          </div>

          <div className="mt-6 grid gap-3 text-white/90 text-sm">
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>
                <strong>Foco exclusivo</strong> no transporte rodoviário
              </span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>
                <strong>Sistema antifraude</strong> para validação de dados
              </span>
            </div>
            <div className="flex items-start gap-2">
              <IconCheck className="mt-0.5" />
              <span>
                <strong>Automação logística</strong> que elimina erros manuais
              </span>
            </div>
          </div>
        </div>

        {/* Robô à direita */}
        <div className="relative flex justify-center lg:justify-end items-end">
          <img
            src={robotImg}
            alt="Robô futurista representando a tecnologia ONROTA"
            className="
              w-40 sm:w-52 md:w-60
              lg:w-[18rem] xl:w-[20rem] 2xl:w-[22rem]
              animate-float
            "
          />
          <div className="absolute bottom-0 right-10 left-10 h-40 blur-3xl bg-blue-500/25 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
}
