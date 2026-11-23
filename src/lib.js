import { CONFIG } from "./data/content.js";

export const waHref = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.waText)}`;
export const igHref = CONFIG.instagram;
export const ext = { target: "_blank", rel: "noopener" };
