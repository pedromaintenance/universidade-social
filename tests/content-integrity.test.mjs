import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContentCollections, assertContentCollections } from '../src/lib/content-integrity.mjs';

const entry = (id, data) => ({ id, data });
function fixture() {
  return {
    trilhas: [entry('investigar-realidade', {
      status: 'publicado', prerequisiteTrackIds: []
    })],
    aulas: [entry('comecar-pelas-fontes', {
      status: 'publicado', trackId: 'investigar-realidade', order: 1,
      resourceIds: ['fonte-documentada'], assessmentIds: []
    })],
    recursos: [entry('fonte-documentada', {
      status: 'publicado', url: 'https://www.gov.br/portal'
    })],
    avaliacoes: []
  };
}

test('aceita referências completas e publicadas', () => {
  assert.deepEqual(validateContentCollections(fixture()), []);
  assert.doesNotThrow(() => assertContentCollections(fixture()));
});
test('detecta IDs duplicados', () => {
  const data = fixture();
  data.recursos.push(entry('fonte-documentada', { status: 'rascunho' }));
  assert.match(validateContentCollections(data).join(' '), /duplicado/);
});
test('rejeita IDs inválidos para formar rotas', () => {
  const data = fixture();
  data.trilhas[0].id = 'Inseguro/../';
  assert.match(validateContentCollections(data).join(' '), /identificador inválido/);
});
test('rejeita referências inexistentes mesmo no rascunho', () => {
  const data = fixture();
  data.aulas[0].data.resourceIds = ['inexistente'];
  assert.match(validateContentCollections(data).join(' '), /referência ausente/);
});
test('rejeita aula publicada vinculada a trilha não publicada', () => {
  const data = fixture();
  data.trilhas[0].data.status = 'rascunho';
  assert.match(validateContentCollections(data).join(' '), /referência não publicada/);
});
test('rejeita fonte em revisão usada por aula publicada', () => {
  const data = fixture();
  data.recursos[0].data.status = 'revisao';
  assert.match(validateContentCollections(data).join(' '), /referência não publicada/);
});
test('rejeita trilha publicada sem aula publicada', () => {
  const data = fixture();
  data.aulas[0].data.status = 'rascunho';
  assert.match(validateContentCollections(data).join(' '), /não possui aulas publicadas/);
});
test('rejeita ordem duplicada das aulas na mesma trilha', () => {
  const data = fixture();
  data.aulas.push(entry('segunda-aula', {
    status: 'rascunho', trackId: 'investigar-realidade',
    order: 1, resourceIds: [], assessmentIds: []
  }));
  assert.match(validateContentCollections(data).join(' '), /ordem duplicada/);
});
test('rejeita URL externa fictícia em recurso publicado', () => {
  const data = fixture();
  data.recursos[0].data.url = 'https://example.org/manual';
  assert.match(validateContentCollections(data).join(' '), /URL de exemplo/);
});
test('rejeita aula publicada sem referências', () => {
  const data = fixture();
  data.aulas[0].data.resourceIds = [];
  assert.match(validateContentCollections(data).join(' '), /ao menos uma fonte/);
});
test('valida avaliações publicadas e seus vínculos', () => {
  const data = fixture();
  data.avaliacoes.push(entry('avaliacao-um', {
    status: 'publicado', lessonId: 'comecar-pelas-fontes', referenceIds: ['fonte-documentada']
  }));
  data.aulas[0].data.assessmentIds = ['avaliacao-um'];
  assert.deepEqual(validateContentCollections(data), []);
  data.avaliacoes[0].data.referenceIds = ['inexistente'];
  assert.match(validateContentCollections(data).join(' '), /referência ausente/);
});
