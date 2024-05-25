import React from 'react';
import Business from '../assets/undraw_Business_plan_re_0v81.png';
import Projection from '../assets/undraw_Projections_re_ulc6.png';
import Performance from '../assets/undraw_Performance_overview_re_mqrq.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 relative h-[550px]'>
          <img className='mx-auto mt-[-3rem] bg-white h-[200px] object-contain' src={Business} alt="Business Plan" />
          <p className='text-center text-4xl font-bold'>Built to fit your financial needs</p>
          <div className='text-center flex-grow'>
            <p className='py-2 mx-8 mt-8'>Choose the ideal financial planning service perfectly adapted to your unique individual needs. From basic planning services to tailor-made comprehensive financial planning expertly reflecting your specific financial goals.</p>
          </div>
          <button className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium mx-auto px-6 py-3 text-black absolute text-black before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40">
          <span relative="relative z-10">Try Now!</span>
        </button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 relative h-[550px]'>
          <img className='mx-auto mt-[-3rem] bg-white h-[200px] object-contain' src={Performance} alt="Performance Overview" />
          <p className='text-center text-4xl font-bold'>Editable from start to finish</p>
          <div className='text-center flex-grow'>
            <p className='py-2 mx-8 mt-8'>Take control of your finances with our intuitive tools. No technical knowledge or complex computer language required. Our user-friendly interface empowers you to manage your finances effectively.</p>
          </div>
          <button className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium mx-auto px-6 py-3 text-black absolute before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40">
          <span relative="relative z-10">Try Now!</span>
        </button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 relative h-[550px]'>
          <img className='mx-auto mt-[-3rem] bg-white h-[200px] object-contain' src={Projection} alt="Projection Analysis" />
          <p className='text-center text-4xl font-bold'>All your financial data at your fingertips</p>
          <div className='text-center flex-grow'>
            <p className='py-2 mx-8 mt-8'>Stay on top of your finances with our comprehensive reporting and analysis tools. Our user-friendly interface makes it easy to understand your financial situation and make informed decisions.</p>
          </div>
          <button className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium mx-auto px-6 py-3 text-black absolute before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40">
          <span relative="relative z-10">Try Now!</span>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
