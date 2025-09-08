import React from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre nós" },
  { id: "servicos", label: "Serviços" },
  { id: "clientes", label: "Nossos clientes" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between text-white">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo-light.png"
            className="h-7 w-auto"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span className="font-semibold">ONROTA</span>
        </a>
        <ul className="flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="text-white/80 hover:text-indigo-400"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
