// src/sections/Contact.jsx
import React, { useRef, useState } from "react";
import { PRODUCT_NAME, WHATSAPP_NUMBER, CONTACT_EMAIL, WHATSAPP_LINK } from "../constants";
import { IconWhatsapp, IconMail, IconUser, IconPhone, IconMessage } from "../components/Icons";

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      alert("Não foi possível enviar agora. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contato" className="bg-black scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Coluna esquerda */}
          <div className="text-white">
            <h2 className="text-3xl font-bold">Entre em contato</h2>
            <p className="mt-2 text-white/70">
              Fale com nosso time para demonstração do{" "}
              <strong className="text-white">{PRODUCT_NAME}</strong>, proposta ou dúvidas técnicas.
              Respondemos rápido.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 bg-green-500 text-white w-fit shadow-sm"
              >
                <IconWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-3 bg-white text-black w-fit shadow-sm"
              >
                <IconMail className="w-5 h-5" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {sent && (
              <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 text-green-200 px-4 py-3 text-sm">
                <p className="font-medium">Mensagem enviada! 🎉</p>
                <p className="mt-1">Recebemos seu contato e vamos responder em breve.</p>
              </div>
            )}
          </div>

          {/* Coluna direita (formulário dark) */}
          <div className="rounded-3xl border border-slate-800 bg-neutral-900 p-6 shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 text-white">
              <label className="grid gap-2">
                <span className="text-sm font-medium">Nome</span>
                <div className="flex items-center gap-2 rounded-xl bg-neutral-800 px-3 py-2">
                  <IconUser className="w-4 h-4 text-slate-400" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="w-full bg-transparent outline-none text-white placeholder-slate-400"
                  />
                </div>
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium">E-mail</span>
                  <div className="flex items-center gap-2 rounded-xl bg-neutral-800 px-3 py-2">
                    <IconMail className="w-4 h-4 text-slate-400" />
                    <input
                      name="email"
                      type="email"
                      placeholder="voce@empresa.com"
                      className="w-full bg-transparent outline-none text-white placeholder-slate-400"
                    />
                  </div>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium">Telefone/WhatsApp</span>
                  <div className="flex items-center gap-2 rounded-xl bg-neutral-800 px-3 py-2">
                    <IconPhone className="w-4 h-4 text-slate-400" />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(xx) xxxxx-xxxx"
                      className="w-full bg-transparent outline-none text-white placeholder-slate-400"
                    />
                  </div>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium">Mensagem</span>
                <div className="flex items-start gap-2 rounded-xl bg-neutral-800 px-3 py-2">
                  <IconMessage className="w-4 h-4 text-slate-400 mt-1" />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Quero saber mais sobre o OnCad..."
                    required
                    className="w-full bg-transparent outline-none resize-y text-white placeholder-slate-400"
                  />
                </div>
              </label>

              <button
                type="submit"
                disabled={isSending}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-indigo-600 text-white hover:bg-indigo-500 transition disabled:opacity-60"
              >
                {isSending ? "Enviando" : sent ? "Enviar outra mensagem" : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
