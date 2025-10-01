// src/sections/About.jsx
import React, { useEffect, useRef, useState } from "react";
import { colors } from "../components/brand";
import aboutPhoto from "../assets/about-photo.png";
import pillarsBg from "../assets/bg-pilar.jpeg";
import missionImg from "../assets/missao.jpg";
import visionImg from "../assets/visao.jpg";
import valuesImg from "../assets/valores.jpg";

/* ===== TRIGGERS =====
   - DEFAULT: pouco antes do meio (Lead/Pilares)
   - TOUCH_ROW: dispara ao encostar o bloco na viewport (MVV), com leve folga
   - *_MOBILE: mais tardios (disparam quando o conteúdo realmente aparece)
   - CARD_MOBILE: dispara no próprio card da imagem (evita adiantar/anular)
*/
const TRIGGER_DEFAULT = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" };
const TRIGGER_TOUCH_ROW = { threshold: 0.05, rootMargin: "0px 0px -5% 0px" };
const TRIGGER_DEFAULT_MOBILE = { threshold: 0.5, rootMargin: "0px" }; // ↑ um pouco mais tardio
const TRIGGER_TOUCH_ROW_MOBILE = { threshold: 0.48, rootMargin: "0px" }; // ↑ idem
const TRIGGER_CARD_MOBILE = { threshold: 0.55, rootMargin: "0px 0px -4% 0px" }; // foco no card

/* Detecta mobile por media query (sem SSR breaking) */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, [breakpoint]);
  return isMobile;
}

/* Hook in-view (IO + fallback), aceita opções */
function useInView(opts = TRIGGER_DEFAULT) {
  const {
    threshold = TRIGGER_DEFAULT.threshold,
    root = null,
    rootMargin = TRIGGER_DEFAULT.rootMargin,
  } = opts || {};
  const ref = useRef(null);
  // sempre começa false para o IO registrar e a animação disparar
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
          const e = entries[0];
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(el); // dispara uma vez
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

/** Pré-carrega levemente as imagens de MVV para evitar decode no momento da animação */
function usePreloadMVV() {
  useEffect(() => {
    const run = () => {
      [missionImg, visionImg, valuesImg].forEach((src) => {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
      });
    };
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(run, { timeout: 1200 });
      } else {
        setTimeout(run, 400);
      }
    }
  }, []);
}

/** Suspiro (respiro visual entre blocos) */
function Suspiro({ dir = "down", size = "md" }) {
  const h = size === "sm" ? "h-6 md:h-8" : size === "lg" ? "h-12 md:h-16" : "h-8 md:h-12";
  const rotate = dir === "up" ? "rotate-180" : "";
  return (
    <div aria-hidden className={`${h} ${rotate} bg-gradient-to-b from-transparent to-white`} />
  );
}

/* ===== Helpers de animação — MESMO MODELO DO HERO ===== */
const EASE =
  "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100";
const BASE = `transform transition-transform transition-opacity duration-[900ms] ${EASE} will-change-transform will-change-opacity`;

function slideX(on, dir, extra = "") {
  const off = dir === "left" ? "-translate-x-[12%]" : "translate-x-[12%]";
  return [
    BASE,
    on ? "opacity-100 translate-x-0" : `opacity-0 ${off}`,
    "will-change-transform",
    extra,
  ].join(" ");
}
function fadeUp(on, extra = "", dur = "800ms", dy = 6) {
  const base = BASE.replace("duration-[900ms]", `duration-[${dur}]`);
  return [
    base,
    (on ? "opacity-100" : "opacity-0") + " translate-y-[var(--dy)]",
    "will-change-transform",
    extra,
  ].join(" ");
}
/* Pouso suave (permanece) – usado nos Pilares */
function landUp(on, extra = "", delayMs = 0) {
  const cls = [
    BASE.replace("duration-[900ms]", "duration-[780ms]"),
    on ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.992]",
    "will-change-transform",
    extra,
  ].join(" ");
  const style = { transitionDelay: on ? `${delayMs}ms` : "0ms", transform: "translateZ(0)" };
  return { className: cls, style };
}

export default function About() {
  usePreloadMVV(); // ✅ pré-carrega as imagens de Missão/Visão/Valores
  return (
    <section id="sobre" className="bg-white text-slate-900">
      {/* respiro com o HERO */}
      <Suspiro dir="up" size="md" />

      {/* TOPO (Sobre nós) – hero pattern */}
      <LeadRow />

      <Suspiro dir="down" size="md" />

      {/* Pilares – pouso (mantido) */}
      <PillarsBanner />

      {/* Missão / Visão / Valores – hero pattern + trigger ao encostar */}
      <MissionVisionValues />
    </section>
  );
}

