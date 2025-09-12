// src/sections/Clients.jsx
import React, { useEffect, useRef, useState } from "react";

export default function Clients() {
  const logos = [
    "/logos/pianetto.png",
    "/logos/boa-viagem.png",
    "/logos/anderle.png",
    "/logos/shrlog.png",
  ];

  // índice atual (mobile)
  const [index, setIndex] = useState(0);

  // refs do carrossel (mobile)
  const scrollRef = useRef(null);
  const scrollDebounce = useRef(null);

  const max = logos.length;

  // garante que ao mudar índice via setas, o snap será exato
  const scrollToIndex = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollTo({ left: i * w, behavior: "smooth" });
  };

  const goPrev = () => {
    const i = (index - 1 + max) % max;
    setIndex(i);
    scrollToIndex(i);
  };

  const goNext = () => {
    const i = (index + 1) % max;
    setIndex(i);
    scrollToIndex(i);
  };

  // quando usuário arrasta com o dedo, atualizo o índice pelo scroll
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    // debouncing breve para “fim do scroll”
    if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
    scrollDebounce.current = setTimeout(() => {
      const w = el.clientWidth;
      const i = Math.round(el.scrollLeft / w);
      setIndex(i);
      // “snapa” para garantir centralização exata caso arredondamento
      el.scrollTo({ left: i * w, behavior: "smooth" });
    }, 60);
  };

  // ao redimensionar, mantém snap exato
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onResize = () => scrollToIndex(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  return (
    <section id="clientes" className="bg-white text-black scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Nossos clientes</h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-600">
            Algumas marcas que confiam em nossa equipe e tecnologia.
          </p>
        </div>

        {/* MOBILE: carrossel com scroll + snap (SEM retângulo de fundo) */}
        <div className="mt-10 md:hidden relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            // snap-x mandatory => cada slide “encaixa” no centro
            className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex">
              {logos.map((src, i) => {
                const isBoa = src.toLowerCase().includes("boa-viagem");
                return (
                  <div
                    key={i}
                    // slide ocupa exatamente a largura visível
                    className="min-w-full snap-center flex items-center justify-center"
                    style={{ height: 260 }} // tamanho ajustado (menor que antes)
                  >
                    <img
                      src={src}
                      alt={`Cliente ${i + 1}`}
                      className={`object-contain max-w-[88%] max-h-[84%] ${
                        isBoa ? "scale-[1.25]" : "scale-[1.1]"
                      }`}
                      loading="eager"
                      decoding="sync"
                      onError={(e) => {
                        e.currentTarget.outerHTML =
                          '<div class="text-slate-400 text-xs">logo indisponível</div>';
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* setas sobrepostas */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Anterior"
            className="absolute left-2 top-[calc(50%+0px)] -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 shadow-sm hover:bg-slate-50 w-10 h-10 grid place-items-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Próximo"
            className="absolute right-2 top-[calc(50%+0px)] -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 shadow-sm hover:bg-slate-50 w-10 h-10 grid place-items-center"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* indicadores */}
          <div className="mt-4 flex justify-center gap-2">
            {logos.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => {
                  setIndex(i);
                  scrollToIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  index === i ? "w-6 bg-slate-800" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP/TABLET: grid com logos maiores (mantido) */}
        <div className="mt-12 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {logos.map((src, i) => {
            const isBoa = src.toLowerCase().includes("boa-viagem");
            return (
              <div
                key={i}
                className="w-full max-w-[360px] h-40 lg:h-52 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-200 p-6"
              >
                <img
                  src={src}
                  alt={`Cliente ${i + 1}`}
                  className={`max-h-full max-w-full object-contain ${
                    isBoa ? "scale-[1.25]" : "scale-[1.1]"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
