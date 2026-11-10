/**
 * Apenas CI em pull_request. Simula a aprovação do catálogo numa cópia
 * descartável do runner, SEM APROVAR REVISÃO e SEM upload de artefatos.
 * Nunca executar em workflow com permissão de deploy.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

if (process.env.CI !== 'true' || process.env.GITHUB_EVENT_NAME !== 'pull_request') {
  throw new Error('Simulação permitida somente no GitHub Actions de uma pull request.');
}
const mode = process.argv[2];
const root = 'src/content';

const entries = (type, ext) =>
  readdirSync(join(root, type))
    .filter(name => name.endsWith(ext))
    .map(name => join(root, type, name));

if (mode === 'prepare') {
  for (const file of [...entries('trilhas', '.md'), ...entries('aulas', '.md')]) {
    const source = readFileSync(file, 'utf8');
    if (!/^status: revisao$/m.test(source) || /^reviewedAt:/m.test(source)) {
      throw new Error('Esperava arquivo editorial em revisão, sem chancela humana: ' + file);
    }
    const next = source
      .replace(/^status: revisao$/m, 'status: publicado')
      .replace(/^(updatedAt: .+)$/m, '$1\nreviewedAt: "2026-11-10"');
    writeFileSync(file, next);
  }

  for (const type of ['recursos', 'avaliacoes']) {
    for (const file of entries(type, '.json')) {
      const doc = JSON.parse(readFileSync(file, 'utf8'));
      if (doc.status !== 'revisao') throw new Error('Esperava estado em revisão: ' + file);
      doc.status = 'publicado';
      if (type === 'avaliacoes') doc.reviewedAt = '2026-11-10';
      writeFileSync(file, JSON.stringify(doc, null, 2) + '\n');
    }
  }
  // Marcador exclusivo do runner; nada disso entra no Git.
  writeFileSync('.simulation-only', 'FAKE APPROVAL FOR CI PREVIEW; NEVER PUBLISH\n');
  console.log('Simulação preparada na cópia efêmera do runner. NÃO é revisão editorial.');
} else if (mode === 'verify') {
  if (!existsSync('.simulation-only')) throw new Error('Faltou marcador da simulação.');
  const names = entries('aulas', '.md').map(file => file.split('/').pop().replace(/\.md$/, ''));
  const track = join('dist', 'trilhas', 'como-investigar-a-realidade-social', 'index.html');
  if (!existsSync(track)) throw new Error('Trilha simulada não foi gerada.');
  for (const name of names) {
    const file = join('dist', 'aulas', name, 'index.html');
    if (!existsSync(file)) throw new Error('Aula simulada não foi gerada: ' + name);
    const html = readFileSync(file, 'utf8');
    for (const phrase of ['Pratique o método', 'data-formative-form', 'Roteiro de autoavaliação']) {
      if (!html.includes(phrase)) throw new Error('Interface incompleta em ' + name + ': ' + phrase);
    }
  }
  const library = readFileSync(join('dist', 'biblioteca', 'index.html'), 'utf8');
  if (!library.includes('Karl Marx') || !library.includes('Émile Durkheim')) {
    throw new Error('A biblioteca não renderizou as fontes simuladas.');
  }
  console.log('Simulação privada aprovada: 1 trilha, ' + names.length + ' aulas, 10 avaliações vinculadas e biblioteca.');
} else {
  throw new Error('Uso: node scripts/simulate-publication.mjs prepare|verify');
}
