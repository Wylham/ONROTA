// src/sections/Impact.jsx
import React, { useEffect, useRef, useState } from "react";
import { IconValidacao, IconOCR, IconAPI } from "@/components/icons.jsx";
import { colors } from "@/components/brand.jsx";

/* Dados */
const CARDS = [
  {
    icon: IconValidacao,
    title: "Risco sob controle",
    desc: "Validações automáticas de motorista e veículo (OCR + regras + score de risco) reduzem fraudes e liberam decisões seguras.",
  },
  {
    icon: IconOCR,
    title: "Menos digitação, mais precisão",
    desc: "Leitura automática de documentos via OCR elimina erros humanos, reduz retrabalho e acelera o cadastro, garantindo evidências de compliance.",
  },
  {
    icon: IconAPI,
    title: "Integração simples",
    desc: "APIs e Webhooks conectam o ONCAD ao seu ERP/TMS. Status, evidências e eventos fluem automaticamente entre sistemas.",
  },
];

/* Triggers / hooks */
const TRIGGER_DEFAULT = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" };
const TRIGGER_DEFAULT_MOBILE = { threshold: 0.45, rootMargin: "0px" };

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const on = () => setIsMobile(mq.matches);
    on();
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, [breakpoint]);
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
    if (!ref.current || inView) return;
    const el = ref.current;

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

/* Helpers de animação */
const EASE =
  "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100";
const BASE = `transform-gpu transition-transform transition-opacity duration-[820ms] ${EASE} will-change-transform will-change-opacity`;

function slideX(on, dir, extra = "") {
  const off = dir === "left" ? "-translate-x-[10%]" : "translate-x-[10%]";
  return [BASE, on ? "opacity-100 translate-x-0" : `opacity-0 ${off}`, extra].join(" ");
}

/* >>> fix: fadeUp agora retorna { className, style } com CSS var --dy */
function fadeUp(on, extra = "", dur = "760ms", dy = 8) {
  const className = [BASE, on ? "opacity-100" : "opacity-0", "translate-y-[var(--dy)]", extra].join(
    " "
  );
  const style = {
    "--dy": on ? "0px" : `${dy}px`,
    transitionDuration: dur,
  };
  return { className, style };
}

function landUp(on, extra = "", delayMs = 0) {
  const cls = [
    BASE.replace("duration-[820ms]", "duration-[760ms]"),
    on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
    extra,
  ].join(" ");
  const style = { transitionDelay: on ? `${delayMs}ms` : "0ms" };
  return { className: cls, style };
}

/* Componente */
export default function Impact({
  headingTop = "Por que escolher o ONCAD?",
  headingBottom = "Porque por aqui, só há vantagens!",
  cards = CARDS,
}) {
  const isMobile = useIsMobile();
  const head = useInView(isMobile ? TRIGGER_DEFAULT_MOBILE : TRIGGER_DEFAULT);
  const grid = useInView(isMobile ? TRIGGER_DEFAULT_MOBILE : TRIGGER_DEFAULT);
  const logos = useInView(isMobile ? TRIGGER_DEFAULT_MOBILE : TRIGGER_DEFAULT);

  const brand = {
    primary: colors?.primary || "#1da7e5",
    primaryHover: colors?.primaryHover || "#168fc3",
  };

  return (
    <section className="bg-white text-slate-900 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-2 pt-12 md:pt-16 pb-2 md:pb-4">
        {/* Heading */}
        <header ref={head.ref} className="text-center mb-10 md:mb-12">
          <h2 {...fadeUp(head.inView, "text-4xl md:text-5xl font-extrabold tracking-tight")}>
            {headingTop}
          </h2>
          <p
            className={slideX(
              head.inView,
              "right",
              "mt-2 text-3xl md:text-4xl font-extrabold tracking-tight"
            )}
            style={{ color: brand.primary }}
          >
            {headingBottom}
          </p>
        </header>

        {/* Cards */}
        <div ref={grid.ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              {...landUp(
                grid.inView,
                "rounded-2xl p-6 md:p-8 shadow-sm flex flex-col transition-colors",
                80 + i * 90
              )}
              style={{ backgroundColor: brand.primary }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand.primaryHover)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = brand.primary)}
            >
              <Icon {...fadeUp(grid.inView, "w-10 h-10 text-white")} />
              <h3 className={slideX(grid.inView, "right", "mt-5 text-2xl font-bold text-white")}>
                {title}
              </h3>
              <p {...fadeUp(grid.inView, "mt-3 text-white/95 flex-grow")}>{desc}</p>

              <a
                href="#planos"
                className={slideX(
                  grid.inView,
                  "right",
                  "mt-5 inline-block font-semibold transition-opacity no-underline"
                )}
                style={{
                  color: "#fff",
                  opacity: grid.inView ? 1 : 0,
                  transitionDelay: grid.inView ? `${180 + i * 90}ms` : "0ms",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.9)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
              >
                Ver planos
              </a>
            </article>
          ))}
        </div>

        {/* Logos de integrações */}
        <div className="mt-10 md:mt-12" ref={logos.ref}>
          <p {...fadeUp(logos.inView, "text-center text-sm md:text-base text-slate-500")}>
            Realizamos integrações com os principais sistemas do mercado.
          </p>

          {/* MOBILE: 3 logos na MESMA LINHA (sem quebra). */}
          <ul
            className={slideX(
              logos.inView,
              "left",
              `
              mt-6 md:mt-8
              flex flex-nowrap md:flex-wrap
              items-center justify-between md:justify-center
              gap-x-4 md:gap-x-14 gap-y-0 md:gap-y-10
            `
            )}
          >
            {[
              { src: "/integrations/atua.webp", alt: "Atua" },
              { src: "/integrations/sankhya.webp", alt: "Sankhya" },
              { src: "/integrations/sat.webp", alt: "Sat" },
            ].map((logo, i) => (
              <li
                key={logo.alt}
                className="w-1/3 md:w-auto flex items-center justify-center h-16 md:h-32"
                style={{ transitionDelay: logos.inView ? `${80 + i * 90}ms` : "0ms" }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  {...fadeUp(logos.inView, "max-h-full object-contain")}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
