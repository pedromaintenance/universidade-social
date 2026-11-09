# Primeiro artefato — P0: Portal público principal

**Status:** PLANEJADO. Este documento é um brief de produto, não uma página já publicada.

## Problema

A Universidade Social precisa tornar **visível e acessível seu projeto de agitação, educação e propaganda**, com o objetivo máximo de **emancipação intelectual do trabalhador diante da hegemonia do capital**. Uma homepage meramente acadêmica ou supostamente neutra apagaria seu sentido de formação e mobilização popular.

## Proposta de valor

Apresentar com clareza **por que existimos, quais valores defendemos, como estudar e como participar**. Dar acesso a trilhas e recursos com a orientação editorial explícita; não prometer cursos inexistentes.

## Hierarquia da página inicial

1. **Cabeçalho:** Universidade Social, Trilhas, Biblioteca, Método, Sobre.
2. **Hero:** declarar agitação, educação e propaganda; nomear amor, empatia, autodeterminação dos povos, soberania do povo trabalhador e conhecimento. CTAs possíveis: «Conheça nossos princípios» e «Começar a estudar».
3. **Nossa razão de existir:** afirmar a emancipação intelectual do trabalhador, investigar os fundamentos materiais da hegemonia, estudar as estruturas sociais e divulgar um projeto de vida coletiva.
4. **Como funciona:** problema real → conceitos → fontes → análise → exercício/projeto → práxis.
5. **Explorar áreas:** trabalho e classes; Estado e Direito; colonialismo e dependência; economia política; história; Brasil e Amazônia.
6. **Estudo inicial:** única trilha piloto quando estiver realmente publicada; antes disso, etiqueta «Em preparação».
7. **Biblioteca e ferramentas:** módulos previstos com status visível, sem cards de conteúdo falso.
8. **Método e transparência:** materialismo histórico, exame da posição social de quem produz conhecimento, critérios de evidência e correções; crítica de ideologias não exige paridade de tribuna.
9. **Contribuir:** links para repositório, issues e regras editoriais.
10. **Rodapé:** licenças, privacidade, acessibilidade, status do projeto.

## Rotas propostas

- / — portal principal.
- /trilhas/ — catálogo, mesmo que inicialmente só contenha itens publicados.
- /trilhas/[slug]/ — detalhe e progressão de estudo.
- /aulas/[slug]/ — leitura com fontes e exercícios.
- /biblioteca/ — catálogo curado de materiais externos.
- /principios/ — Carta de princípios, missão e compromisso político.
- /metodo/ — método de estudo e protocolo de evidências.
- /sobre/ — proposta, licenças e estado do projeto.
- /avaliacoes/ e /laboratorio/ — **etapas posteriores**, não navegação vazia em P0.

## Requisitos de UX

- Interface original, sóbria, convidativa e legível; identidade visual a definir com base em acessibilidade, não só estética.
- Mobile-first, sem modal de cadastro, cookies ou rastreamento como requisito.
- Cards apresentam **o que já existe**, nível, tempo, formato e estado; não confundir intenções com produtos concluídos.
- Busca/filtros podem entrar em P0.2, após existir catálogo suficiente.
- Acesso a obra externa é sinalizado como tal; não incorporar automaticamente vídeos de serviços que rastreiam visitantes.
- Conteúdo essencial deve funcionar com JavaScript desativado; componentes interativos têm alternativa acessível.

## História do estudante

1. Abro a página num celular.
2. Em menos de um minuto sei que esta é uma universidade de agitação, educação e propaganda, conheço seus valores e descubro onde começar.
3. Localizo a trilha piloto ou um recurso publicado sem criar conta.
4. Identifico a origem dos textos, sua situação de revisão e sua disponibilidade.
5. Consigo voltar, continuar por navegação simples e acessar as fontes originais.

## Critérios de aceite P0

- [ ] Homepage nomeia explicitamente as três funções e os cinco valores; propósito e CTAs funcionais.
- [ ] Carta de princípios acessível no menu e no rodapé; não apresentar o projeto como fórum politicamente neutro.
- [ ] Navegação, rotas e páginas institucionais responsivas.
- [ ] Base pronta para catálogo com validação de status publicado.
- [ ] Boa experiência a 360 px, teclado, leitor de tela, internet lenta.
- [ ] Nenhum curso falso, link quebrado ou promessa de diploma/certificado.
- [ ] Build automatizado, revisão de links internos e metadados.
- [ ] Publicação no GitHub Pages verificada em sua URL real.
- [ ] Documentação para manutenção e adição de conteúdo.

## Não objetivos de P0

Backend, login, correção remota de provas, certificação, fórum, feed social, integração com APIs privadas, sistema de recomendação algorítmico e grandes catálogos sem curadoria.
