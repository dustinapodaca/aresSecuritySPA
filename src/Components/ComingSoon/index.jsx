import React from 'react';

/**
 * Slim "new site coming soon" notice.
 *
 * Sits above the hero as the first thing in the document, so it reads as a
 * site-wide status strip rather than as page content. Intentionally
 * non-dismissible and link-free: it is a placeholder signal, not a CTA, and
 * there is nowhere to send people yet.
 *
 * Background is absolute #000000 rather than the palette's `black`, which is
 * remapped to ink #1f1f1f so the hero panel and its angled divider stay in
 * step. This strip is meant to read a shade darker than the hero beneath it.
 */
export default function ComingSoon() {
  return (
    <div className="bg-[#000000] text-white">
      {/* items-start below sm: the second half of the sentence wraps to its own
          line on mobile, and items-center was centring the dot against the
          two-line block, which parked it between the lines. Aligning to the top
          and nudging down by 5px sits it on the optical centre of the "NEW SITE
          COMING SOON" line instead, matching how it reads on one line at sm+. */}
      <div className="container-ares py-2.5 flex flex-wrap items-start sm:items-center justify-center gap-x-3 gap-y-1 text-center">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-litegreen flex-shrink-0 mt-[5px] sm:mt-0"
        />
        <p className="text-xs sm:text-sm tracking-wide m-0">
          <span className="font-semibold uppercase tracking-[0.14em]">New site coming soon</span>
          <span className="hidden sm:inline text-gray-400"> — </span>
          <span className="block sm:inline text-gray-100">
            a redesigned aressecurity.co is on the way.
          </span>
        </p>
      </div>
    </div>
  );
}
