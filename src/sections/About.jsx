import React from "react";
import { IconShield, IconLink, IconCheck, IconTruck } from "../components/Icons";
import aboutPhoto from "../assets/about-photo.png";

export default function About() {
  return (
    <section id="sobre" className="bg-white text-black">
      {/* Banner com foto e texto direto na imagem */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={aboutPhoto}
            alt="Transporte rodoviário com tecnologia ONROTA"
            className="h-[520px] md:h-[600px] lg:h-[640px] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />
          {/* H2 – frase de efeito */}
          <div className="absolute top-0 left-0">
            <div className="p-6 md:p-10 lg:p-14 mt-6 md:mt-10 max-w-3xl">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Tecnologia que gera <span className="text-blue-400">confiança</span> e protege cada
                rota.
              </h2>
              {/* Parágrafo curto SEO-friendly */}
              <p className="mt-4 text-white/90 text-sm md:text-base max-w-2xl">
                Acreditamos que o transporte rodoviário pode ser mais seguro, eficiente e
                transparente. Por isso, desenvolvemos soluções de{" "}
                <strong>tecnologia antifraude</strong> e <strong>automação logística </strong>
                para eliminar erros manuais, reduzir custos e trazer mais confiança a cada operação.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blocos rápidos (o que nos move) */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                <IconShield className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Segurança em primeiro lugar</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Validações inteligentes e prevenção a fraudes para proteger dados, processos e
              resultados.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                <IconLink className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Inovação que simplifica</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Automação e integrações para reduzir erros manuais, acelerar fluxos e dar
              previsibilidade às operações.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20">
                <IconTruck className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Eficiência no transporte</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Decisões mais seguras e estratégicas para o{" "}
              <strong>transporte rodoviário de cargas</strong>, com foco em custo, tempo e
              confiabilidade.
            </p>
          </article>
        </div>
      </div>

      {/* Versão detalhada (SEO expandido) */}
      <div className="mx-auto max-w-5xl px-4 pb-6">
        <h2 className="sr-only">ONROTA – versão detalhada</h2>
        <div className="prose prose-slate max-w-none">
          <p>
            Na <strong>ONROTA</strong>, entendemos que o{" "}
            <strong>transporte rodoviário de cargas</strong> é um dos pilares da economia brasileira
            e que sua complexidade exige soluções que unam <strong>tecnologia</strong>,
            <strong> segurança </strong>e <strong>inteligência</strong>. Nascemos com o propósito de
            combater fraudes que impactam diretamente a eficiência e a confiabilidade do setor,
            oferecendo ferramentas que vão além da simples validação de dados: entregamos{" "}
            <strong>proteção antifraude</strong>, <strong>automação logística</strong> e{" "}
            <strong>clareza operacional</strong> em cada processo.
          </p>
          <p className="mt-4">
            Nosso diferencial está em transformar informações em decisões seguras. Utilizamos
            verificações automatizadas, integrações estratégicas e algoritmos inteligentes para que
            transportadoras e empresas parceiras possam operar com mais previsibilidade, reduzir
            custos operacionais e construir relações mais transparentes com motoristas e clientes.
            Mais do que uma empresa de tecnologia, somos parceiros na missão de elevar o padrão de{" "}
            <strong>segurança no transporte rodoviário</strong> no Brasil.
          </p>
        </div>
      </div>

      {/* Missão, Visão e Valores */}
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Missão */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <IconShield className="w-5 h-5 text-blue-600" /> Missão
            </h3>
            <p className="mt-3 text-slate-700 text-sm leading-relaxed">
              Promover a confiança no transporte rodoviário brasileiro por meio de soluções
              tecnológicas inovadoras, capazes de antecipar riscos, evitar fraudes e tornar cada
              operação mais transparente e previsível.
            </p>
          </article>

          {/* Visão */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <IconLink className="w-5 h-5 text-blue-600" /> Visão
            </h3>
            <p className="mt-3 text-slate-700 text-sm leading-relaxed">
              Construir um ecossistema de transporte mais seguro e inteligente, sendo referência em
              antifraude e automação no setor, impactando positivamente toda a cadeia logística.
            </p>
          </article>

          {/* Valores */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Valores</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-600" />
                <span>
                  <strong>Integridade:</strong> agir com ética em todas as relações e processos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-600" />
                <span>
                  <strong>Precisão:</strong> entregar resultados confiáveis através de validações
                  inteligentes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-600" />
                <span>
                  <strong>Inovação contínua:</strong> simplificar e fortalecer o transporte
                  rodoviário.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-600" />
                <span>
                  <strong>Responsabilidade:</strong> compromisso com clientes, parceiros e a
                  segurança do setor.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <IconCheck className="mt-0.5 w-4 h-4 text-blue-600" />
                <span>
                  <strong>Colaboração:</strong> parcerias para um transporte mais confiável.
                </span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
