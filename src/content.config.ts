import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const docs = defineCollection({
	// Load Markdown and MDX files in the `src/content/docs/` directory.
	loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
			title: z.string(),
			description: z.string(),
			// 可选的侧边栏顺序
			sidebar_order: z.number().optional(),
			// 可选的父分类
			category: z.string().optional(),
		})
});

export const collections = { blog, docs };
