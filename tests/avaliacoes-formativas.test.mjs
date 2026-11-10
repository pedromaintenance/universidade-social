import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = 'src/content';
const assessmentDir = join(root, 'avaliacoes');
const files = readdirSync(assessmentDir).filter(name => name.endsWith('.json'));
const items = files.map(name => ({
  id: name.replace(/\.json$/, ''),
  data: JSON.parse(readFileSync(join(assessmentDir, name), 'utf8'))
}));

test('dez atividades em revisão, duas por aula, sem aprovação editorial inventada', () => {
  assert.equal(items.length, 10);
  const counts = new Map();
  for (const { id, data } of items) {
    assert.equal(data.status, 'revisao', id);
    assert.equal(data.reviewedAt, undefined, id);
    assert.ok(data.author.includes('assistido por IA'), id);
    assert.ok(data.prompt.length > 40, id);
    assert.ok(data.referenceIds.length > 0, id);
    assert.ok(data.rubric.length >= 2, id);
    assert.ok(data.feedback.length >= 15, id);
    counts.set(data.lessonId, (counts.get(data.lessonId) ?? 0) + 1);
  }
  assert.equal(counts.size, 5);
  for (const count of counts.values()) assert.equal(count, 2);
});

test('múltipla escolha tem gabarito único e devolutiva de TODAS as alternativas', () => {
  const choices = items.filter(item => item.data.type === 'multipla-escolha');
  assert.equal(choices.length, 5);
  for (const { id, data } of choices) {
    assert.ok(data.options.length >= 3 && data.options.length <= 5, id);
    assert.equal(data.options.filter(o => o.correct).length, 1, id);
    assert.equal(new Set(data.options.map(o => o.id)).size, data.options.length, id);
    for (const option of data.options) {
      assert.ok(option.text.length >= 12, id);
      assert.ok(option.feedback.length >= 20, id);
    }
  }
});

test('respostas abertas ou projeto não têm correção automática de posições políticas', () => {
  const open = items.filter(item => item.data.type !== 'multipla-escolha');
  assert.equal(open.length, 5);
  for (const { id, data } of open) {
    assert.ok(!data.options || data.options.length === 0, id);
    assert.ok(data.rubric.some(x => /fonte|evidênc|hipótese|relação|document|método|objeto|interpreta|registro|produção/.test(x.toLowerCase())), id);
  }
});

test('exercício com Durkheim e Marx exige dois usos teóricos diferentes', () => {
  const assessment = items.find(item => item.id === 'a1-duas-ferramentas');
  assert.ok(assessment);
  assert.ok(/Durkheim/.test(assessment.data.prompt));
  assert.ok(/Marx/.test(assessment.data.prompt));
  assert.ok(assessment.data.referenceIds.includes('durkheim-regras-observacao'));
  assert.ok(assessment.data.referenceIds.includes('marx-capital-iii-aparencia'));
});

test('componente mantém interface acessível e nenhuma transferência de respostas', () => {
  const file = readFileSync('src/components/FormativeAssessment.astro', 'utf8');
  for (const marker of ['<fieldset', '<legend', 'type="radio"', 'aria-live="polite"', 'data-formative-retry', '<details', '<textarea']) {
    assert.ok(file.includes(marker), 'marcação ausente: ' + marker);
  }
  assert.ok(!file.includes('<form'));
  assert.ok(!file.includes('type="submit"'));
  assert.ok(file.includes('data-formative-check'));
  assert.ok(!file.includes('localStorage'));
  assert.ok(!file.includes('fetch('));
  assert.ok(!file.includes('navigator.sendBeacon'));
});
