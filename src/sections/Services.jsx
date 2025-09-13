// src/sections/Services.jsx
import React from "react";

export default function Services() {
  const ASSETS = {
    mockup: "/mockups/phone1.png", // troque pelo seu PNG com transparência
  };

  const bullets = [
    { title: "OCR em PDFs de CNH e CRLV", desc: "Leitura precisa, extraindo campos em segundos." },
    { title: "Cadastro automático", desc: "Preenche motoristas e veículos sem digitação manual." },
    { title: "Integração por API", desc: "Envio direto ao seu ERP com logs e rastreabilidade." },
    {
      title: "Validações e regras",
      desc: "Padronização e antifraude configuráveis para a operação.",
    },
  ];

  return (
    <section
      id="servicos" // mantém o id para não quebrar âncoras/menus existentes
      className="relative bg-black text-white py-16 md:py-24 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Cabeçalho exclusivo do ONCAD */}
        <header className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">ONCAD</h2>
          <p className="mt-3 md:mt-4 text-white/70 max-w-3xl text-base md:text-lg">
            O aplicativo que lê <span className="text-white font-semibold">CNHs</span> e{" "}
            <span className="text-white font-semibold">CRLVs</span> em PDF via OCR, preenche o
            cadastro automaticamente e integra com seu{" "}
            <span className="text-white font-semibold">ERP</span> através de APIs — com validações,
            logs e rastreabilidade ponta a ponta.
          </p>
        </header>

        {/* Layout: texto à esquerda mais conciso + mockup gigante à direita */}
        <div className="grid items-center gap-10 md:gap-12 lg:gap-16 md:grid-cols-12">
          {/* Texto (coluna menor) */}
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              Automatize seu cadastro em minutos
            </h3>
            <p className="mt-3 text-white/70">
              Reduza retrabalho, elimine erros de digitação e ganhe velocidade no pátio.
            </p>

            <ul className="mt-6 space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                  <div>
                    <p className="font-medium">{b.title}</p>
                    <p className="text-sm text-white/70">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
              >
                Quero ver uma demo
                {/* seta inline */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>

              <a
                href="https://wa.me/55SEUNUMERO?text=Acabei%20de%20ver%20o%20site%20da%20OnRota%20e%20quero%20saber%20mais%20sobre%20o%20ONCAD%20e%20como%20voc%C3%AAs%20mant%C3%AAm%20minha%20opera%C3%A7%C3%A3o%20segura%2C%20eficiente%20e%20livre%20de%20fraude."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-semibold hover:bg-white/[0.06] transition"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Mockup PNG flutuante (coluna maior) */}
          <div className="md:col-span-7 lg:col-span-8 relative text-center">
            {ASSETS.mockup ? (
              <img
                src={ASSETS.mockup}
                alt="Mockup do ONCAD em smartphones"
                className="
                  w-full h-auto
                  md:max-h-[820px] lg:max-h-[900px] xl:max-h-[980px]
                  object-contain
                  mx-auto
                  select-none pointer-events-none
                "
                loading="lazy"
              />
            ) : (
              // Placeholder discreto para não quebrar layout
              <div className="w-full aspect-[16/9] lg:aspect-[21/9] flex items-center justify-center text-xs text-white/60 border border-dashed border-white/20 rounded-xl">
                Adicione /mockups/phone1.png (PNG com fundo transparente)
              </div>
            )}

            {/* Texto pequeno centralizado e colado */}
            <p className="mt-1 text-[8px] leading-3 text-white/60 italic">
              *Imagens capturadas diretamente do app ONCAD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
