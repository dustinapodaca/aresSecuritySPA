import Hero from './components/Hero';
import Company from './components/Company';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

import Contact from './components/ContactForm';
import { FormProvider } from './components/ContactForm';

import Careers from './components/Careers';
import Footer from './components/Footer';

import { animateScroll as scroll } from "react-scroll";
import "animate.css/animate.min.css";
import './App.scss';

const App = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
