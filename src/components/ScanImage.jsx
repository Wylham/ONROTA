import React from "react";

export default function ScanImage({ src, alt = "Área para imagem do robô" }) {
  return (
    <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-black">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : (
        <div className="w-full h-[280px] md:h-[360px] grid place-items-center bg-black">
          <div className="flex flex-col items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              className="w-10 h-10 text-white/60"
              fill="currentColor"
            >
              <path d="M9 7a3 3 0 116 0v2h3a2 2 0 012 2v3a5 5 0 01-5 5H9a5 5 0 01-5-5v-3a2 2 0 012-2h3V7zM8 17h8a3 3 0 003-3v-3h-3v2H8v-2H5v3a3 3 0 003 3z" />
            </svg>
            <span className="text-xs text-white/60">Imagem do robô aqui</span>
          </div>
        </div>
      )}

      {/* cantos + linha de varredura (visíveis mesmo sem imagem) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-3 left-3 w-9 h-9 border-t-4 border-l-4 border-indigo-500 rounded-tl-xl" />
        <div className="absolute top-3 right-3 w-9 h-9 border-t-4 border-r-4 border-indigo-500 rounded-tr-xl" />
        <div className="absolute bottom-3 left-3 w-9 h-9 border-b-4 border-l-4 border-indigo-500 rounded-bl-xl" />
        <div className="absolute bottom-3 right-3 w-9 h-9 border-b-4 border-r-4 border-indigo-500 rounded-br-xl" />
        <div className="absolute inset-x-6 top-1/4 h-0.5 bg-indigo-500/70 scanline" />
      </div>
    </div>
  );
}
