// src/components/PlansPromoModal.jsx
import React, { useEffect, useRef, useState } from "react";

export default function PlansPromoModal({
  delayMs = 5000,
  reopenMs = 500000,
  imageSrc = "/mockups/mulher-popup.png",
  imageAlt = "Mulher segurando um telefone",
  oncadLogoSrc = "/logos/opt/oncad.webp",
}) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef(null);
  const initialTimeoutRef = useRef(null);

  useEffect(() => {
    initialTimeoutRef.current = setTimeout(() => {
      setOpen(true);
      setTimeout(() => setVisible(true), 10);
      intervalRef.current = setInterval(() => {
        setOpen((curr) => {
          if (curr) return curr;
          setVisible(false);
          setTimeout(() => setVisible(true), 10);
          return true;
        });
      }, reopenMs);
    }, delayMs);

    return () => {
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [delayMs, reopenMs]);

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
        className={`absolute inset-0 bg-black/55 md:bg-black/60 backdrop-blur-[2px] transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={close}
      />

      {/* Card – agora com cantos arredondados suaves */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] md:items-stretch md:min-h-[420px]">
          {/* Texto */}
          <div className="bg-[#121212] px-6 py-6 md:px-8 md:py-8 flex">
            <div className="my-auto w-full max-w-[34rem]">
              <div className="mb-3">
                <img
                  src={oncadLogoSrc}
                  alt="OnCad"
                  className="h-5 w-auto opacity-90"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3
                id="plans-promo-title"
                className="text-[1.18rem] md:text-[1.45rem] font-extrabold leading-tight"
              >
                Automatize cadastros. Bloqueie fraudes. Integre seu fluxo.
              </h3>

              <p className="mt-2 text-white/85 text-[0.93rem] md:text-[0.98rem] leading-relaxed">
                Planos para reduzir erros, acelerar a operação e conectar seus sistemas sem
                fidelidade!
              </p>

              <ul className="mt-4 space-y-2.5 text-[0.93rem] md:text-[0.98rem]">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                  <span>
                    <strong>Antifraude</strong> com validações automáticas de motorista e veículo.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                  <span>
                    <strong>Integrações</strong> com ERP/TMS e <strong>APIs/Webhooks</strong>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                  <span>
                    <strong>Workflows</strong> para menos digitação e retrabalho.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                  <span>
                    <strong>Suporte em tempo real</strong> quando precisar.
                  </span>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="#planos"
                  onClick={close}
                  className="relative inline-flex items-center justify-center rounded-md bg-[#1da7e5] hover:bg-[#1593c8] px-4 py-2 font-semibold text-[0.94rem]"
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-[#1da7e5]/35 animate-pulse"
                    aria-hidden
                  />
                  <span className="relative">Ver planos →</span>
                </a>
                <a
                  href="#contato"
                  onClick={close}
                  className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 hover:bg-white/10 px-4 py-2 font-semibold text-[0.94rem]"
                >
                  Falar com especialista
                </a>
              </div>

              {/* Texto flutuante (sem card/emoji) */}
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
