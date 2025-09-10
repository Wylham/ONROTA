import React from "react";
import { Target, Eye, Handshake } from "lucide-react"; // novos ícones
import aboutPhoto from "../assets/about-photo.png";

export default function About() {
  return (
    <section id="sobre" className="bg-white text-black">
      {/* BANNER: foto grande + texto direto na imagem */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={aboutPhoto}
            alt="OnRota em operação"
            className="h-[520px] md:h-[600px] lg:h-[640px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

          {/* Texto dentro da foto */}
          <div className="absolute top-0 left-0 flex items-start">
            <div className="p-6 md:p-10 lg:p-14 mt-6 md:mt-10 max-w-3xl">
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-blue-400">
                Sobre nós
              </p>
              <h2 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Logística com <span className="text-blue-500">precisão</span> e{" "}
                <span className="text-blue-500">segurança</span>.
              </h2>
              <p className="mt-3 md:mt-4 text-white/85 text-sm md:text-base max-w-2xl">
                Combinamos inovação, automação e conhecimento profundo do setor para entregar
                ferramentas que simplificam processos e aumentam a confiança em cada etapa da
                jornada logística.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTEÚDO ABAIXO DA FOTO — empilhado (full width) */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="space-y-6">
          {/* Missão */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20 shrink-0">
                <Target className="w-6 h-6 text-blue-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight">Missão</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Entregar soluções logísticas que simplificam processos, reduzem custos e aumentam
                  a previsibilidade da operação por meio de automação, dados confiáveis e integração
                  total.
                </p>
              </div>
            </div>
          </article>

          {/* Visão */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20 shrink-0">
                <Eye className="w-6 h-6 text-blue-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight">Visão</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Ser a plataforma de referência em eficiência e segurança na cadeia logística,
                  oferecendo clareza operacional ponta a ponta com visibilidade em tempo real e
                  decisões orientadas a dados.
                </p>
              </div>
            </div>
          </article>

          {/* Valores */}
          <article className="rounded-2xl border border-slate-200 bg-white p-7 md:p-9 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20 shrink-0">
                <Handshake className="w-6 h-6 text-blue-500" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold tracking-tight">Valores</h3>
                <p className="mt-2 text-slate-700 leading-relaxed">
                  Ética, transparência e responsabilidade em cada etapa. Valorizamos a segurança da
                  informação, a excelência no atendimento e a inovação contínua para entregar
                  resultados consistentes.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
