import React from "react";
import logoLight from "../assets/logo-light.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white w-full">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex items-center gap-4">
            <img
              src={logoLight}
              alt="ONROTA"
              className="h-8 w-auto"
              loading="eager"
            />
            <div>
              <p className="font-semibold">OnRota Tecnologia</p>
              <p className="text-sm text-white/60">
                Soluções para logística e cadastro inteligente
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center md:justify-end gap-x-8 gap-y-3 text-sm">
            <a href="#sobre" className="text-white/80 hover:text-white">
              Sobre
            </a>
            <a href="#servicos" className="text-white/80 hover:text-white">
              Serviços
            </a>
            <a href="#clientes" className="text-white/80 hover:text-white">
              Clientes
            </a>
            <a href="#contato" className="text-white/80 hover:text-white">
              Contato
            </a>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {year} OnRota. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white">Política de Privacidade</a>
            <span className="opacity-40">•</span>
            <a className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
