import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 「文章」集合：src/content/posts/ 下的每个 .md 文件就是一篇文章
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['zh', 'en']).default('zh'),
    summary: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
