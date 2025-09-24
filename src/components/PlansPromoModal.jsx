// src/components/PlansPromoModal.jsx
import React, { useEffect, useRef, useState } from "react";

export default function PlansPromoModal({
  delayMs = 5000, // 5s para a primeira abertura
  reopenMs = 180000, // 3 minutos entre reaparições
  imageSrc = "/images/promo-phone.png",
  imageAlt = "Pessoa segurando um celular",
}) {
  const [open, setOpen] = useState(false);
  const intervalRef = useRef(null);
  const initialTimeoutRef = useRef(null);

  // Abre após delay e agenda reaberturas a cada reopenMs
  useEffect(() => {
    initialTimeoutRef.current = setTimeout(() => {
      setOpen(true);
      intervalRef.current = setInterval(() => {
        setOpen((curr) => (curr ? curr : true));
      }, reopenMs);
    }, delayMs);

    return () => {
      if (initialTimeoutRef.current) clearTimeout(initialTimeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [delayMs, reopenMs]);

  // Lock scroll enquanto aberto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

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
      {/* overlay/backdrop – clique fora fecha */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={close} />

      {/* card (mais compacto) */}
      <div
        className="
          relative z-[10100] w-full max-w-2xl md:max-w-3xl
          overflow-hidden rounded-xl bg-[#111317] text-white
          shadow-2xl ring-1 ring-white/10
        "
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
      >
        {/* botão X sempre no topo do stacking */}
        <button
          aria-label="Fechar"
          onClick={close}
          className="
            absolute right-2.5 top-2.5 z-30
            rounded-full bg-white/10 hover:bg-white/20 p-1.5
          "
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Coluna esquerda: texto (compacta) */}
          <div className="p-5 md:p-6">
            <h3 id="plans-promo-title" className="text-xl md:text-2xl font-extrabold">
              Turbine seus cadastros com o OnCad
            </h3>
            <p className="mt-1.5 text-white/80 text-[0.9rem] md:text-[0.95rem]">
              Conheça nossos planos e escolha o nível de automação ideal para sua operação — sem
              fidelidade e com suporte próximo do seu time.
            </p>

            <ul className="mt-4 space-y-2.5 text-[0.9rem] md:text-[0.95rem]">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                <span>
                  <strong>Validações automáticas</strong> de motorista e veículo com antifraude.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                <span>
                  <strong>Integrações simples</strong> com ERP/TMS (Sankhya, Atua, SAT, KMM e
                  outros).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                <span>
                  <strong>Workflows e automação</strong> para reduzir digitação e retrabalho.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                <span>
                  <strong>API & Webhooks</strong> para orquestrar eventos e evidências.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                <span>
                  <strong>Suporte em tempo real</strong> para acelerar a operação.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                <span>
                  <strong>Sem fidelidade</strong> em todos os planos.
                </span>
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href="#planos"
                onClick={close}
                className="inline-flex items-center justify-center rounded-lg bg-[#1da7e5] hover:bg-[#1593c8] px-4 py-2 font-semibold"
              >
                Ver planos
              </a>
              <a
                href="#contato"
                onClick={close}
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 px-4 py-2 font-semibold"
              >
                Falar com especialista
              </a>
            </div>
          </div>

          {/* Coluna direita: imagem (com z controlado para não cobrir o X) */}
          <div className="relative hidden md:block z-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-l from-transparent to-[#111317]" />
          </div>
        </div>
      </div>
    </div>
  );
}
