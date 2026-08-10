// Configuración central del sitio de Lourdes Martínez (Century 21 Grupo Mormos)
// Un solo lugar para editar datos de contacto, redes y textos clave.

export const site = {
  nombre: "Lourdes Martínez",
  rol: "Asesora Inmobiliaria Certificada",
  franquicia: "Century 21 Grupo Mormos",
  tagline: "Tu patrimonio merece un acompañamiento real",
  descripcion:
    "Te acompaño a comprar, vender, rentar o invertir en propiedades en Jardín Balbuena, Venustiano Carranza y Tlalpan, con inteligencia, empatía y acción.",

  // Zonas de operación (para SEO local y textos)
  zonas: ["Jardín Balbuena", "Venustiano Carranza", "Tlalpan"],
  ciudad: "Ciudad de México",

  // Contacto
  emailOficial: "lourdes@c21grupomormos.com",
  telefonos: ["55 4001 2160", "55 7942 1249"],
  // WhatsApp principal en formato internacional (México +52)
  whatsapp: "525540012160",
  whatsappMensaje:
    "Hola Lourdes, vi tu sitio web y me gustaría más información. 🏡",

  // Redes sociales
  redes: {
    instagram: "https://www.instagram.com/lourdes_c21_grupo_mormos/",
    facebook: "https://www.facebook.com/LourdesC21Mormos",
    tiktok: "https://www.tiktok.com/@maria.lourdes.mar740",
  },

  // SEO
  urlBase: "https://lourdesc21.pages.dev", // ajustar al dominio final
} as const;

export function whatsappLink(mensaje: string = site.whatsappMensaje): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
