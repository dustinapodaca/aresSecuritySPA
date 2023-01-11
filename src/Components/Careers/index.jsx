import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import * as Popover from '@radix-ui/react-popover';
import './careers.styles.scss';

// import apply from '../../assets/img/apply.jpg';
import aresGroup from '../../assets/img/aresGroup.jpg';
import indeedLogo from '../../assets/img/indeed-logo.svg';

export default function Careers() {
  return (
    <>
      <section id="careers" className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 pt-20 pb-4 justify-center items-center">
          <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1} animateOnce={true}>
            <img className="lg:w-4/6 md:w-3/6 w-5/6 mb-7 object-cover object-center rounded mx-auto" alt="hero" src={aresGroup}/>
          </AnimationOnScroll>
            <div className="w-full md:w-2/3 flex flex-col mb-24 items-center text-center">
            <h2 className="font-bold text-4xl sm:text-4xl text-black mb-6">
              Join Our <span className="text-litegreen">Team</span></h2>
            <p className="mb-7 leading-relaxed">Our philosophy is simple - the well-being of our employees is most important to us. We believe that happy and healthy employees are the foundation of a great company, and that balance between work, play, and rest is a must. At Ares, you are more than just a security guard. Here, you will have the opportunity to work in customer service, managerial, marketing, and sales roles- because as we grow, we want you to grow with us! We encourage anybody who is serious about security and knowledgeable about cannabis to apply.</p>
              <div className="flex w-full justify-center items-end">
              {/* <a href="https://www.indeed.com/cmp/Ares-Security-1" target="_blank" rel="noreferrer">
                <button className="inline-flex text-black bg-litegreen border-0 py-3 px-10 focus:outline-none hover:bg-odgreen hover:text-white transition ease-in-out rounded-lg text-lg">Apply Now</button>
              </a> */}
              <Popover.Root>
                <Popover.Trigger className="PopoverTrigger cursor-pointer inline-flex text-black bg-litegreen border-0 py-3 px-8 focus:outline-none hover:bg-odgreen hover:text-white transition ease-in-out rounded-lg text-lg">Apply Now</Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className="PopoverContent" sideOffset={5}>
                    <Popover.Arrow className="PopoverArrow" />
                    <div className='flex flex-row justify-evenly'>
                      <a href="https://www.facebook.com/job_opening/435974781336313/?source=share" target="_blank" rel="noreferrer">
                        <button className="hover:shadow-md hover:shadow-odgreen transition ease-in-out bg-odgreen px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded cursor-pointer">
                          <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                          <span>Facebook</span>
                        </button>
                      </a>
                      <a href="https://www.indeed.com/cmp/Ares-Security-1" target="_blank" rel="noreferrer">
                        <button className="hover:shadow-md hover:shadow-odgreen transition ease-in-out bg-odgreen px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded cursor-pointer hover:">
                          <img src={indeedLogo} alt="indeed logo" className="w-16 h-5 fill-current" />
                          {/* <span>Indeed</span> */}
                        </button>
                      </a>
                    </div>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}
