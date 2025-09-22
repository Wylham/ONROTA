// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/logo-light.png";

const NAV = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre nós" },
  { id: "servicos", label: "Produtos" }, // pai do dropdown
  { id: "clientes", label: "Nossos clientes" },
  { id: "planos", label: "Planos" }, // << NOVO BOTÃO
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // drawer mobile
  const [prodOpen, setProdOpen] = useState(false); // dropdown desktop
  const prodBtnRef = useRef(null);
  const prodMenuRef = useRef(null);

  // scroll suave com offset do header
  const scrollToId = (id) => {
    const HEADER_OFFSET = 64; // h-16
    const el = document.getElementById(id);
    if (!el) {
      window.location.hash = id;
      return;
    }
    const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET - 8;
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // bloquear scroll quando o drawer abre (mobile)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  // ESC fecha drawer e dropdown
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

  // hashchange fecha tudo
  useEffect(() => {
    const onHash = () => {
      setOpen(false);
      setProdOpen(false);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // clique fora fecha dropdown desktop
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

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] h-16 bg-black/85 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl w-full h-full px-4 flex items-center justify-between text-white">
        <a
          href="#home"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("home");
            setProdOpen(false);
          }}
        >
          <img src={logo} alt="OnRota" className="h-7 w-auto" />
        </a>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => {
            if (n.id !== "servicos") {
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-white/80 hover:text-indigo-400"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(n.id);
                      setProdOpen(false);
                    }}
                  >
                    {n.label}
                  </a>
                </li>
              );
            }

            // Produtos com submenu
            return (
              <li key="produtos" className="relative">
                <button
                  ref={prodBtnRef}
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={prodOpen}
                  onClick={() => setProdOpen((v) => !v)}
                  className="inline-flex items-center gap-1 text-white/80 hover:text-indigo-400"
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
                      href="#servicos"
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        setProdOpen(false);
                        scrollToId("servicos");
                      }}
                    >
                      OnCad
                    </a>
                    <a
                      role="menuitem"
                      href="#impact"
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        setProdOpen(false);
                        scrollToId("impact");
                      }}
                    >
                      Integrações
                    </a>
                    <a
                      role="menuitem"
                      href="#productdemo"
                      className="block px-4 py-3 text-sm text-white/90 hover:bg-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        setProdOpen(false);
                        scrollToId("productdemo");
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

        {/* botão mobile */}
        <button
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 transition ${
            open ? "invisible" : "visible"
          }`}
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#fff" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </button>
      </nav>

      <MobileDrawer open={open} onClose={() => setOpen(false)} scrollToId={scrollToId} />
    </header>
  );
}

function MobileDrawer({ open, onClose, scrollToId }) {
  const panelRef = useRef(null);
  const [prodOpen, setProdOpen] = useState(false);

  if (!open) return null;

  const go = (id) => {
    onClose();
    setTimeout(() => scrollToId(id), 80); // garante scroll após fechar drawer
  };

  const drawer = (
    <div className="fixed inset-0 z-[100000]">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <aside
        ref={panelRef}
        className="absolute left-0 top-0 h-full w-[88%] max-w-sm bg-black text-white shadow-2xl flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <img src={logo} alt="OnRota" className="h-7" />
          <button
            className="grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-white/10 hover:bg-white/15"
            onClick={onClose}
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

        <ul className="flex-1 overflow-y-auto px-4 py-4 space-y-1 text-base">
          {NAV.map((n) => {
            if (n.id !== "servicos") {
              return (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="block py-3 px-2 rounded-lg hover:bg-white/05"
                    onClick={(e) => {
                      e.preventDefault();
                      go(n.id);
                    }}
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
                  className="w-full text-left block py-3 px-2 rounded-lg hover:bg-white/05 inline-flex items-center justify-between"
                  aria-expanded={prodOpen}
                >
                  <span>Produtos</span>
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
                  <div className="mt-1 ml-2 space-y-1">
                    <a
                      href="#servicos"
                      className="block py-2 px-3 rounded-lg text-sm text-white/90 hover:bg-white/05"
                      onClick={(e) => {
                        e.preventDefault();
                        go("servicos");
                      }}
                    >
                      OnCad
                    </a>
                    <a
                      href="#impact"
                      className="block py-2 px-3 rounded-lg text-sm text-white/90 hover:bg-white/05"
                      onClick={(e) => {
                        e.preventDefault();
                        go("impact");
                      }}
                    >
                      Integrações
                    </a>
                    <a
                      href="#productdemo"
                      className="block py-2 px-3 rounded-lg text-sm text-white/90 hover:bg-white/05"
                      onClick={(e) => {
                        e.preventDefault();
                        go("productdemo");
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

        <div className="p-4 border-t border-white/10">
          <a
            href="#contato"
            className="block w-full text-center rounded-2xl px-5 py-3 bg-indigo-600 hover:bg-indigo-700"
            onClick={(e) => {
              e.preventDefault();
              go("contato");
            }}
          >
            Fale com a OnRota
          </a>
          <p className="mt-3 text-xs text-white/40">© 2025 OnRota</p>
        </div>
      </aside>
    </div>
  );

  return createPortal(drawer, document.body);
}
