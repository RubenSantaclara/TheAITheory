# Guía SEO para escribir artículos en The AI Theory

Checklist práctica para publicar un post optimizado sin perder naturalidad editorial. El objetivo no es "optimizar para Google" sino escribir de forma que buscadores y lectores se refuercen entre sí.

---

## 1. Frontmatter (campos del post)

Todos los posts en `src/content/posts/*.md` declaran metadatos en el bloque YAML superior. Cuídalos: son la base de SEO, RSS, Open Graph y JSON-LD.

### Campos obligatorios

| Campo | Recomendación |
|---|---|
| `title` | 50–60 caracteres. Frontal, específico, idealmente con la keyword principal al inicio. Evita clickbait. |
| `date` | Formato ISO `YYYY-MM-DD`. No lo retoques para "refrescar" — usa `updated` en su lugar. |
| `tag` | Una sola etiqueta principal: `Seguridad`, `Fundamentos`, `IA`, `Ética`, etc. Consistencia > variedad. |
| `excerpt` | 120–160 caracteres. Es la meta description que aparece en Google y al compartir. Debe responder a "¿por qué debería leer esto?". No lo uses para repetir el título. |
| `published` | `true` solo cuando esté listo. Un `false` lo excluye de la home, sitemap y RSS automáticamente. |

### Campos opcionales pero recomendables

| Campo | Cuándo usarlo |
|---|---|
| `updated` | Cada vez que modificas contenido sustancial (no solo typos). Señala frescura a Google sin falsificar la fecha original. |
| `image` | Ruta absoluta (`/og-posts/slug.png`) a una imagen social 1200×630. Si no la pones, se usa `og-default.png`. |
| `imageAlt` | Texto alternativo descriptivo (no el título). Ej: "Diagrama del proceso de RLHF con tres etapas". |
| `keywords` | 4–8 términos. Influyen poco en ranking moderno pero alimentan `article:tag` y JSON-LD. Úsalos como brújula, no como relleno. |
| `author` | Por defecto "The AI Theory". Cámbialo si firmas con tu nombre real o si hay colaboración. |
| `canonical` | Solo si republicas en otro dominio y quieres mantener la atribución en el original. |
| `noindex` | `true` para borradores accesibles por URL directa, posts obsoletos o páginas internas. |

### Ejemplo completo

```yaml
---
title: Por qué el RLHF no resuelve la alineación
date: '2026-04-20'
updated: '2026-05-03'
tag: Seguridad
excerpt: El aprendizaje por refuerzo con feedback humano mitiga síntomas de desalineación, pero no aborda el problema de fondo. Aquí el porqué.
author: The AI Theory
image: /og-posts/rlhf-alineacion.png
imageAlt: Ilustración de un modelo RLHF con señales de recompensa divergentes
keywords:
  - RLHF
  - alineación
  - seguridad en IA
  - aprendizaje por refuerzo
  - AI safety
  - feedback humano
published: true
---
```

---

## 2. Título

- **Entre 50 y 60 caracteres**. Google trunca hacia los 60; Twitter recorta más agresivo.
- **Sujeto concreto en las primeras palabras**. Los buscadores ponderan más el inicio.
- **Una idea, no dos**. Títulos con "y" (X y Y) suelen diluir la keyword.
- **Sin clickbait** ("Esto cambiará tu forma de ver la IA"). Penaliza CTR largo plazo.
- **Mejor declarativo que interrogativo**, salvo que la pregunta sea el tema real.

**Bien**: "Por qué el RLHF no resuelve la alineación"
**Mal**: "¿Alineación de IA? Todo lo que necesitas saber sobre RLHF y el futuro de la seguridad"

---

## 3. Excerpt / meta description

- **120–160 caracteres**. Menos de 120 desaprovecha espacio; más de 160 se corta.
- **Respondes a una pregunta implícita**: ¿qué aprende el lector si entra?
- **Incluye la keyword principal** una vez, de forma natural.
- **No repitas el título** literalmente.
- **Verbo en presente o futuro**, no condicional ("aquí veremos" > "podríamos ver").

---

## 4. Estructura del contenido

### Primer párrafo

- **Primeros 100–150 palabras cuentan doble**. Google lee aquí el tema.
- **Menciona el término principal de forma natural** en la primera o segunda frase.
- **Promete el valor del artículo**, no lo escondas tras contexto histórico.

### Jerarquía de encabezados

El `<h1>` ya está reservado para el título del post (lo genera el layout). Tu markdown debe usar **solo `##` y `###`**.

```markdown
## Sección principal      ← h2
### Subsección            ← h3
```

- **Nunca saltes niveles** (de h2 a h4).
- **Un h2 cada 200–400 palabras** en posts largos. En ensayos cortos (<800), a veces no hacen falta.
- **Usa los h2/h3 como tesis**, no como etiquetas vacías ("Introducción", "Conclusión" son débiles).

### Longitud

No hay mínimo mágico. Pero:
- **< 300 palabras**: Google puede considerarlo "thin content".
- **600–1.500 palabras**: sweet spot para ensayo denso.
- **> 2.000 palabras**: úsalo solo si el tema lo pide; más por más no suma.

---

## 5. Keywords y lenguaje

- **Una keyword principal por artículo**, más 2–4 secundarias.
- **Densidad natural**: no fuerces repeticiones. Si el texto fluye, la densidad ya es la correcta.
- **Sinónimos y variantes semánticas**: "LLM", "modelo de lenguaje", "sistema generativo" enriquecen el campo semántico y ayudan más que repetir la misma frase.
- **Tecnicismos sí, jergas nicho no**. Si usas un término raro, defínelo la primera vez.
- **Primera persona del plural ("pensemos", "observamos")** crea tono ensayístico y mejora engagement, señal indirecta de SEO.

