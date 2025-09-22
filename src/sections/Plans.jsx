// src/sections/Plans.jsx
import React, { useEffect, useRef } from "react";
import { CalendarCheck2, Wrench } from "lucide-react";

const PLANS = [
  {
    id: "starter",
    title: "Starter",
    price: "R$ 390",
    priceSuffix: "/mês",
    highlight: "Essencial para começar com segurança",
    description: "Validações confiáveis e 1 conector para sair do Excel com rapidez.",
    features: [
      "3.000 cadastros/mês",
      "2 usuários",
      "1 integração (Sankhya ou Atua)",
      "Antifraude essencial + automação básica",
      "Suporte por e-mail (SLA 48h)",
    ],
  },
  {
    id: "basic",
    title: "Basic",
    price: "R$ 715",
    priceSuffix: "/mês",
    highlight: "Mais controle para seu time",
    description: "Automação simples e alertas para reduzir erros manuais.",
    features: [
      "7.000 cadastros/mês",
      "5 usuários",
      "2 integrações (Sankhya + Atua)",
      "Antifraude com regras + API",
      "Suporte priorizado (SLA 36h)",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    price: "R$ 890",
    priceSuffix: "/mês",
    highlight: "Crescimento com automação logística",
    description: "Workflows completos, múltiplas integrações e API/Webhooks.",
    features: [
      "15.000 cadastros/mês",
      "12 usuários",
      "Integrações múltiplas (Sankhya/Atua/ERP/TMS/BI)",
      "Antifraude avançado + automação",
      "SLA 24h",
    ],
    popular: true,
    badge: "Mais popular",
  },
  {
    id: "plus",
    title: "Plus",
    price: "R$ 1.310",
    priceSuffix: "/mês",
    highlight: "Eficiência para operação madura",
    description: "Orquestração entre áreas e visibilidade ponta a ponta.",
    features: [
      "30.000 cadastros/mês",
      "25 usuários",
      "Integrações ampliadas (Sankhya, Atua, ERPs, BI)",
      "Score de risco + automação avançada",
      "SLA dedicado (12h)",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    price: "Sob consulta",
    priceSuffix: "",
    highlight: "Escala, compliance e customização",
    description: "Soluções sob medida com segurança e time dedicado.",
    features: [
      "Cadastros/mês: sob consulta",
      "Usuários: sob consulta",
      "Integrações: sob consulta (Sankhya/Atua/ERP/TMS/BI)",
      "Antifraude/automação/API: sob consulta",
      "SLA e onboarding: sob consulta",
    ],
    enterprise: true,
  },
];

function PlanCard({
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
              <span className="text-white/60 text-xs md:text-base">{priceSuffix}</span>
            </div>
            <p className="mt-1 text-[10px] md:text-xs text-white/50">*no plano anual</p>
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

        <a
          href="#contato"
          className="
            mt-4 md:mt-6 inline-flex w-full items-center justify-center
            rounded-xl px-3 md:px-4 py-2.5 md:py-3
            bg-blue-600 hover:bg-blue-700 font-semibold text-sm md:text-base
          "
        >
          {enterprise ? "Solicitar Orçamento Personalizado" : "Agendar Demo Gratuita"}
        </a>

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
    const delta = card ? card.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: (dir === "next" ? 1 : -1) * delta, behavior: "smooth" });
  };

  return (
    <section id="planos" className="relative py-16 md:py-20 bg-[#0b0e19]">
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
          </div>
        </header>

        {/* Carrossel com fades */}
        <div className="relative mt-8 px-3 sm:px-6">
          {/* FADE ESQUERDA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#0b0e19] to-transparent z-[5]"
          />
          {/* FADE DIREITA */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#0b0e19] to-transparent z-[5]"
          />

          {/* SETAS (agora #1da7e5) */}
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => scrollByCards("prev")}
            className="grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#1da7e5] hover:bg-[#1593c8] shadow-lg z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#fff" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Próximo"
            onClick={() => scrollByCards("next")}
            className="grid place-items-center absolute right-0 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[#1da7e5] hover:bg-[#1593c8] shadow-lg z-10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#fff" d="M8.59 7.41 10 6l6 6-6 6-1.41-1.41L13.17 12z" />
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
            {PLANS.map((p) => (
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

        {/* Chamadas estratégicas (sem o card de desconto) */}
        <div className="mt-10">
          <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Teste gratuito (ícone atualizado) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 md:px-5 md:py-5 flex items-start gap-3 hover:ring-1 hover:ring-[#1da7e5]/50 transition">
              <CalendarCheck2 size={20} strokeWidth={2} color="#1da7e5" />
              <div className="text-sm md:text-base">
                <strong className="font-semibold">Teste gratuito por 30 dias</strong>
                <div className="text-white/80 text-xs md:text-sm">
                  Experimente o OnCad completo sem custo.
                </div>
              </div>
            </div>

            {/* Consultoria gratuita de implementação (ícone atualizado) */}
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 md:px-5 md:py-5 flex items-start gap-3 hover:ring-1 hover:ring-[#1da7e5]/50 transition">
              <Wrench size={20} strokeWidth={2} color="#1da7e5" />
              <div className="text-sm md:text-base">
                <strong className="font-semibold">Consultoria gratuita de implementação</strong>
                <div className="text-white/80 text-xs md:text-sm">
                  Implantação guiada para acelerar resultados.
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/60">
          Valores fictícios para demonstração. Solicite proposta conforme volume de cadastros,
          usuários, integrações e SLA.
        </p>
      </div>
    </section>
  );
}
