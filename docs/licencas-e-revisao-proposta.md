# Proposta de decisão: licenças e aprovação editorial — Universidade Social

**Situação:** proposta a submeter à decisão do mantenedor; **não representa concessão de licença, aprovação jurídica nem revisão humana concluída**.
**Data:** 2026-11-10
**Referência:** issue #11 e dossiê da primeira trilha.

## Problema material

O portal já permite distribuir conhecimento gratuitamente. Porém livre acesso para leitura não equivale a direito de copiar, traduzir e adaptar material. Sem condições de uso claras, educadores populares podem ter dificuldade de multiplicar aulas, imprimir apostilas ou traduzi-las. Por outro lado, uma licença concedida sem autoridade sobre os direitos pode prejudicar autores e tradutores.

Há também uma diferença entre:
- **código** do portal — arquivo \`LICENSE\` com licença MIT;
- **textos pedagógicos autorais** — titulares, autoria e autorização ainda em verificação;
- **traduções novas** de obras antigas — distinguir direito sobre o original de possíveis direitos relativos à tradução e a edições;
- **fontes externas** — IBGE, DIEESE, Ipea, repositórios e obras de terceiros: por ora, apenas links e referências, sem sublicença.

## Proposta para decisão expressa

**Recomendação técnica/editorial para avaliação: CC BY-SA 4.0 nos textos didáticos efetivamente próprios e autorizados.**

A licença permite copiar, distribuir, traduzir e adaptar, inclusive em contextos comerciais, mediante atribuição e compartilhamento das adaptações pela mesma licença. Isso pode facilitar a produção coletiva e evitar que versões derivadas sejam fechadas sob termos exclusivos. **Ela não proíbe venda nem garante que os materiais circulem sem cobrança.** A opção deve ser discutida conforme a missão, interesses e autorizações efetivas dos colaboradores.

Alternativas para a decisão humana:

| Opção | Consequência prática | Ponto de atenção |
| --- | --- | --- |
| CC BY-SA 4.0 | Permite reutilização e adaptações com atribuição e reciprocidade | Permite usos comerciais e exige a mesma licença nas adaptações |
| CC BY 4.0 | Permite adaptações e compartilhamento com atribuição | Adaptações podem receber condições diferentes |
| CC BY-NC-SA 4.0 | Permite adaptações não comerciais com atribuição e reciprocidade | O limite "não comercial" pode dificultar reprodução por iniciativas híbridas; não é a opção mais aberta |
| Direitos reservados | Sem autorização geral prévia para reutilização | Dificulta circulação, remix e tradução popular |

**Não aplicar automaticamente nenhuma opção.** A decisão exige verificar titularidade, contribuições e consentimento. Não pressupor que texto produzido com assistência de IA tenha autor individual identificado ou que a licença de código cubra conteúdo pedagógico.

Fontes oficiais:
- https://creativecommons.org/licenses/by-sa/4.0/
- https://creativecommons.org/licenses/by/4.0/
- https://creativecommons.org/licenses/by-nc-sa/4.0/
- https://creativecommons.org/faq/

## Protocolo de aprovação humana

1. **Proveniência:** confirmar quem redigiu, revisou, traduziu e autorizou o material. Distinguir assistência de IA de revisão filológica e autoria humana.
2. **Condições da fonte:** conferir original, edição, link, direitos e citações. Um original em domínio público não concede direitos sobre qualquer tradução moderna.
3. **Verificabilidade:** destacar afirmações empíricas; checar período, definição, abrangência, dados e ligações causais; classificar documentado, fortemente sustentado, plausível, contestado ou especulativo.
4. **Revisão pedagógica:** verificar objetivos, sequência, linguagem acessível, exemplos, rubricas, questões e ausência de teste de adesão política.
5. **Revisão de acessibilidade:** percorrer no teclado, testar leitor de tela, 360px, zoom de 200%/400%, reflow e conexão lenta.
6. **Aprovação registrada:** mantenedor autorizado documenta o resultado na PR, arquivos alterados, data real e decisão sobre a licença; só depois inserir \`reviewedAt\` e \`status: publicado\`.
7. **Publicação:** testes/CI, confirmação do deploy e leitura do site público em dispositivos reais.

**Não utilizar o resultado do runner de "simulação de publicação" como prova de revisão editorial.** Esse runner altera status numa cópia descartável apenas para verificar renderização.

## Dúvidas a resolver antes de publicar

- Quem pode conceder a licença dos textos e traduções novos?
- A Universidade deseja permitir a distribuição comercial do material por terceiros?
- Como registrar contribuições, correções, versões e atribuições posteriores?
- Quem assina a revisão dos fragmentos francês e alemão e confirma sua fonte-base?
- Quem realizará um teste real com leitores de tela e celulares?

## Registro de decisão — a preencher pelo mantenedor

- **Decisão:** não tomada.
- **Titular ou responsável pela autorização:** a confirmar.
- **Licença dos materiais próprios:** a definir.
- **Alcance das traduções:** a definir caso a caso.
- **Data e aprovação editorial:** pendentes.
