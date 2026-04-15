# The AI Theory

Blog personal estático sobre inteligencia artificial: fundamentos, ética y debate. Construido con Astro, Keystatic CMS y desplegado en Vercel, con analítica self-hosted sin cookies.

## Stack

### Web

- **Framework**: [Astro 4](https://astro.build) — SSG/SSR híbrido con View Transitions
- **CMS**: [Keystatic](https://keystatic.com) — interfaz visual para gestionar posts en Markdown
- **Contenido**: Markdown en `src/content/posts/`
- **Estilos**: CSS con design tokens y tema claro/oscuro
- **Tipografía**: Fraunces (serif) + Inter (sans) vía Google Fonts
- **Deploy**: [Vercel](https://vercel.com)

### Analítica (sin cookies, GDPR-compliant)

- **[Umami](https://umami.is)** — analítica self-hosted, sin cookies, sin banner de consentimiento
- **Hosting de Umami**: Vercel (subdominio `analytics.theaitheory.com`)
- **Base de datos**: [Neon](https://neon.tech) — Postgres serverless (free tier)
- **Integración**: script cargado solo en producción con `defer` desde `BaseLayout.astro`

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor local en localhost:4321
npm run build        # Build de producción
npm run preview      # Preview del build
```

## Gestionar posts con Keystatic

### Acceder al CMS

Con el servidor de desarrollo activo (`npm run dev`), visita:

```
http://localhost:4321/keystatic
```

### Crear un nuevo post

1. En el panel de Keystatic, haz clic en **Posts** en el sidebar izquierdo.
2. Pulsa el botón **+ Create entry**.
3. Rellena los campos:
   - **Título**: El título del post (se usará también como slug URL).
   - **Fecha de publicación**: Fecha en formato YYYY-MM-DD.
   - **Etiqueta**: Categoría breve (ej: `Fundamentos`, `IA`, `Ética`).
   - **Resumen**: 1-2 frases que aparecerán en el listado de la home.
   - **Publicado**: Activa este checkbox para que el post sea visible.
   - **Contenido**: El cuerpo del artículo en Markdown.
4. Pulsa **Save** (o Ctrl+S).

El archivo `.md` se guarda automáticamente en `src/content/posts/`.

### Editar un post existente

1. En Keystatic, entra en **Posts**.
2. Haz clic en el post que quieras editar.
3. Modifica los campos y guarda.

### Publicar / despublicar

Activa o desactiva el checkbox **Publicado** en el editor de Keystatic. Los posts con `published: false` no aparecen en el listado ni son accesibles en producción.

## Estructura de directorios

```
src/
├── content/
│   ├── config.ts          → Schema de la colección de posts
│   └── posts/             → Archivos .md de cada post
├── layouts/
│   └── BaseLayout.astro   → Layout base con design tokens, ViewTransitions y script de Umami
├── pages/
│   ├── index.astro        → Home: hero + listado de posts + contacto
│   ├── blog/
│   │   └── [slug].astro   → Post individual
│   ├── keystatic/         → UI del CMS (auto-servida)
│   └── api/keystatic/     → API del CMS
└── components/
    ├── Nav.astro
    ├── PostCard.astro
    ├── ContactSection.astro
    └── ThemeToggle.astro
```


### Arquitectura

```
theaitheory.com  ──script──▶  analytics.theaitheory.com  ──▶  Neon Postgres
   (Astro)                          (Umami en Vercel)         (free tier)
```
