import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = 'dist';
const base = '/universidade-social/';
const origin = 'https://pedromaintenance.github.io';
const errors = [];
let checked = 0;
let checkedLinks = 0;
const toAbsolute = (file) => path.resolve(file);

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const file = path.join(dir, name);
    return statSync(file).isDirectory() ? walk(file) : [file];
  });
}
const pages = walk(root).filter((file) => file.endsWith('.html'));
const present = new Set(walk(root).map(toAbsolute));
if (!pages.length) errors.push('Nenhuma página HTML no build.');

// Rotas da hospedagem: /universidade-social/abc/ -> dist/abc/index.html.
function distTarget(pathname) {
  if (!pathname.startsWith(base)) return null;
  const raw = decodeURIComponent(pathname.slice(base.length));
  if (raw.includes('..') || raw.includes('\\')) return null;
  const rel = raw || 'index.html';
  const file = rel.endsWith('/') ? path.join(root, rel, 'index.html') : path.join(root, rel);
  // o caminho sem extensão normalmente aponta para a pasta do Astro
  return path.extname(file) ? toAbsolute(file) : toAbsolute(path.join(file, 'index.html'));
}

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  checked += 1;
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const set = new Set(ids);
  if (set.size !== ids.length) errors.push(file + ': IDs HTML duplicados');
  for (const label of ['lang="pt-BR"', '<main', 'id="conteudo"', '<h1', '<title', 'name="viewport"']) {
    if (!html.includes(label)) errors.push(file + ': marcação estrutural ausente: ' + label);
  }
  for (const match of html.matchAll(/\baria-labelledby="([^"]+)"/g)) {
    for (const id of match[1].split(/\s+/)) {
      if (!set.has(id)) errors.push(file + ': aria-labelledby aponta para ID inexistente: ' + id);
    }
  }
  const anchors = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)];
  const relativeRoute = path.relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '');
  const pageUrl = origin + base + relativeRoute;
  for (const match of anchors) {
    const href = match[1].replace(/&amp;/g, '&');
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('data:')) continue;
    if (href.startsWith('#')) {
      checkedLinks += 1;
      const hash = decodeURIComponent(href.slice(1));
      if (hash && !set.has(hash)) errors.push(file + ': âncora interna inexistente: ' + href);
      continue;
    }
    let url;
    try { url = new URL(href, pageUrl); }
    catch { errors.push(file + ': URL malformada: ' + href); continue; }
    if (url.origin !== origin) continue;
    checkedLinks += 1;
    if (!url.pathname.startsWith(base)) {
      errors.push(file + ': URL fora do prefixo Pages: ' + href);
      continue;
    }
    const target = distTarget(url.pathname);
    if (!target || !present.has(target)) {
      errors.push(file + ': link/asset local inexistente: ' + href);
      continue;
    }
    if (url.hash) {
      const fragment = decodeURIComponent(url.hash.slice(1));
      if (fragment) {
        const targetPage = target.endsWith('.html')
          ? readFileSync(target, 'utf8')
          : null;
        if (targetPage && ![...targetPage.matchAll(/\bid="([^"]+)"/g)].some((m) => m[1] === fragment)) {
          errors.push(file + ': destino de âncora inexistente: ' + href);
        }
      }
    }
  }
  for (const tag of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
    if (!/\brel="[^"]*\bnoopener\b/.test(tag[0])) {
      errors.push(file + ': link externo em nova aba sem rel=noopener');
    }
  }
}

// Testa o bloqueio editorial no build real. No runner de simulação o status
// foi transformado numa cópia descartável, sem commit e sem deploy.
for (const kind of ['trilhas', 'aulas']) {
  const folder = path.join('src', 'content', kind);
  if (!existsSync(folder)) continue;
  for (const name of readdirSync(folder).filter((name) => name.endsWith('.md'))) {
    const body = readFileSync(path.join(folder, name), 'utf8');
    if (!/^status: (rascunho|revisao|arquivado)$/m.test(body)) continue;
    const id = name.replace(/\.md$/, '');
    const dest = toAbsolute(path.join(root, kind, id, 'index.html'));
    if (present.has(dest)) errors.push('Vazamento: conteúdo não publicado ganhou rota pública: ' + dest);
  }
}

if (errors.length) {
  console.error('Auditoria de HTML gerado falhou:\n- ' + errors.join('\n- '));
  process.exitCode = 1;
} else {
  console.log('Auditoria estática aprovada: ' + checked + ' páginas HTML e ' +
    checkedLinks + ' links/arquivos locais; sem rotas de rascunhos.');
}
