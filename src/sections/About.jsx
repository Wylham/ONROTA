// src/sections/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../components/brand";
import aboutPhoto from "../assets/about-photo.png";
import pillarsBg from "../assets/bg-pilar.jpeg";
import missionImg from "../assets/missao.jpg";
import visionImg from "../assets/visao.jpg";
import valuesImg from "../assets/valores.jpg";

/* ===== GATILHO PADRÃO (dispara pouco antes do meio do bloco) ===== */
const TRIGGER = { threshold: 0.4, rootMargin: "0px 0px -12% 0px" };

/* Hook in-view (IO + fallback) */
function useInView(opts = TRIGGER) {
  const {
    threshold = TRIGGER.threshold,
    root = null,
    rootMargin = TRIGGER.rootMargin,
  } = opts || {};
  const ref = useRef(null);
  const [inView, setInView] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (!ref.current || inView) return;
    const el = ref.current;

    const isNowVisible = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      const height = r.height || 1;
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
          const e = entries[0];
          if (e.isIntersecting) {
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

/** Suspiro padrão (gradiente de respiro) */
function Suspiro({ dir = "down", size = "md" }) {
  const h = size === "sm" ? "h-6 md:h-8" : size === "lg" ? "h-12 md:h-16" : "h-8 md:h-12";
  const rotate = dir === "up" ? "rotate-180" : "";
  return (
    <div aria-hidden className={`${h} ${rotate} bg-gradient-to-b from-transparent to-white`} />
  );
}

/* ===== Helpers de animação ===== */
const EASE =
  "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100";
const BASE = `transform transition-transform transition-opacity duration-[1000ms] ${EASE} will-change-transform will-change-opacity`;

/* slideX padrão (14% / 1000ms) */
function slideX(on, dir, extra = "") {
  const off = dir === "left" ? "-translate-x-[14%]" : "translate-x-[14%]";
  return [BASE, on ? "opacity-100 translate-x-0" : `opacity-0 ${off}`, extra].join(" ");
}

/* slideX sutil (Missão priority: 10% / 850ms) */
function slideXSoft(on, dir, extra = "") {
  const off = dir === "left" ? "-translate-x-[10%]" : "translate-x-[10%]";
  const baseSoft = BASE.replace("duration-[1000ms]", "duration-[850ms]");
  return [baseSoft, on ? "opacity-100 translate-x-0" : `opacity-0 ${off}`, extra].join(" ");
}

/* fade up (mobile e pequenos elementos) */
function fadeUp(on, extra = "", soft = false) {
  const base = soft ? BASE.replace("duration-[1000ms]", "duration-[850ms]") : BASE;
  return [base, on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", extra].join(" ");
}

/* pouso suave (Pilares): de baixo pra cima + scale leve (mais presente, porém sutil) */
function landUp(on, extra = "", delayMs = 0) {
  const cls = [
    BASE.replace("duration-[1000ms]", "duration-[800ms]"),
    on ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.992]",
    extra,
  ].join(" ");
  const style = { transitionDelay: on ? `${delayMs}ms` : "0ms" };
  return { className: cls, style };
}

export default function About() {
  return (
    <section id="sobre" className="bg-white text-slate-900">
      {/* Suspiro entre o HERO e o About */}
      <Suspiro dir="up" size="md" />

      {/* TOPO (Sobre nós) no mesmo modelo dos blocos abaixo – imagem à esquerda */}
      <LeadRow />

      {/* Suspiro abaixo do bloco topo */}
      <Suspiro dir="down" size="md" />

      {/* Pilares (landUp: de baixo pra cima e pousando) */}
      <PillarsBanner />

      {/* Missão / Visão / Valores */}
      <MissionVisionValues />
    </section>
  );
}

/** PRIMEIRO BLOCO: imagem metade ESQUERDA (bg absoluto) + texto direita centralizado */
function LeadRow() {
  const bgIn = useInView();
  const mobImg = useInView();
  const txtIn = useInView();
  const mobTxtIn = useInView();

  const ROW_H = "md:h-[clamp(380px,42vh,520px)] lg:h-[clamp(420px,46vh,560px)]";

  return (
    <section className="relative overflow-hidden bg-white">
      {/* BG metade esquerda (desktop) — slide da ESQUERDA */}
      <div
        ref={bgIn.ref}
        className={slideX(
          bgIn.inView,
          "left",
          "pointer-events-none hidden md:block absolute inset-y-0 left-0 right-1/2"
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutPhoto})` }}
          aria-hidden="true"
        />
      </div>

      {/* imagem no mobile (fade-up) */}
      <div ref={mobImg.ref} className={fadeUp(mobImg.inView, "md:hidden")}>
        <img
          src={aboutPhoto}
          alt="Equipe monitorando operações logísticas com a plataforma ONROTA"
          className="w-full h-[200px] sm:h-[220px] object-cover"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>

      {/* linha de conteúdo */}
      <div className={`relative mx-auto max-w-7xl px-6 md:px-10 ${ROW_H}`}>
        <div className="flex flex-col md:flex-row h-full items-stretch md:items-center gap-6 md:gap-8">
          {/* placeholder da metade da imagem (esquerda) */}
          <div className="hidden md:block basis-1/2 h-full" aria-hidden="true" />

          {/* texto (direita) — slide da DIREITA */}
          <div
            ref={txtIn.ref}
            className={slideX(
              txtIn.inView,
              "right",
              "basis-full md:basis-1/2 h-full flex items-center justify-center"
            )}
          >
            <div
              ref={mobTxtIn.ref}
              className={fadeUp(
                mobTxtIn.inView,
                "w-full max-w-[640px] mx-auto text-left md:opacity-100 md:translate-y-0"
              )}
            >
              <p
                className={fadeUp(
                  txtIn.inView,
                  "mb-2 text-xs font-semibold tracking-wide text-slate-500"
                )}
              >
                Sobre nós
              </p>

              <h2
                className={slideX(
                  txtIn.inView,
                  "right",
                  "font-extrabold leading-tight text-slate-900"
                )}
                style={{ fontSize: "clamp(1.6rem,4.5vw,3rem)" }}
              >
                Tecnologia que gera <span style={{ color: colors.primary }}>confiança</span> em cada
                rota.
              </h2>

              <p
                className={fadeUp(
                  txtIn.inView,
                  "mt-4 text-[15px] md:text-[15.5px] leading-relaxed text-slate-700"
                )}
              >
                Nascemos para dar <strong>clareza</strong> às operações: dados confiáveis, decisões
                objetivas e menos atrito no dia a dia da rota.
              </p>

              <div className={fadeUp(txtIn.inView, "mt-6 flex flex-wrap gap-3")}>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-white text-sm font-medium transition-colors"
                  style={{ backgroundColor: colors.primary }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.primaryHover)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.primary)}
                >
                  Falar com a OnRota
                </a>
                <a
                  href="#clientes"
                  className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: "#0f172a",
                    borderColor: "rgba(2,6,23,0.12)",
                    background: "rgba(2,6,23,0.02)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(2,6,23,0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(2,6,23,0.02)")}
                >
                  Nossos clientes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsBanner() {
  // landUp (de baixo pra cima e pousando) + stagger
  const view = useInView();

  return (
    <section ref={view.ref} className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${pillarsBg})` }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.98) 45%, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0.78) 65%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0.28) 90%, rgba(0,0,0,0.00) 97%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
        {/* label */}
        <p {...landUp(view.inView, "text-white/80 text-xs tracking-widest uppercase", 0)}>
          Nossos Pilares
        </p>

        {/* título */}
        <h3
          {...landUp(view.inView, "mt-2 font-extrabold text-white leading-[1.05]", 80)}
          style={{ fontSize: "clamp(1.9rem,5vw,3.2rem)" }}
        >
          <span className="block">Segurança em primeiro lugar</span>
          <span className="block">Inovação que simplifica</span>
          <span className="block">
            Eficiência no <span style={{ color: colors.primary }}>transporte</span>
          </span>
        </h3>

        {/* parágrafo */}
        <p
          {...landUp(
            view.inView,
            "mt-4 max-w-3xl text-white/90 text-sm md:text-base leading-relaxed",
            160
          )}
        >
          Segurança como base, inovação para simplificar e eficiência para mover a logística com
          confiança — pilares que sustentam tudo o que construímos.
        </p>
      </div>
    </section>
  );
}

