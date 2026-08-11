// Catálogo de propiedades.
//
// REGLAS IMPORTANTES (indicadas por el cliente):
//  1. El campo `id` es de CONTROL INTERNO y NUNCA se muestra en el sitio.
//  2. El precio SOLO se publica si Lourdes lo autoriza → usar `mostrarPrecio`.
//     Si `mostrarPrecio` es false, la tarjeta muestra "Precio a consultar".
//  3. Por seguridad, se publica colonia + alcaldía/municipio, NO el número exacto.
//
// Las imágenes van en /public/images/propiedades/<slug>/  (Antonio las enviará
// como archivos; mientras tanto se usa el placeholder).

export type Operacion = "venta" | "renta";

export interface Propiedad {
  id: string; // ⚠️ control interno — NUNCA se renderiza
  slug: string; // para URL/keys (no expone el id)
  titulo: string;
  operacion: Operacion;
  tipo: string; // Casa, Departamento, Terreno...
  colonia: string;
  alcaldia: string; // alcaldía o municipio
  estado: string; // "CDMX" | "Estado de México"
  precio?: string; // ej. "$6,800,000 MXN"
  mostrarPrecio: boolean; // true solo si Lourdes autoriza publicar el precio
  recamaras?: number;
  banos?: number;
  mediosBanos?: number;
  estacionamientos?: number;
  m2Terreno?: number;
  m2Construccion?: number;
  niveles?: number;
  anio?: number;
  descripcion: string;
  amenidades?: string[];
  imagenes: string[]; // rutas en /public/images/propiedades/... (la 1ª es la principal)
  destacada?: boolean;
}

export const propiedades: Propiedad[] = [
  {
    id: "621195", // interno — no se muestra
    slug: "casa-fuentes-de-tepepan-tlalpan",
    titulo: "Casa nueva en Fuentes de Tepepan",
    operacion: "venta",
    tipo: "Casa",
    colonia: "Fuentes de Tepepan",
    alcaldia: "Tlalpan",
    estado: "CDMX",
    precio: "$6,800,000 MXN",
    mostrarPrecio: true, // ⚠️ CONFIRMAR con Antonio/Lourdes si se publica el precio
    recamaras: 3,
    banos: 3,
    mediosBanos: 1,
    estacionamientos: 2,
    m2Terreno: 141.6,
    m2Construccion: 276.4,
    niveles: 3,
    anio: 2024,
    descripcion:
      "Casa nueva de 3 niveles en Fuentes de Tepepan, Tlalpan. Cocina integral, sala, comedor, cuarto de TV, espacio para estudio/family room, terraza y patio de servicio. Excelente estado de conservación, acabados de calidad media-alta, acepta mascotas y parques cercanos.",
    amenidades: [
      "Estudio / Family Room",
      "Cuarto de TV",
      "Terraza",
      "Balcón",
      "Cocina integral",
      "Área de lavado",
      "Bodega",
      "Cisterna",
      "Acepta mascotas",
    ],
    imagenes: ["/images/propiedades/placeholder.svg"],
    destacada: true,
  },
];
