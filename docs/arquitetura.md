# Arquitetura do produto — plano inicial

## Objetivo de P0

Um **portal público principal**, navegável, legível, responsivo, indexável e utilizável sem conta, que explica a proposta e permite encontrar caminhos de estudo. A arquitetura deve preparar, mas não fingir que já existem, cursos, provas, canais e laboratórios.

## Decisão de referência

**Astro + TypeScript + Markdown/JSON versionados + CSS com mínimo de JavaScript + hospedagem estática via GitHub Pages.** Detalhes e alternativas em [ADR-0001](adr/0001-portal-estatico.md).

Astro é uma preferência arquitetural para a primeira implementação, não um sistema já instalado. Caso uma limitação concreta apareça, abrir outra ADR antes de migrar.

## Componentes futuros

- **Shell:** layout, menu, busca/filtro progressivos, rodapé, páginas institucionais, contraste, navegação por teclado.
- **Catálogo:** cursos/trilhas, aulas, recursos externos e projetos descritos por metadados estruturados.
- **Leitor de aula:** Markdown com glossário, notas de método, fontes e atividades.
- **Avaliações:** simulados estáticos no cliente e rubricas de projetos; sem enviar resposta a servidor.
- **Laboratório:** ferramentas didáticas com dados públicos verificáveis e explicação do método.
- **Persistência opcional:** progresso local no navegador, com exportação/importação JSON e opção de apagar.
- **Governança:** PRs, registros de fontes, testes e revisão humana.

## Limites técnicos de P0

Sem backend, conta, banco de dados, coleta analítica, gamificação, plataforma de vídeo proprietária, fóruns, envio de trabalhos ou respostas guardadas em servidor. Links de YouTube e outros serviços podem existir futuramente como **hiperlinks externos**, preferencialmente sem embeds com rastreamento por padrão.

## Público e acessibilidade

- Priorizar 360 px de largura, conexão limitada e dispositivos modestos.
- HTML semântico, WCAG 2.2 AA como alvo, teclado, foco visível, contraste e leitura por leitores de tela.
- Respeitar preferências de movimento; oferecer alternativa textual a tabelas/gráficos complexos.
- Proteger navegação de links quebrados e rotular claramente o que é externo.
- Meta inicial de desempenho: Lighthouse performance e accessibility >= 90 em cenário móvel de teste; não tratar como garantia de experiência real.
- Controlar tamanho de JS e imagens; não impor vídeo para realizar uma aula.

## Deployment e URLs

Planejar GitHub Pages em caminho de projeto: /universidade-social/. Ajustar base de roteamento e links internos ao subdiretório; nunca afirmar que o Pages está habilitado sem verificar. Publicação de P0 exige pipeline de build e verificação do artefato.

## Modelo editorial e validação

Cada recurso contém metadados de origem, data, tema, perspectiva e licença. Cursos, aulas e avaliações terão identificadores estáveis e relações por ID. Validar metadados no build, títulos, links internos e integridade referencial.

## Organização futura proposta

~~~text
src/
  components/
  layouts/
  pages/
  content/
    trilhas/
    aulas/
    recursos/
    avaliacoes/
    projetos/
  styles/
public/
tests/
docs/
.github/
~~~

A árvore acima é **proposta**, não implementação existente.

## Riscos e mitigação

- **Captura ideológica:** hipóteses, evidências, contraditório e auditoria explícitos.
- **Dependência de links externos:** checagem periódica e recursos alternativos.
- **Licenças:** preferir metadados/links até existir autorização de redistribuição.
- **Escopo excessivo:** publicar P0 básico, provar a experiência com uma trilha piloto, só então ampliar.
- **Privacidade:** sem backend ou analytics no início; dados de progresso exclusivamente locais quando implementados.
