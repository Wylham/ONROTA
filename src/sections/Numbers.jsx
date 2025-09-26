// src/sections/Numbers.jsx
import React, { useEffect, useRef, useState } from "react";

const STATS = [
  { type: "mil", value: 149, label: "cadastros realizados" },
  { type: "mil", value: 1, label: "usuários ativos" },
  { type: "%", value: 96, label: "redução de fraudes" },
  { type: "%", value: 87, label: "tempo de cadastro reduzido" },
  { type: "bi", value: 1, label: "em cargas protegidas contra fraudes" },
];

function useInView(ref, threshold = 0.55) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
  return inView;
}

function Counter({ type, target }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, 0.6);

  useEffect(() => {
    if (!inView) return;

    setN(0);
    const duration = 900;
    const start = performance.now();

    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  let out = "";
  if (type === "mil") out = `+${n}mil`;
  else if (type === "%") out = `${n}%`;
  else if (type === "bi") out = `+R$${n}B`;

  return (
    <span ref={ref} className="tabular-nums">
      {out}
    </span>
  );
}

export default function Numbers() {
  return (
    <section className="bg-white text-slate-900 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 pt-12 md:pt-16 pb-10 md:pb-12">
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Alguns números que nos orgulhamos
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {STATS.map(({ type, value, label }, i) => {
            const numberSize =
              type === "rm" ? "text-[32px] md:text-[40px]" : "text-[36px] md:text-[44px]";

            return (
              <article
                key={i}
                className="rounded-2xl bg-slate-50 border border-slate-200 shadow-sm
                           px-5 py-6 md:px-6 md:py-7 text-center mx-auto w-full max-w-[260px]"
              >
                {/* Azul mais forte (já usado nos hovers): #168fc3 */}
                <div className={`text-[#168fc3] font-extrabold leading-none ${numberSize}`}>
                  <Counter type={type} target={value} />
                </div>
                <p className="mt-2.5 md:mt-3 text-slate-800 text-[13px] md:text-[14px] leading-[20px] md:leading-[21px] mx-auto max-w-[220px]">
                  {label}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