/** LEAD: imagem ESQ + texto DIR */
function LeadRow() {
  const isMobile = useIsMobile();
  const lead = useInView(isMobile ? TRIGGER_DEFAULT_MOBILE : TRIGGER_DEFAULT);
  const ROW_H = "md:h-[clamp(380px,42vh,520px)] lg:h-[clamp(420px,46vh,560px)]";

  // 🔎 Gatilho específico para o CARD da imagem no MOBILE
  const leadImgMob = useInView(TRIGGER_CARD_MOBILE);

  return (
    <section
      ref={lead.ref}
      className="relative overflow-hidden bg-white"
      style={{
        contentVisibility: "auto",
        contain: "layout paint style",
        containIntrinsicSize: "600px 520px",
      }}
    >
      {/* Imagem (desktop) — card RETANGULAR (mantido) */}
      <div className="pointer-events-none hidden md:block absolute inset-y-0 left-0 right-1/2">
        <div className="h-full w-full flex items-center justify-center px-6">
          <div
            className={[
              "relative aspect-[16/10] w-full max-w-[600px] overflow-hidden border border-black/5 shadow-sm bg-white/30 backdrop-blur-[1px]",
              slideX(lead.inView, "left"),
            ].join(" ")}
          >
            <img
              src={aboutPhoto}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              decoding="async"
              loading="eager"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>

      {/* Imagem (mobile) — RETANGULAR + animação idêntica aos textos (gatilho do próprio card) */}
      <div className="md:hidden mb-2 px-6">
        <div
          ref={leadImgMob.ref}
          className={[
            "relative aspect-[16/10] w-[80%] max-w-[320px] overflow-hidden border border-black/5 shadow-sm bg-white",
            slideX(leadImgMob.inView, "left"), // ✅ agora dispara exatamente quando o card entra
          ].join(" ")}
        >
          <img
            src={aboutPhoto}
            alt="Equipe monitorando operações logísticas com a plataforma ONROTA"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
          />
        </div>
      </div>

      {/* Linha de texto (desktop intacto) */}
      <div className={`relative mx-auto max-w-7xl px-6 md:px-10 ${ROW_H}`}>
        <div className="flex flex-col md:flex-row h-full items-stretch md:items-center gap-6 md:gap-8">
          <div className="hidden md:block basis-1/2 h-full" aria-hidden="true" />
          <div
            className={slideX(
              lead.inView,
              "right",
              "basis-full md:basis-1/2 h-full flex items-center justify-center"
            )}
          >
            <div className="w-full max-w-[640px] mx-auto text-left">
              <p
                className={fadeUp(
                  lead.inView,
                  "mb-2 text-xs font-semibold tracking-wide text-slate-500"
                )}
              >
                Sobre nós
              </p>

              <h2
                className={slideX(
                  lead.inView,
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
                  lead.inView,
                  "mt-4 text-[15px] md:text-[15.5px] leading-relaxed text-slate-700"
                )}
              >
                Nascemos para dar <strong>clareza</strong> às operações: dados confiáveis, decisões
                objetivas e menos atrito no dia a dia da rota.
              </p>

              <div className={fadeUp(lead.inView, "mt-6 flex flex-wrap gap-3")}>
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-white text-sm font-medium border transition-colors"
                  style={{ backgroundColor: colors.primary, borderColor: colors.primary }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.primaryHover)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.primary)}
                >
                  Falar com a OnRota
                </a>

                <a
                  href="#clientes"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border transition-colors"
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

/** PILARES (pouso) — mantido */
function PillarsBanner() {
  const view = useInView(TRIGGER_DEFAULT);
  return (
    <section
      ref={view.ref}
      className="relative overflow-hidden"
      style={{
        contentVisibility: "auto",
        contain: "layout paint style",
        containIntrinsicSize: "600px 420px",
      }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={pillarsBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.98) 45%, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0.78) 65%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0.28) 90%, rgba(0,0,0,0.00) 97%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16">
        <p {...landUp(view.inView, "text-white/80 text-xs tracking-widest uppercase", 0)}>
          Nossos Pilares
        </p>
        <h3
          {...landUp(
            view.inView,
            // menor, mais compacto e com "text-balance" para quebras inteligentes
            "mt-1 font-extrabold text-white leading-[1.12] tracking-tight text-balance max-w-2xl",
            80
          )}
          style={{ fontSize: "clamp(1.8rem,4.2vw,2.8rem)" }}
        >
          Segurança em primeiro lugar, inovação que simplifica e eficiência no{" "}
          <span style={{ color: colors.primary }}>transporte</span>
        </h3>

        <p
          {...landUp(
            view.inView,
            // texto mais curto, largura menor e quebras bonitas
            "mt-4 max-w-2xl text-white/85 text-sm md:text-[15.5px] leading-relaxed text-pretty",
            140
          )}
        >
          Segurança como base, inovação para simplificar e eficiência para mover a logística com
          confiança são pilares que sustentam tudo o que construímos.
        </p>
      </div>
    </section>
  );
}

