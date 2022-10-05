import './App.scss';
import "animate.css/animate.min.css";
import React from 'react';
import Hero from './components/Hero';
import Company from './components/Company';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Footer from './components/Footer';
import { animateScroll as scroll } from "react-scroll";

class App extends React.Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <>
        <Hero id="home" />
        <Company id="company" />
        <Services id="services" />
        <Testimonials />
        <Contact id="contact" />
        <Careers id="careers" />
        <Footer
          scrollToTop={this.scrollToTop}
        />
      </>
    );
  }
}

export default App;


