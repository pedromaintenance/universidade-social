import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const base = '/universidade-social/';
const pages = ['', 'principios', 'metodo', 'trilhas', 'biblioteca', 'sobre'];
const errors = [];

for (const route of pages) {
  const file = path.join(dist, route, 'index.html');
  if (!existsSync(file)) {
    errors.push('Página não gerada: ' + file);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  if (!html.includes('lang="pt-BR"')) {
    errors.push('Idioma incorreto: ' + file);
  }
  if (!html.includes('id="conteudo"')) {
    errors.push('Atalho de acessibilidade ausente: ' + file);
  }
  for (const match of html.matchAll(/\b(?:href|src)="(\/[^"]*)"/g)) {
    if (!match[1].startsWith(base)) {
      errors.push('Caminho absoluto fora do Pages (' + file + '): ' + match[1]);
    }
  }
}

const home = path.join(dist, 'index.html');
if (existsSync(home)) {
  const html = readFileSync(home, 'utf8');
  for (const key of ['Agitação', 'Educação', 'Propaganda', 'emancipação intelectual']) {
    if (!html.toLocaleLowerCase('pt-BR').includes(key.toLocaleLowerCase('pt-BR'))) {
      errors.push('Missão editorial incompleta na homepage: ' + key);
    }
  }
}

if (!existsSync(path.join(dist, 'mark.svg'))) {
  errors.push('Símbolo SVG não foi copiado para o build.');
}

if (errors.length > 0) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Páginas, caminhos do GitHub Pages, símbolos e marcação semântica verificados.');
}