function MissionVisionValues() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="space-y-12 md:space-y-16">
        {/* Missão com perfil priority (gatilho mais cedo + animações mais sutis) */}
        <SplitRow
          img={missionImg}
          reverse={false}
          title="Missão"
          priority
          desc={
            <>
              <p>
                Promover confiança no transporte brasileiro por meio de tecnologia que antecipa
                riscos, evita fraudes e dá visibilidade de ponta a ponta. Nossa missão é transformar
                dados em decisões seguras, automatizando verificações críticas e reduzindo o impacto
                de erros humanos nas operações diárias.
              </p>
              <p>
                Fazemos isso integrando fontes de informação, aplicando regras inteligentes e
                monitorando eventos em tempo real. Assim, elevamos a previsibilidade das rotas,
                reduzimos custos operacionais e garantimos mais transparência para embarcadores,
                transportadoras e motoristas.
              </p>
            </>
          }
        />

        {/* Visão e Valores com padrão geral */}
        <SplitRow
          img={visionImg}
          reverse={true}
          title="Visão"
          desc={
            <>
              <p>
                Ser a referência em antifraude e automação no transporte rodoviário, definindo o
                novo padrão de segurança, simplicidade e inteligência do setor. Enxergamos um
                ecossistema onde cada etapa — da contratação à entrega — é validada, rastreada e
                mensurada.
              </p>
              <p>
                Queremos impulsionar um mercado mais confiável, em que a tecnologia reduz barreiras,
                melhora a experiência dos times operacionais e cria relações de longo prazo baseadas
                em dados e performance.
              </p>
            </>
          }
        />

        <SplitRow
          img={valuesImg}
          reverse={false}
          title="Valores"
          desc={
            <>
              <p>
                Atuamos com <strong>Integridade</strong> em cada interação; perseguimos{" "}
                <strong>Precisão</strong> nos dados e processos; praticamos{" "}
                <strong>Inovação contínua</strong> para simplificar o complexo; exercemos{" "}
                <strong>Responsabilidade</strong> com clientes, parceiros e motoristas; e
                fortalecemos a <strong>Colaboração</strong> para que toda a cadeia logística evolua.
              </p>
              <p>
                Esses valores orientam nossas escolhas de produto, nossas parcerias e a forma como
                implementamos cada projeto — sempre com foco em resultado, segurança e confiança.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}

