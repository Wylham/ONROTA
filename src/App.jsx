// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import { WHATSAPP_LINK } from "./constants";
import { IconWhatsapp } from "./components/Icons";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-indigo-500/40">
      {/* BG só no topo (Navbar + Hero) */}
      <div
        className="
          relative
          bg-[url('/hero-bg.webp')] bg-no-repeat bg-cover
          bg-[position:85%_0] md:bg-[position:100%_0]
          md:bg-fixed
        "
      >
        {/* Overlay pra legibilidade */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-transparent" />
        <Navbar />
        <Hero />
      </div>

      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-30" // <-- z-30, abaixo do menu
      >
        <div className="rounded-full p-4 shadow-xl bg-green-500 hover:scale-105 transition-transform">
          <IconWhatsapp className="w-6 h-6 text-white" />
        </div>
      </a>
    </div>
  );
}
