import React from 'react';
import BackgroundImage from '../assets/undraw_Finance_re_gnv2.png'; // Ensure the correct path and file extension
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='relative text-white'>
      <div className='absolute inset-0 bg-black opacity-20' style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className='max-w-[900px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative z-10'>
        <h1 className='text-[#E9D06C] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Expert financial planning 
        </h1>
        <h2 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>
          <Typed
            strings={['for a secure future', 'to grow your wealth', 'to achieve your financial goals']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h2>
        <div className='flex justify-center items-center'>
          <p className='md:text-xl sm:text-4xl font-bold py-4'>
            Every smart investor deserves to work with smart tools.
          </p>
        </div>
        <button className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium my-6 mx-auto py-3 text-black before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40">
          <span relative="relative z-10">Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
