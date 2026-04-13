# The AI Theory

Blog personal estatico sobre inteligencia artificial: fundamentos, �tica y debate. Construido con Astro 4, Keystatic CMS y desplegado en Vercel.

## Stack

- **Framework**: Astro 4
- **CMS**: Keystatic (interfaz visual para gestionar posts)
- **Contenido**: Markdown en `/src/content/posts/`
- **Deploy**: Vercel (SSR h�brido)

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor local en localhost:4321
npm run build        # Build de producci�n
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
2. Pulsa el bot�n **+ Create entry**.
3. Rellena los campos:
   - **T�tulo**: El t�tulo del post (se usar� tambi�n como slug URL).
   - **Fecha de publicaci�n**: Fecha en formato YYYY-MM-DD.
   - **Etiqueta**: Categor�a breve (ej: `Fundamentos`, `IA`, `�tica`).
   - **Resumen**: 1-2 frases que aparecer�n en el listado de la home.
   - **Publicado**: Activa este checkbox para que el post sea visible.
   - **Contenido**: El cuerpo del art�culo en Markdown.
4. Pulsa **Save** (o Ctrl+S).

El archivo `.md` se guarda autom�ticamente en `src/content/posts/`.

### Editar un post existente

1. En Keystatic, entra en **Posts**.
2. Haz clic en el post que quieras editar.
3. Modifica los campos y guarda.

### Publicar / despublicar

Activa o desactiva el checkbox **Publicado** en el editor de Keystatic. Los posts con `published: false` no aparecen en el listado ni son accesibles en producci�n.

## Estructura de directorios

```
src/
��� content/
�   ��� config.ts          � Schema de la colecci�n de posts
�   ��� posts/             � Archivos .md de cada post
��� layouts/
�   ��� BaseLayout.astro   � Layout base con design tokens y ViewTransitions
��� pages/
�   ��� index.astro        � Home: hero + listado de posts + contacto
�   ��� blog/
�   �   ��� [slug].astro   � Post individual
�   ��� keystatic/         � UI del CMS (auto-servida)
�   ��� api/keystatic/     � API del CMS
��� components/
    ��� Nav.astro
    ��� PostCard.astro
    ��� ContactSection.astro
    ��� ThemeToggle.astro
```

## Deploy en Vercel

1. Conecta el repositorio en [vercel.com](https://vercel.com).
2. Vercel detecta Astro autom�ticamente.
3. Las variables de entorno necesarias para Keystatic con GitHub storage se configuran en el panel de Vercel si se migra de `storage: local` a `storage: github`.

Para usar Keystatic con GitHub como backend en producci�n, actualiza `keystatic.config.ts`:

```ts
storage: {
  kind: 'github',
  repo: 'TU_USER/TU_REPO',
},
```

Y configura las variables de entorno `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET` y `KEYSTATIC_SECRET` en Vercel.
