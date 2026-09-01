# tessflanagan.com

Personal academic website for Teresa (Tess) Flanagan — Postdoctoral Scholar at the
Data Science Institute, University of Chicago.

Built with [Next.js](https://nextjs.org/) (pages router), TypeScript, and Tailwind CSS.
Every page is statically generated; there is no database and no server runtime.

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Development server with hot reload                          |
| `npm run build`     | Regenerates `sitemap.xml`, then builds the production site   |
| `npm start`         | Serves the production build                                  |
| `npm run lint`      | ESLint via `next lint`                                       |
| `npm run typecheck` | TypeScript with no emit                                      |

## Editing content

Nothing that changes regularly lives in a page component. To update the site,
edit one of three typed data files and the change propagates everywhere it appears.

### `data/site.ts`

Name, role, affiliation, email, canonical URL, the primary navigation, external
profile links, and the three "currently" facts under the hero.

### `data/publications.ts`

The full publication list. Each entry looks like this:

```ts
{
  id: 'hri26-help',                       // unique, also used to link from research themes
  title: 'Can You Help Me? ...',
  authors: '**Flanagan, T.**, Zhang, J. C., ...',  // ** ** bolds your name automatically
  year: 2026,
  venue: 'Proceedings of the 21st ACM/IEEE ...',
  detail: 'pp. 465–474',                  // optional volume/issue/pages
  type: 'conference',                     // journal | conference | chapter | dissertation | thesis
  citations: 19,                          // optional
  award: 'Best Paper',                    // optional, renders a badge
  featured: true,                         // optional, promotes it to the home page
  summary: 'Plain-language finding ...',  // shown on featured entries only
  links: { doi: '...', pdf: '...', code: '...', osf: '...' },  // all optional
}
```

Adding a paper to the top of the array is all that is required — the publications
page, the CV page, the year grouping, the type filters, and the citation total all
derive from this list. Set `featured: true` on the papers that should appear on the
home page.

### `data/content.ts`

Research themes, the positions and education timelines, awards, teaching, mentorship,
outreach, methods, and the news items on the home page.

Research themes reference publications by `id` through their `related` array, so a
paper added to `publications.ts` can be surfaced under a theme without duplicating it.

## Design system

Tokens live in `tailwind.config.js`; component classes live in `styles/globals.css`.

- **Type** — Fraunces (display/headings), Inter (body), JetBrains Mono (labels and
  metadata), all self-hosted at build time via `next/font`
- **Color** — `paper` warm off-white surfaces, `ink` text scale, `clay` rust accent,
  `moss` secondary accent. All text pairings meet WCAG AA contrast.
- **Primitives** — `.shell`, `.section`, `.eyebrow`, `.card`, `.tag-*`, `.btn-*`,
  `.link`, `.rule-heading`

Add `data-reveal` to any element to have it fade in on scroll, and
`data-reveal-delay="80"` to stagger it. The hiding styles are gated behind a `js`
class, so content is never hidden from crawlers or users without JavaScript, and the
whole effect is disabled under `prefers-reduced-motion`.

## Images

Photos live in `public/images/` and are rendered through `next/image` with explicit
`sizes`. Replacing a photo means dropping in a file of the same name and updating the
`width`/`height` props where it is used.

## Deployment

Any Next.js host works. On Vercel the defaults are correct — build command
`npm run build`, no environment variables required. Set `SITE_URL` at build time if
the domain ever changes, so the generated sitemap points at the right host; the
canonical URL used in page metadata is `site.url` in `data/site.ts`.
