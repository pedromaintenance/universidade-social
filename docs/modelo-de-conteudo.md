# Modelo de conteúdo planejado — v0.1

## Entidades e relações

- **Trilha:** objetivo, nível, pré-requisitos e sequência de aulas (1:N).
- **Aula:** pergunta-guia, objetivos, texto, conceitos, atividades, fontes, duração estimada.
- **Recurso:** texto, livro, artigo, vídeo, canal, dado ou ferramenta externa; URL e contexto de curadoria.
- **Avaliação:** questões com justificativa e devolutiva; ligada à trilha ou aula.
- **Projeto:** problema investigável, materiais, etapas, critérios, rubrica e produto esperado.
- **Conceito:** definição, variações teóricas, exemplos e referências.
- **Publicação político-editorial:** tipo (manifesto, editorial, material de agitação, análise), autoria institucional ou individual, posição assumida, referências verificáveis quando houver alegações factuais e data.

### Metadados comuns

ID/slug estável, título, descrição, temas, idioma, nível, estado (rascunho/revisao/publicado/arquivado), autor editorial, data de atualização e licença do conteúdo próprio. Conteúdo só aparece publicamente se publicado, com fonte/versão.

### Exemplo de frontmatter de aula (ilustrativo; não é aula publicada)

~~~yaml
id: investigacao-001
slug: fato-hipotese-e-explicacao
title: Fato, hipótese e explicação
status: rascunho
trilhaId: como-investigar
order: 1
level: introdutorio
durationMinutes: 20
learningGoals:
  - Distinguir descrição factual de inferência causal
  - Identificar evidências que poderiam contrariar uma hipótese
resourceIds: []
assessmentIds: []
reviewedAt: null
~~~

### Exemplo de registro de recurso (ilustrativo)

~~~yaml
id: fonte-exemplo-001
title: Título exato da obra
url: https://exemplo.org/material
kind: artigo
language: pt-BR
authors: []
publishedAt: null
checkedAt: null
sourceClass: secundaria
perspective: declarada
rights: link-apenas
status: rascunho
~~~

### Exemplo de avaliação (ilustrativo)

~~~json
{
  "id": "avaliacao-exemplo-001",
  "lessonId": "investigacao-001",
  "type": "multipla-escolha",
  "question": "Qual evidência enfraqueceria esta hipótese?",
  "options": [
    {"id": "a", "text": "Exemplo A"},
    {"id": "b", "text": "Exemplo B"}
  ],
  "correctOptionIds": ["b"],
  "feedbackByOption": {
    "a": "Explicar por que não testa a hipótese",
    "b": "Explicar qual mecanismo seria enfraquecido"
  },
  "sourceIds": []
}
~~~

**Notas:** URLs acima são placeholders não publicáveis. O modelo será formalizado com schemas e testes de relacionamento na implementação. Proibir links placeholder e questões sem justificativa quando status=publicado.

## Integridade e ética da avaliação

A resposta correta nunca deve depender de concordar com uma ideologia. Questões objetivas avaliam conceito e método; perguntas abertas usam rubricas sobre evidência, lógica, contexto, interpretação alternativa e limites. Projetos não exigem exposição de dados pessoais.
