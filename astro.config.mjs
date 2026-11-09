import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pedromaintenance.github.io',
  base: '/universidade-social',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
