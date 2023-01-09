import './App.scss';
import "animate.css/animate.min.css";
// import React, { useState, useEffect } from 'react';

import Hero from './components/Hero';
import Company from './components/Company';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

import Contact from './components/Contact';
import { FormProvider } from './components/Contact';

import Careers from './components/Careers';
import Footer from './components/Footer';
import { animateScroll as scroll } from "react-scroll";

const App = () => {
  // const [isMobile, setIsMobile] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // useEffect(() => {
  //   const updatePredicate = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   updatePredicate();
  //   window.addEventListener("resize", updatePredicate);
  //   return () => window.removeEventListener("resize", updatePredicate);
  // }, []);

  return (
    <>
      <Hero id="home" />
      <Company id="company" />
      <FormProvider>
        <Services id="services" />
      </FormProvider>
      <Testimonials />
      <FormProvider>
        <Contact id="contact" />
      </FormProvider>
      <Careers id="careers" />
      <Footer
        scrollToTop={scrollToTop}
      />
    </>
  );
};

export default App;
