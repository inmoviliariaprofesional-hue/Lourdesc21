# [INTERNO] Roadmap por Fases
### Proyecto Lourdes Martínez · Century 21 Grupo Mormos

> Plan de ejecución. Las fases 1 y 2 corren en paralelo.

---

## Fase 0 — Recopilación de insumos (bloqueante para el sitio)

Estado (actualizado jul 2026):

- [ ] Fotos profesionales de Lourdes + logo Century 21 Grupo Mormos *(Antonio las enviará)*
- [ ] Información de propiedades: fichas técnicas *(Antonio las enviará; incluye propiedad de Tlalpan que ya funcionó como gancho)*
- [x] **Zona geográfica:** Jardín Balbuena (Venustiano Carranza) y Tlalpan, CDMX
- [ ] Confirmar enfoque (venta / renta / ambos) y rango de precios *(llegan fichas técnicas)*
- [x] **Brevo:** se creará **cuenta nueva e independiente** para Lourdes (la existente es de Alicia). Ver nota al final.
- [x] **Repo definitivo:** `inmoviliariaprofesional-hue/Lourdesc21`
- [x] **Stack:** Astro + Tailwind, deploy en Cloudflare Pages

---

### Nota sobre Brevo (decisión)

Brevo **solo permite separar clientes en verdaderas "sub-cuentas" en el plan Enterprise** (de pago). En los planes free/estándar, una cuenta = una base de contactos y un solo correo de login, y **no se puede reutilizar el mismo email en dos cuentas**. Como la cuenta actual ya está ocupada con Alicia, lo correcto es **crear una cuenta Brevo nueva e independiente para Lourdes**, idealmente con el correo corporativo `lourdes@c21grupomormos.com`. Así los contactos, remitentes, reputación de envío y estadísticas quedan 100% separados por clienta. El plan gratuito (300 envíos/día, contactos ilimitados) alcanza para arrancar.
*Contenido reformulado para cumplimiento de licencias; fuente: [documentación de Brevo sobre sub-cuentas](https://help.brevo.com/hc/en-us/articles/9003097317138-Classic-Admin-account-What-is-sub-accounts-management).*

---

## Fase 1 — Fundamentos de conversión (semana 1-2) · SIN COSTO

Ataca el Problema B (conversión). Se puede empezar HOY.

- [ ] Configurar WhatsApp Business (bienvenida, ausencia, etiquetas, catálogo)
- [ ] Implementar guiones de calificación y cierre (`entregables-lourdes/02-guiones-whatsapp.md`)
- [ ] Montar CRM simple (Google Sheets / Trello / Brevo) con la cadencia de seguimiento
- [ ] Definir horario y compromiso de respuesta < 5 min

> Meta de la fase: empezar a agendar citas y, ojalá, el primer cierre — sin gastar en pauta.

---

## Fase 2 — Sitio web profesional (semana 2-4) · NUESTRA PARTE

Ataca el Pilar 3 (confianza) y centraliza la captura de leads.

- [ ] Scaffold del proyecto (stack confirmado) en el repo
- [ ] Secciones: Hero + bio/credenciales, Propiedades, Sección vendedores, Sección compradores, Testimonios, Contacto
- [ ] Formulario "Análisis de Mercado Gratuito" conectado a Brevo
- [ ] Botón flotante de WhatsApp + correo oficial (lourdes@c21grupomormos.com)
- [ ] Píxel de Meta instalado (para retargeting posterior)
- [ ] SEO local ("asesor inmobiliario [zona]") + rendimiento
- [ ] Deploy en Cloudflare Pages

---

## Fase 3 — Contenido (continuo, arranca en semana 2)

Ataca el Problema A (alcance orgánico) con el público correcto.

- [ ] Definir/validar los perfiles ICP (`interno/01-perfil-audiencia-icp.md`)
- [ ] Calendario de contenido con los 5 pilares (`entregables-lourdes/03-calendario-contenido.md`)
- [ ] Priorizar video vertical (TikTok + Reels)
- [ ] Mínimo 3 publicaciones/semana consistentes

---

## Fase 4 — Publicidad pagada (mes 2 en adelante)

Se enciende SOLO cuando fases 1 y 2 estén listas (embudo sin fugas).

- [ ] Meta Business configurado + píxel verificado
- [ ] Campaña de leads con el imán "Análisis de Mercado" (target: vendedores)
- [ ] Campaña de mensajes segmentada por ICP y zona
- [ ] Presupuesto de prueba modesto ($100-200 MXN/día) → optimizar → escalar
- [ ] Retargeting a visitantes del sitio web

---

## Fase 5 — Optimización iterativa (permanente)

- [ ] Dashboard quincenal (`interno/02-metricas-kpis.md`)
- [ ] Diagnóstico de dónde se rompe el embudo
- [ ] Reasignar esfuerzo/presupuesto a los ICP y canales ganadores
- [ ] Actualizar documentos con aprendizajes

---

## Orden de prioridad recomendado

1. **Fase 1** (conversión) — impacto inmediato, costo cero.
2. **Fase 2** (sitio) — en paralelo, la construyo yo.
3. **Fase 3** (contenido) — alcance orgánico mientras tanto.
4. **Fase 4** (pauta) — escalar cuando el embudo ya convierte.
5. **Fase 5** (medir) — desde el día 1 y para siempre.