---

## 6. Enlaces

### Internos (a otros posts del blog)

- **Prioridad alta**. Google los usa para mapear temas y transferir autoridad.
- **Enlaza con texto descriptivo**, no con "aquí" o "este post".
- **Anchor text con la keyword del post destino**: `[capacidades emergentes](/blog/la-ilusion-de-la-emergencia/)`.
- **2–5 enlaces internos por artículo** en posts de densidad normal.

### Externos

- **A fuentes primarias**: papers (arXiv, ACM), repos, sitios institucionales.
- **Evita blogs de baja autoridad** o contenido SEO reciclado.
- **No uses `nofollow`** en citas legítimas — penaliza tu propia credibilidad.
- **Abre en nueva pestaña solo si es descarga/PDF**. Para lectura, respeta el flujo.

---

## 7. Imágenes

- **Formato**: WebP o AVIF para fotos, SVG para diagramas, PNG solo si necesitas transparencia sin degradación.
- **Peso**: < 200 KB idealmente, < 500 KB como máximo.
- **Dimensiones reales ≈ dimensiones mostradas**. No subas 4000px para mostrar a 800px.
- **Nombre del archivo descriptivo**: `rlhf-diagrama.png`, no `image1.png`.
- **Alt text obligatorio y útil**: describe la imagen, no la decores ("Diagrama de..."). Si es puramente decorativa, `alt=""` (vacío, no omitido).
- **Caption opcional** bajo la imagen si aporta contexto. Buenos lectores la leen antes que el cuerpo.

En markdown estándar:

```markdown
![Diagrama del proceso de RLHF con tres etapas diferenciadas](/imagenes/rlhf.png)
```

---

## 8. Legibilidad

Google mide señales indirectas (tiempo en página, scroll, rebote). Escribir para humanos optimiza también para máquinas.

- **Frases cortas predominantes**. Máximo 25–30 palabras por frase de media.
- **Párrafos de 2–5 frases**. En web, bloques largos espantan.
- **Voz activa > pasiva** (salvo cuando el foco es el objeto).
- **Evita nominalizaciones**: "realizamos una evaluación" → "evaluamos".
- **Un `<blockquote>` bien puesto** para citas o ideas fuertes rompe el ritmo y mejora retención.
- **Lee en voz alta el primer y último párrafo**. Si tropiezas, reescribe.

---

## 9. URL (slug)

El slug sale del nombre del archivo markdown.

- **3–6 palabras**, separadas por guiones.
- **Sin tildes ni ñ** (Astro las normaliza pero mejor evitarlas en origen).
- **Sin palabras vacías** ("el", "la", "de") salvo que sean imprescindibles.
- **Refleja la idea, no copies el título**.

**Bien**: `rlhf-no-resuelve-alineacion.md`
**Mal**: `por-que-el-rlhf-no-resuelve-el-problema-de-la-alineacion-en-modelos-grandes.md`

Una vez publicado, **no cambies el slug**. Si tienes que hacerlo, configura redirect 301.

---

## 10. Actualización de contenido

Los posts viejos que siguen recibiendo tráfico merecen mantenimiento. Es la forma más barata de ganar ranking.

- **Revisa cada 6–12 meses** los posts con mejor tráfico.
- **Actualiza datos obsoletos**, añade referencias nuevas, elimina enlaces muertos.
- **Pon `updated:` en el frontmatter** — Google lo detecta vía `dateModified` en el JSON-LD.
- **Si reescribes sustancialmente**, la URL se mantiene pero el contenido mejora; es la estrategia de mayor ROI.

---

## 11. Antes de publicar — checklist rápida

- [ ] Título entre 50–60 caracteres con keyword al inicio.
- [ ] Excerpt entre 120–160 caracteres, no duplica el título.
- [ ] Primer párrafo menciona el tema de forma natural en las primeras frases.
- [ ] Jerarquía `h2`/`h3` limpia, sin saltos.
- [ ] 2–5 enlaces internos con anchor descriptivo.
- [ ] 1–3 enlaces externos a fuentes de autoridad.
- [ ] Imágenes con alt descriptivo y peso razonable.
- [ ] `keywords` rellenadas (4–8 términos).
- [ ] `image` / `imageAlt` si toca imagen propia para redes.
- [ ] Slug limpio y descriptivo.
- [ ] `published: true` solo al final.

---

## 12. Qué NO hacer

- **Relleno de keywords** ("IA, inteligencia artificial, AI, modelo de IA..."). Penalización directa.
- **Títulos sensacionalistas** desconectados del contenido. Perjudican dwell time.
- **Contenido duplicado** entre posts. Si dos artículos compiten por la misma keyword, canibalizas tu propio ranking — fusiónalos.
- **Publicar sin excerpt** ni sin `keywords`. Pierdes control sobre cómo te presenta Google.
- **Cambiar URLs** de posts ya indexados sin redirect.
- **Abusar de negritas**. Si todo resalta, nada resalta.
- **Escribir pensando primero en Google**. Escribe para un lector inteligente; el SEO viene después.

---

## Recursos de verificación

- **Previsualizar cómo se comparte**: [opengraph.xyz](https://www.opengraph.xyz/)
- **Validar JSON-LD**: [Rich Results Test](https://search.google.com/test/rich-results)
- **Validar sitemap**: visita `https://www.theaitheory.com/sitemap-index.xml`
- **Google Search Console**: fuente de verdad para indexación, clicks e impresiones.
- **Longitud de meta tags**: [mangools.com/serp-simulator](https://mangools.com/free-seo-tools/serp-simulator/)
