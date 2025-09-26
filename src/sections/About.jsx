// src/sections/About.jsx
import React from "react";
import {
  IconShield,
  IconLink,
  IconCheck,
  IconTruck,
  IconVisao,
  IconValores,
} from "../components/icons";
import aboutPhoto from "../assets/about-photo.png";

const BRAND_BLUE = "#1da7e5";
const BRAND_DARK = "#121212";

export default function About() {
  return (
    <section id="sobre" className="bg-white text-slate-900">
      {/* HERO VISUAL */}
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={aboutPhoto}
            alt="Equipe monitorando operações logísticas com a plataforma ONROTA"
            className="h-[480px] md:h-[560px] lg:h-[640px] w-full object-cover"
            loading="lazy"
          />

          {/* Overlay para contraste */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.8) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.0) 85%)",
            }}
          />

          {/* Texto flutuante */}
          <div className="absolute top-8 md:top-14 left-0 px-5 md:px-10 lg:px-14 max-w-2xl">
            <p className="text-[11px] md:text-xs tracking-widest uppercase text-white/70">
              Sobre a ONROTA
            </p>
            <h2 className="mt-1 text-[clamp(1.6rem,4.8vw,2.9rem)] font-extrabold leading-tight text-white">
              Tecnologia que gera <span style={{ color: BRAND_BLUE }}>confiança</span> em cada rota.
            </h2>
            <p className="mt-3 text-[15px] md:text-base leading-relaxed text-white/90">
              Unimos <strong>antifraude</strong>, <strong>automação logística</strong> e
              <strong> inteligência</strong> para tornar o transporte rodoviário mais seguro,
              previsível e transparente.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-white text-sm font-medium transition-colors"
                style={{ backgroundColor: BRAND_BLUE }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#168fc3")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND_BLUE)}
              >
                Falar com a OnRota
              </a>
              <a
                href="#clientes"
                className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-white text-sm font-medium transition-colors"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                Nossos clientes
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PILARES (ELEGANTE) */}
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={
                <IconShield className="h-5 w-5" style={{ color: BRAND_BLUE }} strokeWidth={2.2} />
              }
              title="Segurança em primeiro lugar"
              desc="Validações inteligentes e prevenção a fraudes para proteger dados, processos e resultados."
            />
            <FeatureCard
              icon={
                <IconLink className="h-5 w-5" style={{ color: BRAND_BLUE }} strokeWidth={2.2} />
              }
              title="Inovação que simplifica"
              desc="Automação e integrações para reduzir erros manuais, acelerar fluxos e dar previsibilidade às operações."
            />
            <FeatureCard
              icon={
                <IconTruck className="h-5 w-5" style={{ color: BRAND_BLUE }} strokeWidth={2.2} />
              }
              title="Eficiência no transporte"
              desc={
                <>
                  Foco em custo, tempo e confiabilidade para o{" "}
                  <strong>transporte rodoviário de cargas</strong>.
                </>
              }
            />
          </div>
        </div>
      </div>

      {/* MISSÃO / VISÃO / VALORES (PAINEL DARK) */}
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div
          className="rounded-3xl text-white p-8 md:p-12 shadow-xl ring-1"
          style={{ backgroundColor: BRAND_DARK, borderColor: "rgba(255,255,255,0.08)" }}
        >
          {/* linha de acento topo */}
          <div
            className="mb-8 h-[3px] w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}, transparent)` }}
          />

          <div className="grid gap-8 md:grid-cols-3">
            {/* Missão */}
            <PanelCard
              icon={
                <IconShield className="h-5 w-5" style={{ color: BRAND_BLUE }} strokeWidth={2.2} />
              }
              title="Missão"
              desc="Promover confiança no transporte brasileiro com tecnologia que antecipa riscos, evita fraudes e torna cada operação transparente e previsível."
            />

            {/* Visão */}
            <PanelCard
              icon={
                <IconVisao className="h-5 w-5" style={{ color: BRAND_BLUE }} strokeWidth={2.2} />
              }
              title="Visão"
              desc="Ser referência em antifraude e automação, elevando o padrão de segurança e inteligência na cadeia logística."
            />

            {/* Valores */}
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
              <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
                <IconValores className="h-5 w-5" style={{ color: BRAND_BLUE }} strokeWidth={2.2} />
                Valores
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-white/90">
                {[
                  <>
                    {" "}
                    <strong>Integridade</strong> nas relações e processos.{" "}
                  </>,
                  <>
                    {" "}
                    <strong>Precisão</strong> com validações confiáveis.{" "}
                  </>,
                  <>
                    {" "}
                    <strong>Inovação contínua</strong> para simplificar e fortalecer o setor.{" "}
                  </>,
                  <>
                    {" "}
                    <strong>Responsabilidade</strong> com clientes e parceiros.{" "}
                  </>,
                  <>
                    {" "}
                    <strong>Colaboração</strong> para um transporte mais confiável.{" "}
                  </>,
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      className="mt-[6px] h-[6px] w-[6px] rounded-full"
                      style={{ backgroundColor: BRAND_BLUE }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SEO / TEXTO LONGO */}
      <div className="mx-auto max-w-5xl px-4 pb-16">
        <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <span className="text-sm md:text-base font-semibold">
              Saiba mais sobre nossa abordagem
            </span>
            <span className="ml-4 text-slate-400 transition-transform group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <div className="prose prose-slate max-w-none mt-4">
            <p>
              Na <strong>ONROTA</strong>, entendemos que o{" "}
              <strong>transporte rodoviário de cargas</strong> é um dos pilares da economia
              brasileira e que sua complexidade exige soluções que unam <strong>tecnologia</strong>,{" "}
              <strong>segurança</strong> e <strong>inteligência</strong>. Nascemos com o propósito
              de combater fraudes que impactam diretamente a eficiência e a confiabilidade do setor,
              oferecendo ferramentas que vão além da simples validação de dados: entregamos
              <strong> proteção antifraude</strong>, <strong>automação logística</strong> e{" "}
              <strong>clareza operacional</strong> em cada processo.
            </p>
            <p>
              Nosso diferencial está em transformar informações em decisões seguras. Utilizamos{" "}
              <strong>verificações automatizadas</strong>,<strong> integrações estratégicas</strong>{" "}
              e <strong>algoritmos inteligentes</strong> para que transportadoras e empresas
              parceiras possam operar com mais <strong>previsibilidade</strong>, reduzir custos
              operacionais e construir relações mais <strong>transparentes</strong> com motoristas e
              clientes.
            </p>
            <p>
              Mais do que uma empresa de tecnologia, somos <strong>parceiros</strong> na missão de
              elevar o padrão de <strong>segurança</strong> no
              <strong> transporte rodoviário</strong> no Brasil.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}

/* Subcomponentes */

function FeatureCard({ icon, title, desc }) {
  return (
    <article className="rounded-2xl p-6 ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div
          className="grid h-10 w-10 place-items-center rounded-xl ring-1"
          style={{ background: "rgba(29,167,229,0.10)", borderColor: "rgba(29,167,229,0.25)" }}
        >
          <span style={{ color: BRAND_BLUE }}>{icon}</span>
        </div>
        <h3 className="text-base md:text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
    </article>
  );
}

function PanelCard({ icon, title, desc }) {
  return (
    <article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
      <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2">
        <span style={{ color: BRAND_BLUE }}>{icon}</span>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/90">{desc}</p>
    </article>
  );
}