/** MVV — mesmo padrão do hero */
function MissionVisionValues() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="space-y-12 md:space-y-16">
        <SplitRow
          img={missionImg}
          title="Missão"
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
        <SplitRow
          img={visionImg}
          reverse
          title="Visão"
          desc={
            <>
              <p>
                Ser a referência em antifraude e automação no transporte rodoviário, definindo o
                novo padrão de segurança, simplicidade e inteligência do setor. Enxergamos um
                ecossistema onde cada etapa da contratação à entrega é validada, rastreada e
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
                implementamos cada projeto sempre com foco em resultado, segurança e confiança.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
}

/** ROW (MVV): imagem entra da ESQ→DIR; texto mantém direção original. Mobile com trigger no card. */
function SplitRow({ img, reverse = false, title, desc }) {
  const isMobile = useIsMobile();
  const row = useInView(isMobile ? TRIGGER_TOUCH_ROW_MOBILE : TRIGGER_TOUCH_ROW); // seção
  const HALF_SIDE = reverse ? "right-0 left-1/2" : "left-0 right-1/2";
  const txtDir = reverse ? "left" : "right";
  const ROW_H = "md:h-[clamp(360px,40vh,520px)] lg:h-[clamp(400px,44vh,560px)]";

  // 🔎 Gatilho específico do CARD da imagem no MOBILE
  const mobImg = useInView(TRIGGER_CARD_MOBILE);

  return (
    <section
      ref={row.ref}
      className="relative overflow-hidden bg-white"
      style={{
        contentVisibility: "auto",
        contain: "layout paint style",
        containIntrinsicSize: "600px 480px",
      }}
    >
      {/* Imagem desktop — card RETANGULAR (mantido) */}
      <div
        className={["pointer-events-none hidden md:block absolute inset-y-0", HALF_SIDE].join(" ")}
      >
        <div className="h-full w-full flex items-center justify-center px-6">
          <div
            className={[
              "relative aspect-[16/10] w-full max-w-[560px] overflow-hidden border border-black/5 shadow-sm bg-white/30 backdrop-blur-[1px]",
              slideX(row.inView, "left"),
            ].join(" ")}
          >
            <img
              src={img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Imagem mobile — RETANGULAR + animação com trigger do próprio card */}
      <div className="md:hidden mb-3 sm:mb-4 px-6">
        <div
          ref={mobImg.ref}
          className={[
            "relative aspect-[16/10] w-[78%] max-w-[300px] overflow-hidden border border-black/5 shadow-sm bg-white",
            slideX(mobImg.inView, "left"),
          ].join(" ")}
        >
          <img
            src={img}
            alt={typeof title === "string" ? title : "Imagem"}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Texto */}
      <div className={`relative mx-auto max-w-7xl px-6 md:px-10 ${ROW_H}`}>
        <div
          className={[
            "flex flex-col md:flex-row h-full items-stretch md:items-center gap-6 md:gap-8",
            reverse ? "md:flex-row-reverse" : "md:flex-row",
          ].join(" ")}
        >
          {/* placeholder da metade da imagem */}
          <div className="hidden md:block basis-1/2 h-full" aria-hidden="true" />

          {/* Texto — mantém direções originais */}
          <div
            className={slideX(
              row.inView,
              txtDir,
              "basis-full md:basis-1/2 h-full flex items-center justify-center"
            )}
          >
            <div className="w-full max-w-[560px] md:max-w-[640px] mx-auto text-left">
              <h3
                className={slideX(
                  row.inView,
                  txtDir,
                  "font-extrabold leading-tight text-slate-900"
                )}
                style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}
              >
                {title}
              </h3>

              {desc ? (
                <div
                  className={fadeUp(
                    row.inView,
                    "mt-3 sm:mt-4 text-[15px] md:text-[15.5px] leading-relaxed text-slate-700 space-y-3"
                  )}
                >
                  {desc}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
