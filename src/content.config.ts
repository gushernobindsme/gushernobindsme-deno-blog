import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./posts" }),
  schema: z.object({
    title: z.string(),
    publish_date: z.coerce.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts };
