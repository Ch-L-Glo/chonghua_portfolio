# Chonghua Li — Portfolio

Bilingual portfolio built with Next.js App Router, React and TypeScript. English is the default; `?lang=zh` selects Chinese. Production domain: https://chonghuali.com/.

## Development

Use Node.js 22 or newer (Next.js requires at least 20.9).

```sh
npm ci
npm run dev
npm run build
```

The build exports static HTML into `out/` and copies it into `dist/`. No Node.js server is needed for this portfolio.

## Cloudflare Pages

Existing settings remain compatible: build command `python3 build.py`, output directory `dist`. The Python entry point only runs `npm ci` and the Next.js build; it no longer generates pages.

Recommended settings when updating the dashboard: build command `npm run build`, output directory `dist`, production branch `main`, Node.js 22. `out` can also be used as the output directory. Keep the custom domain attached to the existing Pages project.

Commits to main trigger publication only when Cloudflare's Git integration and automatic production deployments are enabled. ChatGPT previews are separate. Check Cloudflare Deployments for build results.

## Content and visuals

- `components/Portfolio.tsx`: layout and bilingual interface copy.
- `data/content.json`: bilingual project summaries and career history.
- `app/globals.css`: typography, spacing, breakpoints and reduced-motion-aware animations.
- `public/profile.jpeg`: original photo displayed with a circular CSS crop; the person is not AI edited.
- `app/work/[slug]/page.tsx`: statically generated project routes, preserving original URLs.

Project images are intentional placeholders. Add reviewed screenshots to `public/work/` and replace the placeholder rendering when content is ready. Do not invent results or metrics. Existing case summaries are retained for future refinement.

## Validation

Production build and TypeScript validation; browser checks for language switching, project navigation, filtering and inventory calculation. Dependencies are locked in package-lock.json.
