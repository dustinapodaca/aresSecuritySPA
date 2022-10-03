import './App.scss';
import React from 'react';
import Hero from './components/Hero';
import Company from './components/Company';
import Services from './components/Services';

class App extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Company />
        <Services />
      </>
    );
  }
}

export default App;


