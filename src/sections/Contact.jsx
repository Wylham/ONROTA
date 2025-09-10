// src/sections/Contact.jsx
import React from "react";
import { PRODUCT_NAME, WHATSAPP_NUMBER, CONTACT_EMAIL, WHATSAPP_LINK } from "../constants";
import { IconWhatsapp, IconMail, IconPhone } from "../components/Icons";

export default function Contact() {
  return (
    <section id="contato" className="bg-black text-white scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Coluna esquerda: título + descrição + CTAs */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Entre em contato</h2>
            <p className="mt-3 text-white/70 max-w-2xl">
              Fale com nosso time para demonstração do{" "}
              <span className="text-white font-semibold">{PRODUCT_NAME}</span>, proposta comercial
              ou dúvidas técnicas. Respondemos rápido. 🚀
            </p>

            <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-green-500 text-white shadow-sm hover:scale-[1.02] transition"
                aria-label="Falar pelo WhatsApp"
              >
                <IconWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-white text-black shadow-sm hover:scale-[1.02] transition"
                aria-label="Enviar e-mail"
              >
                <IconMail className="w-5 h-5" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Info rápida no mobile */}
            <p className="mt-4 text-sm text-white/60">
              Preferir ligar? <span className="text-white/80">{WHATSAPP_NUMBER}</span>
            </p>
          </div>

          {/* Coluna direita: cartões de contato (sem formulário) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-green-500/15 ring-1 ring-green-500/25">
                  <IconWhatsapp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-white/60">WhatsApp</p>
                  <p className="font-medium">{WHATSAPP_NUMBER}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/60">Atendimento rápido e direto ao ponto.</p>
            </a>

            {/* E-mail */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <IconMail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60">E-mail</p>
                  <p className="font-medium break-all">{CONTACT_EMAIL}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/60">
                Envie detalhes da sua operação/logística.
              </p>
            </a>

            {/* Telefone (link tel) */}
            <a
              href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <IconPhone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Telefone</p>
                  <p className="font-medium">{WHATSAPP_NUMBER}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/60">Horário comercial (seg–sex).</p>
            </a>

            {/* Endereço/Local (opcional) — pode remover se não quiser */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/60">Localização</p>
              <p className="font-medium">Atendemos 100% remoto</p>
              <p className="mt-2 text-sm text-white/60">
                Implantação simples e suporte próximo em todo o Brasil.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé da seção (nota pequena) */}
        <p className="mt-10 text-xs text-white/50">
          Ao entrar em contato, você concorda com nossa{" "}
          <a href="#" className="underline hover:text-white/70">
            Política de Privacidade
          </a>
          .
        </p>
      </div>
    </section>
  );
}
