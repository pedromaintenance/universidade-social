# Modelo de conteúdo — v0.2 (P0.3)

**Estado:** schemas e testes técnicos implementados; uma trilha com cinco aulas, fontes e dez avaliações está em `revisao`. Nenhuma aula ou avaliação está publicada. Os exemplos do documento são ilustrativos.

## Arquitetura em quatro coleções Astro

Arquivos versionados em `src/content/`, carregados por `src/content.config.ts` usando `glob()` e schemas Zod. IDs de URL derivam do **nome do arquivo**, e devem usar minúsculas, números e hífens, como `como-investigar.md`. Alterar um nome de arquivo muda a URL de publicação.

| Coleção | Tipo de arquivo | Caminho público quando publicado | Relações |
| --- | --- | --- | --- |
| `trilhas` | Markdown | `/trilhas/{id}/` | pré-requisitos, aulas |
| `aulas` | Markdown | `/aulas/{id}/` | trilha, fontes, avaliações |
| `recursos` | JSON individual | `/biblioteca/` | referenciado por aulas/avaliações |
| `avaliacoes` | JSON individual | incorporada à página de aula publicada | aula, referências e devolutiva |

O site é hospedado sob `/universidade-social/` no GitHub Pages. Todas as rotas são compiladas estaticamente.

## Metadados obrigatórios

Todas as trilhas/aulas: `title`, `description`, `status`, `author`, `updatedAt`, `license`, `topics`, `modalities`. Para publicar, exigem também `reviewedAt` (AAAA-MM-DD).

- **Trilha:** `level`, `objectives`, `prerequisiteTrackIds` (opcional).
- **Aula:** `trackId`, `order`, `durationMinutes`, `level`, `learningGoals`, `resourceIds`, `assessmentIds`.
- **Recurso:** `title`, `description`, `status`, `url` (HTTPS), `kind`, `authors`, `publisher`, `language`, `sourceClass`, `perspective`, `relevance`, `rights`, `updatedAt`, `topics`. Para publicar exige `checkedAt`.
- **Avaliação:** `title`, `description`, `status`, `lessonId`, `type`, `prompt`, `author`, `updatedAt`, `rubric`, `feedback`, `referenceIds`. Para publicar exige `reviewedAt`. Questões do tipo `multipla-escolha` exigem `options` com 3–5 itens (`id`, `text`, `correct`, `feedback`), exatamente uma opção marcada `correct`; `resposta-aberta` e `projeto` não recebem gabarito automático.

Estados aceitos: `rascunho`, `revisao`, `publicado`, `arquivado`.

Modalidades admitidas: `educacao`, `agitacao`, `propaganda`, `investigacao`. A classificação é declarada pelo autor e não altera o teste factual de alegações.

## Exemplo de trilha — somente documentação

```yaml
title: Como investigar a realidade social
description: Percurso introdutório para examinar fatos, fontes e relações materiais da vida social.
status: rascunho
author: Equipe editorial
updatedAt: 2026-11-09
license: Todos os direitos reservados (até decisão editorial)
topics: [investigacao-social, metodo]
modalities: [educacao, investigacao]
level: introdutorio
objectives:
  - Identificar fontes verificáveis para perguntas sociais concretas
prerequisiteTrackIds: []
```

Esse frontmatter precisaria estar num arquivo `src/content/trilhas/como-investigar.md`, acompanhado por texto Markdown próprio. **Não foi criado** no acervo atual.

## Exemplo de fonte — somente documentação

```json
{
  "title": "Título real confirmado",
  "description": "Resumo autoral preciso com finalidade de leitura e análise crítica.",
  "status": "rascunho",
  "url": "https://www.example.org/a-ser-substituido",
  "kind": "artigo",
  "authors": ["Autor a verificar"],
  "publisher": "Instituição a verificar",
  "language": "pt-BR",
  "sourceClass": "secundaria",
  "perspective": "Posição da fonte a verificar",
  "relevance": "Explicar por que o recurso entra na sequência pedagógica.",
  "rights": "link-apenas",
  "updatedAt": "2026-11-09",
  "topics": ["investigacao-social"]
}
```

O endereço acima é demonstrativo e **não pode ser publicado**. A publicação exige substituir todos os placeholders, confirmar autoria e URL, indicar `checkedAt` e passar pela revisão humana.

## Motor formativo e rubricas

O componente `FormativeAssessment.astro` renderiza questões de múltipla escolha com justificativa por opção e botão para refazer; respostas abertas oferecem campo temporário e critérios de autoavaliação. Não armazena nem envia respostas. Confira [o projeto da oficina formativa](atividades-formativas.md).

## Regras de publicação

1. O schema Astro rejeita tipos incorretos, valores obrigatórios ausentes, URLs não HTTPS, metadados e datas fora do formato.
2. O validador cruzado em `src/lib/content-integrity.mjs` rejeita IDs inválidos ou duplicados, referências ausentes, ordem de aula duplicada, pré-requisito autorreferente e URLs de exemplo marcadas como publicadas.
3. **Trilha publicada** exige pelo menos uma aula publicada.
4. **Aula publicada** exige trilha publicada, ao menos uma fonte publicada, revisão registrada e objetivo pedagógico.
5. **Avaliação publicada** exige aula publicada, referência rastreável, feedback, rubrica e revisão.
6. Rascunhos e materiais em revisão/arquivados são validados, mas **não ganham páginas públicas**. O build deve falhar se suas referências apontarem para IDs inexistentes.
7. O uso de fonte externa no portal não declara endosso integral ou autoriza a reprodução de textos.

## Testes

`npm run test:content` executa fixtures puramente **de teste** sob `tests/`, sem adicioná-las ao catálogo público. Para verificar o build do portal: `npm run build && npm run check:dist`.

## Limites atuais e próximos incrementos

O motor de **exercícios formativos locais está implementado**, mas os exercícios ainda estão em revisão e não são acessíveis publicamente. Não há avaliações oficiais, provas remotas, submissões, emissão de certificado nem sistema de cadastro. Submissões de projetos e progresso local, se aprovados, exigirão novos contratos e testes.

**Referências editoriais:** [Carta de Princípios](carta-de-principios.md), [Política Editorial](politica-editorial.md) e [Manual de Publicação](publicacao-conteudo.md).
