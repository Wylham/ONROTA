// src/sections/Testimonials.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    company: "Pianetto Transportes",
    role: "Diretoria",
    name: "Pianetto",
    quote:
      "Com o ONCAD conseguimos reduzir erros de cadastro e validar documentos de forma muito mais rápida. Isso trouxe segurança e eficiência para nossas operações.",
    logo: "/logos/@1x/pianetto@1x.webp",
    rating: 5,
  },
  {
    company: "Transportadora Boa Viagem",
    role: "Gerente Operacional",
    name: "Boa Viagem",
    quote:
      "O ONCAD trouxe mais agilidade e confiança na validação de motoristas e veículos. Nosso processo está mais seguro e reduzimos fraudes de forma significativa.",
    logo: "/logos/@1x/boa-viagem@1x.webp",
    rating: 5,
  },
  {
    company: "Anderle",
    role: "CEO",
    name: "Anderle",
    quote:
      "Conseguimos automatizar cadastros e reduzir retrabalho. O sistema é prático, confiável e nos ajuda a manter um controle preciso em toda a operação.",
    logo: "/logos/@1x/anderle@1x.webp",
    rating: 5,
  },
  {
    company: "SHR LOG",
    role: "Gestor de Frota",
    name: "SHR LOG",
    quote:
      "O ONCAD se tornou essencial na gestão de risco. Conseguimos maior assertividade nas análises e eliminamos erros manuais que antes eram comuns.",
    logo: "/logos/@1x/shrlog@1x.webp",
    rating: 5,
  },
];

// Correção de escala para arquivos com muito "respiro" interno (somente BV)
const LOGO_SCALE_BY_NAME = {
  "Boa Viagem": "scale-[2.20] md:scale-[1.85]", // ajuste refinado
};

export default function Testimonials({
  heading = "Quem experimentou, se encantou!",
  items = TESTIMONIALS,
}) {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [index, setIndex] = useState(0);

  const computePerView = () => {
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    return 1;
  };

  useEffect(() => {
    const onResize = () => setCardsPerView(computePerView());
    setCardsPerView(computePerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, Math.ceil(items.length / cardsPerView) - 1),
    [items.length, cardsPerView]
  );

  const scrollToIndex = (i, smooth = true) => {
    const el = containerRef.current;
    if (!el) return;
    const offset = el.clientWidth * i;
    el.scrollTo({ left: offset, behavior: smooth ? "smooth" : "auto" });
  };

  const goPrev = () => {
    const next = index - 1 < 0 ? maxIndex : index - 1;
    setIndex(next);
    scrollToIndex(next);
  };
  const goNext = () => {
    const next = index + 1 > maxIndex ? 0 : index + 1;
    setIndex(next);
    scrollToIndex(next);
  };

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const slideIdx = Number(visible.target.getAttribute("data-slide-index"));
          const pageIdx = Math.floor(slideIdx / cardsPerView);
          setIndex((prev) => (prev !== pageIdx ? pageIdx : prev));
        }
      },
      { root, threshold: [0.5, 0.6, 0.7] }
    );

    slidesRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [cardsPerView, items.length]);

  useEffect(() => {
    scrollToIndex(index, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsPerView]);

  return (
    <section className="bg-gray-100 text-slate-900 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 pt-12 md:pt-16 pb-10 md:pb-12">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          {heading}
        </h2>

        <div className="relative mt-10 md:mt-12">
          {/* trilho */}
          <div
            ref={containerRef}
            className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div
              className="
                grid grid-flow-col
                auto-cols-[100%]
                md:auto-cols-[calc((100%-1rem)/2)]
                lg:auto-cols-[calc((100%-3rem)/3)]
                gap-4 lg:gap-6
              "
            >
              {items.map((t, i) => {
                const scaleClass = LOGO_SCALE_BY_NAME[t.name] ?? "";
                return (
                  <article
                    key={i}
                    data-slide-index={i}
                    ref={(el) => (slidesRef.current[i] = el)}
                    className="
                      snap-center snap-always
                      rounded-3xl border border-slate-200 bg-white
                      p-6 md:p-8 shadow-sm flex flex-col h-full
                    "
                  >
                    <Quote className="w-10 h-10 text-indigo-400" />
                    <p className="mt-5 text-slate-700 leading-relaxed">“{t.quote}”</p>

                    <div className="mt-6 md:mt-8">
                      <div className="font-semibold text-slate-900">{t.company}</div>
                      <div className="text-slate-500 text-sm">{t.role}</div>

                      {/* Logo + estrelas – caixa fixa igual para todos */}
                      <div className="mt-5 flex items-center justify-between gap-3">
                        {/* Caixa de logo com altura padrão */}
                        <div className="h-10 md:h-12 max-w-[46%] flex items-center">
                          <img
                            src={t.logo}
                            alt={t.name}
                            className={`h-full w-auto object-contain shrink-0 origin-left ${scaleClass}`}
                          />
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star
                              key={s}
                              className={`w-4 h-4 ${
                                s < (t.rating || 5)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* setas */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={goPrev}
            className="
              place-items-center
              absolute -left-3 top-1/2 -translate-y-1/2 z-10
              w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm
              hover:bg-slate-50
            "
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={goNext}
            className="
              place-items-center
              absolute -right-3 top-1/2 -translate-y-1/2 z-10
              w-7 h-7 rounded-full bg-white border border-slate-200 shadow-sm
              hover:bg-slate-50
            "
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* indicadores */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => {
                  setIndex(i);
                  scrollToIndex(i);
                }}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-slate-800" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
