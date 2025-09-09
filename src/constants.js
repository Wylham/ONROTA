export const COMPANY_NAME = "OnRota";
export const PRODUCT_NAME = "OnCad";
export const WHATSAPP_NUMBER = "+55 64 99903-2381";
export const CONTACT_EMAIL = "contato@onrota.tech";
export const WHATSAPP_LINK =
  "https://wa.me/5564999032381?text=Ol%C3%A1%20ONROTA!%20Quero%20falar%20sobre%20o%20ONCAD.";

export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
export const EMAILJS_CONFIG_OK = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);
