import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import logo from "../assets/logo-light.png";

const NAV = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre nós" },
  { id: "servicos", label: "Serviços" },
  { id: "clientes", label: "Nossos clientes" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-black/85 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl w-full h-full px-4 flex items-center justify-between text-white">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="OnRota" className="h-7 w-auto" />
        </a>

        {/* desktop */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className="text-white/80 hover:text-indigo-400">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        {/* botão mobile – some quando o drawer abre */}
        <button
          className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 transition ${open ? "invisible" : "visible"}`}
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#fff" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </button>
      </nav>

      {/* Drawer mobile via PORTAL (fora do header, sobre o body) */}
      <MobileDrawer open={open} onClose={() => setOpen(false)} nav={NAV} />
    </header>
  );
}

function MobileDrawer({ open, onClose, nav }) {
  const panelRef = useRef(null);
  if (!open) return null;

  const drawer = (
    <div className="fixed inset-0 z-[1000]">
      {/* Backdrop sólido cobrindo tudo */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      {/* Painel */}
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
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="block py-3 px-2 rounded-lg hover:bg-white/05"
                onClick={onClose}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="p-4 border-t border-white/10">
          <a
            href="#contato"
            className="block w-full text-center rounded-2xl px-5 py-3 bg-indigo-600 hover:bg-indigo-700"
            onClick={onClose}
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
