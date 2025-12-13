import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeffdonthemic-sfdc.github.io',
  base: '/agentforce-vibes',
  integrations: [mdx(), sitemap()],
});
