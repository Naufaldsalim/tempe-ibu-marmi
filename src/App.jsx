// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Intro';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Advantages />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
