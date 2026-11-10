import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const status = z.enum(['rascunho', 'revisao', 'publicado', 'arquivado']);
const level = z.enum(['introdutorio', 'intermediario', 'avancado']);
const kind = z.enum(['educacao', 'agitacao', 'propaganda', 'investigacao']);
const identifier = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use letras minúsculas, números e hífens');
const date = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use AAAA-MM-DD')
  .refine((value) => !Number.isNaN(Date.parse(value + 'T00:00:00Z')), 'Data inválida');

const common = {
  title: z.string().min(5),
  description: z.string().min(20),
  status,
  author: z.string().min(3),
  updatedAt: date,
  reviewedAt: date.optional(),
  license: z.string().min(3),
  topics: z.array(z.string().min(2)).min(1),
  modalities: z.array(kind).min(1)
};

const trilhas = defineCollection({
  loader: glob({ base: './src/content/trilhas', pattern: '**/*.md' }),
  schema: z.object({
    ...common,
    level,
    objectives: z.array(z.string().min(10)).min(1),
    prerequisiteTrackIds: z.array(identifier).default([])
  }).superRefine((data, ctx) => {
    if (data.status === 'publicado' && !data.reviewedAt) {
      ctx.addIssue({ code: 'custom', path: ['reviewedAt'], message: 'Trilha publicada exige data de revisão' });
    }
  })
});

const aulas = defineCollection({
  loader: glob({ base: './src/content/aulas', pattern: '**/*.md' }),
  schema: z.object({
    ...common,
    trackId: identifier,
    order: z.number().int().positive(),
    durationMinutes: z.number().int().min(5).max(480),
    level,
    learningGoals: z.array(z.string().min(10)).min(1),
    resourceIds: z.array(identifier).default([]),
    assessmentIds: z.array(identifier).default([])
  }).superRefine((data, ctx) => {
    if (data.status === 'publicado' && !data.reviewedAt) {
      ctx.addIssue({ code: 'custom', path: ['reviewedAt'], message: 'Aula publicada exige data de revisão' });
    }
  })
});

const recursos = defineCollection({
  loader: glob({ base: './src/content/recursos', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(20),
    status,
    url: z.string().url().startsWith('https://', 'Exigir HTTPS'),
    kind: z.enum(['livro', 'artigo', 'video', 'canal', 'documento', 'dados', 'ferramenta']),
    authors: z.array(z.string().min(2)).min(1),
    publisher: z.string().min(2),
    language: z.string().min(2),
    sourceClass: z.enum(['primaria', 'secundaria', 'mista']),
    perspective: z.string().min(5),
    relevance: z.string().min(20),
    rights: z.enum(['link-apenas', 'licenca-aberta-verificada', 'dominio-publico-verificado']),
    checkedAt: date.optional(),
    updatedAt: date,
    publishedAt: date.optional(),
    topics: z.array(z.string().min(2)).min(1)
  }).superRefine((data, ctx) => {
    if (data.status === 'publicado' && !data.checkedAt) {
      ctx.addIssue({ code: 'custom', path: ['checkedAt'], message: 'Fonte publicada exige data de conferência de URL' });
    }
  })
});

const answerOption = z.object({
  id: identifier,
  text: z.string().min(12),
  feedback: z.string().min(20),
  correct: z.boolean()
});

const avaliacoes = defineCollection({
  loader: glob({ base: './src/content/avaliacoes', pattern: '**/*.json' }),
  schema: z.object({
    title: z.string().min(5),
    description: z.string().min(20),
    status,
    lessonId: identifier,
    type: z.enum(['multipla-escolha', 'resposta-aberta', 'projeto']),
    prompt: z.string().min(20),
    author: z.string().min(3),
    updatedAt: date,
    reviewedAt: date.optional(),
    referenceIds: z.array(identifier).default([]),
    rubric: z.array(z.string().min(10)).min(1),
    feedback: z.string().min(15),
    options: z.array(answerOption).optional()
  }).superRefine((data, ctx) => {
    if (data.status === 'publicado' && !data.reviewedAt) {
      ctx.addIssue({ code: 'custom', path: ['reviewedAt'], message: 'Avaliação publicada exige data de revisão' });
    }
    if (data.type === 'multipla-escolha') {
      if (!data.options || data.options.length < 3 || data.options.length > 5) {
        ctx.addIssue({ code: 'custom', path: ['options'], message: 'Múltipla escolha exige de 3 a 5 alternativas justificadas' });
      } else {
        if (new Set(data.options.map((option) => option.id)).size !== data.options.length) {
          ctx.addIssue({ code: 'custom', path: ['options'], message: 'IDs de alternativas precisam ser únicos' });
        }
        if (data.options.filter((option) => option.correct).length !== 1) {
          ctx.addIssue({ code: 'custom', path: ['options'], message: 'Uma única alternativa deve ser conceitualmente correta' });
        }
      }
    } else if ((data.options ?? []).length > 0) {
      ctx.addIssue({ code: 'custom', path: ['options'], message: 'Questões abertas e projetos usam rubrica, sem gabarito automático' });
    }
  })
});

export const collections = { trilhas, aulas, recursos, avaliacoes };
