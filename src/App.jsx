import React from 'react';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Programs from './components/Programs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
      <Hero />
      <Highlights />
      <Programs />
      <Footer />
    </div>
  );
}
