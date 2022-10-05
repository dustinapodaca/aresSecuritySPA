import React from 'react';

export default function Company() {
  return (
    <>
      <section id="company" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Women Owned & Operated.</h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">We are Colorado’s first women-owned and operated security company dedicated to protecting Cannabis and those who understand it’s potential for a brighter future. Ares is honored to be here for you as we navigate this emerging industry, together.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-black inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/2 flex flex-col text-center items-center rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Integrity</h2>
                <p className="leading-relaxed text-base px-10">We believe that communication is key, and that integrity and transparency are the foundation for building trust and true security with our clients.</p>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  </svg>
              </div>
            </div>
            <div className="p-4 md:w-1/2 flex flex-col text-center items-center rounded-lg">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-white mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Personnel</h2>
                <p className="leading-relaxed text-base px-10">Ares Security guards are the backbone of our business. Our belief is that well-trained, healthy employees provide a quality service to all our clients.</p>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

