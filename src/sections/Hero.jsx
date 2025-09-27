// src/sections/Hero.jsx
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const id2 = requestAnimationFrame(() => setReady(true));
      return () => cancelAnimationFrame(id2);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const slideIn = (extra = "") =>
    [
      "transform transition-transform transition-opacity duration-[1500ms]",
      "ease-[cubic-bezier(0.22,1,0.36,1)]",
      "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
      ready ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100%]",
      "will-change-transform will-change-opacity",
      extra,
    ].join(" ");

  return (
    <section
      className="
        relative flex items-center overflow-hidden
        /* MOBILE: altura proporcional (antes 68vh) */
        min-h-[76vh]
        /* DESKTOP/TABLET: tela cheia */
        md:min-h-screen
        bg-no-repeat bg-cover
        bg-[position:center] md:bg-[position:right_center]
      "
      style={{
        backgroundImage: "url('/mockups/bg-robot.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#121212",
      }}
    >
      {/* MOBILE: gradiente mais denso para leitura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.92) 6%, rgba(0,0,0,0.78) 36%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.30) 82%, rgba(0,0,0,0.00) 96%)",
        }}
      />
      {/* DESKTOP/TABLET: curva aprovada */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.62) 42%, rgba(0,0,0,0.38) 65%, rgba(0,0,0,0.18) 75%, rgba(0,0,0,0.00) 95%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 md:py-20 text-white">
        <div className="max-w-[22rem] sm:max-w-xl md:max-w-3xl space-y-3 md:space-y-6">
          <p
            className={slideIn(
              "delay-[150ms] tracking-tight leading-tight text-[18px] sm:text-[28px] md:text-[24px]"
            )}
          >
            Mais segurança, menos riscos:
          </p>

          <h1 className={slideIn("delay-[300ms] font-extrabold tracking-tight leading-[1.04]")}>
            <span className="block text-[30px] sm:text-[40px] md:text-[48px] sm:whitespace-nowrap">
              O futuro do transporte
            </span>
            <span className="block text-[36px] sm:text-[48px] md:text-[68px] text-[white]">
              é OnRota.
            </span>
          </h1>

          <p
            className={slideIn(
              "delay-[450ms] font-semibold text-white/90 text-[14px] md:text-[15px] leading-relaxed md:leading-[1.7] max-w-[65ch]"
            )}
          >
            Combinamos <strong className="font-extrabold text-white">tecnologia antifraude</strong>{" "}
            e <strong className="font-extrabold text-white">automação</strong> para eliminar erros
            <br className="hidden md:inline" /> manuais, reduzir custos e aumentar a confiabilidade
            das suas rotas.
          </p>

          <div className={slideIn("delay-[650ms] flex items-center gap-3 pt-1")}>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-[13px] font-medium bg-[#1da7e5] hover:bg-[#168fc3] focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Conhecer mais
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 border border-white/20 text-white/90 hover:bg-white/10 text-[13px] focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Nossos Produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
