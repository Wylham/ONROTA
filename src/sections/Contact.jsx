// src/sections/Contato.jsx
import React from "react";
import logo from "../assets/logo-light.png";
import { LOCALIZACAO_LINK, WHATSAPP_LINK } from "@/constants";

// badges oficiais (adicione estes arquivos na pasta assets)
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
    <section id="contato" className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* 3 colunas */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-start">
          {/* COLUNA 1 — Logo + descrição + badges */}
          <aside className="space-y-4 md:mt-6">
            <img src={logo} alt="OnRota" className="h-12 md:h-16 w-auto opacity-95" />
            <p className="text-white/70 text-sm max-w-md">
              Soluções antifraude e automação para transporte rodoviário.
            </p>

            {/* Frase pequena + badges das lojas */}
            <div className="pt-2">
              <p className="text-white/80 text-xs md:text-sm mb-2">
                Baixe nosso app em sua loja de aplicativos:
              </p>
              <div className="flex gap-3 flex-wrap">
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
          <div className="text-white/90 text-sm md:text-base md:mt-6">
            <div className="space-y-2">
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
            </div>

            {/* Botão WHATSAPP logo abaixo do e-mail */}
            <div className="mt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 text-sm transition"
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

            {/* Redes sociais (sem badges aqui) */}
            <div className="mt-5 flex items-center gap-3 flex-wrap">
              <Icon.SocialBtn label="LinkedIn" href="https://www.linkedin.com/">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white hover:text-blue-400 transition"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.74 24 10.24 24 14.2V24h-5v-8.6c0-2.05-.03-4.69-2.86-4.69-2.86 0-3.3 2.24-3.3 4.55V24H8V8z" />
                </svg>
              </Icon.SocialBtn>

              <Icon.SocialBtn label="Instagram" href="https://www.instagram.com/">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white hover:text-blue-400 transition"
                  fill="currentColor"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.26 2.4.44.6.23 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.5-.5.4-.9.7-1.5.9-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5a4.3 4.3 0 0 1-1.5-.9 4.3 4.3 0 0 1-.9-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.8 0 8.4 0 7 .1 5.7.2 4.8.4 4 .7a6.5 6.5 0 0 0-2.3 1.5A6.5 6.5 0 0 0 .2 4.5c-.3.8-.5 1.7-.6 3C-.5 8.9-.5 9.3-.5 12s0 3.1.1 4.5c.1 1.3.3 2.2.6 3 .4.8.9 1.5 1.5 2.1.6.6 1.3 1.1 2.1 1.5.8.3 1.7.5 3 .6 1.4.1 1.8.1 5 .1s3.6 0 5-.1c1.3-.1 2.2-.3 3-.6a6.5 6.5 0 0 0 2.1-1.5c.6-.6 1.1-1.3 1.5-2.1.3-.8.5-1.7.6-3 .1-1.4.1-1.8.1-5s0-3.6-.1-5c-.1-1.3-.3-2.2-.6-3a6.5 6.5 0 0 0-1.5-2.1A6.5 6.5 0 0 0 20 .7c-.8-.3-1.7-.5-3-.6C15.6 0 15.2 0 12 0z" />
                  <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.8a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
                </svg>
              </Icon.SocialBtn>

              <Icon.SocialBtn label="YouTube" href="https://www.youtube.com/">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white hover:text-blue-400 transition"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z" />
                </svg>
              </Icon.SocialBtn>

              <Icon.SocialBtn label="Facebook" href="https://www.facebook.com/">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white hover:text-blue-400 transition"
                  fill="currentColor"
                >
                  <path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.2V12h3.2V9.7c0-3.2 1.9-5 4.8-5 1.4 0 2.8.3 2.8.3v3.1h-1.6c-1.6 0-2.1 1-2.1 2V12h3.6l-.6 2.9h-3v7A10 10 0 0 0 22 12z" />
                </svg>
              </Icon.SocialBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
