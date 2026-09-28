import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

/**
 * Scroll position on load.
 *
 * Browsers restore the previous scroll position when a page is reloaded. On a
 * single scrolling page that drops the visitor back into the middle of the
 * site rather than at the hero, so scroll restoration is turned off and the
 * position is set explicitly below.
 *
 * Two cases:
 *
 *  - No hash: start at the top.
 *  - A hash naming one of the page's sections: scroll there. This is how the
 *    legacy URLs work. /company, /services, /contact and /careers still appear
 *    as sitelinks in Google from when this was a multi-page site; public/.htaccess
 *    301s each one to the matching anchor, so the visitor arrives at /#company
 *    and expects to be looking at that section rather than at the hero.
 *
 * The scroll is deferred: React has not painted at this point, and the hero
 * photo and web font both change the page height after first paint, so a scroll
 * measured too early lands short. It is reasserted on `load` (once everything
 * has settled) and once more a beat later for anything that settles after that.
 */
const SECTION_IDS = ['company', 'services', 'capability', 'contact', 'careers'];

// Zero on purpose. Chrome does its own jump to the fragment once parsing
// finishes and it lands the section flush against the top of the viewport.
// Any other value here would be a tug-of-war with that jump, visible as a
// twitch. There is no sticky header to clear, so flush is the right place.
const SCROLL_OFFSET = 0;

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const targetId = window.location.hash.replace(/^#/, '');

if (SECTION_IDS.includes(targetId)) {
  /**
   * Land on the requested section.
   *
   * The first attempt runs right now, synchronously. The build is prerendered,
   * so the section already exists in the parsed document before React mounts —
   * which means the visitor never sees the hero first and then a jump.
   *
   * After that the target is re-measured for a short while, because the layout
   * is still settling: React re-renders over the static markup, the hero photo
   * decodes, and the web font swaps in. Each of those changes the page height,
   * and a scroll measured before them lands short. The loop stops early once
   * the measurement repeats, so in the common case it is over in a few frames.
   */
  const DURATION = 1600;
  const started = Date.now();
  let timer = null;

  const stop = () => {
    if (timer !== null) clearInterval(timer);
    timer = null;
  };

  const attempt = () => {
    const el = document.getElementById(targetId);
    if (el) {
      const top = Math.max(
        0,
        Math.round(el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET)
      );
      // Compared against where the page actually is, not against the last
      // target. The browser does its own jump to the fragment once parsing
      // finishes, which lands at offset 0 and can undo an earlier correction;
      // caching the target would make this skip the fix-up.
      if (Math.abs(window.pageYOffset - top) > 1) window.scrollTo(0, top);
    }
    if (Date.now() - started > DURATION) stop();
  };

  attempt();
  requestAnimationFrame(attempt);
  timer = setInterval(attempt, 60);
  window.addEventListener('load', attempt);

  // Hand control back the moment the visitor scrolls themselves. Listening for
  // intent (wheel, touch, keys) rather than for 'scroll', which our own
  // scrollTo calls would otherwise trigger.
  ['wheel', 'touchmove', 'keydown'].forEach((evt) =>
    window.addEventListener(evt, stop, { passive: true, once: true })
  );
} else {
  window.scrollTo(0, 0);
  // Images and fonts settle after first paint and can shift layout height, so
  // reassert once loading finishes.
  window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
