// src/sections/Plans.jsx
import React, { useEffect, useRef } from "react";
import { CalendarCheck2, Wrench } from "lucide-react";

const PLANS = [
  {
    id: "starter",
    title: "Starter",
    price: "R$ 850",
    priceSuffix: "/mês",
    highlight: "Essencial para começar com segurança",
    description: "Validações confiáveis integrado para sair do processo manual com rapidez",
    features: [
      "100 cadastros/mês",
      "2 usuários",
      "1 integração com Atua ou SAT",
      "Antifraude essencial + automação básica",
      "Suporte (SLA em tempo real)",
    ],
  },
  {
    id: "basic",
    title: "Essential",
    price: "R$ 8,97",
    priceSuffix: "/por cadastro",
    highlight: "Mais controle para seu time",
    description: "Automação simples + antifraude e alertas para reduzir erros manuais.",
    features: [
      "minimo 350 cadastros/mês",
      "5 usuários",
      "1 integração com Atua ou SAT",
      "Antifraude com regras + API",
      "Suporte (SLA em tempo real)",
    ],
    popular: true,
    badge: "Mais popular",
  },
  {
    id: "pro",
    title: "Pro",
    price: "Sob consulta",
    highlight: "Para empresas de médio e grande porte que precisam de velocidade e segurança",
    description: "Workflows completos, múltiplas integrações e API/Webhooks.",
    features: [
      "Cadastros ilimitados/mês",
      "usuários ilimitados",
      "Integrações múltiplas (Sankhya/Atua/SAT/KMM/outros)",
      "Antifraude avançado + automação",
      "Suporte (SLA full time)",
    ],
  },
];

const VISIBLE_IDS = ["starter", "basic", "pro"];

