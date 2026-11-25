import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://frankstallone.net',
  integrations: [
    partytown(),
    sitemap(),
  ],
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@components/*': ['src/components/*'],
      '@assets/*': ['src/assets/*'],
    },
  },
});
