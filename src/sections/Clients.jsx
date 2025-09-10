import React from "react";

export default function Clients() {
  // Se você colocar logos reais em /public/logos, liste os nomes aqui:
  // ex.: ["acme.png", "pianetto.png"] — se não existir, cai no fallback visual.
  const logos = []; // deixe vazio por enquanto

  return (
    <section id="clientes" className="bg-white text-black scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Nossos clientes</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Algumas marcas que confiam em nossa equipe e tecnologia.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {/* Renderiza logos reais se existirem */}
          {logos.map((name, i) => (
            <div
              key={i}
              className="w-full max-w-[160px] h-16 sm:h-20 flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2"
            >
              <img
                src={`/logos/${name}`}
                alt={name.replace(/\.[a-z]+$/i, "")}
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  // Se a imagem não existir, vira cartão fallback
                  e.currentTarget.outerHTML = `<div class="w-full h-full grid place-items-center rounded-xl bg-slate-50 text-slate-400 text-xs">Sua logo aqui</div>`;
                }}
              />
            </div>
          ))}

          {/* Fallbacks seguros (nenhuma imagem = sem erro) */}
          {logos.length === 0 &&
            Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`fallback-${i}`}
                className="w-full max-w-[160px] h-16 sm:h-20 grid place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-400 text-xs"
              >
                Sua logo aqui
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
