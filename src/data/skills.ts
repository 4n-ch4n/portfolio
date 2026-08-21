export interface Skill {
  name: string;
  /** Simple Icons slug. Omitted where the project has no brand mark. */
  icon?: string;
}

export interface SkillLayer {
  label: string;
  skills: Skill[];
}

/** Ordered the way a request travels through a system, not by confidence. */
export const skillLayers: SkillLayer[] = [
  {
    label: "Interface",
    skills: [
      { name: "Angular", icon: "angular" },
      { name: "React", icon: "react" },
      { name: "Astro", icon: "astro" },
    ],
  },
  {
    label: "Edge & transport",
    skills: [
      { name: "Hono", icon: "hono" },
      { name: "Express", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "NATS", icon: "natsdotio" },
      { name: "GraphQL", icon: "graphql" },
      { name: "WebSockets" },
    ],
  },
  {
    label: "Services & runtime",
    skills: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "InversifyJS" },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    label: "Delivery",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
];

export const learning: Skill = { name: "Go", icon: "go" };

export const languages = [
  { language: "Spanish", level: "Native" },
  { language: "English", level: "B2" },
];
