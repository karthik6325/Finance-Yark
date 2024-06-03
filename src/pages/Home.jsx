import React from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Planning from '../components/Planning';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Analytics />
      <Planning />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;