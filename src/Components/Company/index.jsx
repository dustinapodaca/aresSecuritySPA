import React from 'react';

export default function Company() {
  return (
    <>
      <section id="company" className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Women Owned & Operated
            </h2>
            <p className="lg:text-lg leading-relaxed xl:w-3/5 lg:w-3/4 mx-auto text-gray-500s">
              Ares Security is led by innovative women dedicated to
              raising the bar and setting a new standard for security services and careers, welcoming
              professionals of all backgrounds to excel.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="mt-3 w-20 h-1 rounded-full bg-black inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-8 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/2 flex flex-col text-center items-center rounded-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-indigo-500 mb-6 mt-4 flex-shrink-0">
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
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
                  Integrity
                </h2>
                <p className="leading-relaxed lg:text-lg px-10">
                  We believe that communication is key, and that integrity and
                  transparency are the foundation for building trust and true
                  security with our clients.
                </p>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                ></svg>
              </div>
            </div>
            <div className="p-4 md:w-1/2 flex flex-col text-center items-center rounded-xl">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-white mb-6 mt-4 flex-shrink-0">
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
                <h2 className="text-gray-900 text-xl title-font font-medium mb-3">
                  Personnel
                </h2>
                <p className="leading-relaxed lg:text-lg px-10">
                  Ares Security guards are the backbone of our business. We
                  believe that well-trained, healthy employees provide a quality
                  service to all our clients.
                </p>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                ></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

