// src/sections/Clients.jsx
import React, { useEffect, useRef, useState } from "react";

const CLIENTS = [
  { key: "pianetto", alt: "Cliente Pianetto", w: 220, h: 110, wMobile: 220, hMobile: 110 },
  { key: "boa-viagem", alt: "Cliente Boa Viagem", w: 400, h: 200, wMobile: 400, hMobile: 200 },
  { key: "anderle", alt: "Cliente Anderle", w: 220, h: 110, wMobile: 220, hMobile: 110 },
  { key: "shrlog", alt: "Cliente SHR LOG", w: 220, h: 110, wMobile: 220, hMobile: 110 },
];

function Logo({ name, alt, w, h, eager = false }) {
  const src1xWebp = `/logos/@1x/${name}@1x.webp`;
  const src2xWebp = `/logos/@2x/${name}@2x.webp`;
  const srcPng = `/logos/${name}.png`;

  return (
    <picture>
      <source type="image/webp" srcSet={`${src1xWebp} 1x, ${src2xWebp} 2x`} />
      <img
        data-logo
        src={srcPng}
        alt={alt}
        width={w}
        height={h}
        style={{ width: `${w}px`, height: `${h}px`, maxWidth: "none" }}
        className="block object-contain mx-auto select-none"
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={(e) => {
          e.currentTarget.outerHTML = '<div class="text-slate-400 text-xs">logo indisponível</div>';
        }}
      />
    </picture>
  );
}

export default function Clients() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);
  const scrollDebounce = useRef(null);
  const max = CLIENTS.length + 1; // inclui o slide do "+38" no mobile

  const scrollToIndex = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
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

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (scrollDebounce.current) clearTimeout(scrollDebounce.current);
    scrollDebounce.current = setTimeout(() => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
      el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    }, 60);
  };

  useEffect(() => {
    const onResize = () => scrollToIndex(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  return (
    <section
      id="clientes"
      className="relative bg-gray-100 text-black scroll-mt-24 md:scroll-mt-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 flex flex-col items-center text-center">
        {/* Cabeçalho centralizado */}
        <div>
          <h2 className="text-2xl font-bold">Nossos clientes</h2>
          <p className="mt-2 max-w-2xl mx-auto text-slate-600">
            Algumas marcas que confiam em nossa equipe e tecnologia.
          </p>
        </div>

        {/* MOBILE: carrossel */}
        <div className="mt-10 md:hidden relative w-full max-w-md mx-auto">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="flex">
              {CLIENTS.map((c, i) => (
                <div
                  key={c.key}
                  className="min-w-full snap-center flex items-center justify-center"
                  style={{ height: 260 }}
                >
                  <Logo
                    name={c.key}
                    alt={c.alt}
                    w={c.wMobile ?? c.w}
                    h={c.hMobile ?? c.h}
                    eager={i === 0}
                  />
                </div>
              ))}

              {/* Adendo +38 no mobile */}
              <div
                className="min-w-full snap-center flex items-center justify-center"
                style={{ height: 260 }}
              >
                <span className="text-3xl font-semibold text-slate-600 select-none">+38</span>
              </div>
            </div>
          </div>

          {/* setas */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 shadow-sm hover:bg-slate-50 w-10 h-10 grid place-items-center"
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
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 shadow-sm hover:bg-slate-50 w-10 h-10 grid place-items-center"
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
            {[...CLIENTS, { key: "+38" }].map((_, i) => (
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

        {/* DESKTOP/TABLET */}
        <div className="mt-12 hidden md:flex items-center justify-center gap-10 flex-nowrap">
          {CLIENTS.map((c) => (
            <div
              key={c.key}
              className={`flex items-center justify-center rounded-2xl bg-white shadow-sm md:border md:border-slate-200 h-40 lg:h-52 p-6 
                ${c.key === "boa-viagem" ? "max-w-[260px]" : "max-w-[360px]"} w-full`}
            >
              <Logo name={c.key} alt={c.alt} w={c.w} h={c.h} />
            </div>
          ))}

          {/* Adendo +38 (flutuante, sem card) */}
          <span className="ml-4 text-2xl lg:text-3xl font-semibold text-slate-600 select-none whitespace-nowrap align-middle">
            +38
          </span>
        </div>
      </div>
    </section>
  );
}
