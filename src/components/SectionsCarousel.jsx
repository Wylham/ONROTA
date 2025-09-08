import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SectionsCarousel({ items = [], selected, onChange }) {
  const [internal, setInternal] = useState(0);
  const idx = selected ?? internal;

  const set = (i) => {
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    if (onChange) onChange(clamped);
    else setInternal(clamped);
  };

  return (
    <div className="relative">
      {/* Abas */}
      <div className="flex flex-wrap gap-2">
        {items.map((t, i) => (
          <button
            key={t.label}
            onClick={() => set(i)}
            className={`relative rounded-xl px-4 py-2 flex items-center gap-2 transition text-sm ${
              idx === i ? "text-inherit" : "opacity-70 hover:opacity-100"
            }`}
          >
            {idx === i && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-xl"
                style={{ background: "currentColor", opacity: 0.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.icon}</span>
            <span className="relative z-10">{t.label}</span>
          </button>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            {items[idx]?.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Setas */}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:flex">
        <button
          onClick={() => set(idx - 1)}
          className="rounded-full px-2 py-2 opacity-70 hover:opacity-100"
        >
          ‹
        </button>
      </div>
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:flex">
        <button
          onClick={() => set(idx + 1)}
          className="rounded-full px-2 py-2 opacity-70 hover:opacity-100"
        >
          ›
        </button>
      </div>
    </div>
  );
}
