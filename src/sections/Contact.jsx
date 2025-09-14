// src/sections/Contato.jsx
import React from "react";
import logo from "../assets/logo-light.png";
import { LOCALIZACAO_LINK, WHATSAPP_LINK } from "@/constants";
import appStoreBadge from "../assets/appstore-badge.svg";
import googlePlayBadge from "../assets/googleplay-badge.png";

const Icon = {
  WhatsApp: (props) => (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.1 17.3c-.3-.1-1-.4-1.1-.4s-.3-.1-.5.1c-.1.2-.5.4-.6.5-.1.1-.2.1-.4 0-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.8-.2-.3 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3 0-.1-.5-1.2-.6-1.6-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.2s.5 1.4.5 1.5c.1.2 1 1.9 2.5 3.2 1.7 1.6 3.2 2 3.6 2.2.4.1.9.1 1.2.1.4 0 1.2-.5 1.3-.9.2-.5.2-1 .1-1.1-.1-.1-.3-.1-.6-.2z" />
      <path d="M27.6 4.4A14 14 0 0 0 5.5 26.4L4 30.9l4.6-1.5A14 14 0 1 0 27.6 4.4zM16 28a12 12 0 1 1 10.9-6.7A12 12 0 0 1 16 28z" />
    </svg>
  ),
  SocialBtn: ({ children, label, href }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      aria-label={label}
    >
      {children}
    </a>
  ),
};

export default function Contato() {
  return (
    <section id="contato" className="bg-black">
      {/* Faixa de chamada antes do conteúdo */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Deseja aumentar a segurança e eficiência do seu cadastro?
        </h2>
        <p className="mt-4 text-white/90 text-base md:text-lg">
          Entre em contato agora mesmo pelos canais abaixo e fale com a nossa equipe.
        </p>
      </div>

      {/* Conteúdo de contatos */}
      <div className="py-12 md:py-16 mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-start text-center md:text-left">
          {/* COLUNA 1 — Logo + descrição + badges */}
          <aside className="space-y-4 md:mt-6">
            <img
              src={logo}
              alt="OnRota"
              className="h-12 md:h-16 w-auto opacity-95 mx-auto md:mx-0"
            />
            <p className="text-white/70 text-sm max-w-md mx-auto md:mx-0">
              Soluções antifraude e automação para transporte rodoviário.
            </p>

            <div className="pt-2">
              <p className="text-white/80 text-xs md:text-sm mb-2">
                Baixe nosso app em sua loja de aplicativos:
              </p>
              <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                <a
                  href="https://apps.apple.com/br/app/seuapp"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Baixar na App Store"
                >
                  <img
                    src={appStoreBadge}
                    alt="Baixar na App Store"
                    className="h-9 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=seuapp"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Baixar no Google Play"
                >
                  <img
                    src={googlePlayBadge}
                    alt="Baixar no Google Play"
                    className="h-9 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </aside>

          {/* COLUNA 2 — Telefone/E-mail + WhatsApp */}
          <div className="text-white/90 text-sm md:text-base md:mt-6 space-y-4">
            <div>
              <span className="text-white font-semibold">Telefone:</span>{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:underline cursor-pointer"
              >
                +55 64 99903-2381
              </a>
            </div>
            <div>
              <span className="text-white font-semibold">E-mail:</span>{" "}
              <a href="mailto:contato@onrota.com" className="hover:underline">
                contato@onrota.com
              </a>
            </div>

            <div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 text-sm transition mx-auto md:mx-0"
              >
                <Icon.WhatsApp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* COLUNA 3 — Localização + redes sociais */}
          <div className="text-white/90 text-sm md:text-base md:mt-6">
            <div>
              <span className="text-white font-semibold">Localização:</span>{" "}
              <a
                href={LOCALIZACAO_LINK}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-white/85"
              >
                Rua 22, Quadra 17, Lote 08, Casa 2, Parque dos Buritis 2, 75.907-380, Rio Verde -
                GO.
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3 flex-wrap justify-center md:justify-start">
              {/* suas redes sociais aqui */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
