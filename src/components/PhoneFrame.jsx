import React from "react";

export default function PhoneFrame({
  type = "image",
  src,
  poster,
  alt = "",
  theme = "dark",
  className = "",
  children,
}) {
  const ring = theme === "light" ? "ring-slate-200" : "ring-white/15";

  const Placeholder = () => (
    <div className="h-full w-full grid place-items-center bg-black">
      <div className="flex flex-col items-center gap-2">
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-white/60"
          fill="currentColor"
        >
          <path d="M7 2h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm0 2a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7z" />
        </svg>
        <span className="text-xs text-white/60">Tela do app</span>
      </div>
    </div>
  );

  return (
    <div
      className={[
        "mx-auto w-[300px] sm:w-[340px] lg:w-[380px]",
        "h-[70vh] max-h-[620px] min-h-[420px]",
        "rounded-[2.2rem] ring-1",
        ring,
        "bg-black shadow-2xl relative",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-2 rounded-[1.8rem] overflow-hidden bg-black flex">
        {children ? (
          children
        ) : src ? (
          type === "video" ? (
            <video
              className="h-full w-full object-contain bg-black"
              controls
              playsInline
              poster={poster}
              src={src}
            />
          ) : (
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-contain"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )
        ) : (
          <Placeholder />
        )}
      </div>

      {/* detalhes do aparelho */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/60 rounded-b-xl" />
      <div className="absolute -left-0 top-28 w-1.5 h-10 rounded-r-full bg-black/40" />
      <div className="absolute -right-0 top-32 w-1.5 h-14 rounded-l-full bg-black/40" />
    </div>
  );
}
