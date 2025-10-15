// src/sections/Contato.jsx
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo-light.png";
import { LOCALIZACAO_LINK, WHATSAPP_LINK } from "@/constants";
import appStoreBadge from "../assets/appstore-badge.svg";
import googlePlayBadge from "../assets/googleplay-badge.png";
import { colors } from "@/components/brand.jsx";

/* ===== animação só para o texto da faixa ===== */
const TRIGGER_DEFAULT = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" };
const TRIGGER_DEFAULT_MOBILE = { threshold: 0.45, rootMargin: "0px" };

function useIsMobile(bp = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < bp : false
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width:${bp - 1}px)`);
    const on = () => setIsMobile(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, [bp]);
  return isMobile;
}

function useInView(opts = TRIGGER_DEFAULT) {
  const {
    threshold = TRIGGER_DEFAULT.threshold,
    root = null,
    rootMargin = TRIGGER_DEFAULT.rootMargin,
  } = opts || {};
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const isNowVisible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const height = Math.max(r.height, 1);
      const visiblePart = Math.min(r.bottom, vh) - Math.max(r.top, 0);
      const frac = visiblePart / height;
      const intersects = r.left < vw && r.right > 0 && r.bottom > 0 && r.top < vh;
      return intersects && frac >= threshold;
    };

    if (isNowVisible()) {
      setInView(true);
      return;
    }

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setInView(true);
            io.unobserve(el);
          }
        },
        { threshold, root, rootMargin }
      );
      io.observe(el);
    }

    const onScroll = () => {
      if (!inView && isNowVisible()) {
        setInView(true);
        window.removeEventListener("scroll", onScroll, { passive: true });
        window.removeEventListener("resize", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (io) io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [inView, threshold, root, rootMargin]);

  return { ref, inView };
}

/* helpers (mesmo padrão do site) */
const EASE =
  "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100";
const BASE = `transform-gpu transition-transform transition-opacity duration-[820ms] ${EASE} will-change-transform will-change-opacity`;
const fadeUpCls = (on) =>
  [BASE, on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"].join(" ");

const Icon = {
  WhatsApp: (props) => (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.1 17.3c-.3-.1-1-.4-1.1-.4s-.3-.1-.5.1c-.1.2-.5.4-.6.5-.1.1-.2.1-.4 0-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.8-.2-.3 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3 0-.1-.5-1.2-.6-1.6-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.2s.5 1.4.5 1.5c.1.2 1 1.9 2.5 3.2 1.7 1.6 3.2 2 3.6 2.2.4.1.9.1 1.2.1.4 0 1.2-.5 1.3-.9.2-.5.2-1 .1-1.1-.1-.1-.3-.1-.6-.2z" />
      <path d="M27.6 4.4A14 14 0 0 0 5.5 26.4L4 30.9l4.6-1.5A14 14 0 1 0 27.6 4.4zM16 28a12 12 0 1 1 10.9-6.7A12 12 0 0 1 16 28z" />
    </svg>
  ),
};

export default function Contato() {
  const isMobile = useIsMobile();
  const bandSentinel = useInView(isMobile ? TRIGGER_DEFAULT_MOBILE : TRIGGER_DEFAULT);

  return (
    <section id="contato" className="bg-black">
      {/* Faixa (sólida da brand). O sentinela dispara a animação do texto */}
      <div style={{ backgroundColor: colors.primary }} className="text-center">
        <div ref={bandSentinel.ref} className="h-1 w-full" aria-hidden />
        <div className="py-10 sm:py-12 md:py-16">
          <h2
            className={fadeUpCls(bandSentinel.inView)}
            style={{
              transitionDelay: bandSentinel.inView ? "0ms" : "0ms",
              color: "#fff",
              fontWeight: 800,
              lineHeight: 1.15,
              fontSize: "clamp(1.25rem, 4.5vw, 2.5rem)", // 20–40px
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "48rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            Deseja aumentar a segurança e eficiência do seu cadastro?
          </h2>
          <p
            className={fadeUpCls(bandSentinel.inView)}
            style={{
              transitionDelay: bandSentinel.inView ? "120ms" : "0ms",
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)", // 14–18px
              marginTop: "0.5rem",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "42rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            Entre em contato agora mesmo pelos canais abaixo e fale com a nossa equipe.
          </p>
        </div>
      </div>

      {/* Conteúdo (estático) */}
      <div className="py-12 md:py-16 mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-start text-center md:text-left">
          <aside className="space-y-4 md:mt-6">
            <img
              src={logo}
              alt="OnRota"
              className="h-14 md:h-[72px] w-auto opacity-95 mx-auto md:mx-0"
            />
            <p className="text-white/70 text-sm max-w-md mx-auto md:mx-0">
              Soluções antifraude e automação para transporte rodoviário.
            </p>
          </aside>

          <div className="text-white/90 text-sm md:text-base md:mt-6">
            <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center md:justify-start gap-y-3 gap-x-6">
              <div className="whitespace-nowrap">
                <span className="text-white font-semibold">Telefone:</span>{" "}
                <a
                  href="tel:+556499288250"
                  onClick={(e) => e.preventDefault()}
                  className="hover:underline"
                  style={{ color: "#fff" }}
                >
                  +55 64 9928-8250
                </a>
              </div>
              <div className="whitespace-nowrap">
                <span className="text-white font-semibold">E-mail:</span>{" "}
                <a
                  href="mailto:contato@onrota.tech"
                  className="hover:underline"
                  style={{ color: "#fff" }}
                >
                  contato@onrota.tech
                </a>
              </div>
              <div className="md:basis-full pt-1">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md font-semibold px-4 py-2 text-sm transition"
                  style={{ backgroundColor: "#22c55e", color: "#fff" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
                >
                  <Icon.WhatsApp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="text-white/90 text-sm md:text-base md:mt-6">
            <div>
              <span className="text-white font-semibold">Localização:</span>{" "}
              <a
                href={LOCALIZACAO_LINK}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-white"
                style={{ color: "#fff" }}
              >
                Rua 22, Quadra 17, Lote 08, Casa 2, Parque dos Buritis 2, 75.907-380, Rio Verde -
                GO.
              </a>
            </div>
            <div className="mt-5">
              <p className="text-white/80 text-xs md:text-sm mb-2">
                Baixe nosso app em sua loja de aplicativos:
              </p>
              <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
                <a
                  href="https://apps.apple.com/br/app/oncad-cadastro-f%C3%A1cil/id6752832394 "
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Baixar na App Store"
                  className="inline-flex"
                >
                  <img
                    src={appStoreBadge}
                    alt="Baixar na App Store"
                    className="h-9 w-auto object-contain"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=seuapp"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Baixar no Google Play"
                  className="inline-flex"
                >
                  <img
                    src={googlePlayBadge}
                    alt="Baixar no Google Play"
                    className="h-9 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          #contato a:hover { color: ${colors.primary}; }
        `}</style>
      </div>
    </section>
  );
}
