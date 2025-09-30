// src/sections/ProductDemo.jsx
import React from "react";
import { DEMO_VIDEO as DEFAULTS } from "@/constants/metrics";
import { colors } from "/src/components/brand.jsx";

/* Banda de Vídeo */
export default function ProductDemo(props) {
  const videoId = props.videoId || DEFAULTS.videoId;
  const title = props.title || DEFAULTS.title;
  const description = props.description || DEFAULTS.description;
  const bgClass = props.bgClass || DEFAULTS.bgClass;
  const invert = props.invert ?? DEFAULTS.invert;

  return (
    <section className={`text-white py-10 lg:py-5 ${bgClass}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center md:min-h-[420px] ${
            invert ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* Texto */}
          <div className="w-full max-w-[640px] justify-self-center text-left">
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h3>
            <p className="mt-3 md:mt-4 text-white/90">{description}</p>
          </div>

          {/* Vídeo */}
          <div
            className="w-full max-w-[680px] justify-self-center rounded-2xl p-1 shadow-xl"
            style={{
              background: "rgba(0,0,0,0.10)",
            }}
          >
            <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-xl">
              <iframe
                className="absolute inset-0 h-full w-full rounded-xl"
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ outline: "none", boxShadow: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
