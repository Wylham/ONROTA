import React, { useMemo, useState } from "react";

export default function ScreenshotGallery({ items = [] }) {
  const valid = useMemo(() => items.filter(Boolean), [items]);
  const [idx, setIdx] = useState(0);
  const current = valid[idx] || {};

  return (
    <div className="w-full">
      {/* Viewer grande, sem moldura; só um leve ring para destaque */}
      <div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black">
        {current?.type === "video" ? (
          <video
            className="w-full h-[46vh] min-h-[280px] max-h-[520px] object-cover"
            controls
            playsInline
            poster={current.poster}
            src={current.src}
          />
        ) : (
          <img
            src={current?.src}
            alt={current?.alt || "Screenshot"}
            className="w-full h-[46vh] min-h-[280px] max-h-[520px] object-cover"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        )}
      </div>

      {/* Tira de miniaturas rolável */}
      <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
        {valid.map((m, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`relative shrink-0 rounded-xl overflow-hidden ring-1 ${
              idx === i ? "ring-indigo-500" : "ring-white/10"
            }`}
            style={{ width: 140, height: 88 }}
            aria-label={`Abrir mídia ${i + 1}`}
          >
            {m.type === "video" ? (
              <>
                <img
                  src={m.poster}
                  alt={m.alt || "Vídeo"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 grid place-items-center bg-black/30">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </>
            ) : (
              <img
                src={m.src}
                alt={m.alt || "Screenshot"}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
