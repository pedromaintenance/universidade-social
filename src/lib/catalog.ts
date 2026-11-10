import { getCollection } from 'astro:content';
import { assertContentCollections } from './content-integrity.mjs';

export type EditorialStatus = 'rascunho' | 'revisao' | 'publicado' | 'arquivado';

/**
 * Carrega as coleções e verifica relações entre arquivos antes de expor rotas.
 * Conteúdo rascunho/revisão/arquivado nunca recebe uma rota pública.
 */
export async function loadCatalog() {
  const [trilhas, aulas, recursos, avaliacoes] = await Promise.all([
    getCollection('trilhas'),
    getCollection('aulas'),
    getCollection('recursos'),
    getCollection('avaliacoes')
  ]);

  assertContentCollections({ trilhas, aulas, recursos, avaliacoes });

  const onlyPublished = <T extends { data: { status: EditorialStatus } }>(entries: T[]) =>
    entries.filter((entry) => entry.data.status === 'publicado');

  return {
    trilhas: onlyPublished(trilhas).sort((a, b) => a.data.title.localeCompare(b.data.title, 'pt-BR')),
    aulas: onlyPublished(aulas).sort((a, b) =>
      a.data.trackId.localeCompare(b.data.trackId) || a.data.order - b.data.order
    ),
    recursos: onlyPublished(recursos).sort((a, b) => a.data.title.localeCompare(b.data.title, 'pt-BR')),
    avaliacoes: onlyPublished(avaliacoes)
  };
}

export type PublicCatalog = Awaited<ReturnType<typeof loadCatalog>>;
