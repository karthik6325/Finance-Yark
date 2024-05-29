import React from 'react';
import Analytics from '../components/Analytics';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Planning from '../components/Planning';

function Home() {
  return (
    <div>
      <Hero />
      <Analytics />
      <Planning />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;