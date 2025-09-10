// src/sections/Hero.jsx
import React from "react";
import { IconArrowRight, IconCheck } from "../components/Icons";
import robot from "../assets/robot.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 md:pt-24 pb-20 md:pb-28 bg-transparent overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Bloco de texto */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.15]">
              Mais segurança, menos riscos: o futuro do transporte é OnRota.
            </h1>

            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Nós combinamos tecnologia antifraude e automação para eliminar erros manuais e
              aumentar a confiabilidade das suas rotas. Reduza custos e opere com mais segurança,
              impulsionando o futuro do transporte rodoviário.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#sobre"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Conhecer mais sobre
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white text-black hover:bg-white/90 transition-colors"
              >
                Entre em contato
              </a>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-5 text-white/90 text-sm">
              <div className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-5 h-5" />
                <span>Profissionais e serviços especializados</span>
              </div>
              <div className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-5 h-5" />
                <span>Qualidade e segurança de dados</span>
              </div>
              <div className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-5 h-5" />
                <span>Resultados rápidos e mensuráveis</span>
              </div>
            </div>
          </div>

          {/* Robô com aura, sombra, levitação e hover com scale+rotate */}
          <div className="relative flex items-center justify-center">
            {/* Aura futurista atrás */}
            <div className="absolute w-[120%] h-[120%] rounded-full bg-indigo-500/20 blur-3xl"></div>

            {/* Robô */}
            <img
              src={robot}
              alt="Robô futurista"
              className="
                relative z-[1]
                w-[270px] md:w-[370px] lg:w-[430px] h-auto
                drop-shadow-[0_15px_35px_rgba(99,102,241,0.4)]
                animate-float
                transition-transform duration-500 ease-in-out
                hover:scale-105 hover:rotate-2
              "
              draggable="false"
            />

            {/* Sombra de apoio (chão) */}
            <div
              className="
                absolute -bottom-2 left-1/2 -translate-x-1/2
                w-56 md:w-64 lg:w-72 h-8
                rounded-full bg-black/55 blur-2xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
