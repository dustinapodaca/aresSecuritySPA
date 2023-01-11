import Hero from './Components/Hero';
import Company from './Components/Company';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';

import Contact from './Components/ContactForm';
import { FormProvider } from './Components/ContactForm';

import Careers from './Components/Careers';
import Footer from './Components/Footer';

import { animateScroll as scroll } from "react-scroll";
import "animate.css/animate.min.css";
import './App.scss';

const App = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FormProvider>
        <Hero id="home" />
        <Company id="company" />
        <Services id="services" />
        <Testimonials />
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
