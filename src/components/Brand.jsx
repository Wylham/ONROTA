import React from "react";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

export function Logo({
  variant = "light",
  className = "h-8 w-auto",
  alt = "ONROTA",
}) {
  const src = variant === "dark" ? logoDark : logoLight;
  return <img src={src} alt={alt} className={className} loading="eager" />;
}
