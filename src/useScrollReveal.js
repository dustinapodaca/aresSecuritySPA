import { useEffect } from 'react';

/**
 * Scroll-driven motion for the one-page site.
 *
 * Ported from the new site's useScrollInViewObserver, minus the parts that
 * only its multi-page layouts need. Two observers, because the two effects
 * want opposite trigger points:
 *
 *   [data-reveal]        fires as soon as a sliver of the element clears the
 *                        bottom of the viewport, so content is already settling
 *                        by the time the reader reaches it. One-shot: the
 *                        element is unobserved immediately after, so scrolling
 *                        back up never replays it.
 *
 *   [data-scroll-active] tracks whether the element is at the optical centre of
 *                        the viewport and keeps data-in-view in sync both ways.
 *                        Used to mirror hover styles on touch devices. Add
 *                        data-scroll-once to latch it on first crossing instead
 *                        — that is what the certification cascade uses, so the
 *                        cards do not re-stagger every time the row passes by.
 *
 * Targets are collected once on mount. Every section is statically rendered, so
 * there is nothing to re-scan for.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const reveals = document.querySelectorAll('[data-reveal]');
    const actives = document.querySelectorAll('[data-scroll-active]');
    if (!reveals.length && !actives.length) return;

    const revealIo = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute('data-revealed', 'true');
          io.unobserve(entry.target);
        });
      },
      // Shrink the bottom edge slightly so the reveal starts just after the
      // element enters, rather than the instant its first pixel appears.
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    );
    reveals.forEach((el) => revealIo.observe(el));

    const activeIo = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.setAttribute('data-in-view', 'true');
            if (el.hasAttribute('data-scroll-once')) io.unobserve(el);
          } else if (!el.hasAttribute('data-scroll-once')) {
            el.setAttribute('data-in-view', 'false');
          }
        });
      },
      // Middle band of the viewport: the element has to actually arrive at the
      // centre, not merely be on screen.
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 },
    );
    actives.forEach((el) => activeIo.observe(el));

    return () => {
      revealIo.disconnect();
      activeIo.disconnect();
    };
  }, []);
}
