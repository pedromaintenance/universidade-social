# Manual de publicação de conteúdo — Universidade Social

**Estado:** P0.3 — procedimento técnico inicial. A publicação de materiais reais depende de revisão humana.

## 1. Propor

Abra uma issue informando pergunta geradora, público, vínculo com a Carta de Princípios, autorias possíveis e recursos a conferir. A Universidade assume orientação materialista e anticolonial, sem obrigação de equivalência editorial com projetos antagônicos.

## 2. Investigar e registrar as fontes

Empregue as skills `pesquisa-anticolonial-materialista` e `curadoria-de-fontes`. Para cada recurso, confira URL, título, autoria, instituição, data, licença, finalidade, limites e perspectiva. A classe e a posição do autor são questões de investigação; não bastam, isoladamente, para provar ou refutar alegações.

Crie um JSON em `src/content/recursos/<id>.json`, com `status: "rascunho"`, metadados completos e URL real quando verificada. Não copie arquivos de terceiros sem autorização.

## 3. Criar a trilha e suas aulas

Crie um Markdown de trilha em `src/content/trilhas/<id>.md` e as aulas em `src/content/aulas/<id>.md`. O identificador é o nome do arquivo, sem extensão. O campo `trackId` de cada aula deve apontar para o ID real da trilha. `resourceIds` é uma lista dos IDs dos JSONs de fontes.

Para o conteúdo das aulas: problema concreto → conceitos → arquivos e dados → análise material → crítica de hipóteses → síntese e práxis. Indique objetivos, autoria, tempo estimado, modalidade e licença. Não usar avaliações como testes de obediência a um discurso.

## 4. Validar

~~~bash
npm install
npm run check:source
npm run test:content
npm run build
npm run check:dist
~~~

O build valida schema e relações entre trilhas, aulas, fontes e avaliações. A versão pública só inclui entradas com `status: "publicado"`.

## 5. Revisão humana e aprovação

Aprovar fontes, atualidade, direitos, explicações, atribuições causais e coerência com os valores da Universidade. Registrar `reviewedAt` na trilha/aula e `checkedAt` nos recursos, após efetiva revisão. Só então alterar o estado editorial para `publicado`.

**Publicar exige:** uma trilha com pelo menos uma aula publicada; cada aula publicada com uma ou mais fontes igualmente publicadas. Não publicar trilha vazia ou fonte demonstrativa.

## 6. Corrigir e manter

Erros materiais exigem correção rastreável via PR. Quando um link deixar de funcionar, marcar recurso como em revisão, corrigir aula vinculada e voltar a validar. Conteúdo publicado deve informar autoria, revisão e condições de uso.

## Exemplo mínimo de ligação (documental)

~~~text
trilhas/como-investigar.md (id: como-investigar)
  └── aulas/primeira-aula.md
        trackId: como-investigar
        resourceIds: [fonte-real-conferida]
        └── recursos/fonte-real-conferida.json
~~~

Os nomes acima são exemplos textuais e **não são materiais reais disponíveis**. Um ID apontando para arquivo inexistente deve interromper o build.


## Traduções autorais de obras em domínio público

Sempre identificar obra, capítulo, idioma original, edição-base, data e eventual mediação editorial póstuma. Traduzir diretamente do original, distinguir tradução literal, opção terminológica, paráfrase e interpretação pedagógica. Não copiar tradução contemporânea sem licença. A condição de domínio público do texto original não substitui análise da licença e autoria do **novo texto traduzido**. Só registrar revisão humana concluída quando ela ocorrer efetivamente. Exemplo de procedimento: [Durkheim e Marx](traducoes-autorais/durkheim-marx-investigacao.md).


## Exercícios formativos

Para cada atividade, crie JSON em `src/content/avaliacoes/<id>.json` com `lessonId`, tipo, pergunta, referências, rubrica e devolutiva. Questões fechadas devem ter três a cinco alternativas com justificativa para **cada escolha**, exatamente uma alternativa conceitualmente correta e nenhum teste de fidelidade política. Questões abertas e projetos usam análise por rubrica, sem supor que uma interpretação social possa ser corrigida automaticamente.

Adicione o ID ao `assessmentIds` da aula correspondente. O build rejeita referências inconsistentes, alternativas duplicadas e múltiplas respostas corretas. O estudante pode verificar feedback no navegador sem enviar dados; mais informações em [Atividades formativas](atividades-formativas.md).


## Licença e aprovação editorial antes do status publicado

A proposta de licença e o procedimento de autorização estão em [Licenças e revisão](licencas-e-revisao-proposta.md). A proposta **não é licença vigente**. Não converter textos, traduções ou exercícios para `publicado` sem decisão do titular/representante e revisão humana documentada. Para mudanças de interface, conferir [Auditoria de acessibilidade](auditoria-acessibilidade-p05.md).
