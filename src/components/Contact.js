import React from 'react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="text-gray-400 bg-black body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-odgreen rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe id="map" width="100%" height="100%" title="map" className="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589687.5626687733!2d-105.9444551171875!3d38.90435052382222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87134327f4199271%3A0xd2591dd0e6d83a81!2sAres%20Security%20LLC!5e0!3m2!1sen!2sus!4v1664942444750!5m2!1sen!2sus"/>
            <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">SERVICE AREAS</h2>
                <p className="mt-1 text-white">- Denver <br />- Colorado Springs <br /> - Pueblo</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a href="mailto: contact@aressecurity.co" className="text-litegreen leading-relaxed sm:mx-auto md:mr-auto lg:mr-24">contact@aressecurity.co</a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed text-litegreen">719-696-3966</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <span className="block mb-2 text-xl text-base text-white font-semibold">
              Contact Us
            </span>
            <h2
              className="
                  text-litegreen
                  mb-2
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
            >
              HOW CAN WE HELP YOU?
            </h2>
            <div className="relative mb-4">
              <label for="name" className="leading-7 text-sm text-white">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-litegreen focus:border-odgreen focus:ring-2 focus:ring-litegreen text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-litegreen focus:border-odgreen focus:ring-2 focus:ring-litegreen text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-white">Message</label>
              <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-litegreen focus:border-indigo-500 focus:ring-2 focus:ring-litegreen h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-odgreen border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
            <p className="text-xs text-white text-opacity-90 mt-3">© 2022 Ares Security LLC</p>
          </div>
        </div>
      </section>
    </>
  );
}