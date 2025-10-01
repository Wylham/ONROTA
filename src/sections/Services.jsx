// src/sections/Services.jsx
import React, { useEffect, useMemo, useRef } from "react";
import { IconOCR, IconCadastro, IconAPI, IconValidacao } from "@/components/icons.jsx";
import { colors as brandColors } from "/src/components/brand.jsx";

/* Mapa de cores com fallbacks */
const theme = {
  primary: brandColors?.primary || "#1da7e5",
  primaryHover: brandColors?.primaryHover || "#168fc3",
  text: brandColors?.text || "#ffffff",
  textMuted: brandColors?.textMuted || "rgba(255,255,255,0.75)",
  bg: brandColors?.bg || "#121212",
  panelBg: brandColors?.panelBg || "#101216",
  ring: brandColors?.ring || "rgba(255,255,255,0.10)",
  cardBg: brandColors?.cardBg || "rgba(255,255,255,0.05)",
  cardBgHover: brandColors?.cardBgHover || "rgba(255,255,255,0.08)",
  outline: brandColors?.outline || "rgba(255,255,255,0.20)",
};

/* Reveal util (leve e sem libs) */
function useReveal({ once = true, rootMargin = "0px 0px -12% 0px" } = {}) {
  const observerRef = useRef(null);

  const observe = (el) => {
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    el.style.opacity = prefersReduced ? "1" : "0";
    el.style.transform = prefersReduced ? "none" : "translateY(22px)";
    el.style.willChange = prefersReduced ? "auto" : "opacity, transform";

    if (prefersReduced) return;

    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const node = entry.target;
            if (entry.isIntersecting) {
              const delay = Number(node.dataset.delay || 0);
              node.style.transition = `opacity 520ms cubic-bezier(.22,.61,.36,1) ${delay}ms, transform 520ms cubic-bezier(.22,.61,.36,1) ${delay}ms`;
              node.style.opacity = "1";
              node.style.transform = "none";
              if (once) observerRef.current?.unobserve(node);
            }
          });
        },
        { root: null, threshold: 0.12, rootMargin }
      );
    }
    observerRef.current.observe(el);
  };

  useEffect(() => () => observerRef.current?.disconnect(), []);
  return observe;
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const refCb = useReveal();
  const localRef = useRef(null);

  useEffect(() => {
    if (localRef.current) {
      localRef.current.dataset.delay = String(delay);
      refCb(localRef.current);
    }
  }, [refCb, delay]);

  return (
    <Tag
      ref={localRef}
      className={className}
      style={{ contain: "layout paint", backfaceVisibility: "hidden" }}
    >
      {children}
    </Tag>
  );
}

export default function Services() {
  const ASSETS = {
    mockup: "/mockups/phone-oncad2.webp",
    oncadLogo: "/logos/opt/oncad.webp",
  };

  const features = useMemo(
    () => [
      {
        icon: <IconOCR className="h-7 w-7" style={{ color: theme.primary }} />,
        title: "OCR em PDFs de CNH e CRLV",
        desc: "Leitura precisa, extraindo campos em segundos.",
      },
      {
        icon: <IconCadastro className="h-7 w-7" style={{ color: theme.primary }} />,
        title: "Cadastro automático",
        desc: "Preenche motoristas e veículos sem digitação manual.",
      },
      {
        icon: <IconAPI className="h-7 w-7" style={{ color: theme.primary }} />,
        title: "Integração por API",
        desc: "Envio direto ao seu ERP com logs e rastreabilidade.",
      },
      {
        icon: <IconValidacao className="h-7 w-7" style={{ color: theme.primary }} />,
        title: "Validações e regras",
        desc: "Padronização e antifraude configuráveis para a operação.",
      },
    ],
    []
  );

  return (
    <section
      id="servicos"
      className="relative py-12 md:py-16 scroll-mt-24 md:scroll-mt-28"
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Cabeçalho + Mockup */}
        <div className="grid items-center gap-8 md:gap-10 lg:gap-12 md:grid-cols-2">
          <Reveal as="div">
            {/* Logo OnCad */}
            <Reveal as="div" delay={40}>
              <img
                src={ASSETS.oncadLogo}
                alt="OnCad"
                className="h-10 md:h-11 w-auto opacity-90"
                loading="lazy"
                decoding="async"
              />
            </Reveal>

            <Reveal
              as="h2"
              delay={90}
              className="mt-3 text-[32px] md:text-[44px] font-extrabold leading-[1.08] tracking-tight"
            >
              Automatize seu cadastro em minutos com o OnCad.
            </Reveal>

            <Reveal
              as="p"
              delay={140}
              className="mt-4 text-[15px] md:text-[16px] leading-relaxed max-w-xl"
              style={{ color: theme.textMuted }}
            >
              Construa um fluxo que elimina digitação manual, valida dados por OCR e integra direto
              ao seu ERP com rastreabilidade completa.
            </Reveal>

            <Reveal as="div" delay={190} className="mt-6 flex items-center gap-2 sm:gap-3">
              <a
                href="#contato"
                className="flex-1 md:flex-none inline-flex items-center justify-center rounded-lg
               px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-semibold transition"
                style={{ backgroundColor: theme.primary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.primaryHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary)}
              >
                Agendar Demo Gratuita
              </a>

              <a
                href="#planos"
                className="flex-1 md:flex-none inline-flex items-center justify-center rounded-lg
               px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-semibold transition"
                style={{
                  border: `1px solid ${theme.outline}`,
                  backgroundColor: "transparent",
                  color: theme.text,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.cardBgHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                Conheça os planos
              </a>
            </Reveal>
          </Reveal>

          <Reveal as="div" className="relative text-center" delay={60}>
            {ASSETS.mockup ? (
              <img
                src={ASSETS.mockup}
                alt="Mockup do OnCad"
                className="w-full h-auto md:max-h-[640px] lg:max-h-[720px] object-contain mx-auto select-none pointer-events-none"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full aspect-[16/9] flex items-center justify-center text-xs rounded-xl"
                style={{ color: theme.textMuted, border: `1px dashed ${theme.ring}` }}
              >
                Adicione /mockups/phone-oncad2.webp
              </div>
            )}
          </Reveal>
        </div>

        {/* PAINEL DE FEATURES */}
        <Reveal as="div" delay={60} className="mt-10 md:mt-12">
          <div
            className="rounded-3xl p-6 md:p-8 shadow-lg"
            style={{
              backgroundColor: theme.panelBg,
              outline: `1px solid ${theme.ring}`,
              outlineOffset: 0,
            }}
          >
            <Reveal
              as="h3"
              delay={100}
              className="text-center text-[22px] md:text-[26px] font-bold mb-8 md:mb-10"
            >
              Recursos que irão inovar o seu cadastro
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <Reveal
                  key={i}
                  delay={80 + i * 80}
                  className="rounded-2xl p-5 transition"
                  style={{
                    backgroundColor: theme.cardBg,
                    outline: `1px solid ${theme.ring}`,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.cardBgHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.cardBg)}
                >
                  <div className="mb-3">{f.icon}</div>
                  <p className="font-semibold leading-tight">{f.title}</p>
                  <p className="mt-2 text-sm" style={{ color: theme.textMuted }}>
                    {f.desc}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* CTA final dentro do painel */}
            <Reveal as="div" delay={120} className="mt-8 md:mt-10 flex justify-center">
              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition"
                style={{ backgroundColor: theme.primary }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.primaryHover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.primary)}
              >
                Conhecer planos
              </a>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
