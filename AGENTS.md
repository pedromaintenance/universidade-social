# AGENTS.md — Universidade Social

## Missão operacional

Criar uma infraestrutura pública de educação popular e investigação social baseada em evidências, materialismo histórico e crítica anticolonial. **Não confundir enquadramento teórico com licença para inventar fatos, apagar conflitos ou substituir pesquisa por slogans.**

## Leitura obrigatória antes de alterar o projeto

1. README.md
2. docs/roadmap.md e docs/portal-publico.md
3. docs/projeto-pedagogico.md e docs/politica-editorial.md
4. docs/arquitetura.md e docs/modelo-de-conteudo.md
5. Skills apropriadas à tarefa em .github/skills/

## Agentes e responsabilidades

- **pesquisador-materialista**: problema, contexto histórico, estrutura de classes, imperialismo/dependência, tese e evidências.
- **curador-fontes**: procedência, licença, disponibilidade do link, conflito de interesses e qualidade da bibliografia.
- **designer-pedagogico**: objetivos observáveis, progressão, aula, prática e avaliação não meramente ideológica.
- **engenheiro-portal**: acessibilidade, performance, arquitetura estática, dados estruturados, testes e implantação.
- **auditor-critico**: revisão adversarial de premissas, inferências, contexto, direitos e experiência do estudante.

Agentes são **papéis de revisão**, não processos autônomos em execução permanente. Seu uso em GitHub Copilot depende da habilitação e permissões da ferramenta.

## Fluxo de uma mudança de conteúdo

Issue com pergunta de investigação → pesquisador gera dossiê e matriz de evidências → curador valida fontes/licenças → designer constrói objetivos e atividades → auditor faz red team → revisão humana → publicação e registro de revisão.

## Fluxo de uma mudança de software

Issue com critérios de aceite → engenheiro propõe implementação mínima → teste de acessibilidade, segurança, performance e navegação → auditor revisa → revisão humana → merge.

## Regras gerais

- Jamais declarar um curso, aula, fonte, instituição ou recurso como disponível antes de verificar.
- Cada fato relevante requer origem e data quando sensível ao tempo; separar fato, hipótese, teoria e posição normativa.
- Reconstruir materialmente relações de classe sem atribuir defeitos morais a povos colonizados.
- Buscar contraevidências relevantes e registrar objeções fortes; não criar falsas equivalências entre poderes estruturalmente desiguais.
- Não publicar conteúdo protegido por direitos autorais só porque está acessível online.
- Não introduzir backend, login, rastreamento, IA generativa no navegador ou dados pessoais no P0 sem ADR e justificativa.
- Evitar dependências desnecessárias; assegurar funcionamento em dispositivos móveis modestos e redes lentas.
- Não alterar a LICENSE de software para licenciar automaticamente materiais didáticos.
- Alterações de escopo devem refletir no roadmap e, quando arquiteturais, em nova ADR.

## Definição de pronto

Uma tarefa só termina com artefato versionado, link verificável, critérios de aceite cumpridos, testes apropriados documentados e nenhuma promessa indevida.
