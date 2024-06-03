import React from 'react';
import Footer from '../components/Footer';
import ServiceCard from '../components/pageComponents/servicePage/ServiceData';
import Navbar from '../components/Navbar';

function Services() {
  return (
    <div>
      <Navbar/>
      <ServiceCard/>
      <Footer/>
    </div>
  );
}

export default Services;
