import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Example() {
  return (
    <>
      <section class="text-white bg-black body-font">
        <div class="container px-5 py-24 ml-auto flex flex-wrap">
          <Fade left>
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img alt="feature" class="object-cover object-center h-full w-full mx-auto max-w-xl" src="https://www.aressecurity.co/wp-content/uploads/2021/08/IMG_4647-2-2-scaled.jpg"/>
            </div>
          </Fade>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-32 lg:pr-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-odgreen text-indigo-400 flex-shrink-0 mt-2 mb-9">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-4xl title-font font-medium mb-8">Services</h2>
                <p class="leading-relaxed text-lg leading-8 mb-3">Our guards are trained on product, distribution, and MED regulations, tailoring our services to your dispensary’s needs. GPS perimeter patrol scans, daily reports, and logbook software generates security analytics for your business, while our client portal allows management to review incidents, submit requests, and recall incoming/outgoing personnel. Contact us today for a quote!</p>
              </div>
            </div>
            <div className="sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex w-64 items-center justify-center rounded-md border border-transparent bg-odgreen shadow px-8 py-3 text-base font-medium text-white hover:bg-white hover:text-odgreen md:py-3 md:px-10 md:text-lg mx-auto transition-colors	duration-200 ease-in-out shadow"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}