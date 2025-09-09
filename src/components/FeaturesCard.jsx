// src/components/FeaturesCard.jsx
import React from "react";
import { IconScan, IconLink, IconShield, IconMessage } from "./Icons";

const items = [
  {
    icon: <IconScan className="w-5 h-5 text-indigo-500" />,
    title: "OCR de CNH e CRLV",
    desc: "Leitura automática e precisa em segundos.",
  },
  {
    icon: <IconMessage className="w-5 h-5 text-indigo-500" />,
    title: "Cadastro completo",
    desc: "Campos preenchidos sem digitação manual.",
  },
  {
    icon: <IconLink className="w-5 h-5 text-indigo-500" />,
    title: "Integração com ERP",
    desc: "Envio via API e rastreabilidade.",
  },
  {
    icon: <IconShield className="w-5 h-5 text-indigo-500" />,
    title: "Zero erro humano",
    desc: "Validações e padronização automáticas.",
  },
];

export default function FeaturesCard({ className = "" }) {
  return (
    <div
      className={
        "rounded-3xl bg-white text-slate-900 shadow-xl/40 shadow-black/10 p-5 sm:p-6 md:p-7 " +
        "border border-black/5 " +
        className
      }
    >
      <ul className="space-y-3.5 sm:space-y-4">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-indigo-50">
              {it.icon}
            </div>
            <div className="leading-snug">
              <p className="font-semibold">{it.title}</p>
              <p className="text-sm text-slate-600 mt-0.5">{it.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
