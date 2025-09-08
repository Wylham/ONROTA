import React from "react";

export default function TechBackdrop({ theme = "dark" }) {
  const dot = theme === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
  const scan =
    theme === "dark" ? "rgba(99,102,241,0.10)" : "rgba(99,102,241,0.12)";
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <pattern
            id="dotgrid"
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.6" fill={dot} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>
      <div
        className="absolute inset-x-0 h-24 animate-scan"
        style={{ backgroundColor: scan }}
      />
    </div>
  );
}
