# Oficina de investigação social — exercícios formativos (P1.3)

**Status:** implementação técnica e dez atividades em revisão; não são provas oficiais nem conferem certificados.

## Objetivo

A primeira trilha da Universidade Social ensina a investigar problemas reais com método. Os exercícios foram desenhados para desenvolver autonomia: não premiam o estudante por declarar concordância com a linha editorial, mas por identificar conceitos, definições, fontes, hipóteses, mecanismos e limitações.

Dois instrumentos organizam a abertura da oficina:
- **Durkheim** — desnaturalizar a familiaridade com os fatos sociais: definir o objeto, identificar pré-noções e observar o que precisa ser explicado;
- **Marx** — reconstruir historicamente relações sociais cuja forma visível não revela imediatamente suas mediações, propriedade, trabalho e poder.

## Sequência das dez atividades

| Aula | Múltipla escolha com devolutiva | Resposta argumentada com rubrica |
| --- | --- | --- |
| 1. Da experiência à pergunta | O que significa conhecer um fato social? | Duas ferramentas em uma situação de trabalho |
| 2. Fonte, fato e hipótese | O que mede a informalidade? | Formular uma contraprova |
| 3. Ideologia e neutralidade | Examinar a posição da fonte sem condenação automática | Investigar alegação de neutralidade |
| 4. Trabalho, propriedade e poder | Quais relações materiais mapear? | Construir mapa de produção e poder |
| 5. Laboratório | Identificar um dossiê verificável | Esboçar o dossiê final |

São **cinco questões fechadas e cinco questões abertas/projeto**, todas com referências e rubricas. Os arquivos JSON ficam em `src/content/avaliacoes`.

## Operação e privacidade

- A correção de questões fechadas é feita **somente no navegador**, no momento em que o estudante escolhe “Conferir escolha”. Cada alternativa recebe explicação e é possível “Refazer”. A interação não utiliza formulários com ação de envio; se JavaScript estiver desativado, nenhuma resposta é transmitida.
- Todas as explicações podem ser consultadas sem JavaScript no elemento nativo `details`.
- Respostas abertas **não têm resposta política correta**. A pessoa pode escrever numa área temporária e comparar com critérios de uma rubrica. Não existe correção automática honesta para interpretações sociais abertas.
- **Não há cadastro, upload, requisição de rede, analytics ou armazenamento local** das respostas. A caixa de texto avisa para copiar antes de navegar para outra página.
- A publicação é bloqueada pelos estados `revisao` até validação editorial humana.
- Os controles usam `fieldset`/`legend`, rótulos semânticos e anúncio de devolutiva em `aria-live`, com foco visível. A auditoria manual com leitor de tela e celular ainda depende da issue #6.

## Publicação e critérios de integridade

O schema de avaliação valida alternativas, feedback, referência, rubrica e o estado editorial; o validador cruzado exige vínculo recíproco entre aula e avaliação. Quando uma avaliação for marcada como `publicado`, sua aula e suas referências também precisam estar publicadas e a data real de revisão deve constar em `reviewedAt`.

O job de **simulação de publicação no CI** é isolado do artefato real do GitHub Pages. Ele promove os arquivos **somente na cópia efêmera do runner** para testar geração das rotas e conteúdo, e não aprova nem publica material didático no site real.

## Revisão humana pendente

- [ ] Rever cada alternativa e seu feedback, conferindo que há uma resposta conceitualmente adequada sem exigir adesão ideológica;
- [ ] Confirmar que dados e referências citadas continuam pertinentes;
- [ ] Verificar se os conceitos de Durkheim e Marx foram preservados;
- [ ] Testar todas as questões no teclado e em leitor de tela;
- [ ] Avaliar carga de leitura, linguagem e confiabilidade pedagógica com estudantes;
- [ ] Decidir licença dos textos autorais e registrar autoria/revisão sem simular validação humana.

Critério de aprendizagem: estudante deve ser capaz de **formular perguntas, avaliar fontes, testar hipóteses e reconstruir relações materiais**, mesmo que discorde de determinada interpretação da Universidade.
