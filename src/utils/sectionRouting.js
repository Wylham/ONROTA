// src/utils/sectionRouting.js

// Mapeie caminho -> id da seção (confira os ids no seu HTML/JSX)
const PATH_TO_ID = {
  "/": "hero",
  "/sobre-nos": "about",
  "/produtos": "products",
  "/clientes": "clients",
  "/planos": "plans",
  "/contato": "contact",
};

// Se usar #anchors (ex.: /#plans), também tratamos:
function idFromLocation(loc = window.location) {
  // Prioridade 1: hash (#plans)
  if (loc.hash && loc.hash.length > 1) return loc.hash.slice(1);

  // Prioridade 2: pathname limpo (/planos/)
  const path = loc.pathname.replace(/\/+$/, ""); // remove barra final
  return PATH_TO_ID[path] || null;
}

// Scroll com compensação do header fixo (se houver)
function getHeaderOffsetPx() {
  // Ajuste o seletor conforme seu header/nav
  const header =
    document.querySelector("header.sticky, header.fixed, nav.sticky, nav.fixed") ||
    document.querySelector("header") ||
    document.querySelector("nav");
  return header ? header.offsetHeight : 0;
}

export function scrollToSectionId(id, behavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = getHeaderOffsetPx();
  const rectTop = el.getBoundingClientRect().top + window.scrollY;
  const target = Math.max(rectTop - headerOffset - 8, 0); // 8px de respiro

  window.scrollTo({ top: target, behavior });
}

// Chame na carga inicial da página
export function handleInitialSectionScroll() {
  const id = idFromLocation();
  if (!id) return;

  // Espera o primeiro paint para garantir que o DOM já montou
  requestAnimationFrame(() => {
    // mais um pequeno atraso para imagens/altura do header estabilizar
    setTimeout(() => scrollToSectionId(id, "instant"), 50);
  });
}

// Intercepta cliques em <a> internos e usa pushState + scroll (SPA)
export function enableSpaNav() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    // Ignora se for meta/ctrl/shift click, download, target _blank etc.
    if (
      e.defaultPrevented ||
      a.target === "_blank" ||
      a.hasAttribute("download") ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    // Só trata links do mesmo origin
    const url = new URL(a.href, window.location.href);
    if (url.origin !== window.location.origin) return;

    // Descobre o id de destino por hash ou pathname
    const hashId = url.hash ? url.hash.slice(1) : null;
    const pathId = hashId ? null : idFromLocation(url);
    const targetId = hashId || pathId;
    if (!targetId) return; // não é link para seção: deixa navegar normal

    e.preventDefault();
    // Atualiza a URL (preserva hash quando houver)
    const pathname = url.pathname.replace(/\/+$/, "");
    const next = hashId ? `${pathname}#${hashId}` : pathname || "/";
    window.history.pushState({}, "", next);

    scrollToSectionId(targetId);
  });

  // Voltar/avançar do navegador
  window.addEventListener("popstate", () => {
    const id = idFromLocation() || PATH_TO_ID["/"];
    scrollToSectionId(id, "instant");
  });
}
