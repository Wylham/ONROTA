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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6"
      >
        <div className="rounded-full p-4 shadow-xl bg-green-500 hover:scale-105 transition-transform">
          <IconWhatsapp className="w-6 h-6 text-white" />
        </div>
      </a>
    </div>
  );
}
