// src/utils/sectionRouting.js

// Mapeie cada PATH para possíveis IDs (PT e EN, várias alternativas)
const PATH_TO_IDS = {
  "/": ["home", "hero"],
  "/sobre-nos": ["sobre-nos"],
  "/produtos": ["produtos"],
  "/clientes": ["clientes"],
  "/planos": ["planos"],
  "/contato": ["contato"],
};

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

function normalizePathname(p) {
  const noTrailing = p.replace(/\/+$/, "");
  return noTrailing === "" ? "/" : noTrailing;
}

function idFromLocation(loc = window.location) {
  // 1) Hash tem prioridade (#clientes)
  if (loc.hash && loc.hash.length > 1) return loc.hash.slice(1);

  // 2) Path limpo (/planos)
  const path = normalizePathname(loc.pathname);
  const candidates = PATH_TO_IDS[path];
  return candidates ? getFirstExistingId(candidates) : null;
}

// Tenta detectar header fixo para compensar sobreposição
function getHeaderOffsetPx() {
  const header =
    document.querySelector("header.sticky, header.fixed, nav.sticky, nav.fixed") ||
    document.querySelector("header") ||
    document.querySelector("nav");

  if (!header) return 0;

  // só compensa se for fixed/sticky de verdade
  const style = window.getComputedStyle(header);
  const pos = style.position;
  const isSticky = pos === "sticky" || pos === "fixed";
  return isSticky ? header.offsetHeight : 0;
}

export function scrollToSectionId(id, behavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = getHeaderOffsetPx();
  const rectTop = el.getBoundingClientRect().top + window.scrollY;
  const target = Math.max(rectTop - headerOffset - 8, 0); // 8px de respiro

  window.scrollTo({ top: target, behavior });
}

// Aguarda a seção existir (evita cair no "home" por carregar cedo demais)
async function scrollWhenReady(id, behavior = "smooth", maxWaitMs = 5000) {
  const t0 = performance.now();
  while (!document.getElementById(id)) {
    if (performance.now() - t0 > maxWaitMs) return; // desiste silenciosamente
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

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    // respeita novas abas/descargas
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

    const url = new URL(a.getAttribute("href"), window.location.href);

    // só lida com o mesmo origin
    if (url.origin !== window.location.origin) return;

    const hashId = url.hash ? url.hash.slice(1) : null;
    const pathOnly = normalizePathname(url.pathname);

    // Caso 1: link é só hash (#clientes) → canoniza para /clientes
    if (hashId) {
      const canonicalPath = pathForId(hashId) || pathOnly; // cai para path atual se não souber
      e.preventDefault();
      window.history.pushState({}, "", canonicalPath); // sem hash
      scrollWhenReady(hashId);
      return;
    }

    // Caso 2: path "limpo" (/planos, /clientes, etc.)
    const candidates = PATH_TO_IDS[pathOnly];
    if (!candidates) return; // não é link de seção: segue normal

    const targetId = getFirstExistingId(candidates) || candidates[0]; // tenta o que existe; senão o 1º
    e.preventDefault();
    window.history.pushState({}, "", pathOnly);
    scrollWhenReady(targetId);
  });

  // Voltar/Avançar do navegador
  window.addEventListener("popstate", () => {
    const id = idFromLocation() || getFirstExistingId(PATH_TO_IDS["/"]) || "hero";
    scrollWhenReady(id, "instant");
  });
}
