import { existsSync, readFileSync } from 'node:fs';

const required = [
  'astro.config.mjs',
  'src/layouts/BaseLayout.astro',
  'src/lib/site.ts',
  'src/lib/catalog.ts',
  'src/lib/content-integrity.mjs',
  'src/content.config.ts',
  'src/pages/trilhas/[slug].astro',
  'src/pages/aulas/[slug].astro',
  'tests/content-integrity.test.mjs',
  'src/components/FormativeAssessment.astro',
  'scripts/audit-dist.mjs',
  'src/pages/index.astro',
  'src/pages/principios.astro',
  'src/pages/metodo.astro',
  'src/pages/trilhas.astro',
  'src/pages/biblioteca.astro',
  'src/pages/sobre.astro',
  'public/mark.svg'
];

const issues = [];
for (const path of required) {
  if (!existsSync(path)) issues.push('Arquivo obrigatório ausente: ' + path);
}

if (existsSync('astro.config.mjs')) {
  const config = readFileSync('astro.config.mjs', 'utf8');
  if (!config.includes("base: '/universidade-social'")) {
    issues.push('O Astro precisa configurar base: /universidade-social');
  }
  if (!config.includes("output: 'static'")) {
    issues.push('O portal P0 deve continuar estático');
  }
}
if (existsSync('src/lib/catalog.ts')) {
  const catalog = readFileSync('src/lib/catalog.ts', 'utf8');
  if (!catalog.includes("status === 'publicado'")) {
    issues.push('O catálogo precisa filtrar recursos publicados');
  }
}

if (issues.length) {
  console.error(issues.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Estrutura e configuração inicial verificadas.');
}
