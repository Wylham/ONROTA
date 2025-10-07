// src/sections/Footer.jsx
import React from "react";

export default function Footer() {
  const scrollToId = (id) => {
    const HEADER_OFFSET = 64; // altura do navbar fixo
    const el = document.getElementById(id);
    if (!el) {
      window.location.hash = id;
      return;
    }
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET - 8;
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div
          className="
            flex flex-col items-center text-center gap-4
            md:grid md:grid-cols-3 md:items-center md:text-left md:gap-6
          "
        >
          {/* ESQUERDA — copyright + CNPJ em nova linha */}
          <div className="text-white/70 text-sm">
            <div>© {new Date().getFullYear()} OnRota. Todos os direitos reservados.</div>
            <div className="mt-1">
              CNPJ: <span className="text-white/80">62.762.345/0001-30</span>
            </div>
          </div>

          {/* CENTRO — Política e Termos */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-white/80 hover:text-white"
            >
              Política de Privacidade
            </a>
            <span className="hidden md:inline text-white/30">•</span>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-white/80 hover:text-white"
            >
              Termos de Uso
            </a>
          </div>

          {/* DIREITA — Navegação */}
          <nav className="flex justify-center md:justify-end">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/85 text-sm">
              <li>
                <a
                  href="/home"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/sobre-nos"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("sobre-nos");
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="/produtos"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("produtos");
                  }}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="/clientes"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("clientes");
                  }}
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="/planos"
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToId("planos");
                  }}
                >
                  Planos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
