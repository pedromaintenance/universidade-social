/**
 * Contrato mínimo provisório para P0. O conteúdo real e sua validação
 * por schema serão implementados na issue #4 (P0.3).
 * Não cadastrar conteúdos demonstrativos como publicados.
 */
export type EditorialStatus = 'rascunho' | 'revisao' | 'publicado' | 'arquivado';

export interface StudyTrack {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: 'introdutorio' | 'intermediario' | 'avancado';
  status: EditorialStatus;
}

export interface ExternalResource {
  id: string;
  title: string;
  url: string;
  type: 'livro' | 'artigo' | 'video' | 'canal' | 'documento' | 'dados';
  status: EditorialStatus;
  checkedAt: string;
}

export const tracks: readonly StudyTrack[] = [];
export const resources: readonly ExternalResource[] = [];

export const publishedTracks = tracks.filter((item) => item.status === 'publicado');
export const publishedResources = resources.filter((item) => item.status === 'publicado');