function PlanCard({
  id,
  title,
  price,
  priceSuffix,
  highlight,
  description,
  features,
  popular,
  badge,
  enterprise,
}) {
  return (
    <div
      className="
        relative h-full w-full max-w-[420px]
        rounded-2xl border border-white/10 bg-white/5
        shadow-lg overflow-hidden transition
        hover:ring-1 hover:ring-[#1da7e5]/50
      "
    >
      {popular && (
        <div className="absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] md:text-xs font-medium bg-[#1da7e5] text-white">
          {badge || "Popular"}
        </div>
      )}

      <div className="p-5 md:p-7">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

        {!enterprise ? (
          <>
            <p className="mt-1 text-white/70 text-xs md:text-sm">A partir de</p>
            <div className="mt-1 md:mt-2 flex items-baseline gap-1">
              <span className="text-2xl md:text-4xl font-extrabold">{price}</span>
              {priceSuffix && (
                <span className="text-white/60 text-xs md:text-base">{priceSuffix}</span>
              )}
            </div>

            {/* Observação alinhamento */}
            {id === "starter" && (
              <p className="mt-1 text-[10px] md:text-xs text-white/50">*no plano anual</p>
            )}
            {id === "basic" && (
              <p className="mt-1 text-[10px] md:text-xs opacity-0 select-none" aria-hidden="true">
                placeholder
              </p>
            )}
          </>
        ) : (
          <div className="mt-2">
            <span className="inline-flex items-center rounded-lg border border-white/15 px-2.5 py-1 text-[13px] md:text-sm text-white/90">
              {price}
            </span>
          </div>
        )}

        <p className="mt-3 md:mt-4 text-sm md:text-base font-semibold">{highlight}</p>
        <p className="mt-1 text-[13px] md:text-sm text-white/80">{description}</p>

        {/* CTA CENTRALIZADO */}
        <div className="mt-4 md:mt-6 flex justify-center">
          <a
            href="#contato"
            className="
              inline-flex items-center justify-center
              rounded-xl px-4 md:px-5 py-2.5 md:py-1.5
              bg-[#1da7e5] hover:bg-[#168fc3] font-semibold text-sm md:text-base
              w-[220px] md:w-[240px] lg:w-[260px]
            "
          >
            {enterprise ? "Solicitar Orçamento Personalizado" : "Agendar Demo Gratuita"}
          </a>
        </div>

        <div className="mt-5 md:mt-6 h-px bg-white/10" />

        <div className="mt-3 md:mt-4">
          <p className="text-sm md:text-base font-semibold">Incluso:</p>
          <ul className="mt-3 space-y-2 text-[13px] md:text-sm text-white/90">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#1da7e5]" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Plans() {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (el) el.scrollLeft = 0;
  }, []);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const gap = 24;
    const delta = card ? card.getBoundingClientRect().width + gap : 320;
    el.scrollBy({ left: (dir === "next" ? 1 : -1) * delta, behavior: "smooth" });
  };

  const plansToRender = PLANS.filter((p) => VISIBLE_IDS.includes(p.id));

  return (
    <section id="planos" className="relative py-16 md:py-20 bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold">Planos OnCad</h2>
          <p className="mt-3 text-white/80 text-sm md:text-base">
            Escolha o plano ideal para impulsionar seus cadastros e reduzir fraudes dos seus
            clientes!
          </p>

          {/* Selos */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs md:text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#1da7e5" d="M12 2l7 4v6c0 5-7 10-7 10S5 17 5 12V6l7-4z" />
              </svg>
              Garantia de Satisfação de 30 dias
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs md:text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#1da7e5"
                  d="M12 1a5 5 0 0 0-5 5v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v2H9V6a3 3 0 0 1 3-3Z"
                />
              </svg>
              Sem fidelidade em todos os planos
            </span>
          </div>
        </header>

        <div className="relative mt-8 px-3 sm:px-6">
          {/* SETAS (mobile) */}
          <button
            type="button"
            aria-label="Plano anterior"
            onClick={() => scrollByCards("prev")}
            className="
              md:hidden absolute left-1 top-1/2 -translate-y-1/2 z-10
              grid place-items-center w-9 h-9 rounded-full
              bg-white/10 hover:bg-white/15 border border-white/15
            "
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Próximo plano"
            onClick={() => scrollByCards("next")}
            className="
              md:hidden absolute right-1 top-1/2 -translate-y-1/2 z-10
              grid place-items-center w-9 h-9 rounded-full
              bg-white/10 hover:bg-white/15 border border-white/15
            "
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" fill="none" />
            </svg>
          </button>

          {/* TRILHO */}
          <div
            ref={trackRef}
            className="
              relative flex items-stretch gap-6 overflow-x-auto scroll-smooth no-scrollbar
              snap-x snap-mandatory pb-2 justify-start z-0
            "
          >
            {plansToRender.map((p) => (
              <div
                key={p.id}
                data-card
                className="
                  snap-center shrink-0
                  w-[86vw] sm:w-[60vw]
                  md:w-[360px] lg:w-[380px]
                  flex justify-center
                "
              >
                <PlanCard {...p} />
              </div>
            ))}
          </div>
        </div>

        {/* Chamadas estratégicas */}
        <div className="mt-10">
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 hover:ring-1 hover:ring-[#1da7e5]/50 transition">
              <div
                className="flex items-start gap-3 pl-5 md:pl-6 py-5 md:py-6"
                style={{ paddingRight: "3.25rem" }}
              >
                <CalendarCheck2
                  size={20}
                  strokeWidth={2}
                  color="#1da7e5"
                  className="shrink-0 mt-0.5"
                />
                <div className="flex-1 min-w-0 leading-relaxed">
                  <strong className="block font-semibold whitespace-nowrap">
                    Teste gratuito por 30 dias
                  </strong>
                  <p className="text-white/80 text-xs md:text-sm">
                    Experimente o OnCad completo (limitado a 50 cadastros).
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 hover:ring-1 hover:ring-[#1da7e5]/50 transition">
              <div
                className="flex items-start gap-3 pl-5 md:pl-6 py-5 md:py-6"
                style={{ paddingRight: "2.5rem" }}
              >
                <Wrench size={20} strokeWidth={2} color="#1da7e5" className="shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0 leading-relaxed">
                  <strong className="block font-semibold">
                    Consultoria gratuita de implementação
                  </strong>
                  <p className="text-white/80 text-xs md:text-sm">
                    Implantação guiada para acelerar resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          Para informações sobre planos personalizados para grandes volumes, entre em contato.
        </p>
      </div>
    </section>
  );
}
