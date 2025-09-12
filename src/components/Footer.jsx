// src/sections/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
        <div
          className="
            flex flex-col items-center text-center gap-4
            md:grid md:grid-cols-3 md:items-center md:text-left md:gap-6
          "
        >
          {/* ESQUERDA — copyright */}
          <div className="text-white/70 text-sm">
            © {new Date().getFullYear()} OnRota. Todos os direitos reservados.
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
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#clientes" className="hover:text-white">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
