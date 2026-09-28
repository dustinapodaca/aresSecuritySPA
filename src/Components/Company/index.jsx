import React from 'react';

export default function Company() {
  return (
    <>
      <section id="company" className="text-gray-600 body-font">
        <div className="container-ares py-20 pb-32 md:pb-20">
          {/* Section heading, matching the Capability section's treatment:
              small tracked eyebrow, then a light-weight heading whose second
              half takes the muted italic accent. */}
          <div className="mb-12 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mid mb-4">
              Our Company
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900">
              What we stand for
            </h2>
          </div>

          {/* The key is flex-col for mobile, md:flex-row for desktop */}
          <div className="flex flex-col md:flex-row sm:-m-4 -mx-4 -mb-8 -mt-4 md:space-x-8 space-y-6 md:space-y-0">
            {/* Card 1: Integrity */}
            <div
              className="
              p-4
              flex flex-col text-center items-center
              rounded-xl
              order-2 md:order-1
            "
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-indigo-500 mb-6 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-gray-900 text-xl font-semibold tracking-tight mb-3">
                  Integrity
                </h3>
                <p className="leading-relaxed lg:text-lg px-10 md:px-0">
                  We believe that communication is key, and that integrity and
                  transparency are the foundation for building trust and true
                  security with our clients.
                </p>
              </div>
            </div>

            {/* Card 2: Reliability */}
            <div
              className="
              p-4
              flex flex-col text-center items-center
              rounded-xl
              order-1 md:order-2
            "
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-indigo-500 mb-6 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-gray-900 text-xl font-semibold tracking-tight mb-3">
                  Reliability
                </h3>
                <p className="leading-relaxed text-md lg:text-lg px-10 md:px-0 pb-8">
                  On-call coverage is written into every contract, and
                  leadership works the first shift on every new post. A site
                  that isn't staffed isn't a discount &mdash; it's an exposure.
                </p>
              </div>
            </div>

            {/* Card 3: Personnel */}
            <div
              className="
              p-4
              flex flex-col text-center items-center
              rounded-xl
              order-3 md:order-3
            "
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-white mb-6 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-gray-900 text-xl font-semibold tracking-tight mb-3">
                  Personnel
                </h3>
                <p className="leading-relaxed lg:text-lg px-10 md:px-0">
                  Ares Security guards are the backbone of our business. We
                  believe that well-trained, healthy employees provide a quality
                  service to all our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

