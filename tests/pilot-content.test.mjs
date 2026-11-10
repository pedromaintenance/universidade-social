import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = 'src/content';
const trackFile = join(root, 'trilhas', 'como-investigar-a-realidade-social.md');
const lessonDir = join(root, 'aulas');
const resourceDir = join(root, 'recursos');

const lessonFiles = readdirSync(lessonDir).filter((file) => file.endsWith('.md'));
const resourceFiles = readdirSync(resourceDir).filter((file) => file.endsWith('.json'));
const lessonTexts = lessonFiles.map((filename) => ({
  filename,
  text: readFileSync(join(lessonDir, filename), 'utf8')
}));
const resources = new Map(resourceFiles.map((filename) => [
  filename.replace(/\.json$/, ''),
  JSON.parse(readFileSync(join(resourceDir, filename), 'utf8'))
]));

function field(markdown, key) {
  const found = markdown.match(new RegExp('^' + key + ':\\s*(.+)$', 'm'));
  return found?.[1]?.trim();
}
function ids(markdown, key) {
  const raw = field(markdown, key);
  assert.ok(raw, 'Campo obrigatório ausente: ' + key);
  assert.match(raw, /^\[[^\]]*\]$/);
  return raw.slice(1, -1).split(',').map((value) => value.trim()).filter(Boolean);
}

test('a trilha e suas cinco aulas permanecem em revisão humana', () => {
  assert.ok(existsSync(trackFile));
  const track = readFileSync(trackFile, 'utf8');
  assert.equal(field(track, 'status'), 'revisao');
  assert.equal(lessonTexts.length, 5);
  for (const { filename, text } of lessonTexts) {
    assert.equal(field(text, 'status'), 'revisao', filename);
    assert.equal(field(text, 'trackId'), 'como-investigar-a-realidade-social');
    assert.ok(!field(text, 'reviewedAt'), 'Não inventar revisão em ' + filename);
    assert.ok(text.length > 1500, 'Aula curta demais: ' + filename);
  }
});

test('aulas estão na ordem de 1 a 5 sem duplicatas', () => {
  const orders = lessonTexts.map(({ text }) => Number(field(text, 'order'))).sort((a, b) => a - b);
  assert.deepEqual(orders, [1, 2, 3, 4, 5]);
});

test('cada aula cita fontes existentes na curadoria', () => {
  for (const { filename, text } of lessonTexts) {
    const references = ids(text, 'resourceIds');
    assert.ok(references.length >= 2, 'Fontes insuficientes: ' + filename);
    for (const id of references) {
      assert.ok(resources.has(id), 'Fonte ausente ' + id + ' em ' + filename);
    }
  }
});

test('oito fontes são HTTPS, têm metadados e ainda não são exibidas publicamente', () => {
  assert.equal(resources.size, 10);
  for (const [id, data] of resources) {
    assert.equal(data.status, 'revisao', id);
    assert.ok(data.url.startsWith('https://'), id);
    assert.equal(data.checkedAt, '2026-11-10', id);
    assert.equal(data.rights, 'link-apenas', id);
    assert.ok(data.perspective.length >= 5, id);
    assert.ok(data.relevance.length >= 20, id);
  }
});

test('Durkheim e Marx entram como textos originais e tradução autoral em revisão', () => {
  const first = readFileSync(join(lessonDir, 'da-experiencia-a-pergunta.md'), 'utf8');
  assert.ok(first.includes('Duas ferramentas para investigar o mundo'));
  assert.ok(first.includes('falsa familiaridade com o objeto social'));
  assert.ok(first.includes('essência a ser reconstruída historicamente'));
  assert.ok(first.includes('La première règle et la plus fondamentale'));
  assert.ok(first.includes('alle Wissenschaft wäre überflüssig'));
  assert.ok(ids(first, 'resourceIds').includes('durkheim-regras-observacao'));
  assert.ok(ids(first, 'resourceIds').includes('marx-capital-iii-aparencia'));
  assert.ok(existsSync('docs/traducoes-autorais/durkheim-marx-investigacao.md'));
});

test('aulas não anunciam avaliações interativas inexistentes', () => {
  for (const { filename, text } of lessonTexts) {
    assert.deepEqual(ids(text, 'assessmentIds'), [], filename);
  }
});
