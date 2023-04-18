import './App.css';
import React from 'react';
import Reasons from './components/Reasons';
import Relax from './components/Relax';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Header from './components/Header';
import Footer from './components/Footer';
import Frequency from './components/Frequency';
import Delivery from './components/Delivery';
// import "../dist/output.css"
import Aos from 'aos';
import "aos/dist/aos.css";
import "./index.css"
// import Navbar from './components/Navbar';


function App() {

  Aos.init({ 
    duration: 1800,
    offset: 0,
  })

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Reasons />
      <Reviews />
      <Frequency />
      <Relax />
      <Delivery />
      <Footer />
    
</div>
  );
}

export default App;
