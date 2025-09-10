// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import logo from "../assets/logo-light.png";

const NAV = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre nós" },
  { id: "servicos", label: "Serviços" },
  { id: "clientes", label: "Nossos clientes" },
  { id: "contato", label: "Contato" },
];

// Menu renderizado via Portal no <body> (nada passa por cima)
function MobileMenuPortal({ open, onClose, onGo }) {
  if (typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <>
      {/* Overlay sólido cobrindo tudo */}
      <div
        onClick={onClose}
        style={{ zIndex: 9998 }}
        className={`fixed inset-0 bg-black transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Painel lateral por cima do overlay */}
      <aside
        style={{ zIndex: 9999 }}
        className={`fixed top-0 right-0 h-full w-[86%] max-w-[360px] bg-black border-l border-white/10 pt-16 px-4 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex items-center justify-between pb-4">
          <img src={logo} alt="OnRota" className="h-7 w-auto" />
          <button
            onClick={onClose}
            className="h-10 w-10 grid place-items-center rounded-lg border border-white/15 bg-white/5"
            aria-label="Fechar menu"
          >
            <span className="block h-0.5 w-5 bg-white rotate-45 translate-y-0"></span>
            <span className="block h-0.5 w-5 bg-white -rotate-45 -mt-0.5"></span>
          </button>
        </div>

        <ul className="space-y-2">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={(e) => onGo(e, n.id)}
                className="block rounded-lg px-3 py-3 text-white/95 hover:bg-white/10"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 border-t border-white/10 pt-4">
          <a
            href="#contato"
            onClick={(e) => onGo(e, "contato")}
            className="block text-center rounded-xl px-4 py-3 bg-blue-600 hover:bg-blue-500"
          >
            Fale com a OnRota
          </a>
        </div>

        <p className="mt-6 text-[11px] text-white/40">© {new Date().getFullYear()} OnRota</p>
      </aside>
    </>,
    document.body
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Escurece o navbar assim que o usuário rola (>= 1px)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // estado correto ao carregar
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia o scroll do body com menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleGo = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50 border-b transition-colors",
          scrolled
            ? "bg-black/80 backdrop-blur border-white/10"
            : "bg-transparent border-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between text-white">
          <a href="#home" className="flex items-center min-w-0" aria-label="Ir para início">
            <img src={logo} alt="OnRota" className="h-7 w-auto" />
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-white/85 hover:text-blue-400">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botão mobile hamburger -> X (animado) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative h-10 w-10 grid place-items-center rounded-lg border border-white/15 bg-white/5"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <span
              className={[
                "absolute block h-0.5 w-5 bg-white transition-transform duration-300",
                open ? "rotate-45 translate-y-0" : "-translate-y-2",
              ].join(" ")}
            />
            <span
              className={[
                "absolute block h-0.5 w-5 bg-white transition-opacity duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute block h-0.5 w-5 bg-white transition-transform duration-300",
                open ? "-rotate-45 translate-y-0" : "translate-y-2",
              ].join(" ")}
            />
          </button>
        </nav>
      </header>

      {/* Menu mobile via Portal */}
      <MobileMenuPortal open={open} onClose={() => setOpen(false)} onGo={handleGo} />
    </>
  );
}
