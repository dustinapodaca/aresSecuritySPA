import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './careers.styles.scss';

import aresGroup from '../../assets/img/aresGroup.webp';

export default function Careers() {
  return (
    <>
      <section id="careers" className="text-gray-600 body-font">
        <div className="container-ares flex flex-col pt-12 pb-4 md:pt-16 lg:pt-16 justify-center items-center">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            duration={1}
            animateOnce={true}
            offset={50}
          >
            <img
              className="lg:w-4/6 md:w-5/6 w-5/6 mb-7 object-cover object-center rounded mx-auto"
              alt="hero"
              src={aresGroup}
            />
          </AnimationOnScroll>
          <div className="w-full lg:w-4/6 md:w-5/6 flex flex-col mb-24 items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mid mb-4">
              Careers
            </p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 mb-6">
              Join Our <span className="italic font-light text-mid">Team</span>
            </h2>
            <p className="mb-10 leading-relaxed lg:text-lg text-body-color">
              Our philosophy is simple - the well-being of our employees is most
              important to us. We believe that happy and healthy employees are
              the foundation of a great company, and that balance between work,
              play, and rest is a must. At Ares, you are more than just a
              security guard. Here, you will have the opportunity to work in
              customer service, managerial, marketing, and sales roles- because
              as we grow, we want you to grow with us.
            </p>
            <div className="flex w-full justify-center items-end">
              <a
                href="https://www.indeed.com/cmp/Ares-Security-1"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-flex text-black bg-litegreen border-0 py-3 px-8 focus:outline-none hover:bg-odgreen hover:text-white transition ease-in-out rounded-lg text-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
