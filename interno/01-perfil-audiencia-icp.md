# [INTERNO] Perfil de Audiencia / ICP y Segmentación
### Proyecto Lourdes Martínez · Century 21 Grupo Mormos

> Documento de trabajo del equipo. Es la base para segmentar contenido y pauta.
> **Hipótesis inicial** — se valida y refina con datos reales de los primeros 30-60 días.

---

## Por qué este documento es crítico

El problema de ene-jul ("mensajes que no eran de compra" + "a veces sin mensajes") es, en gran parte, un problema de **no tener definido a quién le hablamos**. Cuando le hablas a "todos", atraes curiosos. Cuando le hablas a un perfil específico, atraes prospectos calificados.

---

## Perfiles de Cliente Ideal (ICP) — hipótesis

### 🟢 Perfil 1 — Primer comprador con crédito (INFONAVIT/FOVISSSTE)
- **Edad:** 28-40 años, con empleo formal.
- **Motivación:** dejar de rentar, patrimonio propio.
- **Dolor:** no sabe cuánto le prestan, teme el proceso, cree que "no le alcanza".
- **Forma de pago:** crédito institucional (INFONAVIT/FOVISSSTE/cofinavit).
- **Mensaje que le funciona:** "Descubre cuánto crédito te autorizan y qué casa puedes comprar sin enganche gigante."
- **Dónde está:** Facebook e Instagram, grupos de "casas en [zona]".

### 🟢 Perfil 2 — Inversionista
- **Edad:** 35-55 años, ingresos medios-altos.
- **Motivación:** rentabilidad, plusvalía, diversificar.
- **Dolor:** quiere números claros (ROI, plusvalía de la zona).
- **Forma de pago:** contado o crédito bancario.
- **Mensaje:** "Propiedades con plusvalía comprobada en [zona]. Te muestro los números."
- **Dónde está:** Instagram, LinkedIn, referidos.

### 🟢 Perfil 3 — Familia que mejora de casa ("move-up buyer")
- **Edad:** 35-50 años, ya tiene casa, crece la familia.
- **Motivación:** más espacio, mejor zona/escuelas.
- **Dolor:** necesita vender la actual para comprar la nueva (operación cruzada).
- **Mensaje:** "¿Tu casa ya te quedó chica? Te ayudo a vender la actual y encontrar la nueva."
- **Dónde está:** Facebook, referidos.

### 🟡 Perfil 4 — Propietario que quiere VENDER (¡el más valioso!)
- **Motivación:** vender rápido y al mejor precio.
- **Dolor:** no sabe cuánto vale su propiedad, desconfía de asesores.
- **Gancho perfecto:** el **"Análisis de Mercado Gratuito"** que ya tiene.
- **Mensaje:** "¿Cuánto vale realmente tu casa hoy? Análisis gratis, sin compromiso."
- **Por qué priorizarlo:** captar listings = tener inventario propio = más control y comisiones de venta.

---

## Segmentación para Meta Ads (hipótesis inicial)

| Variable | Valor sugerido |
|---|---|
| **Ubicación** | **Sede/oficina: Jardín Balbuena (Venustiano Carranza), CDMX.** Cobertura amplia: **CDMX y Estado de México** (portafolio disperso). Para pauta: empezar por zonas con propiedades reales en cartera + radio alrededor de la oficina; escalar por zona de cada listing. |
| **Edad** | 28-55 |
| **Intereses** | Crédito hipotecario, INFONAVIT, bienes raíces, mudanza, Century 21, inversión inmobiliaria |
| **Comportamiento** | Interacción con contenido inmobiliario, "probablemente en proceso de mudanza" |
| **Retargeting** | Visitantes del sitio web (píxel), gente que interactuó con perfiles/anuncios |
| **Lookalike** | Similares a leads que sí calificaron (cuando haya datos) |

---

## Geografía correcta (aclaración jul 2026 — IMPORTANTE)

- 🏢 **Sede / oficina:** Century 21 Grupo Mormos, **Jardín Balbuena, Venustiano Carranza, CDMX**. Es donde Lourdes es "especialista de zona" (así aparece en su banner de Facebook).
  - Dirección: Fray Servando Teresa de Mier **830, Local A** (⚠️ la carta de presentación dice "901" — confirmar el número correcto). Tel oficina: 55 5935 7280.
- 🗺️ **Cobertura real:** **CDMX y Estado de México.** Lourdes maneja un **portafolio disperso**, NO solo Jardín Balbuena.
- ⚠️ **Tlalpan NO es su zona base:** fue una **idea de área de mercado que propusimos**. Ojo con no sobre-posicionar Tlalpan como si fuera su especialidad.
- 💡 La propiedad-ancla que generó mensajes es justamente una casa en **Fuentes de Tepepan, Tlalpan** (ID interno 621195, $6.8M) → sirve como formato de contenido/pauta, pero la marca de "especialista de zona" es **Jardín Balbuena**.

### Reglas de publicación de propiedades (indicadas por el cliente)
- 🔒 **El "ID" de cada propiedad NUNCA se publica** (es control interno). Ya implementado en el modelo del sitio.
- 💲 **El precio solo se publica si Lourdes lo autoriza** (flag `mostrarPrecio`; si no, "Precio a consultar").
- 🔐 Por seguridad, publicar **colonia + alcaldía/municipio**, no el número exacto de la calle (a confirmar).

### Inventario
- **~19 propiedades** entregadas hasta ahora (13 publicadas la semana pasada + 6 nuevas). Vienen en **PDF** (ficha con datos + catálogo de fotos). Falta que Antonio envíe las **imágenes como archivos** para el sitio.

### SEO local a atacar en el sitio
- "asesor inmobiliario Jardín Balbuena" / "Venustiano Carranza"
- "casas / departamentos en venta CDMX"
- "propiedades en venta Estado de México"
- Páginas por zona/colonia según dónde estén los listings reales.

## Datos PENDIENTES por confirmar con Antonio (para afinar segmentación)

- [ ] Confirmar número de la oficina (830 Local A vs 901).
- [ ] ¿Qué propiedades pueden mostrar **precio** públicamente? (default: oculto)
- [ ] ¿Publicamos dirección exacta o solo colonia/alcaldía? (recomendado: solo colonia)
- [ ] Rango de precios general del portafolio (define nivel socioeconómico del target).
- [ ] Reparto venta vs. renta en el portafolio.
- [ ] Tipos de propiedad predominantes (casa, depto, terreno, comercial).

---

## Cómo validaremos/refinaremos estos perfiles

1. Los primeros 30 días registramos **de qué perfil viene cada lead** que llega (etiqueta en CRM).
2. Identificamos **qué perfil convierte mejor** (agenda cita / cierra).
3. Movemos presupuesto de pauta y contenido hacia los perfiles ganadores.
4. Actualizamos este documento cada mes con lo aprendido.
