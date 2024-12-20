// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
// 2. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/blog' }),
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      // In frontmatter, dates written without quotes around them are interpreted as Date objects
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      image: image().optional(),
      hero: image().optional(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
