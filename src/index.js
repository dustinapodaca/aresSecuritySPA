import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

/**
 * Start at the top on refresh.
 *
 * Browsers restore the previous scroll position when a page is reloaded. On a
 * single scrolling page that drops the visitor back into the middle of the
 * site rather than at the hero, so scroll restoration is turned off and the
 * position reset explicitly.
 *
 * Skipped when the URL carries a hash: that is someone deliberately linking to
 * a section, and overriding it would break the link. The nav itself uses
 * react-scroll element names rather than hashes, so it is unaffected.
 */
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
if (!window.location.hash) {
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
