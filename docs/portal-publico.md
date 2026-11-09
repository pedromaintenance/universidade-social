# Primeiro artefato — P0: Portal público principal

**Status:** PLANEJADO. Este documento é um brief de produto, não uma página já publicada.

## Problema

Quem deseja estudar criticamente a realidade social encontra fontes dispersas, jargão, materiais sem progressão didática e recomendações baseadas em visibilidade algorítmica. É preciso oferecer um **ponto de entrada público e confiável**.

## Proposta de valor

Acessar um caminho de estudo sem conta, identificar temas, conhecer o método de pesquisa, encontrar futuras aulas e recursos curados e entender como participar. Não prometer cursos inexistentes.

## Hierarquia da página inicial

1. **Cabeçalho:** Universidade Social, Trilhas, Biblioteca, Método, Sobre.
2. **Hero:** proposta, para quem se destina e dois CTAs: «Começar a estudar» e «Explorar temas».
3. **Como funciona:** problema real → conceitos → fontes → análise → exercício/projeto → práxis.
4. **Explorar áreas:** trabalho e classes; Estado e Direito; colonialismo e dependência; economia política; história; Brasil e Amazônia.
5. **Estudo inicial:** única trilha piloto quando estiver realmente publicada; antes disso, etiqueta «Em preparação».
6. **Biblioteca e ferramentas:** módulos previstos com status visível, sem cards de conteúdo falso.
7. **Método e transparência:** orientação teórica explícita, critérios de evidência, correções.
8. **Contribuir:** links para repositório, issues e regras editoriais.
9. **Rodapé:** licenças, privacidade, acessibilidade, status do projeto.

## Rotas propostas

- / — portal principal.
- /trilhas/ — catálogo, mesmo que inicialmente só contenha itens publicados.
- /trilhas/[slug]/ — detalhe e progressão de estudo.
- /aulas/[slug]/ — leitura com fontes e exercícios.
- /biblioteca/ — catálogo curado de materiais externos.
- /metodo/ — princípios e protocolo editorial.
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
2. Em menos de um minuto entendo o propósito, o enfoque e onde começar.
3. Localizo a trilha piloto ou um recurso publicado sem criar conta.
4. Identifico a origem dos textos, sua situação de revisão e sua disponibilidade.
5. Consigo voltar, continuar por navegação simples e acessar as fontes originais.

## Critérios de aceite P0

- [ ] Homepage com conteúdo verdadeiro, propósito e CTAs funcionais.
- [ ] Navegação, rotas e páginas institucionais responsivas.
- [ ] Base pronta para catálogo com validação de status publicado.
- [ ] Boa experiência a 360 px, teclado, leitor de tela, internet lenta.
- [ ] Nenhum curso falso, link quebrado ou promessa de diploma/certificado.
- [ ] Build automatizado, revisão de links internos e metadados.
- [ ] Publicação no GitHub Pages verificada em sua URL real.
- [ ] Documentação para manutenção e adição de conteúdo.

## Não objetivos de P0

Backend, login, correção remota de provas, certificação, fórum, feed social, integração com APIs privadas, sistema de recomendação algorítmico e grandes catálogos sem curadoria.
