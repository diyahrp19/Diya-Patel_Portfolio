# Diya Patel Portfolio

🔗 Live Demo: https://diya-patel-portfolio.vercel.app/

A personal portfolio website built to showcase my projects, skills, and experience as an IT student.

## Tech stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Framer Motion · React Router

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:8080
```

Other scripts:

| Command | Description |
| --- | --- |
| `npm run build` | Production build (outputs `dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Deploying to Vercel

1. Import this repository (Vite is auto-detected).
2. Deploy. `vercel.json` already rewrites all routes to `index.html` so the SPA router (and the 404 page) work on any path.

No environment variables are required — the contact section uses plain `mailto:` / social links.

## Project structure

```
src/
├── components/          # Reusable UI building blocks
│   ├── ui/              # shadcn/ui primitives actually used by the app
│   ├── Navigation.tsx   # Fixed nav with scroll-spy + mobile menu
│   ├── ScrollToTop.tsx  # Back-to-top button
│   ├── AnimatedSection.tsx / SectionHeading.tsx  # Shared section wrappers
├── sections/            # Major portfolio sections
│   ├── Hero.tsx         # Typewriter hero
│   ├── About.tsx / Skills.tsx / Projects.tsx / Contact.tsx
├── lib/
│   ├── constants.ts     # Navigation items + personal links
│   └── utils.ts         # cn() helper
└── pages/               # Index (single-page portfolio), NotFound
```

