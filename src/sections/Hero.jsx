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
                Conheça mais sobre nós <IconArrowRight className="w-5 h-5" />
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

          {/* Robô ajustado: mais centralizado e menor */}
          <div className="flex items-center justify-center">
            <img
              src={robot}
              alt="Robô futurista"
              className="w-[280px] md:w-[380px] lg:w-[440px] h-auto drop-shadow-[0_15px_35px_rgba(99,102,241,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
