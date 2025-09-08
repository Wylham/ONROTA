import React from "react";

export default function Clients() {
  return (
    <section
      id="clientes"
      className="bg-white text-black scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Nossos clientes</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Algumas marcas que confiam em nossa equipe e tecnologia.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[3/1.2] rounded-2xl border bg-white flex items-center justify-center text-slate-500 text-sm"
            >
              LOGO {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
