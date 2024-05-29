import React from 'react'; 
import 'tailwindcss/tailwind.css';

const SideHero = ({ title, content, backgroundImage }) => {
  return (
    <div className='relative text-white'>
      <div className='absolute inset-0 bg-cover bg-center opacity-20' style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className='max-w-[900px] w-full h-[300px] sm:h-[600px] p-10 mx-auto text-center flex flex-col justify-center relative z-10 animate-fadeIn'>
        <h1 className='text-[#E9D06C] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          {title}
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-xl sm:text-4xl py-4 font-bold'>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideHero;
