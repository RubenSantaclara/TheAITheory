import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        date: fields.date({ label: 'Fecha de publicación' }),
        updated: fields.date({
          label: 'Fecha de actualización (opcional)',
          description: 'Rellena si modificas el contenido; mejora la frescura para SEO.',
        }),
        tag: fields.text({
          label: 'Etiqueta principal',
          description: 'Ej: Fundamentos, IA, Ética, Seguridad.',
        }),
        excerpt: fields.text({
          label: 'Resumen (meta description)',
          description: 'Entre 120 y 160 caracteres para óptima previsualización en buscadores.',
          multiline: true,
        }),
        author: fields.text({
          label: 'Autor',
          defaultValue: 'The AI Theory',
        }),
        image: fields.text({
          label: 'Imagen social (Open Graph)',
          description: 'Ruta absoluta o URL (1200x630 recomendado).',
        }),
        imageAlt: fields.text({
          label: 'Texto alternativo de la imagen',
        }),
        keywords: fields.array(fields.text({ label: 'Palabra clave' }), {
          label: 'Palabras clave',
          itemLabel: (p) => p.value,
        }),
        canonical: fields.url({
          label: 'URL canónica (opcional)',
          description: 'Úsala solo si el contenido se republica desde otro dominio.',
        }),
        noindex: fields.checkbox({
          label: 'No indexar en buscadores',
          defaultValue: false,
        }),
        published: fields.checkbox({ label: 'Publicado', defaultValue: false }),
        content: fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});
