// src/sections/Testimonials.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    company: "Pianetto Transportes",
    role: "Diretoria",
    name: "Pianetto",
    quote:
      "Antes do ONCAD, nosso processo de cadastro era um pesadelo. Cada embarcador precisava digitar manualmente dados de cavalo, carreta, CNH do motorista, proprietário e ANTT, além de consultar sites de governo para verificar validade de documentos. Isso consumia tempo, gerava retrabalho e abria brechas para fraudes. Motoristas adulteravam informações como CNHs cassadas registradas como válidas e ainda existia o risco de corrupção interna, quando algum funcionário aprovava dados errados de propósito. O ONCAD eliminou tudo isso em segundos. O sistema faz todas as consultas automaticamente nos órgãos oficiais, valida documentos em menos de um minuto e impede qualquer fraude, seja do motorista ou do colaborador. Hoje trabalhamos com confiança, agilidade e segurança em cada cadastro. Mais do que uma ferramenta, o ONCAD se tornou um escudo contra erros e fraudes, garantindo eficiência e proteção total para a operação",
    logo: "/logos/@1x/pianetto@1x.webp",
    rating: 5,
  },
  {
    company: "Transportadora Boa Viagem",
    role: "Gerente Operacional",
    name: "Boa Viagem",
    quote:
      "O transporte rodoviário exige decisões rápidas e seguras, e muitas vezes não tínhamos esse suporte com os processos antigos. O ONCAD veio para mudar essa realidade. O sistema antifraude foi um divisor de águas, porque eliminou as incertezas que tínhamos nas conferências manuais. Antes, a equipe precisava revisar documentos e cadastros diversas vezes, o que atrasava todo o fluxo. Agora, conseguimos validar tudo em segundos, com muito mais precisão. Além de economizar tempo, reduzimos riscos que poderiam gerar grandes prejuízos. Mais do que uma ferramenta, o ONCAD se tornou um parceiro estratégico no dia a dia da nossa operação.",
    logo: "/logos/@1x/boa-viagem@1x.webp",
    rating: 5,
  },
  {
    company: "Anderle",
    role: "CEO",
    name: "Anderle",
    quote:
      "Adotar o ONCAD foi uma das decisões mais acertadas da nossa empresa. Sempre tivemos preocupação com a segurança dos dados e com a confiabilidade das informações, mas era difícil manter um controle eficiente sem gastar muito tempo e recursos. Desde que implementamos a plataforma, percebemos uma transformação completa: os processos ficaram mais organizados, os cadastros passaram a ser validados automaticamente e nossa equipe ganhou liberdade para focar em tarefas mais estratégicas. Hoje nos sentimos preparados para crescer sem medo de inconsistências, porque sabemos que temos uma base sólida, segura e confiável sustentando nossa operação.",
    logo: "/logos/@1x/anderle@1x.webp",
    rating: 5,
  },
  {
    company: "SHR LOG",
    role: "Gerente Comercial",
    name: "SHR LOG",
    quote:
      "O que mais me surpreendeu no ONCAD foi a facilidade de integração com nosso ERP. Durante anos, nossa rotina foi marcada por planilhas desatualizadas, erros de digitação e processos engessados. Isso gerava retrabalhos constantes e insegurança na hora de tomar decisões. Com a automação que o ONCAD trouxe, conseguimos eliminar quase todos esses gargalos. Hoje temos um fluxo ágil, transparente e confiável, que não apenas agiliza os cadastros, mas também nos permite enxergar de forma clara os pontos de melhoria. Esse ganho de eficiência impactou diretamente nossa produtividade e trouxe muito mais segurança para planejar o futuro.",
    logo: "/logos/@1x/shrlog@1x.webp",
    rating: 5,
  },
];

// logos com “respiro” interno
const LOGO_SCALE_BY_NAME = {
  "Boa Viagem": "scale-[1.9] md:scale-[1.6]",
};

// tipografia do quote conforme comprimento (compacta)
function quoteSizeClass(len) {
  if (len > 1100) return "text-[0.82rem] md:text-[0.9rem]"; // ~13–14px
  if (len > 850) return "text-[0.86rem] md:text-[0.92rem]"; // ~14–15px
  return "text-[0.9rem] md:text-[0.95rem]"; // ~14.5–15px
}

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
    el.scrollTo({ left: el.clientWidth * i, behavior: smooth ? "smooth" : "auto" });
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
      <div className="mx-auto max-w-7xl px-3 pt-8 md:pt-12 pb-6 md:pb-8">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
          {heading}
        </h2>

        <div className="relative mt-6 md:mt-8">
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
                md:auto-cols-[calc((100%-0.5rem)/2)]
                lg:auto-cols-[calc((100%-1.5rem)/3)]
                gap-2.5 lg:gap-3
                items-start
              "
            >
              {items.map((t, i) => {
                const scaleClass = LOGO_SCALE_BY_NAME[t.name] ?? "";
                const len = (t.quote || "").length;

                return (
                  <article
                    key={i}
                    data-slide-index={i}
                    ref={(el) => (slidesRef.current[i] = el)}
                    className="
                      snap-center snap-always
                      rounded-xl border border-slate-200 bg-white
                      p-4 md:p-5 shadow-sm flex flex-col self-start
                    "
                  >
                    <Quote className="w-6 h-6 text-indigo-400" />

                    {/* quote compacto */}
                    <p className={`mt-3 text-slate-700 leading-[1.5] ${quoteSizeClass(len)}`}>
                      “{t.quote}”
                    </p>

                    <div className="mt-4 md:mt-5">
                      <div className="font-semibold text-slate-900 text-[0.9rem] md:text-[0.95rem]">
                        {t.company}
                      </div>
                      <div className="text-slate-500 text-[0.78rem] md:text-[0.82rem]">
                        {t.role}
                      </div>

                      {/* logo + estrelas menores */}
                      <div className="mt-3.5 flex items-center justify-between gap-2">
                        <div className="h-7 md:h-8 max-w-[46%] flex items-center">
                          <img
                            src={t.logo}
                            alt={t.name}
                            className={`h-full w-auto object-contain shrink-0 origin-left ${scaleClass}`}
                          />
                        </div>
                        <div className="flex items-center gap-[3px] shrink-0">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star
                              key={s}
                              className={`w-[12px] h-[12px] ${
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

          {/* setas compactas */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={goPrev}
            className="
              place-items-center
              absolute -left-2 top-1/2 -translate-y-1/2 z-10
              w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm
              hover:bg-slate-50
            "
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={goNext}
            className="
              place-items-center
              absolute -right-2 top-1/2 -translate-y-1/2 z-10
              w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm
              hover:bg-slate-50
            "
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* indicadores compactos */}
          <div className="mt-4 flex justify-center gap-1">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para slide ${i + 1}`}
                onClick={() => {
                  setIndex(i);
                  scrollToIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-slate-800" : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
