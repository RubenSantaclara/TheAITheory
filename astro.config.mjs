// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  integrations: [react(), keystatic()],
});
