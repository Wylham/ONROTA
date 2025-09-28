// src/components/brand.jsx
import React from "react";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

// Cores da ID visual da marca
export const colors = {
  primary: "#0AA2FF",
  primaryHover: "#078AE6",
  dark: "#121212",
  whiteA: (a = 1) => `rgba(255,255,255,${a})`,
  primaryA: (a = 1) => `rgba(10,162,255,${a})`,
};

export function Logo({ variant = "light", className = "h-8 w-auto", alt = "ONROTA" }) {
  const src = variant === "dark" ? logoDark : logoLight;
  return <img src={src} alt={alt} className={className} loading="eager" />;
}
