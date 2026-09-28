/**
 * Build-time prerender for the single-page site.
 *
 * CRA ships an empty <div id="root">, so every crawler that does not execute
 * JavaScript — Bing, LinkedIn, Slack, Facebook, and the AI crawlers — sees a
 * blank page. Google renders JS, but it is the only one that reliably does.
 *
 * This serves the finished build, lets React render it in headless Chrome,
 * then writes the rendered DOM back over build/index.html. There is exactly
 * one route, so no routing or shell-reuse complexity.
 *
 * The site still boots normally on top of this: main.jsx uses createRoot, so
 * React simply re-renders over the static markup rather than hydrating it,
 * which avoids mismatch errors.
 *
 * Failure policy: exits non-zero with a clear message rather than silently
 * shipping a JS-only build. PRERENDER_OPTIONAL=1 downgrades that to a warning.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BUILD = path.join(ROOT, 'build');
const PORT = 4179;

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml',
  '.pdf': 'application/pdf', '.woff2': 'font/woff2',
};

function fail(msg) {
  if (process.env.PRERENDER_OPTIONAL === '1') {
    console.warn(`[prerender] SKIPPED: ${msg}`);
    console.warn('[prerender] Shipping a JS-only build; non-JS crawlers will see an empty page.');
    process.exit(0);
  }
  console.error(`[prerender] FAILED: ${msg}`);
  process.exit(1);
}

(async () => {
  if (!fs.existsSync(path.join(BUILD, 'index.html'))) fail('build/index.html not found — run the build first.');

  let puppeteer;
  try { puppeteer = require('puppeteer'); }
  catch { fail('puppeteer is not installed (npm i -D puppeteer).'); }

  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let f = path.join(BUILD, p);
    if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(BUILD, 'index.html');
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
    res.end(fs.readFileSync(f));
  });
  await new Promise((r) => server.listen(PORT, r));

  let browser;
  try {
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  } catch (err) {
    server.close();
    fail(`could not launch Chrome — ${err.message}`);
  }

  try {
    const page = await browser.newPage();
    // A desktop viewport so any width-dependent rendering captures the desktop
    // layout rather than a phone one.
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0', timeout: 45000 });
    await page.waitForSelector('h1', { timeout: 15000 });

    // Scroll the whole page so the scroll-triggered reveal animations resolve
    // and their content is captured visible rather than mid-transition.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 1200));

    const html = await page.evaluate(() => `<!doctype html>${document.documentElement.outerHTML}`);
    fs.writeFileSync(path.join(BUILD, 'index.html'), html);

    const chars = html.replace(/[\s\S]*<div id="root">/, '').length;
    console.log(`[prerender] wrote build/index.html (${Math.round(html.length / 1024)} KB, ~${Math.round(chars / 1024)} KB inside #root)`);
  } catch (err) {
    await browser.close(); server.close();
    fail(err.message);
  }

  await browser.close();
  server.close();
})();
