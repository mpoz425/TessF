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

## Pages

| Route       | Contents                                                            |
| ----------- | ------------------------------------------------------------------- |
| `/`         | Hero, current appointments, about, and the research themes            |
| `/research` | The three research themes with their papers, plus forthcoming work    |
| `/news`     | Press coverage                                                        |
| `/contact`  | Email, office address, and profile links                              |
| `/cv`       | Redirects to the CV PDF                                               |

## Updating the CV

The CV is served as a plain PDF rather than a rendered page. To update it, replace
`public/Teresa_Flanagan_CV.pdf` with the new file, keeping the same filename. Nothing
else needs to change; the navigation, the hero button, and the `/cv` redirect all
point at that path via `site.cvPath`.

Note that the PDF is publicly downloadable exactly as supplied, including any contact
details printed on it.

## Editing content

Nothing that changes regularly lives in a page component. To update the site, edit one
of three typed data files and the change propagates everywhere it appears.

### `data/site.ts`

Name, role, affiliation, email, canonical URL, the SEBO Lab link, the primary
navigation, external profile links, and the three "currently" facts under the hero.

Navigation entries take an optional `external: true`, which renders them as a plain
link that opens in a new tab. The CV uses this to point at the PDF.

**Photos.** The home page uses `public/images/tess-speaking.jpg`. The research
page heading uses `tess-museum-aibo.jpg`. The contact page uses `tess-portrait.jpg`,
configured as `site.contactPhoto` in `data/site.ts`. To replace any of them, drop in
a file of the same name (or update the path and pixel dimensions).

### `data/publications.ts`

Published work in `publications`, and work under review or in preparation in
`inProgress`. A published entry looks like this:

```ts
{
  id: 'hri26-help',                       // unique, used to link from research themes
  title: 'Can you help me? ...',
  authors: '**Flanagan, T.**, Zhang, J., ...',  // ** ** bolds your name automatically
  year: 2026,                             // a number, or the string 'in press'
  venue: 'Proceedings of the 2026 ACM/IEEE ...',
  detail: '15(42), 179–204',              // optional volume/issue/pages
  type: 'journal',                        // journal | conference | chapter
  summary: 'Plain-language finding ...',  // optional
  links: { doi: '...', pdf: '...', code: '...', osf: '...' },  // all optional
}
```

A paper appears on the research page by having its `id` listed in a theme's `related`
array in `data/content.ts`.

### `data/content.ts`

Research themes, the positions and education timelines, awards, methods, and the
`press` items that fill the In the News page.

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
class and backed by a failsafe timer, so content is never hidden from crawlers, from
users without JavaScript, or when hydration fails. The effect is disabled entirely
under `prefers-reduced-motion`.

## Images

Photos live in `public/images/` and are rendered through `next/image` with explicit
`sizes`. Replacing a photo means dropping in a file of the same name and updating the
`width`/`height` props where it is used.

## Deployment

Any Next.js host works. On Vercel the defaults are correct — build command
`npm run build`, no environment variables required. Set `SITE_URL` at build time if
the domain ever changes, so the generated sitemap points at the right host; the
canonical URL used in page metadata is `site.url` in `data/site.ts`.
