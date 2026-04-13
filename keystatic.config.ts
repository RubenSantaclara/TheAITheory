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
        title:     fields.slug({ name: { label: 'Titulo' } }),
        date:      fields.date({ label: 'Fecha de publicaci�n' }),
        tag:       fields.text({ label: 'Etiqueta (ej: Fundamentos, IA, �tica)' }),
        excerpt:   fields.text({ label: 'Resumen para el listado', multiline: true }),
        published: fields.checkbox({ label: 'Publicado', defaultValue: false }),
        content:   fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});
