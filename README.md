# Anthony Londoño Calle — Portfolio

Personal portfolio, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static output, no UI framework — content is validated at build time through Astro content collections.

Live at [4n-ch4n.github.io/portfolio](https://4n-ch4n.github.io/portfolio).

## Stack

- **Astro 6** — static site generation, zero client-side framework
- **Tailwind CSS v4** — CSS-first config via `@theme` in [`src/styles/global.css`](src/styles/global.css)
- **Astro content collections** — [`src/content.config.ts`](src/content.config.ts) validates `src/data/*.json` with Zod at build time

## Project structure

```text
src/
├── components/     # Astro components — one section per file
├── content.config.ts   # Zod schemas for the projects/experience collections
├── data/            # Content: projects.json, experience.json, skills.ts, education.ts
├── layouts/
│   └── Layout.astro # HTML shell, SEO/meta, fonts
├── pages/
│   └── index.astro  # The only route
└── styles/
    └── global.css   # Design tokens (@theme) + global resets
```

## Commands

All commands run from the project root:

| Command             | Action                                                |
| :------------------ | :---------------------------------------------------- |
| `pnpm install`      | Install dependencies                                  |
| `pnpm dev`          | Start the dev server at `localhost:4321`              |
| `pnpm build`        | Type-check content and build to `./dist/`             |
| `pnpm preview`      | Preview the production build locally                  |
| `pnpm check`        | Run `astro check` (TypeScript + template diagnostics) |
| `pnpm format`       | Format the codebase with Prettier                     |
| `pnpm format:check` | Check formatting without writing                      |

## Deployment

Pushes to `main` build and deploy to GitHub Pages via [`.github/workflows/astro.yml`](.github/workflows/astro.yml).

## Editing content

Projects and work experience live in [`src/data/projects.json`](src/data/projects.json) and [`src/data/experience.json`](src/data/experience.json), validated against the schemas in `src/content.config.ts`. Skills and education are plain typed modules in `src/data/skills.ts` and `src/data/education.ts`. A malformed entry (bad URL, missing field) fails `pnpm build` instead of shipping silently.
