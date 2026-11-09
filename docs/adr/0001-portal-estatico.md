# ADR-0001 — Começar por portal estático versionado

- **Status:** proposto, a validar na primeira issue técnica.
- **Data:** 2026-11-08.
- **Contexto:** projeto novo, sem código prévio, público amplo e necessidade de custo baixo, manutenção comunitária, conteúdo auditável, inclusão digital e preservação de privacidade.

## Decisão proposta

Usar Astro com TypeScript para compilar um portal estático; manter aulas em Markdown e dados de catálogo/provas em arquivos estruturados; hospedar inicialmente em GitHub Pages.

## Razões

1. Conteúdo e revisão vivem no Git, com histórico e PR.
2. Entrega de HTML estático rápido, funcional sem login, backend ou assinatura.
3. É possível gerar rotas e páginas por metadados, com JavaScript apenas onde necessário.
4. Permite começar pequeno e migrar futuramente se requisitos reais justificarem.

## Alternativas

- **HTML/CSS/JS puro:** excelente para uma homepage, mas exige criar manualmente o pipeline de coleções e validação quando as aulas aumentarem.
- **Docusaurus/MkDocs:** sólidos para documentação, porém experiências pedagógicas e catálogos mais flexíveis podem exigir customização.
- **SPA com backend/LMS:** mais capacidades imediatas, custo e complexidade prematuros; dados pessoais e autenticação sem necessidade em P0.

## Consequências

- Simulados locais não têm correção remota nem prevenção de cola; isso é aceitável porque são formativos.
- Sem upload de atividades no P0; rubricas e modelos podem ser baixados.
- Scripts e dependências devem ser minimizados e auditados.
- Deve haver testes automáticos de build, links internos e metadados antes da publicação.

## Revisão

Reabrir a decisão se for demonstrada uma necessidade real de inscrição, tutoria, emissão de certificados ou colaboração entre estudantes. Registrar riscos de privacidade, segurança e governança antes de criar backend.
