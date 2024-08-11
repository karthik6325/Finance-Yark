import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BlogList from '../components/pageComponents/blogPage/blogList';

function Blogs() {
  return (
    <div>
      <Navbar/>
      <BlogList />
      <Footer />
    </div>
  );
}

export default Blogs;