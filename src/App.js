import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import CardsSlider from './CardsSlider';
import Contact from './Contact';
import Footer from './Footer';
import Skills from "./Skills"
import About from "./About"

function App() {
  return (
    <>
    <Navbar title="#Rohit Gupta"/>
    <section id="home" className='d-flex align-items-center'>
      <Home/>
    </section>
    <section id="about" className='d-flex align-items-center'>
    <About />
    </section>
    <section id="project">
    <CardsSlider/>
    </section>
    <section id="skill" className='d-flex align-items-center'>
      <Skills />
    </section>
    <section id="contact" className='d-flex align-items-center'>
      <Contact />
    </section>
    <Footer />
    </>
  );
}

export default App;
