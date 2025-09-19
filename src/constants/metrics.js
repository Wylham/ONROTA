// src/constants/metrics.js

// KPIs dos números
export const KPIS = [
  { label: "cadastros realizados", end: 50, prefix: "+", suffix: "mil" },
  { label: "usuários ativos", end: 1, prefix: "+", suffix: "mil" },
  { label: "redução média de fraudes", end: 37, prefix: "", suffix: "%" },
  { label: "aprovação em 1ª análise", end: 81, prefix: "", suffix: "%" },
];

// Cards do Impact
export const IMPACT_ITEMS = [
  {
    title: "Simplifique o dia a dia",
    desc: "Cadastros padronizados e automações (OCR + validações) reduzem passos manuais e erros operacionais.",
    cta: { label: "Ver como funciona", href: "#prova-social" },
  },
  {
    title: "Melhorias na análise com IA",
    desc: "NLP e regras de negócio geram score de risco por motorista/veículo, priorizando decisões seguras e rápidas.",
    cta: { label: "Ver planos", href: "#contact" },
  },
  {
    title: "Esteja onde sua operação está",
    desc: "Integrações via API/Webhooks com ERP/TMS: status, evidências e eventos fluem automaticamente.",
    cta: { label: "Ver integrações", href: "#contact" },
  },
];

// Dados do vídeo (ProductDemo)
export const DEMO_VIDEO = {
  videoId: "dQw4w9WgXcQ", // troque pelo ID real do vídeo do YouTube
  title: "Veja o OnCad em ação", // <-- escolha uma das opções acima
  description:
    "Descubra como o OnCad simplifica o cadastro de motoristas e veículos: OCR automático, validações inteligentes e integração em tempo real com seu ERP/TMS.",
  bgClass: "bg-black-600",
  invert: false,
};
