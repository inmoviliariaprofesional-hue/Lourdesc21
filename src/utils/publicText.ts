// Defensa adicional: retira segmentos que comienzan explícitamente como una vía
// y contienen numeración. Evita reglas genéricas con "N." en modo insensible a
// mayúsculas porque pueden confundir palabras como "Construcción".
export function sanitizePublicDescription(text: string, colonia: string): string {
  if (!text) return "";

  const place = colonia || "la zona";
  const addressSegment = /\b(?:Ret(?:orno)?|Av(?:enida)?\.?|Calle|Calz(?:ada)?\.?|Carretera|Cerrada|Priv(?:ada)?\.?|Boulevard|Blvd\.?)\s+[^,\n;]{0,105}?\d+(?:[.\-]\d+)?(?:\s*(?:Int(?:erior)?\.?|Depto\.?|Edif\.?)\s*[\w.-]+)*/giu;
  const uppercaseNumber = /\bN\.\s*\d+(?:\s*Int\.?\s*\d+)?/g;

  return text
    .replace(addressSegment, place)
    .replace(uppercaseNumber, "")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+,/g, ",")
    .trim();
}
