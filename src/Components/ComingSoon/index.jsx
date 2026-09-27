import React from 'react';

/**
 * Slim "new site coming soon" notice.
 *
 * Sits above the hero as the first thing in the document, so it reads as a
 * site-wide status strip rather than as page content. Intentionally
 * non-dismissible and link-free: it is a placeholder signal, not a CTA, and
 * there is nowhere to send people yet.
 */
export default function ComingSoon() {
  return (
    <div className="bg-odgreen text-white">
      <div className="container mx-auto px-5 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 rounded-full bg-litegreen flex-shrink-0"
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
