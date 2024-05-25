import React from 'react';
import Invest from '../assets/undraw_Invest_re_8jl5.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 mt-2'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Invest} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#E9D06C] font-bold '>Financial potential</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Maximize your financial potential</h1>
          <p>
          Secure your financial future with the right tools. Just like Batman needs his bat-tools to save Gotham City. There is no magic, it's time to plan for your financial future with the right tools.

          </p>
          <button className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black  before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40">
          <span relative="relative z-10">Discover how</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
