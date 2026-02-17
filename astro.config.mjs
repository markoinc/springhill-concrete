import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://concretespringhill.com',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
