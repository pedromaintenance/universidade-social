# Roadmap de desenvolvimento — Universidade Social

**Versão:** 0.1 | **Atualização:** 2026-11-08 | **Estado geral:** planejamento. Sem prazos artificiais: avanço por critério de pronto.

## P0 — PRIMEIRO ARTEFATO: portal público principal

**Resultado:** homepage real e publicada, navegação, páginas institucionais e infraestrutura de conteúdo estático. Ver [brief do P0](portal-publico.md).

| ID | Pacote | Dependências | Aceite resumido |
| --- | --- | --- | --- |
| P0.0 | Fundar agentes, skills, método, arquitetura e issues | nenhuma | arquivos versionados e revisáveis |
| P0.1 | Configurar Astro, TS, build e Pages | P0.0 | build reproduzível e URL de teste |
| P0.2 | Identidade visual e homepage mobile-first | P0.1 | propósito e CTAs claros; acessibilidade |
| P0.3 | Modelo de conteúdo, catálogo e rotas | P0.1 | apenas material publicado aparece |
| P0.4 | Páginas Método, Sobre e Biblioteca inicial | P0.2, P0.3 | transparência de fontes e status |
| P0.5 | Testes, acessibilidade, performance e go-live | P0.2–P0.4 | checklist de P0 concluído |

**Marco de lançamento:** portal público utilizável **mesmo antes** de existir acervo amplo. Não exibir conteúdo demonstrativo como se fosse aula disponível.

## P1 — Primeira trilha pedagógica real

- **P1.1** «Como investigar a realidade social»: objetivos, 3–5 aulas piloto, fontes e exercícios guiados.
- **P1.2** Curadoria inicial de recursos: leitura online, canais e vídeos (metadados, URL, licença, data, perspectiva e alternativas textuais).
- **P1.3** Simulados formativos locais: feedback justificado por fonte, sem captura de dados.
- **P1.4** Projetos de pesquisa orientados: problema, método, fontes, rubrica e resultados esperados.
- **P1.5** Revisão pedagógica com participantes: observar dificuldades reais e corrigir.

**Portão P1:** estudante completa uma trilha com começo, meio, fim e evidências de aprendizagem crítica; não depende de aprovação ideológica.

## P2 — Biblioteca crítica e percursos temáticos

- Catálogo pesquisável e filtros por tema, formato, nível e perspectiva.
- Trilhas: trabalho/classes; Estado/Direito; colonialismo/dependência; economia; Brasil/Amazônia.
- Glossário de conceitos disputados e páginas comparativas de escolas teóricas.
- Política de revisão periódica de links e correção editorial.

## P3 — Laboratório de investigação

- Ferramentas de leitura crítica de gráficos, séries de dados e indicadores.
- Projetos reproduzíveis com datasets públicos, métodos e notas de limitação.
- Exportação de resultados e progressão de estudo quando tecnicamente viável, sempre com privacidade.

## P4 — Comunidade e expansão (decisão futura)

- Revisão por colaboradores, formação de tutores e produção coletiva.
- Avaliar eventual submissão de projetos, contas e certificados **somente** com estudo de privacidade, custo, acessibilidade e governança.
- Possíveis parcerias com educadores, pesquisadores e coletivos: não presumir vínculo institucional.

## Ordem e governança

1. O portal P0 é a **primeira entrega pública**, não uma plataforma de provas pronta.
2. Nenhuma trilha se declara publicada sem conteúdo, evidências e revisão.
3. Cada pacote vira issue com objetivo, dependências, artefatos e critérios de aceite.
4. Mudança de arquitetura exige ADR; mudança de método exige revisão editorial.
5. Indicadores de avanço: tarefas verificadas, experiência real e qualidade de fontes — não quantidade de páginas vazias.

## Riscos transversais

- **Doutrinação e captura de narrativa:** transparência de enquadramento, fontes, contraevidência, red team.
- **Sobrecarga de manutenção:** arquivo estático, componentes reutilizáveis e foco em trilha piloto.
- **Direitos autorais:** links, licença específica e textos autorais.
- **Desigualdade digital:** mobile-first, conteúdos textuais, peso reduzido e acesso sem conta.
- **Fragilidade de referência externa:** revisão de URLs e alternativas.

Issues são a fonte de execução; este roadmap é a fonte de sequenciamento e visão de produto.
