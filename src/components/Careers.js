import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// import apply from '../assets/img/apply.jpg';
import aresGroup from '../assets/img/aresGroup.jpg';

export default function Careers() {
  return (
    <>
      <section id="careers" className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 pt-24 pb-8 justify-center items-center">
          <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1} animateOnce={true}>
            <img className="lg:w-4/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded mx-auto" alt="hero" src={aresGroup}/>
          </AnimationOnScroll>
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h2 className="font-bold text-4xl sm:text-4xl text-black mb-8">
              Join Our <span className="text-litegreen">Team</span></h2>
            <p className="mb-8 leading-relaxed">Our philosphy is simple - the wellbeing of our employees is most important to us. We believe that happy and healthy employees are the foundation of a great company, and that balance between work, play, and rest is a must. At Ares, you are more than just a security guard. Here, you will have the opportunity to work in customer service, managerial, marketing, and sales roles- because as we grow, we want you to grow with us! We encourage anybody who is serious about security and knowledgeable about cannabis to apply.</p>
              <div className="flex w-full justify-center items-end">
              <a href="https://www.aressecurity.co/applicationform/" target="_blank" rel="noreferrer">
                <button className="inline-flex text-black bg-litegreen border-0 py-3 px-10 focus:outline-none hover:bg-odgreen hover:text-white transition ease-in-out rounded-lg text-lg">Apply Now</button>
              </a>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
