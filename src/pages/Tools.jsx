import React from 'react';
import Footer from '../components/Footer';
import ToolsList from '../components/pageComponents/toolsPage/toolsList';
import Navbar from '../components/Navbar';

function Tools() {
  return (
    <div>
      <Navbar/>
      <ToolsList />
      <Footer />
    </div>
  );
}

export default Tools;