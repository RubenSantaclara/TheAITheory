// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.theaitheory.com',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    keystatic(),
    sitemap({
      filter: (page) => !page.includes('/keystatic'),
      changefreq: 'weekly',
      priority: 0.7,
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES' },
      },
    }),
  ],
});
