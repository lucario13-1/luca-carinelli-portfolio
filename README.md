# Luca Carinelli — Personal Portfolio

A personal engineering portfolio built with Next.js, TypeScript, Tailwind
CSS, Framer Motion, and shadcn/ui.

**If you're the site owner and want to know how to preview, edit, add
projects/photos, or deploy this site, read [OWNER_GUIDE.md](./OWNER_GUIDE.md)
— it's written for a non-developer and covers everything.**

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/            Routes (one folder per page: about, experience, projects, resume, skills, contact)
  components/     UI building blocks, organized by section (home/, about/, projects/, ui/, ...)
  data/           Editable content — projects, experience, skills, site copy (see OWNER_GUIDE.md)
  lib/            Small shared utilities
public/
  images/         Photos, renders, logos
  resume/         Resume PDF
  downloads/      Downloadable project reports
```

## Scripts

```bash
npm run dev      # local dev server with hot reload
npm run build    # production build + type check
npm run lint     # lint the codebase
npm run start    # run the production build locally
```

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion ·
shadcn/ui · Lucide icons · next-themes (dark mode)
