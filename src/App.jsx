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
import Plans from "./sections/Plans";
import Contact from "./sections/Contact";
import { WHATSAPP_LINK } from "./constants";
import { IconWhatsapp } from "./components/icons";
import { DEMO_VIDEO } from "./constants/metrics";
import Testimonials from "./sections/Testimonials";
import PlansPromoModal from "./components/PlansPromoModal";

export default function App() {
  const whatsMsg =
    "Acabei de visitar o site da ONROTA e quero saber mais sobre o produto ONCAD, e como ele pode manter minha operação mais segura, eficiente e livre de fraudes.";

  return (
    <div className="min-h-screen w-full overflow-x-hidden overscroll-x-none bg-black text-white selection:bg-indigo-500/40">
      {/* Navbar fixa (transparente sobre o hero; escurece no scroll) */}
      <Navbar />

      {/* Modal de promoções de planos */}
      <PlansPromoModal
        delayMs={5000}
        imageSrc="/mockups/mulher-popup.png"
        imageAlt="Pessoa segurando um celular"
        oncadLogoSrc="/logos/opt/oncad.webp"
        oncePerDay={true}
        resetOnClosePage={false}
      />

      {/* HERO com imagem de fundo */}
      <div id="home" className="relative isolate">
        <Hero />
      </div>

      {/* Conteúdo principal */}
      <div id="sobre" className="scroll-mt-24">
        <About />
      </div>
      <div id="servicos" className="scroll-mt-24">
        <Services />
      </div>
      <div id="clientes" className="scroll-mt-24">
        <Clients />
      </div>
      <div id="numbers" className="scroll-mt-24">
        <Numbers />
      </div>
      <div id="productdemo" className="scroll-mt-24">
        <ProductDemo {...DEMO_VIDEO} />
      </div>
      <div id="impact" className="scroll-mt-24">
        <Impact />
      </div>

      <Plans />

      <div id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </div>
      <div id="contato" className="scroll-mt-24">
        <Contact />
      </div>

      <Footer />

      {/* WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar com um especialista no WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9998]"
      >
        <div className="rounded-full p-4 shadow-xl bg-green-500 hover:scale-105 transition-transform">
          <IconWhatsapp className="w-6 h-6 text-white" />
        </div>
      </a>
    </div>
  );
}
