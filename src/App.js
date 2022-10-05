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

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Company />
        <Services />
        <Testimonials />
        <Contact />
        <Careers />
        <Footer />
      </>
    );
  }
}

export default App;


