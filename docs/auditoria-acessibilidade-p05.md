# Auditoria de acessibilidade e qualidade — P0.5

**Data:** 2026-11-10  
**Status:** correções e verificações estáticas automatizadas em execução; **não há declaração de conformidade integral WCAG 2.2 AA**.

## Escopo deste ciclo

- Área pública institucional do portal (home, princípios, método, trilhas, biblioteca, sobre).
- Modelos de trilha/aula simulados somente no job de PR.
- Atividades formativas fechadas e abertas (componente \`FormativeAssessment.astro\`).
- Validação de links internos, âncoras, recursos estáticos e estados editoriais na compilação.

## Correções implementadas

- **Resultado narrado por tecnologia assistiva:** região \`role="status"\` e \`aria-live="polite"\` permanece no DOM desde o carregamento, mesmo antes do primeiro resultado. O conteúdo da alternativa e a justificativa são anunciados após a escolha.
- **JavaScript desativado:** botões que só funcionam com JavaScript são renderizados ocultos e habilitados quando os manipuladores estão prontos. Explicações completas continuam acessíveis em \`details\` sem scripts.
- **Atributo \`hidden\`:** regra explícita garante \`display: none\`, evitando que estilos de botões e painéis exibam conteúdo inicialmente oculto.
- **Celular:** ajustes de espaçamento para questões em 420px e quebra de URLs longas em textos/alternativas.
- **Documentação e CI:** o novo \`npm run audit:dist\` percorre HTML gerado, valida estrutura, âncoras, caminhos internos e ausência de rotas de rascunhos; é executado no build público e na simulação privada.

## Ensaios manuais ainda obrigatórios

| Cenário | Verificação mínima | Situação |
| --- | --- | --- |
| 360px e 320px | Sem rolagem horizontal inesperada, botões legíveis, conteúdos sem sobreposição | Pendente |
| Ampliação 200% e 400% | Reflow e leitura íntegra, inclusive comentários e respostas abertas | Pendente |
| Teclado sem mouse | Link de pular conteúdo, foco visível, seleção por setas, conferência, refazer e detalhes | Pendente |
| Leitor de tela | NVDA/Firefox ou VoiceOver/Safari anunciam pergunta, rótulos, grupo e resultado com justificativa | Pendente |
| Sem JavaScript | Devolutiva de cada alternativa acessível e nenhum botão inoperante | Pendente |
| Conexão lenta | Páginas e texto principal permanecem acessíveis, sem redes externas obrigatórias | Pendente |
| Contraste | Revisão contextual das cores (incluindo hover, focus e estados desabilitados) | Pendente |
| Desempenho | Lighthouse mobile com metas >= 90 para desempenho e acessibilidade | Pendente |

**Referência técnica:** W3C/WCAG 2.2, especialmente operação por teclado (2.1.1), foco não obscurecido (2.4.11), tamanho mínimo de alvos (2.5.8), identificação e função (4.1.2) e mensagens de estado (4.1.3). https://www.w3.org/TR/WCAG22/

## Limites do teste automatizado

Verificadores estáticos **não simulam** navegador real, zoom, interação com leitor de tela, latência de rede ou contraste efetivamente renderizado. Um build verde comprova que as regras programadas passaram, não que todo critério WCAG foi cumprido.

A checagem de URLs externas exige sessão de curadoria e pesquisa independente. As fontes em \`revisao\` ainda não são expostas na biblioteca pública.

## Ação de fechamento

A issue #6 continua aberta até que exista relatório manual de acessibilidade e desempenho; a issue #11 continua aberta até decisão de licença e aprovação editorial humana. A trilha e as atividades permanecem em revisão.
