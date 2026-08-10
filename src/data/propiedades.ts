// Catálogo de propiedades. Reemplazar los datos placeholder con las fichas
// técnicas reales que enviará Antonio. Las imágenes van en /public/images/propiedades/

export type Operacion = "venta" | "renta";

export interface Propiedad {
  id: string;
  titulo: string;
  operacion: Operacion;
  tipo: string; // Casa, Departamento, Terreno...
  zona: string;
  precio: string; // texto libre por ahora (ej. "$4,500,000 MXN")
  recamaras?: number;
  banos?: number;
  estacionamientos?: number;
  m2?: number;
  descripcion: string;
  imagen: string; // ruta en /public/images/propiedades/
  destacada?: boolean;
}

// NOTA: la propiedad de Tlalpan ya funcionó como gancho real que generó
// mensajes en redes → se marca como destacada.
export const propiedades: Propiedad[] = [
  {
    id: "tlalpan-01",
    titulo: "Propiedad en Tlalpan",
    operacion: "venta",
    tipo: "Casa",
    zona: "Tlalpan",
    precio: "Precio a confirmar",
    recamaras: 3,
    banos: 2,
    estacionamientos: 2,
    m2: 180,
    descripcion:
      "PLACEHOLDER — sustituir con la ficha técnica real. Propiedad ancla que generó prospectos en redes.",
    imagen: "/images/propiedades/placeholder.svg",
    destacada: true,
  },
  {
    id: "balbuena-01",
    titulo: "Propiedad en Jardín Balbuena",
    operacion: "venta",
    tipo: "Departamento",
    zona: "Jardín Balbuena, Venustiano Carranza",
    precio: "Precio a confirmar",
    recamaras: 2,
    banos: 1,
    estacionamientos: 1,
    m2: 75,
    descripcion: "PLACEHOLDER — sustituir con la ficha técnica real.",
    imagen: "/images/propiedades/placeholder.svg",
    destacada: false,
  },
];
