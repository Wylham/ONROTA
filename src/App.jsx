// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Numbers from "./sections/Numbers";
import ProductDemo from "./sections/ProductDemo";
import Impact from "./sections/Impact";
import Contact from "./sections/Contact";
import { WHATSAPP_LINK } from "./constants";
import { IconWhatsapp } from "./components/Icons";
import { DEMO_VIDEO } from "./constants/metrics";
import Testimonials from "./sections/Testimonials";

export default function App() {
  const whatsMsg =
    "Acabei de ver o site da OnRota e quero saber mais sobre o ONCAD — como vocês mantêm minha operação mais segura, eficiente e livre de fraude. Podemos falar?";

  return (
    <div className="min-h-screen w-full bg-black text-white selection:bg-indigo-500/40">
      {/* Topo (Navbar + Hero) com background */}
      <div className="relative bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-[position:85%_0] md:bg-[position:100%_0] md:bg-fixed">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-transparent" />
        <Navbar />
        <Hero />
      </div>

      {/* Conteúdo principal do site */}
      <About />
      <Services />
      <Clients />
      <Numbers />
      <ProductDemo {...DEMO_VIDEO} />
      <Impact />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <a
        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(whatsMsg)}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar com um especialista no WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      >
        <div className="rounded-full p-4 shadow-xl bg-green-500 hover:scale-105 transition-transform">
          <IconWhatsapp className="w-6 h-6 text-white" />
        </div>
      </a>
    </div>
  );
}
