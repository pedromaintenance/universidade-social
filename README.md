# Universidade Social

**Agitação, educação e propaganda por uma sociedade fundada no amor, na empatia, na autodeterminação dos povos, na soberania do povo trabalhador e na busca pelo conhecimento.**

Projeto político-pedagógico público, gratuito e assumidamente comprometido com seu **objetivo máximo: emancipar intelectualmente o trabalhador das estruturas do pensamento hegemônico que servem à reprodução do capital**. Articula história, economia política, sociologia, antropologia, direito, dados e experiências concretas da vida social.

A Universidade Social parte de um **enfoque materialista histórico e anticolonial**, sem tomar categorias liberais como explicações neutras ou suficientes. Isso não dispensa rigor: uma posição teórica explícita exige mais transparência sobre fontes, controvérsias, incertezas e métodos — não menos.

> A Universidade Social não reivindica neutralidade entre emancipação e exploração. Quer formar, comunicar e mobilizar, com uma linha editorial própria. Pesquisa rigorosa é ferramenta dessa missão, não condição de equivalência entre projetos políticos.

Nossa missão, valores e limites editoriais estão na **[Carta de princípios](docs/carta-de-principios.md)**. Todo discurso é produzido em condições históricas e sociais: a alegação de neutralidade é algo a investigar, não garantia automática de imparcialidade. A plataforma não oferece tribuna equivalente a perspectivas incompatíveis com esses valores; quando necessário, elas serão estudadas criticamente como objeto de análise, não promovidas como orientação institucional.

## Estado do projeto

**Fase P0/P1 — Portal institucional no ar; trilha piloto em revisão.** O portal foi publicado pelo GitHub Actions. Estão redigidas cinco aulas originais e selecionados oito recursos externos para a primeira trilha, ainda com estado editorial `revisao`. **Não são cursos ou fontes apresentados como publicados** até aprovação humana; não há certificação ou provas automáticas.

**[Abrir o portal público](https://pedromaintenance.github.io/universidade-social/)** · [Acompanhar a publicação no Actions](https://github.com/pedromaintenance/universidade-social/actions/runs/42722594417)

- [Brief do primeiro portal](docs/portal-publico.md)
- [Roadmap e critérios de entrega](docs/roadmap.md)
- [Arquitetura técnica](docs/arquitetura.md)
- [Modelo de conteúdo](docs/modelo-de-conteudo.md)
- [Manual de publicação de conteúdo](docs/publicacao-conteudo.md)
- [Dossiê de revisão da primeira trilha](docs/revisao-trilha-piloto.md)
- [Carta de princípios e missão](docs/carta-de-principios.md)
- [Projeto político-pedagógico](docs/projeto-pedagogico.md)
- [Política editorial e de evidências](docs/politica-editorial.md)
- [Decisão técnica inicial (ADR-0001)](docs/adr/0001-portal-estatico.md)

## Como o projeto se organiza

- **AGENTS.md**: regras do trabalho e fluxo dos agentes.
- **.github/agents/**: perfis especializados de investigação, curadoria, pedagogia, engenharia e auditoria.
- **.github/skills/**: procedimentos acionáveis, incluindo a metodologia anticolonial materialista.
- **docs/**: arquitetura, protocolos e roadmap; mudanças relevantes devem passar por revisão e registro de decisão.
- **GitHub Issues**: demandas executáveis, com critérios de aceite e dependências.
- **src/**: portal Astro e coleções versionadas. A primeira trilha e as fontes já têm arquivos em `src/content/`, mas permanecem em revisão e invisíveis ao público.
- **scripts/**: verificações de estrutura e links internos compilados.
- **.github/workflows/site.yml**: build e publicação contínua pelo GitHub Actions.

## Desenvolver o portal

Requisitos: Node.js 22.12+ e npm. Na raiz do repositório:

~~~bash
npm install
npm run check:source
npm run dev
~~~

Para compilar e verificar os artefatos estáticos:

~~~bash
npm run build
npm run check:dist
npm run preview
~~~

A aplicação está em Astro 7 e TypeScript. As rotas institucionais atuais são: início, Princípios, Método, Trilhas, Biblioteca e Sobre, além das rotas dinâmicas para aulas e trilhas aprovadas. O catálogo usa **coleções com schemas e validação cruzada**; a trilha piloto está redigida, porém nenhum material didático foi liberado como publicado.

Para validar referências, IDs, ordem das aulas e regras de publicação, execute `npm run test:content`. Para adicionar materiais sem expor rascunhos, consulte o [Manual de publicação de conteúdo](docs/publicacao-conteudo.md).

**Dependências:** as versões diretas estão fixadas no package.json. O lockfile precisa ser gerado e versionado quando houver instalação npm disponível para garantir um build integralmente reprodutível. O workflow usa npm install até então.

## Publicar com GitHub Pages

1. Acesse **Settings → Pages** no repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Em cada push na branch main, o workflow site.yml instala dependências, testa, compila e tenta publicar.
4. Confira a aba **Actions** e o endereço publicado informado na execução antes de divulgar o portal.

O site usa site = https://pedromaintenance.github.io e base = /universidade-social. A primeira publicação foi confirmada como **bem-sucedida** no GitHub Actions em 09/11/2026, com endereço de ambiente informado como `https://pedromaintenance.github.io/universidade-social/`. Testes visuais em dispositivos reais e auditoria de acessibilidade seguem pendentes para P0.5.

Documentação: [Deploy Astro no GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) e [Fonte de publicação do GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Limites do ciclo P0.1 e motor de conteúdo

Não existem backend, login, analytics, envio de respostas, simulado interativo ou certificado. Testes em dispositivo real, auditoria de acessibilidade e conteúdo publicado serão etapas posteriores do roadmap.

## Princípios

1. **Amor e empatia:** reconhecer a dignidade das pessoas e cultivar solidariedade sem desumanizar divergentes.
2. **Autodeterminação dos povos:** opor-se à dominação colonial e defender a capacidade dos povos de decidir seus caminhos.
3. **Soberania do povo trabalhador:** colocar trabalho, direitos, organização e poder popular no centro do projeto político-pedagógico.
4. **Busca pelo conhecimento:** estudar, verificar evidências, admitir erros e aprofundar a compreensão da realidade.
5. **Agitação, educação e propaganda:** atuar publicamente com ideias assumidas, articulando experiência vivida, estudo e horizonte de transformação.
6. **Acesso popular:** gratuito, mobile-first, com baixo consumo de dados, sem cadastro obrigatório ou paywall.
7. **Responsabilidade editorial:** fontes rastreáveis, correções públicas e respeito aos direitos autorais; a Universidade decide o que publica conforme sua missão, sem dever de simetria entre posições antagônicas.

## Contribuição

Abra uma issue descrevendo o problema, a proposta, o vínculo com a missão e as fontes disponíveis. Colaborar não assegura publicação: a curadoria é orientada pela Carta de princípios, com critérios editoriais públicos. Para conteúdo: siga a [política editorial](docs/politica-editorial.md). Para tecnologia: siga [arquitetura](docs/arquitetura.md) e [ADR-0001](docs/adr/0001-portal-estatico.md).

**Licença de software**: MIT (arquivo LICENSE). Licenças de textos autorais, imagens, vídeos e materiais de terceiros deverão ser tratadas separadamente; não presumir que MIT autoriza republicar obras alheias.
