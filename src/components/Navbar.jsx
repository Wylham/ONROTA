// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/logo-light.png";

/* Mapa id -> path (mesmos ids do App.jsx) */
const idToPath = (id) => {
  switch (id) {
    case "home":
      return "/";
    case "sobre-nos":
      return "/sobre-nos";
    case "produtos":
      return "/produtos";
    case "clientes":
      return "/clientes";
    case "planos":
      return "/planos";
    case "contato":
      return "/contato";
    case "impacto":
      return "/impacto";
    case "produto-demo":
      return "/produto-demo";
    case "numeros":
      return "/numeros";
    case "testimonials":
      return "/testimonials";
    default:
      return "/";
  }
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "sobre-nos", label: "Sobre nós" },
  { id: "produtos", label: "Produtos" }, // pai do dropdown
  { id: "clientes", label: "Clientes" },
  { id: "planos", label: "Planos" },
  { id: "contato", label: "Contato" },
];

const MOBILE_BG = "#121212";

export default function Navbar() {
  const [open, setOpen] = useState(false); // sheet mobile
  const [prodOpen, setProdOpen] = useState(false); // dropdown desktop
  const [scrolled, setScrolled] = useState(false);
  const prodBtnRef = useRef(null);
  const prodMenuRef = useRef(null);

  // Header muda fundo no scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC fecha menus
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setProdOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Clique fora fecha dropdown desktop
  useEffect(() => {
    if (!prodOpen) return;
    const onClickAway = (e) => {
      if (
        prodBtnRef.current &&
        prodMenuRef.current &&
        !prodBtnRef.current.contains(e.target) &&
        !prodMenuRef.current.contains(e.target)
      ) {
        setProdOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [prodOpen]);

  // Trava scroll do body quando o sheet abre
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[9999] h-16 transition-colors",
        scrolled ? "bg-black/85 backdrop-blur border-b border-white/10" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl w-full h-full px-4 flex items-center justify-between text-white">
        {/* Logo → rota limpa "/" */}
        <a href="/" className="flex items-center gap-2" onClick={() => setProdOpen(false)}>
          <img src={logo} alt="OnRota" className="h-7 w-auto" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => {
            if (n.id !== "produtos") {
              return (
                <li key={n.id}>
                  <a
                    href={idToPath(n.id)} // <<< rotas limpas
                    className="text-white/80 hover:text-[#1da7e5]"
                    onClick={() => setProdOpen(false)} // apenas fecha dropdown
                  >
                    {n.label}
                  </a>
                </li>
              );
            }

            // Produtos com submenu (desktop)
            return (
              <li key="produtos" className="relative">
                <button
                  ref={prodBtnRef}
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={prodOpen}
                  onClick={() => setProdOpen((v) => !v)}
                  className="inline-flex items-center gap-1 text-white/80 hover:text-[#1da7e5]"
                >
                  Produtos
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`transition-transform ${prodOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <path fill="currentColor" d="M7 10l5 5 5-5z" />
                  </svg>
                </button>

                {prodOpen && (
                  <div
                    ref={prodMenuRef}
                    role="menu"
                    className="absolute right-0 mt-3 w-56 rounded-xl border border-white/10 bg-black/95 shadow-2xl overflow-hidden z-[10000]"
                  >
                    <a
                      role="menuitem"
                      href={idToPath("produtos")}
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      onClick={() => setProdOpen(false)}
                    >
                      OnCad
                    </a>
                    <a
                      role="menuitem"
                      href={idToPath("impacto")}
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      onClick={() => setProdOpen(false)}
                    >
                      Integrações
                    </a>
                    <a
                      role="menuitem"
                      href={idToPath("produto-demo")}
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      onClick={() => setProdOpen(false)}
                    >
                      Demonstração
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* botão mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#fff" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </button>
      </nav>

      {/* Sheet mobile */}
      <MobileSheet open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

/* ===================== MOBILE SHEET ===================== */
function MobileSheet({ open, onClose }) {
  const [prodOpen, setProdOpen] = useState(false);

  return createPortal(
    <div className="md:hidden fixed left-0 right-0 top-0 z-[10000] pointer-events-none">
      <div
        className={`
          mx-auto max-w-7xl
          origin-top transform transition-all duration-300 ease-out
          ${open ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0"}
          rounded-b-2xl shadow-2xl overflow-hidden
          bg-[${MOBILE_BG}]
        `}
      >
        {/* Topo com logo + X */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <img src={logo} alt="OnRota" className="h-7" />
          <button
            className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-white/10 hover:bg-white/15"
            onClick={() => {
              setProdOpen(false);
              onClose();
            }}
            aria-label="Fechar menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#fff"
                d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4l-6.3 6.3-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z"
              />
            </svg>
          </button>
        </div>

        {/* Itens + submenu Produtos */}
        <ul className="px-6 pb-6 space-y-4 text-right uppercase tracking-[0.18em] text-[13px] text-white/90">
          {NAV.map((n) => {
            if (n.id !== "produtos") {
              return (
                <li key={n.id}>
                  <a
                    href={idToPath(n.id)} // <<< rota limpa
                    className="inline-block py-2 hover:text-white transition"
                    onClick={() => {
                      onClose();
                    }} // fecha sheet
                  >
                    {n.label}
                  </a>
                </li>
              );
            }

            return (
              <li key="produtos-mobile">
                <button
                  type="button"
                  onClick={() => setProdOpen((v) => !v)}
                  className="w-full inline-flex items-center justify-end gap-2 py-2 hover:text-white transition"
                  aria-expanded={prodOpen}
                >
                  <span>PRODUTOS</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`transition-transform ${prodOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <path fill="currentColor" d="M7 10l5 5 5-5z" />
                  </svg>
                </button>

                {prodOpen && (
                  <div className="mt-1 space-y-1 text-white/85 text-right normal-case tracking-normal text-[14px]">
                    <a
                      href={idToPath("produtos")}
                      className="block py-2 px-2 rounded-lg hover:bg-white/05"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      OnCad
                    </a>
                    <a
                      href={idToPath("impacto")}
                      className="block py-2 px-2 rounded-lg hover:bg-white/05"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      Integrações
                    </a>
                    <a
                      href={idToPath("produto-demo")}
                      className="block py-2 px-2 rounded-lg hover:bg-white/05"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      Demonstração
                    </a>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
    document.body
  );
}
