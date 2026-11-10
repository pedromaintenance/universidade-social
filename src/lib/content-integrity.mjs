/**
 * Validação cruzada das coleções. É intencionalmente independente de Astro
 * para permitir testes negativos com fixtures sem publicar material fictício.
 *
 * Formato: { trilhas, aulas, recursos, avaliacoes } com entradas { id, data }.
 */
const slug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isPublished = (item) => item?.data?.status === 'publicado';

export function validateContentCollections(collections) {
  const errors = [];
  const names = ['trilhas', 'aulas', 'recursos', 'avaliacoes'];
  const maps = {};

  for (const name of names) {
    maps[name] = new Map();
    for (const entry of collections[name] ?? []) {
      if (!slug.test(entry.id)) errors.push(name + ': identificador inválido: ' + entry.id);
      if (maps[name].has(entry.id)) errors.push(name + ': identificador duplicado: ' + entry.id);
      maps[name].set(entry.id, entry);
    }
  }

  const exists = (collection, id, origin, requirePublished = false) => {
    const found = maps[collection].get(id);
    if (!found) {
      errors.push(origin + ': referência ausente em ' + collection + ': ' + id);
      return;
    }
    if (requirePublished && !isPublished(found)) {
      errors.push(origin + ': referência não publicada em ' + collection + ': ' + id);
    }
  };

  const checkUnique = (values, origin, kind) => {
    if (new Set(values).size !== values.length) {
      errors.push(origin + ': IDs duplicados em ' + kind);
    }
  };

  const lessonOrders = new Map();
  for (const item of collections.trilhas ?? []) {
    const origin = 'trilha ' + item.id;
    for (const id of item.data.prerequisiteTrackIds ?? []) {
      if (id === item.id) errors.push(origin + ': não pode ser pré-requisito de si mesma');
      exists('trilhas', id, origin, isPublished(item));
    }
    if (isPublished(item)) {
      const lessons = (collections.aulas ?? []).filter(a => a.data.trackId === item.id && isPublished(a));
      if (lessons.length === 0) errors.push(origin + ': trilha publicada não possui aulas publicadas');
    }
  }

  for (const item of collections.aulas ?? []) {
    const origin = 'aula ' + item.id;
    exists('trilhas', item.data.trackId, origin, isPublished(item));

    const key = item.data.trackId + ':' + item.data.order;
    if (lessonOrders.has(key)) {
      errors.push(origin + ': ordem duplicada na trilha: ' + key + ' (também em ' + lessonOrders.get(key) + ')');
    }
    lessonOrders.set(key, item.id);

    checkUnique(item.data.resourceIds ?? [], origin, 'resourceIds');
    checkUnique(item.data.assessmentIds ?? [], origin, 'assessmentIds');
    for (const id of item.data.resourceIds ?? []) {
      exists('recursos', id, origin, isPublished(item));
    }
    for (const id of item.data.assessmentIds ?? []) {
      exists('avaliacoes', id, origin, isPublished(item));
      const assessment = maps.avaliacoes.get(id);
      if (assessment && assessment.data.lessonId !== item.id) {
        errors.push(origin + ': avaliação ' + id + ' pertence à aula ' + assessment.data.lessonId);
      }
    }

    if (isPublished(item) && !(item.data.resourceIds ?? []).length) {
      errors.push(origin + ': aula publicada exige ao menos uma fonte rastreável');
    }
  }

  for (const item of collections.avaliacoes ?? []) {
    const origin = 'avaliação ' + item.id;
    exists('aulas', item.data.lessonId, origin, isPublished(item));
    const parent = maps.aulas.get(item.data.lessonId);
    if (parent && !(parent.data.assessmentIds ?? []).includes(item.id)) {
      errors.push(origin + ': precisa constar em assessmentIds da aula ' + item.data.lessonId);
    }
    checkUnique(item.data.referenceIds ?? [], origin, 'referenceIds');
    for (const id of item.data.referenceIds ?? []) {
      exists('recursos', id, origin, isPublished(item));
    }
    if (isPublished(item) && !(item.data.referenceIds ?? []).length) {
      errors.push(origin + ': avaliação publicada exige referências');
    }
    if (item.data.type === 'multipla-escolha') {
      const options = item.data.options ?? [];
      if (options.length < 3 || options.length > 5) {
        errors.push(origin + ': múltipla escolha exige entre 3 e 5 alternativas');
      }
      checkUnique(options.map(option => option.id), origin, 'options');
      if (options.filter(option => option.correct === true).length !== 1) {
        errors.push(origin + ': múltipla escolha exige uma alternativa correta');
      }
      if (options.some(option => !option.feedback || !option.feedback.trim())) {
        errors.push(origin + ': cada alternativa exige feedback explicativo');
      }
    } else if ((item.data.options ?? []).length > 0) {
      errors.push(origin + ': resposta aberta ou projeto não admite gabarito automático');
    }
  }

  for (const item of collections.recursos ?? []) {
    if (isPublished(item)) {
      try {
        const url = new URL(item.data.url);
        if (url.protocol !== 'https:') errors.push('recurso ' + item.id + ': URL deve usar HTTPS');
        if (['example.com', 'example.org', 'example.net', 'exemplo.org', 'localhost'].includes(url.hostname)) {
          errors.push('recurso ' + item.id + ': URL de exemplo não é publicável');
        }
      } catch {
        errors.push('recurso ' + item.id + ': URL inválida');
      }
    }
  }

  return errors;
}

export function assertContentCollections(collections) {
  const errors = validateContentCollections(collections);
  if (errors.length) {
    throw new Error('Integridade editorial inválida:\n- ' + errors.join('\n- '));
  }
  return collections;
}
