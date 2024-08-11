import React from 'react';
import Planning from '../assets/undraw_Data_re_80ws.png';
import { useNavigate } from 'react-router-dom';

const Plan = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
  }
  return (
    <div className='w-full bg-gray-200 py-16 px-4'> {/* Added bg-gray-200 for grey background */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='text-[#E9D06C] font-bold'>Financial Planning</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>A new approach to financial planning</h1>
          <p>
          Meeting in person is great, but with our virtual financial planning services, you can access our expertise from anywhere. Our secure platform makes it easy to share your financial information with us.Get the financial security you want, when and how you want it.
          </p>
          <button  onClick={handleClick} className="bg-[#E9D06C] w-[200px] border-[#E9D06C] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black before:ease relative h-12 w-40 overflow-hidden border bg-[#E9D06C]-500 shadow-4xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-60 before:duration-700 hover:shadow-[#E9D06C]-500 hover:before:-translate-x-40">
          <span relative="relative z-10">Join Club</span>
        </button>
        </div>
        <img className='w-[500px] mx-auto my-4' src={Planning} alt='Laptop' />
      </div>
    </div>
  );
};

export default Plan;