/** ROW compacta: metade imagem (bg absoluto) + metade texto — animações padronizadas + mobile */
function SplitRow({ img, reverse = false, title, desc, priority = false }) {
  // Gatilho: padrão ou mais cedo/sutil para priority (Missão)
  const opts = priority ? { threshold: 0.28, rootMargin: "0px 0px -8% 0px" } : undefined;

  const bgIn = useInView(opts);
  const mobImg = useInView(opts);
  const txtIn = useInView(opts);
  const mobTxtIn = useInView(opts);

  const HALF_SIDE = reverse ? "right-0 left-1/2" : "left-0 right-1/2";
  const ROW_H = "md:h-[clamp(380px,42vh,520px)] lg:h-[clamp(420px,46vh,560px)]";

  const imgDir = reverse ? "right" : "left";
  const txtDir = reverse ? "left" : "right";

  // escolhe o perfil de movimento conforme priority
  const slide = priority ? slideXSoft : slideX;
  const fade = (on, extra = "") => fadeUp(on, extra, priority);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* BG metade (desktop) */}
      <div
        ref={bgIn.ref}
        className={slide(
          bgIn.inView,
          imgDir,
          ["pointer-events-none hidden md:block absolute inset-y-0", HALF_SIDE].join(" ")
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
          aria-hidden="true"
        />
      </div>

      {/* Mobile image (fade-up) */}
      <div ref={mobImg.ref} className={fade(mobImg.inView, "md:hidden")}>
        <img
          src={img}
          alt={typeof title === "string" ? title : "Imagem"}
          className="w-full h-[200px] sm:h-[220px] object-cover"
          loading="lazy"
        />
      </div>

      {/* Linha */}
      <div className={`relative mx-auto max-w-7xl px-6 md:px-10 ${ROW_H}`}>
        <div
          className={[
            "flex flex-col md:flex-row h-full items-stretch md:items-center gap-6 md:gap-8",
            reverse ? "md:flex-row-reverse" : "md:flex-row",
          ].join(" ")}
        >
          {/* placeholder da metade da imagem */}
          <div className="hidden md:block basis-1/2 h-full" aria-hidden="true" />

          {/* Texto — slide oposto (desktop) + fadeUp (mobile) */}
          <div
            ref={txtIn.ref}
            className={slide(
              txtIn.inView,
              txtDir,
              "basis-full md:basis-1/2 h-full flex items-center justify-center"
            )}
          >
            <div
              ref={mobTxtIn.ref}
              className={fade(
                mobTxtIn.inView,
                "w-full max-w-[560px] md:max-w-[640px] mx-auto text-left md:opacity-100 md:translate-y-0"
              )}
            >
              <h3
                className={slide(
                  txtIn.inView,
                  txtDir,
                  "font-extrabold leading-tight text-slate-900"
                )}
                style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}
              >
                {title}
              </h3>

              <div
                className={fade(
                  txtIn.inView,
                  "mt-3 space-y-3 text-[15px] md:text-[15.5px] leading-relaxed text-slate-700"
                )}
              >
                {desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
