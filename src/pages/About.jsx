import React from 'react';
import Footer from '../components/Footer';
import BackgroundImage from '../assets/undraw_Finance_re_gnv2.png';
import SideHero from '../components/SideHero';
import Aproach from '../components/pageComponents/aboutPage/approach';
import Choose from '../components/pageComponents/aboutPage/choose';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div>
      <Navbar/>
      <SideHero
        title="About Yark Financial Planners"
        content="At YARK, we believe that financial independence is not just a goal, it's a journey. 
        Since our inception in 2016, we've been committed to guiding our clients toward financial freedom. 
        Our team of seasoned experts combines years of experience with cutting-edge strategies to help you 
        achieve your financial goals."
        backgroundImage={BackgroundImage}
      />
      <Aproach/>
      <Choose/>
      <Footer />
    </div>
  );
}

export default About;