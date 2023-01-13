import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="text-white bg-black body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <span
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
              onClick={this.props.scrollToTop}
              style={{ cursor: "pointer" }}
            >
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 407.66 425.89"
                stroke="transparent"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-12 h-12 text-white p-2 bg-odgreen fill-litegreen rounded-lg"
              >
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M407.66,421.78H250.86c-10.1,0-20.1-.5-30.1-2.2-12.2-2.1-24.1-5.4-35.6-10.3-13.3-5.6-25.6-12.7-36.9-21.6-23-18.1-40.2-40.7-51.1-67.9-4-10-6.8-20.4-8.8-31.1-2.3-12.3-2.6-24.7-2.1-37.2,.4-9.5,2-18.8,4.2-28,2.7-11.5,6.7-22.6,12-33.1,10.2-20.2,23.8-37.7,41.1-52.2,16.4-13.7,34.8-24,55.3-30.4,7.9-2.5,15.9-4.5,24.1-5.6,12.2-1.6,24.4-2.3,36.6-1.2,9.6,.8,19,2.4,28.3,4.8,15.8,4.2,30.7,10.7,44.5,19.5,24.6,15.8,43.8,36.6,57.3,62.5,5.1,9.8,9.1,20,12,30.6,3.6,13.5,5.8,27.2,5.8,41.2v159.9c.2,.8,.2,1.4,.2,2.3Zm-75.1-75.6v-10.4c0-23.4-.1-46.9,0-70.3,0-11.2-1.4-22.2-5.1-32.8-6.2-17.6-17.2-31.6-32.6-42.2-12.1-8.3-25.4-13.1-40.1-14.3-12.6-1-24.9,.1-36.7,4.5-14.5,5.4-26.8,13.9-36.8,25.9-10.2,12.3-16.7,26.2-19,42-2,13.9-.8,27.6,4,40.9,4.8,13.4,12.4,25,22.9,34.6,16.3,14.8,35.6,22.3,57.7,22.4h83.4c.7-.1,1.4,0,2.3-.3Z"
                  />
                  <path
                    className="cls-1"
                    d="M195.06,425.28c-.8,.6-1.6,.4-2.4,.5-8.2,.4-16.4-.3-24.5-1.7-19.7-3.5-38.3-10.2-55.8-19.8-18.9-10.3-35.5-23.5-50.3-39-16-16.7-28.9-35.5-39.1-56.2-5.3-10.6-9.7-21.6-13.1-33-3.3-10.8-6-21.8-7.5-33-2-14.4-3.1-29-1.8-43.6,.9-10.9,2.3-21.7,4.9-32.3,3.4-13.9,8.2-27.4,14.5-40.2,6.7-13.4,14.6-26.1,24-37.8,20.1-25,44.4-45,72.7-60,12.6-6.7,25.8-12.3,39.4-16.8,10.4-3.4,21.1-6.1,31.9-8.1C207.16,.78,226.36-.52,245.86,.18c11.7,.4,23.4,1.8,34.9,3.8,20.2,3.5,39.8,9.3,58.7,17.3,2.2,1,4.5,1.9,7,3-11,24.3-21.9,48.5-32.9,72.8-3.5-1.2-6.9-2.3-10.2-3.5-12.3-4.2-24.8-7-37.7-8.2-7.8-.8-15.6-1.2-23.4-1-6.4,.1-12.7,.9-19,1.7-15.4,1.9-30.2,6.2-44.5,12.1-13.8,5.7-26.6,13.1-38.4,22.1-22.7,17.2-40.1,38.7-52.2,64.5-4.8,10.3-8.4,21-11.2,32-2.4,9.3-3.5,18.7-4.4,28.2-.8,8.5-.8,17.1,.1,25.6,.6,6,1,12,2.2,17.9,5.2,27.1,16.2,51.7,33,73.6,14.4,18.8,31.6,34.5,51.8,47,10.8,6.7,22.1,12.2,34.2,16,.2-.2,.6,0,1.2,.2Z"
                  />
                </g>
              </svg>
              <h2 className="ml-3 text-xl text-litegreen">Ares Security</h2>
            </span>
            <p className="text-litegreen text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              © 2023 Ares Security LLC —
              <a
                href="https://linkedin.com/in/dustinapodaca"
                className="text-gray-600 ml-1 text-litegreen"
                rel="noopener noreferrer"
                target="_blank"
              >
                @dustinapodaca
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://facebook.com/protectionbyares"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 fill-litegreen"
                  viewBox="0 0 24 24"
                >
                  <title>Facebook</title>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/protectionbyares"
                target="_blank"
                rel="noreferrer"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.1"
                  className="w-5 h-5 stroke-litegreen"
                  viewBox="0 0 24 24"
                >
                  <title>Instagram</title>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://business.google.com/n/3308618090331569903/searchprofile?hl=en-US"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  fill="currentColor"
                  className="w-4 h-4 fill-litegreen"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 640 640"
                  style={{ marginTop: 2.5, marginLeft: 13 }}
                >
                  <title>Google My Business</title>
                  <path d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/ares-security-llc/"
                target="_blank"
                rel="noreferrer"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="currentColor"
                  width="800px"
                  height="800px"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-litegreen"
                  style={{ marginLeft: 1 }}
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;




      // <footer class="text-gray-600 body-font bg-litegreen">
      //   <div class="container px-5 py-24 mx-auto">
      //     <div class="flex flex-wrap md:text-left text-center order-first">
      //       <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      //         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      //         <nav class="list-none mb-10">
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Company</a>
      //           </li>
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Services</a>
      //           </li>
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
      //           </li>
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Apply</a>
      //           </li>
      //         </nav>
      //       </div>
      //       <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      //         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
      //         <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
      //           <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
      //             <label for="footer-field" class="leading-7 text-sm text-gray-600">Placeholder</label>
      //             <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      //           </div>
      //           <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
      //         </div>
      //         <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
      //           <br class="lg:block hidden" />waistcoat green juice
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      //   <div class="bg-odgreen">
      //     <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      //       <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      //         <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.66 425.89" stroke="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" class="w-12 h-12 text-white p-2 bg-litegreen fill-odgreen rounded-lg">
      //           <g id="Layer_1-2" data-name="Layer 1">
      //             <path class="cls-1" d="M407.66,421.78H250.86c-10.1,0-20.1-.5-30.1-2.2-12.2-2.1-24.1-5.4-35.6-10.3-13.3-5.6-25.6-12.7-36.9-21.6-23-18.1-40.2-40.7-51.1-67.9-4-10-6.8-20.4-8.8-31.1-2.3-12.3-2.6-24.7-2.1-37.2,.4-9.5,2-18.8,4.2-28,2.7-11.5,6.7-22.6,12-33.1,10.2-20.2,23.8-37.7,41.1-52.2,16.4-13.7,34.8-24,55.3-30.4,7.9-2.5,15.9-4.5,24.1-5.6,12.2-1.6,24.4-2.3,36.6-1.2,9.6,.8,19,2.4,28.3,4.8,15.8,4.2,30.7,10.7,44.5,19.5,24.6,15.8,43.8,36.6,57.3,62.5,5.1,9.8,9.1,20,12,30.6,3.6,13.5,5.8,27.2,5.8,41.2v159.9c.2,.8,.2,1.4,.2,2.3Zm-75.1-75.6v-10.4c0-23.4-.1-46.9,0-70.3,0-11.2-1.4-22.2-5.1-32.8-6.2-17.6-17.2-31.6-32.6-42.2-12.1-8.3-25.4-13.1-40.1-14.3-12.6-1-24.9,.1-36.7,4.5-14.5,5.4-26.8,13.9-36.8,25.9-10.2,12.3-16.7,26.2-19,42-2,13.9-.8,27.6,4,40.9,4.8,13.4,12.4,25,22.9,34.6,16.3,14.8,35.6,22.3,57.7,22.4h83.4c.7-.1,1.4,0,2.3-.3Z" />
      //             <path class="cls-1" d="M195.06,425.28c-.8,.6-1.6,.4-2.4,.5-8.2,.4-16.4-.3-24.5-1.7-19.7-3.5-38.3-10.2-55.8-19.8-18.9-10.3-35.5-23.5-50.3-39-16-16.7-28.9-35.5-39.1-56.2-5.3-10.6-9.7-21.6-13.1-33-3.3-10.8-6-21.8-7.5-33-2-14.4-3.1-29-1.8-43.6,.9-10.9,2.3-21.7,4.9-32.3,3.4-13.9,8.2-27.4,14.5-40.2,6.7-13.4,14.6-26.1,24-37.8,20.1-25,44.4-45,72.7-60,12.6-6.7,25.8-12.3,39.4-16.8,10.4-3.4,21.1-6.1,31.9-8.1C207.16,.78,226.36-.52,245.86,.18c11.7,.4,23.4,1.8,34.9,3.8,20.2,3.5,39.8,9.3,58.7,17.3,2.2,1,4.5,1.9,7,3-11,24.3-21.9,48.5-32.9,72.8-3.5-1.2-6.9-2.3-10.2-3.5-12.3-4.2-24.8-7-37.7-8.2-7.8-.8-15.6-1.2-23.4-1-6.4,.1-12.7,.9-19,1.7-15.4,1.9-30.2,6.2-44.5,12.1-13.8,5.7-26.6,13.1-38.4,22.1-22.7,17.2-40.1,38.7-52.2,64.5-4.8,10.3-8.4,21-11.2,32-2.4,9.3-3.5,18.7-4.4,28.2-.8,8.5-.8,17.1,.1,25.6,.6,6,1,12,2.2,17.9,5.2,27.1,16.2,51.7,33,73.6,14.4,18.8,31.6,34.5,51.8,47,10.8,6.7,22.1,12.2,34.2,16,.2-.2,.6,0,1.2,.2Z" />
      //           </g>
      //         </svg>
      //         <span class="ml-3 text-xl text-white">Ares Security</span>
      //       </a>
      //       <p class="text-sm text-white sm:ml-6 sm:mt-0 mt-4">© 2022 Ares Security LLC —
      //         <a href="https://linkedin.com/in/dustinapodaca" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@dustinapodaca</a>
      //       </p>
      //       <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      //         <a class="text-white">
      //           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      //             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      //           </svg>
      //         </a>
      //         <a class="ml-3 text-white">
      //           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      //             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      //           </svg>
      //         </a>
      //         <a class="ml-3 text-white">
      //           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      //             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      //           </svg>
      //         </a>
      //         <a class="ml-3 text-white">
      //           <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
      //             <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
      //             <circle cx="4" cy="4" r="2" stroke="none"></circle>
      //           </svg>
      //         </a>
      //       </span>
      //     </div>
      //   </div>
      // </footer>


      // <footer class="text-gray-600 body-font bg-litegreen">
      //   <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-between grow">
      //     <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      //       <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      //         {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-odgreen rounded-full" viewBox="0 0 24 24">
      //           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      //         </svg> */}
      //         <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.66 425.89" stroke="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-12 h-12 text-white p-2 bg-black fill-odgreen rounded-lg">
      //           <g id="Layer_1-2" data-name="Layer 1">
      //             <path class="cls-1" d="M407.66,421.78H250.86c-10.1,0-20.1-.5-30.1-2.2-12.2-2.1-24.1-5.4-35.6-10.3-13.3-5.6-25.6-12.7-36.9-21.6-23-18.1-40.2-40.7-51.1-67.9-4-10-6.8-20.4-8.8-31.1-2.3-12.3-2.6-24.7-2.1-37.2,.4-9.5,2-18.8,4.2-28,2.7-11.5,6.7-22.6,12-33.1,10.2-20.2,23.8-37.7,41.1-52.2,16.4-13.7,34.8-24,55.3-30.4,7.9-2.5,15.9-4.5,24.1-5.6,12.2-1.6,24.4-2.3,36.6-1.2,9.6,.8,19,2.4,28.3,4.8,15.8,4.2,30.7,10.7,44.5,19.5,24.6,15.8,43.8,36.6,57.3,62.5,5.1,9.8,9.1,20,12,30.6,3.6,13.5,5.8,27.2,5.8,41.2v159.9c.2,.8,.2,1.4,.2,2.3Zm-75.1-75.6v-10.4c0-23.4-.1-46.9,0-70.3,0-11.2-1.4-22.2-5.1-32.8-6.2-17.6-17.2-31.6-32.6-42.2-12.1-8.3-25.4-13.1-40.1-14.3-12.6-1-24.9,.1-36.7,4.5-14.5,5.4-26.8,13.9-36.8,25.9-10.2,12.3-16.7,26.2-19,42-2,13.9-.8,27.6,4,40.9,4.8,13.4,12.4,25,22.9,34.6,16.3,14.8,35.6,22.3,57.7,22.4h83.4c.7-.1,1.4,0,2.3-.3Z" />
      //             <path class="cls-1" d="M195.06,425.28c-.8,.6-1.6,.4-2.4,.5-8.2,.4-16.4-.3-24.5-1.7-19.7-3.5-38.3-10.2-55.8-19.8-18.9-10.3-35.5-23.5-50.3-39-16-16.7-28.9-35.5-39.1-56.2-5.3-10.6-9.7-21.6-13.1-33-3.3-10.8-6-21.8-7.5-33-2-14.4-3.1-29-1.8-43.6,.9-10.9,2.3-21.7,4.9-32.3,3.4-13.9,8.2-27.4,14.5-40.2,6.7-13.4,14.6-26.1,24-37.8,20.1-25,44.4-45,72.7-60,12.6-6.7,25.8-12.3,39.4-16.8,10.4-3.4,21.1-6.1,31.9-8.1C207.16,.78,226.36-.52,245.86,.18c11.7,.4,23.4,1.8,34.9,3.8,20.2,3.5,39.8,9.3,58.7,17.3,2.2,1,4.5,1.9,7,3-11,24.3-21.9,48.5-32.9,72.8-3.5-1.2-6.9-2.3-10.2-3.5-12.3-4.2-24.8-7-37.7-8.2-7.8-.8-15.6-1.2-23.4-1-6.4,.1-12.7,.9-19,1.7-15.4,1.9-30.2,6.2-44.5,12.1-13.8,5.7-26.6,13.1-38.4,22.1-22.7,17.2-40.1,38.7-52.2,64.5-4.8,10.3-8.4,21-11.2,32-2.4,9.3-3.5,18.7-4.4,28.2-.8,8.5-.8,17.1,.1,25.6,.6,6,1,12,2.2,17.9,5.2,27.1,16.2,51.7,33,73.6,14.4,18.8,31.6,34.5,51.8,47,10.8,6.7,22.1,12.2,34.2,16,.2-.2,.6,0,1.2,.2Z" />
      //           </g>
      //         </svg>
      //         <span class="ml-3 text-xl">Ares Security</span>
      //       </a>
      //       <p class="mt-2 text-sm text-gray-500">Protection for People, <br/>Property & Plants.</p>
      //     </div>
      //     <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      //       <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      //         <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
      //         <nav class="list-none mb-10">
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Company</a>
      //           </li>
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Services</a>
      //           </li>
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Contact Us</a>
      //           </li>
      //           <li>
      //             <a class="text-gray-600 hover:text-gray-800">Apply</a>
      //           </li>
      //         </nav>
      //       </div>
      //     </div>
      //   </div>
      //   <div class="bg-odgreen">
      //     <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      //       <p class="text-white text-sm text-center sm:text-left">© 2022 Ares Security —
      //         <a href="https://linkedin.com/in/dustinapodaca" rel="noopener noreferrer" class="text-white ml-1" target="_blank">@dustinapodaca</a>
      //       </p>
      //       <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      //         <a class="text-white">
      //           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      //             <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
      //           </svg>
      //         </a>
      //         <a class="ml-3 text-white">
      //           <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      //             <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
      //           </svg>
      //         </a>
      //         <a class="ml-3 text-white">
      //           <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      //             <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      //             <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      //           </svg>
      //         </a>
      //         <a class="ml-3 text-white">
      //           <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
      //             <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
      //             <circle cx="4" cy="4" r="2" stroke="none"></circle>
      //           </svg>
      //         </a>
      //       </span>
      //     </div>
      //   </div>
      // </footer>