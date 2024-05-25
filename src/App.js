import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Planning from './components/Planning';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Planning />
      {/* <Newsletter /> */}
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
