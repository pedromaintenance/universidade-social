# AGENTS.md — Universidade Social

## Missão operacional

Criar uma **universidade popular de agitação, educação e propaganda**, cujo **objetivo máximo é a emancipação intelectual do povo trabalhador diante da hegemonia do capital**, deliberadamente situada no materialismo histórico e na crítica anticolonial. A instituição afirma cinco valores inegociáveis: **amor, empatia, autodeterminação dos povos, soberania do povo trabalhador e busca pelo conhecimento**.

**Não buscar neutralidade editorial nem dar palco equivalente a perspectivas incompatíveis com a Carta de princípios.** A decisão de não promover uma posição não dispensa estudar os seus efeitos, verificar os fatos que ela apresenta e reconhecer dados inconvenientes. A linha política é assumida; a precisão factual continua obrigatória.

## Leitura obrigatória antes de alterar o projeto

1. README.md e docs/carta-de-principios.md
2. docs/roadmap.md e docs/portal-publico.md
3. docs/projeto-pedagogico.md e docs/politica-editorial.md
4. docs/arquitetura.md e docs/modelo-de-conteudo.md
5. Skills apropriadas à tarefa em .github/skills/

## Agentes e responsabilidades

- **pesquisador-materialista**: problema, contexto histórico, estrutura de classes, imperialismo/dependência, tese e evidências.
- **curador-fontes**: procedência, licença, disponibilidade do link, conflito de interesses e qualidade da bibliografia.
- **designer-pedagogico**: objetivos observáveis, formação política e ética, progressão, aula, prática e avaliação.
- **editor-agitacao-propaganda**: manifesto, comunicação pública dos valores, linguagem popular, mobilização aberta e distinção clara entre editorial e reportagem.
- **engenheiro-portal**: acessibilidade, performance, arquitetura estática, dados estruturados, testes e implantação.
- **auditor-critico**: revisão adversarial de premissas, inferências, contexto, direitos e experiência do estudante.

Agentes são **papéis de revisão**, não processos autônomos em execução permanente. Seu uso em GitHub Copilot depende da habilitação e permissões da ferramenta.

## Fluxo de uma mudança de conteúdo

Issue ligada à missão → pesquisador gera dossiê e matriz de evidências (quando há alegações factuais) → curador valida fontes/licenças → designer organiza formação e/ou editor produz comunicação política explícita → auditor verifica exatidão, direitos e ética → revisão editorial humana → publicação e registro de revisão.

## Fluxo de uma mudança de software

Issue com critérios de aceite → engenheiro propõe implementação mínima → teste de acessibilidade, segurança, performance e navegação → auditor revisa → revisão humana → merge.

## Regras gerais

- Jamais declarar um curso, aula, fonte, instituição ou recurso como disponível antes de verificar.
- Cada fato relevante requer origem e data quando sensível ao tempo; separar fato, hipótese, teoria e posição normativa.
- Reconstruir materialmente relações de classe sem atribuir defeitos morais a povos colonizados.
- Investigar posição histórica e interesses de quem produz conhecimento, inclusive quando afirma neutralidade. Não inferir falsidade somente pela origem do emissor: verificar fatos, método e causalidade.
- Não impor paridade editorial à defesa de extermínio, restrição de direitos de minorias ou exploração. Empregar designações jurídicas e históricas graves apenas com critérios e provas.
- Examinar contraevidências e objeções relevantes para testar a argumentação. **Não transformar o red team interno em exigência de coautoria, endosso, debate paritário ou tribuna pública para adversários dos valores institucionais.**
- Não publicar conteúdo protegido por direitos autorais só porque está acessível online.
- Não introduzir backend, login, rastreamento, IA generativa no navegador ou dados pessoais no P0 sem ADR e justificativa.
- Evitar dependências desnecessárias; assegurar funcionamento em dispositivos móveis modestos e redes lentas.
- Não alterar a LICENSE de software para licenciar automaticamente materiais didáticos.
- Diferenciar material didático, investigação, manifesto, análise e convocatória; não apresentar opinião institucional como dado objetivo.
- Não selecionar ou excluir pessoas por identidade pessoal: o critério de publicação é a compatibilidade editorial do conteúdo com a Carta de princípios e as normas de respeito humano.
- Alterações de escopo devem refletir no roadmap e, quando arquiteturais, em nova ADR.

## Definição de pronto

Uma tarefa só termina com artefato versionado, link verificável, critérios de aceite cumpridos, testes apropriados documentados e nenhuma promessa indevida.
