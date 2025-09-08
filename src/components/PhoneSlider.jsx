import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PhoneFrame from "./PhoneFrame";

export default function PhoneSlider({
  items = [],
  theme = "dark",
  className = "",
}) {
  if (!items || items.length === 0) {
    return <PhoneFrame theme={theme} />;
  }

  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);
  useEffect(() => {
    if (embla) {
      embla.on("select", onSelect);
      onSelect();
    }
  }, [embla, onSelect]);

  return (
    <div className={className}>
      <PhoneFrame theme={theme}>
        <div className="w-full h-full overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {items.map((src, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] h-full grid place-items-center"
              >
                <img
                  src={src}
                  alt={`Tela ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
            ))}
          </div>
        </div>
      </PhoneFrame>

      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          onClick={() => embla && embla.scrollPrev()}
          aria-label="Anterior"
          className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
        >
          ‹
        </button>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => embla && embla.scrollTo(i)}
            aria-label={`Ir para ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              selected === i ? "w-8 bg-indigo-500" : "w-3 bg-white/40"
            }`}
          />
        ))}
        <button
          onClick={() => embla && embla.scrollNext()}
          aria-label="Próxima"
          className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
}
