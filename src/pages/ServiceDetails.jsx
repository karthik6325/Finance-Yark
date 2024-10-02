import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServiceDetails from '../components/pageComponents/servicePage/ServiceDetails';
import Form from '../components/pageComponents/contactPage/form';

function Blogs() {
  return (
    <div>
      <Navbar/>
      <ServiceDetails />
      <Form/>
      <Footer />
    </div>
  );
}

export default Blogs;