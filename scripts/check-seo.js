/**
 * Post-build SEO assertions. Run with `npm run check:seo`.
 *
 * Catches the failure modes that are invisible in a browser but expensive in
 * search: a body that never prerendered, a missing or duplicated head tag, a
 * second <h1>, a canonical pointing at the wrong host, or the unreplaced
 * "baseurl" placeholder that shipped in robots.txt for years.
 */
const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');
const HOST = 'https://aressecurity.co';
const errors = [];
const warnings = [];

const read = (f) => fs.readFileSync(path.join(BUILD, f), 'utf8');
const exists = (f) => fs.existsSync(path.join(BUILD, f));

if (!exists('index.html')) { console.error('[check:seo] build/index.html missing — run the build first.'); process.exit(1); }

const raw = read('index.html');
const html = raw.replace(/<!--[\s\S]*?-->/g, '');
const head = html.slice(0, html.indexOf('</head>'));
const body = html.slice(html.indexOf('<body'));
const count = (s, re) => (s.match(re) || []).length;
const attr = (s, re) => { const m = s.match(re); return m ? m[1] : null; };
/** Titles and descriptions are HTML-escaped in the output, so "&" arrives as
    "&amp;" and inflates the length by four. Google measures the rendered text,
    so compare and count decoded. */
const decode = (v) =>
  v == null
    ? null
    : v
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
        .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));

// --- prerender actually captured content ---
const i = body.indexOf('<div id="root">');
const root = i >= 0 ? body.slice(i + 15) : '';
if (root.length < 5000) errors.push(`#root holds only ${root.length} chars — the page did not prerender`);

// --- head tags, exactly one of each (only inside <head>; SVGs carry <title> too) ---
const nTitle = count(head, /<title[\s>]/g);
if (nTitle !== 1) errors.push(`expected 1 <title> in <head>, found ${nTitle}`);
const nDesc = count(head, /<meta[^>]+name="description"/g);
if (nDesc !== 1) errors.push(`expected 1 meta description, found ${nDesc}`);
const nCanon = count(head, /<link[^>]+rel="canonical"/g);
if (nCanon !== 1) errors.push(`expected 1 canonical, found ${nCanon}`);

const canon = attr(head, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/);
if (canon && !canon.startsWith(HOST)) errors.push(`canonical "${canon}" is not on ${HOST}`);
const ogUrl = attr(head, /<meta[^>]+property="og:url"[^>]+content="([^"]+)"/);
if (!ogUrl || !ogUrl.startsWith(HOST)) errors.push(`og:url "${ogUrl}" is not on ${HOST}`);

const title = decode(attr(head, /<title[^>]*>([^<]*)<\/title>/));
if (title && title.length > 60) warnings.push(`title is ${title.length} chars (>60 may truncate)`);
const desc = decode(attr(head, /<meta[^>]+name="description"[^>]+content="([^"]*)"/));
if (desc && desc.length > 160) warnings.push(`description is ${desc.length} chars (>160 may truncate)`);

// --- social preview ---
for (const tag of ['og:title', 'og:description', 'og:image', 'og:type']) {
  if (!head.includes(`property="${tag}"`)) errors.push(`missing ${tag}`);
}
if (!head.includes('name="twitter:card"')) warnings.push('missing twitter:card');

// --- one h1 ---
const nH1 = count(body, /<h1[\s>]/g);
if (nH1 !== 1) errors.push(`expected exactly 1 <h1>, found ${nH1}`);

// --- structured data ---
let ld = 0;
for (const m of head.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)) {
  try { JSON.parse(m[1]); ld++; } catch (e) { errors.push(`invalid JSON-LD — ${e.message}`); }
}
if (!ld) errors.push('no JSON-LD found');

// --- images ---
const imgs = body.match(/<img[^>]*>/g) || [];
const noAlt = imgs.filter((t) => !/\salt=/.test(t));
if (noAlt.length) errors.push(`${noAlt.length} <img> without an alt attribute`);

// --- robots + sitemap ---
if (!exists('robots.txt')) errors.push('robots.txt missing');
else {
  const r = read('robots.txt');
  if (/baseurl/i.test(r)) errors.push('robots.txt still contains the "baseurl" placeholder');
  if (!r.includes(`${HOST}/sitemap.xml`)) errors.push('robots.txt does not point at the sitemap on the production host');
}
if (!exists('sitemap.xml')) errors.push('sitemap.xml missing');
else {
  const x = read('sitemap.xml');
  for (const loc of [...x.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])) {
    if (!loc.startsWith(HOST)) errors.push(`sitemap URL "${loc}" is not on ${HOST}`);
  }
  const lm = attr(x, /<lastmod>([^<]+)<\/lastmod>/);
  if (lm) {
    const age = (Date.now() - Date.parse(lm)) / 86400000;
    if (age > 2) warnings.push(`sitemap lastmod is ${Math.round(age)} days old — is it being stamped at build time?`);
  }
}
if (!exists('og-ares-security.jpg')) errors.push('og-ares-security.jpg missing (og:image would 404)');

for (const w of warnings) console.warn(`  warn  ${w}`);
if (errors.length) {
  console.error(`\n[check:seo] ${errors.length} error(s):`);
  for (const e of errors) console.error(`  ERROR ${e}`);
  process.exit(1);
}
console.log(`\n[check:seo] PASS — prerendered ${Math.round(root.length / 1024)} KB, 1 h1, ${ld} JSON-LD block(s), ${imgs.length} images all with alt${warnings.length ? `, ${warnings.length} warning(s)` : ''}`);
