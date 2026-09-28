/**
 * Stamps today's date into build/sitemap.xml.
 *
 * The committed public/sitemap.xml had a lastmod of 2023-01-14 — three years
 * stale — because it was generated once by hand. Stamping it at build time
 * means it can never drift from the deploy again.
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'build', 'sitemap.xml');
if (!fs.existsSync(file)) { console.warn('[sitemap] build/sitemap.xml not found; skipped'); process.exit(0); }
const today = new Date().toISOString().slice(0, 10);
const xml = fs.readFileSync(file, 'utf8').replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(file, xml);
console.log(`[sitemap] lastmod stamped ${today}`);
