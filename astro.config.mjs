// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.theaitheory.com',
  output: 'static',
  adapter: vercel(),
  integrations: [react(), keystatic()],
});
