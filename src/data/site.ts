// Configuración central del sitio de Lourdes Martínez (Century 21 Grupo Mormos)
// Un solo lugar para editar datos de contacto, redes y textos clave.

export const site = {
  nombre: "Lourdes Martínez",
  nombreLegal: "María Lourdes Martínez López",
  rol: "Asesora Inmobiliaria Certificada",
  franquicia: "Century 21 Grupo Mormos",
  tagline: "Tu patrimonio merece un acompañamiento real",
  descripcion:
    "Te acompaño a comprar, vender, rentar o invertir en CDMX, Estado de México y más, con inteligencia, empatía y acción.",
  actualizacionLegal: "agosto de 2026",

  // Cobertura y sede
  cobertura: "CDMX, Estado de México y más",
  sede: "Jardín Balbuena, Venustiano Carranza, CDMX",
  ciudad: "Ciudad de México",

  // Oficina Century 21 Grupo Mormos
  // Domicilio vigente confirmado por Antonio para el sitio. La carta adjunta conserva
  // el número 901 como dato de una versión anterior y no debe publicarse.
  direccionOficina:
    "Fray Servando Teresa de Mier 830, Local A, Jardín Balbuena, Venustiano Carranza, CDMX",
  telefonoOficina: "55 5935 7280",

  // Contacto de Lourdes
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
  urlBase: "https://lourdesc21.pages.dev", // dominio público actual; cambiar cuando exista uno propio
} as const;

export function whatsappLink(mensaje: string = site.whatsappMensaje): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}
