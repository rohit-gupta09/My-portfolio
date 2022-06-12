import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
// import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <>
    <Navbar title="#Rohit Gupta"/>
    <section id="home" className='d-flex align-items-center'>
      <Home/>
    </section>
    {/* <Projects/> */}
    <section id="contact" className='d-flex align-items-center'>
      <Contact />
    </section>
    </>
  );
}

export default App;
