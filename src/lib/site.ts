/** Caminhos internos devem respeitar o subdiretório do GitHub Pages. */
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export const siteName = 'Universidade Social';

export function sitePath(path = ''): string {
  const segment = path.replace(/^\/+|\/+$/g, '');
  return segment ? base + '/' + segment + '/' : base + '/';
}

export function assetPath(path: string): string {
  return base + '/' + path.replace(/^\/+/, '');
}

export const mainNavigation = [
  { label: 'Início', path: '' },
  { label: 'Trilhas', path: 'trilhas' },
  { label: 'Biblioteca', path: 'biblioteca' },
  { label: 'Método', path: 'metodo' },
  { label: 'Princípios', path: 'principios' },
  { label: 'Sobre', path: 'sobre' }
] as const;
