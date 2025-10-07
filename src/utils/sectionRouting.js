// src/utils/sectionRouting.js
// Navegação SPA baseada em paths/âncoras para one-page (Vite + React).
// Intercepta <a href="/rota"> e realiza scroll suave até o id correspondente,
// com compensação de header fixo/sticky e espera o DOM montar quando preciso.

// 🔎 MAPA DE ROTAS → IDS (alinhado com seus ids no App.jsx)
const PATH_TO_IDS = {
  "/": ["home", "hero"],
  "/sobre-nos": ["sobre-nos"],
  "/produtos": ["produtos"],
  "/clientes": ["clientes"],
  "/planos": ["planos"],
  "/contato": ["contato"],

  // adições
  "/impacto": ["impacto"],
  "/produto-demo": ["produto-demo"],

  // opcionais (suportar acesso direto)
  "/numeros": ["numeros"],
  "/testimonials": ["testimonials"],
};

// -------------- utilitários internos --------------
function normalizePathname(p) {
  const noTrailing = p.replace(/\/+$/, "");
  return noTrailing === "" ? "/" : noTrailing;
}

function getFirstExistingId(candidates = []) {
  for (const id of candidates) {
    if (id && document.getElementById(id)) return id;
  }
  return null;
}

function pathForId(id) {
  for (const [path, ids] of Object.entries(PATH_TO_IDS)) {
    if (ids.includes(id)) return path;
  }
  return null;
}

function idFromLocation(loc = window.location) {
  // 1) hash tem prioridade (#clientes)
  if (loc.hash && loc.hash.length > 1) return loc.hash.slice(1);

  // 2) pathname limpo (/planos)
  const path = normalizePathname(loc.pathname);
  const candidates = PATH_TO_IDS[path];
  return candidates ? getFirstExistingId(candidates) || candidates[0] : null;
}

// Compensa header fixo/sticky para não cobrir o topo da seção
function getHeaderOffsetPx() {
  const header =
    document.querySelector("header.sticky, header.fixed, nav.sticky, nav.fixed") ||
    document.querySelector("header") ||
    document.querySelector("nav");

  if (!header) return 0;
  const pos = getComputedStyle(header).position;
  const isSticky = pos === "sticky" || pos === "fixed";
  return isSticky ? header.offsetHeight : 0;
}

// -------------- API pública --------------
export function scrollToSectionId(id, behavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = getHeaderOffsetPx();
  const rectTop = el.getBoundingClientRect().top + window.scrollY;
  const target = Math.max(rectTop - headerOffset - 8, 0); // 8px de respiro

  window.scrollTo({ top: target, behavior });
}

// Espera a seção existir (evita falha se o DOM montar depois)
async function scrollWhenReady(id, behavior = "smooth", maxWaitMs = 5000) {
  const t0 = performance.now();
  while (!document.getElementById(id)) {
    if (performance.now() - t0 > maxWaitMs) return;
    await new Promise((r) => setTimeout(r, 50));
  }
  scrollToSectionId(id, behavior);
}

export function handleInitialSectionScroll() {
  const id = idFromLocation();
  if (!id) return;
  requestAnimationFrame(() => scrollWhenReady(id, "instant"));
}

// evita duplo binding no StrictMode
let _spaNavEnabled = false;

export function enableSpaNav() {
  if (_spaNavEnabled) return;
  _spaNavEnabled = true;

  // capture:true para interceptar antes do comportamento padrão do hash
  document.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest("a");
      if (!a) return;

      // respeita novas abas/descargas/modificadores
      if (
        e.defaultPrevented ||
        a.target === "_blank" ||
        a.hasAttribute("download") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;

      const rawHref = a.getAttribute("href");
      if (!rawHref) return;

      const url = new URL(rawHref, window.location.href);

      // só tratamos navegação dentro do mesmo origin
      if (url.origin !== window.location.origin) return;

      const hashId = url.hash ? url.hash.slice(1) : null;
      const pathOnly = normalizePathname(url.pathname);

      // Caso 1: link com hash (#clientes) → canoniza para /clientes
      if (hashId) {
        e.preventDefault();
        const canonicalPath = pathForId(hashId) || pathOnly || "/";
        window.history.pushState({}, "", canonicalPath);
        scrollWhenReady(hashId);
        return;
      }

      // Caso 2: link com path limpo (/planos, /impacto, /produto-demo…)
      const candidates = PATH_TO_IDS[pathOnly];
      if (!candidates) return; // não é seção SPA → deixa navegar normal

      e.preventDefault();
      const targetId = getFirstExistingId(candidates) || candidates[0];
      window.history.pushState({}, "", pathOnly);
      scrollWhenReady(targetId);
    },
    true
  );

  // Voltar/avançar do navegador
  window.addEventListener("popstate", () => {
    const id = idFromLocation() || getFirstExistingId(PATH_TO_IDS["/"]) || "home";
    scrollWhenReady(id, "instant");
  });
}
