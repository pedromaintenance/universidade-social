import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const component = readFileSync('src/components/FormativeAssessment.astro', 'utf8');
const css = readFileSync('src/styles/global.css', 'utf8');
const base = readFileSync('src/layouts/BaseLayout.astro', 'utf8');

function luminance(hex) {
  const rgb = hex.match(/[a-f\d]{2}/gi).map((x) => parseInt(x, 16) / 255);
  const values = rgb.map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
}
function contrast(a, b) {
  const x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

test('texto principal e secundário apresentam contraste mínimo teórico de 4.5:1 na paleta', () => {
  for (const [foreground, background] of [
    ['#252720', '#f7f2e8'],
    ['#5c6059', '#f7f2e8'],
    ['#8c302e', '#f7f2e8'],
    ['#e9b970', '#252720']
  ]) {
    assert.ok(contrast(foreground, background) >= 4.5,
      'Contraste insuficiente na amostra: ' + foreground + ' / ' + background);
  }
});

test('controles dependentes de script não aparecem sem JavaScript', () => {
  assert.ok(component.includes('data-formative-check class="button primary" hidden'));
  assert.ok(component.includes('data-formative-retry class="button" hidden'));
  assert.ok(component.includes('check.hidden = false'));
  assert.ok(component.includes('retry.hidden = false'));
  assert.ok(css.includes('[hidden] { display: none !important; }'));
});

test('live region está sempre na árvore e anuncia justificativa e revisão da escolha', () => {
  assert.ok(component.includes('data-formative-announcement class="sr-only" role="status"'));
  assert.ok(component.includes('aria-live="polite"'));
  assert.ok(component.includes('aria-atomic="true"'));
  assert.ok(component.includes('announcement.textContent'));
  assert.ok(component.includes("explanation?.textContent"));
  assert.ok(!component.includes('data-formative-result hidden role="status"'));
});

test('portal inclui idioma, atalho e redução de movimento', () => {
  for (const marker of ['lang="pt-BR"', 'class="skip-link"', 'href="#conteudo"', 'id="conteudo"']) {
    assert.ok(base.includes(marker), marker);
  }
  assert.ok(css.includes('@media (prefers-reduced-motion: reduce)'));
  assert.ok(css.includes('overflow-wrap: anywhere'));
});
