import ComingSoon from './Components/ComingSoon';
import Hero from './Components/Hero';
import Company from './Components/Company';
import Services from './Components/Services';
import Capability from './Components/Capability';

import Contact from './Components/ContactForm';
import { FormProvider } from './Components/ContactForm';

import Careers from './Components/Careers';
import Footer from './Components/Footer';

import { animateScroll as scroll } from "react-scroll";
import { useScrollReveal } from './useScrollReveal';
import './App.scss';

const App = () => {
  // Wires up [data-reveal] and [data-scroll-active] across every section.
  useScrollReveal();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FormProvider>
        <ComingSoon />
        <Hero id="home" />
        <Company id="company" />
        <Services id="services" />
        <Capability id="capability" />
        <Contact id="contact" />
        <Careers id="careers" />
        <Footer
          scrollToTop={scrollToTop}
          />
      </FormProvider>
    </>
  );
};

export default App;
