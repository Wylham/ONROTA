// src/components/PlansPromoModal.jsx
import React, { useEffect, useRef, useState } from "react";

export default function PlansPromoModal({
  delayMs = 5000, // dispara em 5s
  reopenMs = null, // sem reabrir automaticamente
  imageSrc = "/mockups/mulher-popup.png",
  imageAlt = "Mulher segurando um telefone",
  oncadLogoSrc = "/logos/opt/oncad.webp",
  oncePerDay = true, // abre 1x por dia
  resetOnClosePage = false, // NÃO reseta ao fechar/recarregar
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const initialTimeoutRef = useRef(null);

  const DAILY_KEY = "plansPromo_lastShownDate";

  // util: string YYYY-MM-DD no fuso do navegador
  const todayStr = () => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  // primeira abertura respeitando "1x por dia"
  useEffect(() => {
    let lastShown = null;
    try {
      lastShown = localStorage.getItem(DAILY_KEY);
    } catch {
      lastShown = null;
    }
    const canShow = !oncePerDay || lastShown !== todayStr();

    if (canShow) {
      initialTimeoutRef.current = setTimeout(() => {
        setOpen(true);
        setTimeout(() => setVisible(true), 10);
        if (oncePerDay) {
          try {
            localStorage.setItem(DAILY_KEY, todayStr());
          } catch {}
        }
      }, delayMs);
    }

    return () => {
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
    };
  }, [delayMs, oncePerDay]);

  // reset diário — por padrão DESLIGADO (mantém 1x/dia mesmo com refresh)
  useEffect(() => {
    if (!resetOnClosePage) return;
    const onUnload = () => {
      try {
        localStorage.removeItem(DAILY_KEY);
      } catch {}
    };
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [resetOnClosePage]);

  // trava scroll quando aberto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 150);
  };

  // ESC fecha
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plans-promo-title"
      className="fixed inset-0 z-[10050] flex items-center justify-center p-3 md:p-4"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/55 md:bg-black/60 backdrop-blur-[2px] transition-opacity duration-150 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
      />

      {/* Card */}
      <div
        className={`
          relative z-[10100] w-full max-w-[56rem]
          overflow-hidden text-white shadow-2xl ring-1 ring-white/10 bg-[#121212]
          rounded-xl md:rounded-2xl
          transition-all duration-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* X */}
        <button
          aria-label="Fechar"
          onClick={close}
          className="absolute right-2.5 top-2.5 z-30 rounded bg-black/45 hover:bg-black/60 p-1.5 ring-1 ring-white/20"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>

        {/* Grid (texto esquerda / imagem direita) */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] md:items-stretch md:min-h-[420px]">
          {/* Texto */}
          <div className="bg-[#121212] px-6 py-6 md:px-8 md:py-8 flex">
            <div className="my-auto w-full max-w-[34rem]">
              {/* Logo */}
              <div className="mb-3">
                <img
                  src={oncadLogoSrc}
                  alt="OnCad"
                  className="h-10 w-auto opacity-90"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Headline */}
              <h3
                id="plans-promo-title"
                className="text-[1.18rem] md:text-[1.45rem] font-extrabold leading-tight"
              >
                Automatize cadastros. Bloqueie fraudes. Integre seu fluxo.
              </h3>

              {/* Subhead */}
              <p className="mt-2 text-white/85 text-[0.93rem] md:text-[0.98rem] leading-relaxed">
                Planos para reduzir erros, acelerar a operação e conectar seus sistemas.
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#planos"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-md bg-[#1da7e5] hover:bg-[#168fc3] px-4 py-2 font-semibold text-[0.94rem]"
                >
                  Ver planos →
                </a>
                <a
                  href="#contato"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 hover:bg-white/10 px-4 py-2 font-semibold text-[0.94rem]"
                >
                  Falar com especialista
                </a>
              </div>

              {/* Duas pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[12px]">
                  Sem fidelidade
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[12px]">
                  Garantia 30 dias
                </span>
              </div>

              {/* Demo guiada */}
              <p className="mt-4 text-[11.5px] text-white/70">Demonstração guiada em 15 minutos!</p>
            </div>
          </div>

          {/* Imagem */}
          <div
            aria-label={imageAlt}
            className="hidden md:block md:min-h-[420px]"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "30% center",
            }}
            role="img"
          />
        </div>
      </div>
    </div>
  );
}
