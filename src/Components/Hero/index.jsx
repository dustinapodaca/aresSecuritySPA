import React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-scroll";

import hero from '../../assets/img/hero.jpg';
// import svgLogo from '../../assets/img/ares-logo.svg';

const navigation = [
  { name: 'Company', to: 'company', href: '/company' },
  { name: 'Services', to: 'services', href: '/services' },
  { name: 'Contact Us', to: 'contact', href: '/contact' },
  { name: 'Careers', to: 'careers', href: '/careers' },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl">
        <h1 className="sr-only">Ares Security</h1>
        <h2 className="sr-only">Colorado Security Services</h2>
        <h2 className="sr-only">Denver, Colorado Springs, Pueblo</h2>
        <h2 className="sr-only">Protection for People, Property and Plants</h2>
        <div className="relative z-10 bg-black pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="#151515"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <div>
                      <span className="sr-only">Ares Security</span>
                      {/* <img
                        alt="Ares Security"
                        className="h-8 w-auto sm:h-14"
                        src={svgLogo}
                      /> */}
                      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.66 425.89" className="fill-odgreen h-8 w-auto sm:h-14">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path className="cls-1" d="M407.66,421.78H250.86c-10.1,0-20.1-.5-30.1-2.2-12.2-2.1-24.1-5.4-35.6-10.3-13.3-5.6-25.6-12.7-36.9-21.6-23-18.1-40.2-40.7-51.1-67.9-4-10-6.8-20.4-8.8-31.1-2.3-12.3-2.6-24.7-2.1-37.2,.4-9.5,2-18.8,4.2-28,2.7-11.5,6.7-22.6,12-33.1,10.2-20.2,23.8-37.7,41.1-52.2,16.4-13.7,34.8-24,55.3-30.4,7.9-2.5,15.9-4.5,24.1-5.6,12.2-1.6,24.4-2.3,36.6-1.2,9.6,.8,19,2.4,28.3,4.8,15.8,4.2,30.7,10.7,44.5,19.5,24.6,15.8,43.8,36.6,57.3,62.5,5.1,9.8,9.1,20,12,30.6,3.6,13.5,5.8,27.2,5.8,41.2v159.9c.2,.8,.2,1.4,.2,2.3Zm-75.1-75.6v-10.4c0-23.4-.1-46.9,0-70.3,0-11.2-1.4-22.2-5.1-32.8-6.2-17.6-17.2-31.6-32.6-42.2-12.1-8.3-25.4-13.1-40.1-14.3-12.6-1-24.9,.1-36.7,4.5-14.5,5.4-26.8,13.9-36.8,25.9-10.2,12.3-16.7,26.2-19,42-2,13.9-.8,27.6,4,40.9,4.8,13.4,12.4,25,22.9,34.6,16.3,14.8,35.6,22.3,57.7,22.4h83.4c.7-.1,1.4,0,2.3-.3Z" />
                          <path className="cls-1" d="M195.06,425.28c-.8,.6-1.6,.4-2.4,.5-8.2,.4-16.4-.3-24.5-1.7-19.7-3.5-38.3-10.2-55.8-19.8-18.9-10.3-35.5-23.5-50.3-39-16-16.7-28.9-35.5-39.1-56.2-5.3-10.6-9.7-21.6-13.1-33-3.3-10.8-6-21.8-7.5-33-2-14.4-3.1-29-1.8-43.6,.9-10.9,2.3-21.7,4.9-32.3,3.4-13.9,8.2-27.4,14.5-40.2,6.7-13.4,14.6-26.1,24-37.8,20.1-25,44.4-45,72.7-60,12.6-6.7,25.8-12.3,39.4-16.8,10.4-3.4,21.1-6.1,31.9-8.1C207.16,.78,226.36-.52,245.86,.18c11.7,.4,23.4,1.8,34.9,3.8,20.2,3.5,39.8,9.3,58.7,17.3,2.2,1,4.5,1.9,7,3-11,24.3-21.9,48.5-32.9,72.8-3.5-1.2-6.9-2.3-10.2-3.5-12.3-4.2-24.8-7-37.7-8.2-7.8-.8-15.6-1.2-23.4-1-6.4,.1-12.7,.9-19,1.7-15.4,1.9-30.2,6.2-44.5,12.1-13.8,5.7-26.6,13.1-38.4,22.1-22.7,17.2-40.1,38.7-52.2,64.5-4.8,10.3-8.4,21-11.2,32-2.4,9.3-3.5,18.7-4.4,28.2-.8,8.5-.8,17.1,.1,25.6,.6,6,1,12,2.2,17.9,5.2,27.1,16.2,51.7,33,73.6,14.4,18.8,31.6,34.5,51.8,47,10.8,6.7,22.1,12.2,34.2,16,.2-.2,.6,0,1.2,.2Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden focus:outline-none">
                      <Popover.Button id="popOver1" className="inline-flex items-center justify-center rounded-md bg-litegreen p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:ring-odgreen">
                        <span className="sr-only">Open Main Menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-16 md:block md:space-x-12 md:pr-4">
                  {navigation.map((item) => (
                    <span key={item.name} style={{ cursor: 'pointer' }} className="font-medium text-white text-lg pb-1 link link-underline link-underline-black active"><Link href={item.href} to={item.to} spy={true} smooth={true}>
                      {item.name}
                    </Link></span>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      {/* <img
                        className="h-8 w-auto"
                        src={svgLogo}
                        alt="Ares Security"
                      /> */}
                      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.66 425.89" className="fill-odgreen h-8 w-auto">
                        <g id="Layer_1-2" data-name="Layer 1">
                          <path className="cls-1" d="M407.66,421.78H250.86c-10.1,0-20.1-.5-30.1-2.2-12.2-2.1-24.1-5.4-35.6-10.3-13.3-5.6-25.6-12.7-36.9-21.6-23-18.1-40.2-40.7-51.1-67.9-4-10-6.8-20.4-8.8-31.1-2.3-12.3-2.6-24.7-2.1-37.2,.4-9.5,2-18.8,4.2-28,2.7-11.5,6.7-22.6,12-33.1,10.2-20.2,23.8-37.7,41.1-52.2,16.4-13.7,34.8-24,55.3-30.4,7.9-2.5,15.9-4.5,24.1-5.6,12.2-1.6,24.4-2.3,36.6-1.2,9.6,.8,19,2.4,28.3,4.8,15.8,4.2,30.7,10.7,44.5,19.5,24.6,15.8,43.8,36.6,57.3,62.5,5.1,9.8,9.1,20,12,30.6,3.6,13.5,5.8,27.2,5.8,41.2v159.9c.2,.8,.2,1.4,.2,2.3Zm-75.1-75.6v-10.4c0-23.4-.1-46.9,0-70.3,0-11.2-1.4-22.2-5.1-32.8-6.2-17.6-17.2-31.6-32.6-42.2-12.1-8.3-25.4-13.1-40.1-14.3-12.6-1-24.9,.1-36.7,4.5-14.5,5.4-26.8,13.9-36.8,25.9-10.2,12.3-16.7,26.2-19,42-2,13.9-.8,27.6,4,40.9,4.8,13.4,12.4,25,22.9,34.6,16.3,14.8,35.6,22.3,57.7,22.4h83.4c.7-.1,1.4,0,2.3-.3Z" />
                          <path className="cls-1" d="M195.06,425.28c-.8,.6-1.6,.4-2.4,.5-8.2,.4-16.4-.3-24.5-1.7-19.7-3.5-38.3-10.2-55.8-19.8-18.9-10.3-35.5-23.5-50.3-39-16-16.7-28.9-35.5-39.1-56.2-5.3-10.6-9.7-21.6-13.1-33-3.3-10.8-6-21.8-7.5-33-2-14.4-3.1-29-1.8-43.6,.9-10.9,2.3-21.7,4.9-32.3,3.4-13.9,8.2-27.4,14.5-40.2,6.7-13.4,14.6-26.1,24-37.8,20.1-25,44.4-45,72.7-60,12.6-6.7,25.8-12.3,39.4-16.8,10.4-3.4,21.1-6.1,31.9-8.1C207.16,.78,226.36-.52,245.86,.18c11.7,.4,23.4,1.8,34.9,3.8,20.2,3.5,39.8,9.3,58.7,17.3,2.2,1,4.5,1.9,7,3-11,24.3-21.9,48.5-32.9,72.8-3.5-1.2-6.9-2.3-10.2-3.5-12.3-4.2-24.8-7-37.7-8.2-7.8-.8-15.6-1.2-23.4-1-6.4,.1-12.7,.9-19,1.7-15.4,1.9-30.2,6.2-44.5,12.1-13.8,5.7-26.6,13.1-38.4,22.1-22.7,17.2-40.1,38.7-52.2,64.5-4.8,10.3-8.4,21-11.2,32-2.4,9.3-3.5,18.7-4.4,28.2-.8,8.5-.8,17.1,.1,25.6,.6,6,1,12,2.2,17.9,5.2,27.1,16.2,51.7,33,73.6,14.4,18.8,31.6,34.5,51.8,47,10.8,6.7,22.1,12.2,34.2,16,.2-.2,.6,0,1.2,.2Z" />
                        </g>
                      </svg>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" id="popOver2">
                        <span className="sr-only">Close Main Menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <span
                        key={item.name}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      ><Link to={item.to} spy={true} smooth={true}>
                        {item.name}
                      </Link></span>
                    ))}
                    <div className="space-y-1 px-2 pt-1 pb-2">
                      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start mx-auto">
                        <a href="https://facebook.com/protectionbyares" target="_blank" rel="noreferrer" className="text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 fill-odgreen" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a href="https://instagram.com/protectionbyares" target="_blank" rel="noreferrer" className="ml-3 text-gray-500">
                          <svg fill="#FFFFFF" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 fill-odgreen" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/ares-security-llc/" target="_blank" rel="noreferrer" className="ml-3 text-gray-500">
                          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 fill-odgreen" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                        <a href="https://business.google.com/n/3308618090331569903/searchprofile?hl=en-US" target="_blank" rel="noreferrer" className="text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8 pb-2 ml-1 fill-odgreen" viewBox="0 0 56.6934 56.6934">
                            <path d="M19.6671,25.7867c-0.0075,1.7935,0,3.5869,0.0076,5.3803c3.0067,0.098,6.0208,0.0527,9.0275,0.098   c-1.3262,6.6689-10.3989,8.8315-15.199,4.4761C8.5674,31.9206,8.801,23.5412,13.9327,19.992   c3.5869-2.8635,8.6884-2.1552,12.2752,0.324c1.4092-1.3036,2.7278-2.6977,4.0013-4.1445   c-2.984-2.3812-6.6462-4.0767-10.5421-3.8958c-8.1307-0.2713-15.6059,6.8497-15.7415,14.9805   c-0.52,6.6462,3.8506,13.1644,10.0222,15.5155c6.1489,2.3661,14.031,0.7535,17.957-4.77c2.5922-3.4889,3.1498-7.98,2.8484-12.1999   C29.7194,25.7641,24.6933,25.7716,19.6671,25.7867z" /><path d="M49.0704,25.7641c-0.0151-1.4996-0.0226-3.0067-0.0301-4.5062c-1.4996,0-2.9916,0-4.4836,0   c-0.0151,1.4996-0.0301,2.9991-0.0377,4.5062c-1.5071,0.0075-3.0067,0.0151-4.5062,0.0302c0,1.4995,0,2.9915,0,4.4836   c1.4995,0.0151,3.0066,0.0302,4.5062,0.0452c0.0151,1.4996,0.0151,2.9991,0.0302,4.4987c1.4996,0,2.9916,0,4.4911,0   c0.0075-1.4996,0.015-2.9991,0.0301-4.5062c1.5071-0.0151,3.0067-0.0226,4.5062-0.0377c0-1.4921,0-2.9916,0-4.4836   C52.0771,25.7792,50.57,25.7792,49.0704,25.7641z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:mt-32">
                <span className="block xl:inline"><svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 174.87" className="fill-odgreen h-3/5 w-3/5 sm:h-2/4 sm:w-2/4 md:h-2/4 md:w-2/4 lg:w-3/5 lg:h-3/5 mb-3 sm:mx-auto lg:mx-0">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path className="cls-1" d="M446.4,70.68h30.9c.2,1.4,.1,2.8,.3,4.2,.8,4.2,3.3,6.6,7.6,7.3,1.9,.3,3.8,.4,5.7,.4h40.7c2.2,0,4.4-.2,6.5-.8,3.6-1,5.4-3.2,5.7-7v-1c.1-4.8-1.6-6.9-6.3-7.9-5.4-1.1-10.9-1.1-16.4-1.2-13.9-.3-27.8-.3-41.7-.9-5.9-.2-11.9-.6-17.7-2.3-2-.6-3.9-1.3-5.7-2.4-3.8-2.1-6.3-5.2-7.8-9.2-1.4-3.6-1.9-7.4-2.2-11.3-.3-5.4-.2-10.7,.3-16.1,1.1-10.6,7.4-16.8,17-19.9,4.5-1.5,9.2-1.9,13.9-2.1,19.1-.8,38.3-.4,57.4-.2,5.7,.1,11.4,.1,17,1.5,4,.9,7.8,2.4,11.3,4.8,3.6,2.5,6,5.9,7.3,10.1,1.6,5.5,1.6,11.1,1.6,16.8h-30.9c-.4-1-.2-2.2-.3-3.3-.4-3.1-2.1-5.1-5-6.1-1.9-.6-3.9-.9-5.9-.9h-39.9c-2.5,0-4.9,.3-7.2,1.1-4.7,1.7-6.7,7.6-3.9,11.8,.9,1.4,2.3,2.1,3.9,2.5,2.5,.6,5,.7,7.5,.8,14.1,.5,28.2,.7,42.3,.9,6.7,.1,13.4,.1,20,1,4.7,.6,9,2.2,13,4.5,4.6,2.7,7.4,6.9,8.9,12,1.4,4.6,1.7,9.4,1.7,14.1,0,5.1-.1,10.2-1.3,15.2-1.5,5.9-4.9,10.2-10.3,12.9-5.1,2.6-10.5,3.9-16.2,4.4-16.1,1.6-32.3,.9-48.4,.9-8,0-16-.1-24-.5-3.9-.2-7.8-.4-11.6-1.3-5.4-1.2-9.7-4.1-13.3-8.2-2.5-2.9-3.5-6.5-4-10.2-.7-4.7-.8-9.4-.7-14.1,0,.2,.2,0,.2-.3Z" />
                    <path className="cls-1" d="M166.2,1.48c.7-.3,1.4-.2,2-.2h91.8c4.9,0,9.8,.1,14.6,1.3,7.2,1.7,15.9,8.1,17.2,18.9,1.1,8.9,1.3,17.8,0,26.7-.9,6.4-4.5,10.7-10.4,13.2-2.1,.8-4.2,1.5-6.5,2.3,.7,.6,1.2,.7,1.8,.8,1.9,.5,3.8,1.1,5.6,1.9,5.3,2.3,8.1,6.4,9.1,11.9,.4,2.5,.7,5,.7,7.5,.1,5.8,.1,11.7,.1,17.5,0,.3-.1,.7-.1,1.1h-31.3c-.3-.7-.1-1.4-.1-2,.1-5,.3-10.1-.3-15.1v-.4c-.7-6-3.3-8.4-9.3-8.9-2.2-.2-4.5-.3-6.7-.3h-46.6v26.6h-31.6c0-34.2,0-68.5,0-102.8Zm31.6,50.2c.4,.3,.9,.3,1.2,.3h49.9c2.3,0,4.5-.2,6.7-.8,3.4-.9,5.4-3.1,6.1-6.6,.6-3.4,.6-6.9,0-10.3-.7-3.8-2.9-6.1-6.6-7-2.4-.6-4.8-.8-7.3-.8h-48.5c-.5,0-1.1-.2-1.5,.3,0,8.4,0,16.7,0,24.9Z" />
                    <path className="cls-1" d="M77.6,25.38c-.7,.4-.9,1.1-1.2,1.6-10.5,20-21.1,40.1-31.6,60.1-2.8,5.3-5.4,10.7-8.1,16.1-.4,.8-.9,1.3-1.9,1.3H2.2c-.2,0-.5,.1-.9-.4C19.8,69.88,38.3,35.68,56.8,1.38h41.4c18.8,34.2,37.6,68.5,56.6,103h-35.5c-13.9-26.2-27.8-52.6-41.7-79Z" />
                    <path className="cls-1" d="M314.3,104.38V41.88h108.5v21.2h-76.8v16.8h82.8v24.5h-114.5Z" />
                    <path className="cls-1" d="M427.1,25.28h-112.7V1.48h112.7c0,7.9,0,15.8,0,23.8Z" />
                    <path className="cls-1" d="M101.1,104.58H54.6c7.7-14.8,15.3-29.5,23-44.4,7.8,14.9,15.6,29.5,23.5,44.4Z" />
                    <path className="cls-1" d="M355.4,174.08h-7.1c-1,0-1.2-.6-1.5-1.3-1.9-4-3.8-8-5.7-12-.3-.7-.6-1.3-1-2h-7.5v15.1h-7.8v-39.2c.3-.4,.8-.2,1.2-.2h16.1c1.5,0,2.9,.2,4.3,.5,6.8,1.5,9.4,6.2,8.9,12.9-.3,4.8-2.6,8.3-7.6,9.8,2.6,5.5,5,10.8,7.7,16.4Zm-22.9-32.8v5.3c0,1.8-.2,3.5,.1,5.4h8.2c.6,0,1.2,0,1.8-.1,1.8-.2,3.3-.8,4.2-2.5,2-3.9-.2-7.9-4.6-8.1-3.1-.1-6.3,0-9.7,0Z" />
                    <path className="cls-1" d="M30.2,145.88h-7.6c-.1-.1-.2-.3-.2-.4-.4-2.4-1.5-4.3-4-5-2.8-.9-5.7-.7-8.2,.9-2.3,1.5-2.4,4.6-.3,6.5,1.1,1,2.6,1.6,4,2.1,2.4,.8,4.8,1.5,7.2,2.3,1.7,.6,3.3,1.3,4.9,2.2,6.1,3.6,7,11.3,1.9,16.3-1.4,1.4-3.1,2.3-4.9,2.9-4.8,1.5-9.7,1.6-14.4,.1-5.3-1.7-8.4-6-8.6-11.7H7.7c.1,.1,.2,.2,.2,.3,.9,4.2,2.6,5.7,6.8,6.1,2,.2,4-.1,5.8-1s2.7-2.3,2.8-4.3c.1-1.9-1-3.1-2.6-3.9-1.9-1.1-3.9-1.6-5.9-2.2-2.3-.6-4.6-1.3-6.7-2.3-.8-.4-1.7-.8-2.5-1.3C-1.7,149.38,0,140.08,4.9,136.68c2.3-1.6,4.8-2.4,7.5-2.8,3.2-.4,6.3-.3,9.4,.6,5.3,1.6,8.3,5.6,8.4,11.4Z" />
                    <path className="cls-1" d="M241.8,134.58h7.5c.3,.7,.2,1.4,.2,2v20.9c0,1.3,.1,2.5,.3,3.8,.8,4.3,3.9,7,8.1,7s7.1-2.8,7.8-7.1c.2-1.3,.3-2.6,.3-4v-20.3c0-.7-.1-1.4,.2-2.2h7.3c.5,.4,.3,1,.3,1.5v22c0,2.5-.4,5-1.3,7.4-2,5.1-5.8,8.1-11.2,9-2.5,.4-5,.4-7.5-.1-6.6-1.4-11-6.3-11.9-13.2-.2-1.5-.3-3-.3-4.6v-19.9c-.1-.7-.3-1.4,.2-2.2Z" />
                    <path className="cls-1" d="M192.3,147.58h-7.8c-.1-.1-.2-.2-.2-.3-.9-4.1-3.7-6.2-7.6-6.7-4.1-.5-7.4,.9-9.6,4.6-2,3.4-2.4,7.2-2.1,11.1,.2,2.5,.8,4.8,2,7,3.3,6,10.5,5.7,14.1,3.2,1.7-1.2,2.5-2.5,3.4-5.3h8c-.4,4.1-2.2,7.3-5.2,9.7-3.8,3.1-8.2,4.1-13,3.9-10.9-.5-15.6-8.2-16.9-15.9-.8-4.5-.4-9,1.1-13.3,3.1-8.4,9.9-12.5,18.8-11.8,3.5,.3,6.7,1.4,9.5,3.5,3.1,2.7,5.1,6,5.5,10.3Z" />
                    <path className="cls-1" d="M538.8,134.58h8.3c3.1,5.6,6.2,11.3,9.4,17.2,3.2-5.9,6.3-11.5,9.4-17.2h8.1c.1,.8-.4,1.2-.7,1.8-4,7.1-8,14.3-12.1,21.4-.5,1-.8,1.9-.8,3v11.1c0,.7,.1,1.3-.2,2.1h-7.4c-.5-.4-.3-1-.3-1.5v-11.7c0-1.2-.3-2.2-.9-3.2-4-6.9-7.9-13.9-11.8-20.9-.2-.6-.5-1.2-1-2.1Z" />
                    <path className="cls-1" d="M480.6,174.08h-8v-32.7h-11.3v-6.7h30.4c.2,2.2,.2,4.3,.1,6.6h-11.2v32.8Z" />
                    <path className="cls-1" d="M109.3,173.98h-28.6v-23h26.8v6.5h-18.9v9.9h20.7v6.6Z" />
                    <path className="cls-1" d="M412.8,173.98h-7.7v-39.4h7.7v39.4Z" />
                    <path className="cls-1" d="M109.4,134.68v6.4h-28.6v-6.4h28.6Z" />
                  </g>
                </svg></span>{' '}
                <span className="block text-litegreen xl:inline">protection for 
                  <span className="fade-in-text1">
                    <span className='text-odgreen'> people</span>
                  </span>
                </span>{' '}
                <span className="block text-litegreen xl:inline">
                  <span className="fade-in-text2">
                    <span className='text-odgreen'>property</span>
                  </span>
                <span> &</span>
                  <span className="fade-in-text3">
                    <span className='text-odgreen'> plants.</span>
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-litegreen text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-7 md:text-xl lg:mx-0 lg:mb-8">
                Ares strives to be Colorado's first Security Company dedicated to the Cannabis Industry. We understand that MJ Dispensaries face different obstacles than ordinary businesses, which is why all guards are trained on Product, Distribution, and MED regulations.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div id="heroImg" className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 fade-in-hero">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src={hero}
          alt="aresGuards"
        />
      </div>
    </div>
  )
}