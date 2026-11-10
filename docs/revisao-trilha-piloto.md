# Dossiê de revisão editorial — Primeira trilha

**Trilha:** Como investigar a realidade social  
**Estado:** revisão editorial; não publicada no site  
**Atualização:** 2026-11-10  
**Redação inicial:** assistente de IA sob instruções do mantenedor. A revisão editorial humana ainda não ocorreu.

## Objetivo e perspectiva

O material foi redigido para ensinar como passar da experiência cotidiana à investigação social: formular perguntas, ler fontes, estudar relações de propriedade, classe, trabalho e poder, e registrar evidências e limites das explicações.

A Universidade afirma sua perspectiva materialista histórica e anticolonial, bem como seus cinco valores fundadores. A curadoria não pressupõe paridade editorial entre correntes políticas, mas não dispensa a documentação de fatos, a análise de métodos e a revisão de alegações causais.

## Programa completo em revisão

| Aula | Arquivo | Tema | Tempo |
| --- | --- | --- | --- |
| 1 | da-experiencia-a-pergunta.md | Perguntas investigáveis | 25 min |
| 2 | fonte-fato-hipotese.md | Fontes, indicadores e contraprova | 30 min |
| 3 | ideologia-e-neutralidade.md | Ideologia e conhecimento situado | 35 min |
| 4 | trabalho-propriedade-poder.md | Relações materiais e classes sociais | 40 min |
| 5 | laboratorio-pesquisa-social.md | Projeto final orientado e rubrica | 60 min |

**Carga estimada:** 190 minutos, além das leituras externas opcionais.

## Bibliografia selecionada para checagem final

Todas as fontes foram pesquisadas em 10/11/2026 e estão identificadas em src/content/recursos. O projeto registra **somente links e metadados próprios**, sem republicar textos de terceiros.

1. **IBGE — PNAD Contínua:** https://www.ibge.gov.br/estatisticas/sociais/trabalho/17270-pnad-continua.html. Definições estatísticas e documentação metodológica.
2. **IBGE — SIDRA:** https://www.ibge.gov.br/bancodedados/sidra. Séries e tabelas oficiais.
3. **IBGE — divulgação anual 2025:** https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/45920-pnad-continua-taxas-anuais-de-desocupacao-sao-as-menores-da-serie-em-20-unidades-da-federacao. A notícia de 20/02/2026 sustenta o exercício da segunda aula: **38,1% de informalidade anual no Brasil e 58,5% no Pará em 2025**, entre pessoas ocupadas. **Pendente:** o buscador recuperou o comunicado, mas uma tentativa de abertura direta retornou HTTP 403; verificar acesso num navegador comum.
4. **DIEESE — Pesquisa Nacional da Cesta Básica:** https://www.dieese.org.br/analisecestabasica/analiseCestaBasica_conabDieese.html. Apresentação da pesquisa sobre preços e relação com o salário. **Cuidado:** a página parece conter informação de abrangência desatualizada. Não usar números de cidades ou capitais sem conferir metodologia mais recente.
5. **Ipea — Ipeadata:** https://ipeadata.gov.br/api/. Documentação sobre séries macroeconômicas, sociais e regionais.
6. **Ipea — Retrato das Desigualdades de Gênero e Raça:** https://ipea.gov.br/portal/retrato/indicadores?view=default. Indicadores para estudar diferenças estruturais entre grupos. **Pendente:** busca localizou a página, mas a tentativa de abertura direta falhou; validar no navegador.
7. **Karl Marx — Prefácio de Para a Crítica da Economia Política (1859):** https://www.marxists.org/portugues/marx/1859/01/prefacio.htm. Formulação teórica sobre relações materiais e consciência social. **A tradução portuguesa declara direitos de reprodução reservados**: manter apenas hiperlink e referência.
8. **Friedrich Engels — Do Socialismo Utópico ao Socialismo Científico:** https://www.marxists.org/portugues/marx/1880/socialismo/index.htm. Obra histórica de teoria marxista, não evidência numérica de condições sociais presentes.

**Distinção metodológica:** textos originais de Marx e Engels são fontes primárias para suas formulações teóricas; indicadores do IBGE, DIEESE e Ipea informam fenômenos atuais conforme seus próprios métodos. Nenhum dos dois grupos substitui o outro.

## Checklist de revisão humana antes de publicar

- [ ] Ler as cinco aulas e validar clareza, profundidade e adequação pedagógica.
- [ ] Conferir as estatísticas de 2025 e o significado técnico de informalidade e desocupação.
- [ ] Testar todas as URLs em navegador comum, especialmente os dois endereços de acesso incerto.
- [ ] Avaliar diversidade de formatos e alternativas para pessoas com internet limitada.
- [ ] Escolher a licença dos textos autorais conforme a issue #11, sem presumir que MIT do código cobre as aulas.
- [ ] Confirmar autoria e atribuições editoriais; manter transparente a assistência de IA quando aplicável.
- [ ] Registrar data real de revisão e inserir reviewedAt somente após esse trabalho.
- [ ] Mudar o estado para publicado na trilha, nas aulas e nas fontes aprovadas.
- [ ] Verificar que o CI gera as rotas de trilha e de cinco aulas e renderiza corretamente a biblioteca.
- [ ] Auditar visualmente textos, navegação por teclado, contraste e celulares.

## Fluxo de publicação posterior

A alteração de status editorial requer decisão humana informada e registrada, não apenas sucesso de testes automatizados. Publicar exige validação de fontes, licenças, metadados, ligação entre aulas e trilha e revisão dos argumentos.

Após aprovação, executar testes, build, conferência de páginas geradas e deploy no GitHub Pages. Até lá, o site continua informando corretamente que **a primeira trilha está em preparação**.

**Esta entrega é um pacote completo de redação e curadoria para revisão, não uma declaração de publicação.**
