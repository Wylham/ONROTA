// src/sections/Contato.jsx
import React from "react";
import logo from "../assets/logo-light.png";

// Ícones simples em SVG
const Icon = {
  LinkedIn: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.74 24 10.24 24 14.2V24h-5v-8.6c0-2.05-.03-4.69-2.86-4.69-2.86 0-3.3 2.24-3.3 4.55V24H8V8z" />
    </svg>
  ),
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.26 2.4.44.6.23 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.5-.5.4-.9.7-1.5.9-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5a4.3 4.3 0 0 1-1.5-.9 4.3 4.3 0 0 1-.9-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.8 0 8.4 0 7 .1 5.7.2 4.8.4 4 .7a6.5 6.5 0 0 0-2.3 1.5A6.5 6.5 0 0 0 .2 4.5c-.3.8-.5 1.7-.6 3C-.5 8.9-.5 9.3-.5 12s0 3.1.1 4.5c.1 1.3.3 2.2.6 3 .4.8.9 1.5 1.5 2.1.6.6 1.3 1.1 2.1 1.5.8.3 1.7.5 3 .6 1.4.1 1.8.1 5 .1s3.6 0 5-.1c1.3-.1 2.2-.3 3-.6a6.5 6.5 0 0 0 2.1-1.5c.6-.6 1.1-1.3 1.5-2.1.3-.8.5-1.7.6-3 .1-1.4.1-1.8.1-5s0-3.6-.1-5c-.1-1.3-.3-2.2-.6-3a6.5 6.5 0 0 0-1.5-2.1A6.5 6.5 0 0 0 20 .7c-.8-.3-1.7-.5-3-.6C15.6 0 15.2 0 12 0z" />
      <path d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.8a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z" />
    </svg>
  ),
  YouTube: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z" />
    </svg>
  ),
  Facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9V14.9H7.2V12h3.2V9.7c0-3.2 1.9-5 4.8-5 1.4 0 2.8.3 2.8.3v3.1h-1.6c-1.6 0-2.1 1-2.1 2V12h3.6l-.6 2.9h-3v7A10 10 0 0 0 22 12z" />
    </svg>
  ),
};

export default function Contato() {
  return (
    <section id="contato" className="relative bg-black border-t border-white/10 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-[320px_1fr] gap-10 md:gap-14 items-start">
          {/* Lateral com logo maior */}
          <aside className="flex flex-col items-start gap-4">
            <img src={logo} alt="OnRota" className="h-10 md:h-14 w-auto opacity-95" />
            <p className="text-white/70 text-sm max-w-xs">
              Soluções antifraude e automação para transporte rodoviário.
            </p>

            {/* Redes sociais */}
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="LinkedIn"
              >
                <Icon.LinkedIn className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Icon.Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="YouTube"
              >
                <Icon.YouTube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Facebook"
              >
                <Icon.Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </aside>

          {/* Bloco com informações de contato */}
          <div className="w-full">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold">Telefone</h3>
                <p className="mt-1 text-white/80">
                  <a href="tel:+550000000000" className="hover:underline">
                    +55 (00) 0000-0000
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold">E-mail</h3>
                <p className="mt-1 text-white/80">
                  <a href="mailto:contato@onrota.com" className="hover:underline">
                    contato@onrota.com
                  </a>
                </p>
              </div>

              <div className="sm:col-span-2 lg:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-white font-semibold">Localização</h3>
                <p className="mt-1 text-white/80">
                  <a
                    href="https://maps.google.com/?q=OnRota"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Rua Exemplo, 123 — Bairro Centro, Cidade/UF
                  </a>
                </p>
              </div>
            </div>

            {/* Botão WhatsApp (fantasma) */}
            <div className="mt-8">
              <a
                href="https://wa.me/5564999032381?text=Ol%C3%A1%20ONROTA!%20Quero%20falar%20sobre%20o%20ONCAD." // substitua pelo número real
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-green-500 text-green-500 font-bold px-5 py-2 hover:bg-green-500/10 transition"
              >
                Fale conosco pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
