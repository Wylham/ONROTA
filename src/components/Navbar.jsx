import React, { useEffect, useState } from "react";
import logo from "../assets/logo-light.png";

const NAV = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre nós" },
  { id: "servicos", label: "Serviços" },
  { id: "clientes", label: "Nossos clientes" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-colors duration-300
        ${scrolled ? "bg-black/90 backdrop-blur" : "bg-transparent"}`}
    >
      <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between text-white">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="OnRota Logo" className="h-7 w-auto" />
        </a>
        <ul className="flex items-center gap-6 text-sm">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="text-white/80 hover:text-indigo-400 transition-colors"
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
