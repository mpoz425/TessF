/**
 * Writes public/sitemap.xml from the files in pages/. Runs before `next build`
 * so the sitemap can never drift out of sync with the routes that exist.
 */
import { readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE_URL = process.env.SITE_URL ?? 'https://tessflanagan.com';
const PAGES_DIR = join(process.cwd(), 'pages');
const EXCLUDED = new Set(['_app', '_document', '404', '500']);

const routes = readdirSync(PAGES_DIR, { withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.(t|j)sx?$/.test(entry.name))
  .map((entry) => entry.name.replace(/\.(t|j)sx?$/, ''))
  .filter((name) => !EXCLUDED.has(name))
  .map((name) => (name === 'index' ? '/' : `/${name}`))
  .sort((a, b) => a.length - b.length || a.localeCompare(b));

const lastmod = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '' : route}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), xml);
console.log(`sitemap.xml written with ${routes.length} routes`);
