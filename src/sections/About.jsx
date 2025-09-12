import React from "react";
import {
  IconShield,
  IconLink,
  IconCheck,
  IconTruck,
  IconVisao,
  IconValores,
} from "../components/Icons";
import aboutPhoto from "../assets/about-photo.png";

export default function About() {
  return (
    <section id="sobre" className="bg-white text-slate-900">
      {/* Hero com texto flutuando dentro da imagem */}
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={aboutPhoto}
            alt="Equipe monitorando operações logísticas com a plataforma ONROTA"
            className="h-[480px] md:h-[560px] lg:h-[640px] w-full object-cover"
            loading="lazy"
          />

          {/* Overlay para contraste */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

          {/* Texto flutuante, levemente mais alto */}
          <div className="absolute top-8 md:top-14 left-0 px-5 md:px-10 lg:px-14 max-w-2xl">
            <p className="text-[11px] md:text-xs tracking-widest uppercase text-white/70">
              Sobre a ONROTA
            </p>
            <h2 className="mt-1 text-[clamp(1.6rem,4.8vw,3rem)] font-extrabold leading-tight text-white">
              Tecnologia que gera <span className="text-blue-300">confiança</span> em cada rota
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
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Falar com a ONROTA
              </a>
              <a
                href="#clientes"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-white text-sm font-medium hover:bg-white/15 transition-colors"
              >
                Ver casos e clientes
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3 pilares */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Segurança */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                <IconShield
                  className="h-5 w-5 text-blue-600"
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">Segurança em primeiro lugar</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Validações inteligentes e prevenção a fraudes para proteger dados, processos e
              resultados.
            </p>
          </article>

          {/* Inovação */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                <IconLink className="h-5 w-5 text-blue-600" strokeWidth={2.2} aria-hidden="true" />
              </div>
              <h3 className="text-base md:text-lg font-semibold">Inovação que simplifica</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Automação e integrações para reduzir erros manuais, acelerar fluxos e dar
              previsibilidade às operações.
            </p>
          </article>

          {/* Transporte */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                <IconTruck className="h-5 w-5 text-blue-600" strokeWidth={2.2} aria-hidden="true" />
              </div>
              <h3 className="text-base md:text-lg font-semibold">Eficiência no transporte</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Foco em custo, tempo e confiabilidade para o{" "}
              <strong>transporte rodoviário de cargas</strong>.
            </p>
          </article>
        </div>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Missão */}
          <article className="rounded-2xl bg-black p-6 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2 text-white">
              <IconShield className="h-5 w-5 text-blue-500" strokeWidth={2.2} aria-hidden="true" />{" "}
              Missão
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Promover confiança no transporte brasileiro com tecnologia que antecipa riscos, evita
              fraudes e torna cada operação transparente e previsível.
            </p>
          </article>

          {/* Visão */}
          <article className="rounded-2xl bg-black p-6 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2 text-white">
              <IconVisao className="h-5 w-5 text-blue-500" strokeWidth={2.2} aria-hidden="true" />{" "}
              Visão
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              Ser referência em antifraude e automação, elevando o padrão de segurança e
              inteligência na cadeia logística.
            </p>
          </article>

          {/* Valores */}
          <article className="rounded-2xl bg-black p-6 shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2 text-white">
              <IconValores className="h-5 w-5 text-blue-500" strokeWidth={2.2} aria-hidden="true" />{" "}
              Valores
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li className="flex gap-2">
                <IconCheck
                  className="mt-0.5 h-4 w-4 text-blue-500"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
                <span>
                  <strong>Integridade</strong> nas relações e processos.
                </span>
              </li>
              <li className="flex gap-2">
                <IconCheck
                  className="mt-0.5 h-4 w-4 text-blue-500"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
                <span>
                  <strong>Precisão</strong> com validações confiáveis.
                </span>
              </li>
              <li className="flex gap-2">
                <IconCheck
                  className="mt-0.5 h-4 w-4 text-blue-500"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
                <span>
                  <strong>Inovação contínua</strong> para simplificar e fortalecer o setor.
                </span>
              </li>
              <li className="flex gap-2">
                <IconCheck
                  className="mt-0.5 h-4 w-4 text-blue-500"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
                <span>
                  <strong>Responsabilidade</strong> com clientes e parceiros.
                </span>
              </li>
              <li className="flex gap-2">
                <IconCheck
                  className="mt-0.5 h-4 w-4 text-blue-500"
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
                <span>
                  <strong>Colaboração</strong> para um transporte mais confiável.
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>

      {/* SEO colapsável */}
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
              <strong>segurança</strong>e <strong>inteligência</strong>. Nascemos com o propósito de
              combater fraudes que impactam diretamente a eficiência e a confiabilidade do setor,
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
