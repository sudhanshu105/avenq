import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;