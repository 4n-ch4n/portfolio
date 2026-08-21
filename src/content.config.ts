import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    title: z.string(),
    kind: z.enum(["personal", "work"]),
    stack: z.array(z.string()).min(1),
    body: z.array(z.string()).min(1),
    repo: z.url().optional(),
    demo: z.url().optional(),
  }),
});

const experience = defineCollection({
  loader: file("src/data/experience.json"),
  schema: z.object({
    id: z.string(),
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
    url: z.url(),
    highlights: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
      }),
    ),
    skillsUsed: z.array(z.string()).min(1),
  }),
});

export const collections = { projects, experience };
