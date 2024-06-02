import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Invest from '../../../assets/undraw_Invest_re_8jl5.png'; 

const Choose = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className='w-full bg-white pb-20 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-y-8 items-center'>
        <div className='flex flex-col justify-center space-y-8' data-aos="fade-up">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center" data-aos="fade-up" data-aos-delay="100">
            <h2 className="font-heading font-bold p-5 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Why Choose YARK?</h2>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Experience</h1>
            <p>
              With over a decade of experience, our team has navigated various market cycles and economic shifts. 
              We bring this wisdom to your financial journey.
            </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Transparency</h1>
            <p>
              At YARK, transparency is non-negotiable. You'll always know where your money 
              is invested and how it's working for you.
            </p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Results-Driven</h1>
            <p>
              Our success is measured by your success. We celebrate your milestones and work 
              tirelessly to achieve them.
            </p>
          </div>
        </div>
        <div className='flex justify-center' data-aos="fade-up" data-aos-delay="500">
          <img className='w-[500px] my-4 mt-55' src={Invest} alt='Investment Illustration' /> {/* Centered Image */}
        </div>
      </div>
    </div>
  );
};

export default Choose;
