# James Stearns — portfolio

A Next.js + TypeScript portfolio. All copy comes from the résumé and lives in `lib/content.ts`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

- The intro film plays once per browser session. Add `?nointro` to the URL to skip it
  (handy when sharing a link), or use **Play intro** in the hero to watch it again.
- Visitors who prefer reduced motion never get the intro autoplayed.

## Résumé download

Put the PDF at `public/James_Stearns_Resume.pdf` and rebuild — a **Résumé** button appears in the hero.

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repository, keep the defaults, and deploy.

Or from this folder: `npx vercel` (preview) and `npx vercel --prod`.
