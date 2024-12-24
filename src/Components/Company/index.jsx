import React from 'react';

export default function Company() {
  return (
    <>
      <section id="company" className="text-gray-600 body-font">
        <div className="container px-5 py-20 pb-32 md:pb-24 mx-auto">
          {/* The key is flex-col for mobile, md:flex-row for desktop */}
          <div className="flex flex-col md:flex-row sm:-m-4 -mx-4 -mb-8 -mt-4 md:space-x-8 space-y-6 md:space-y-0">
            {/* Card 1: Integrity */}
            <div
              className="
              p-4
              md:w-1/3
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
                <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                  Integrity
                </h2>
                <p className="leading-relaxed lg:text-lg lg:px-10 md:px-6">
                  We believe that communication is key, and that integrity and
                  transparency are the foundation for building trust and true
                  security with our clients.
                </p>
              </div>
            </div>

            {/* Card 2: Women Owned & Operated */}
            <div
              className="
              p-4
              md:w-2/5
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
                  <path d="M12 21c-0.58-0.48-1.15-0.95-1.71-1.43C5.33 15.32 2 12.36 2 8.5 2 5.42 4.42 3 7.5 3c1.84 0 3.52 0.99 4.5 2.49C13 3.99 14.68 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.86-3.33 6.82-8.29 11.07-0.56 0.48-1.13 0.95-1.71 1.43z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xl md:text-2xl title-font font-semibold mb-3">
                  Women Owned &amp; Operated
                </h2>
                <p className="leading-relaxed text-lg lg:text-lg px-10 pb-8">
                  Ares Security is led by innovative women dedicated to
                  revolutionizing and setting a new standard of excellence in
                  security services and careers.
                </p>
              </div>
            </div>

            {/* Card 3: Personnel */}
            <div
              className="
              p-4
              md:w-1/3
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
                <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                  Personnel
                </h2>
                <p className="leading-relaxed lg:text-lg lg:px-10 md:px-6">
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

