import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  useEffect(()=>{
    console.log(nav);
  },[nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 px-4 text-white w-full bg-white bg-opacity-20'>
      <h1 className='w-full text-3xl font-bold text-[#E9D06C] ml-6'>Yark</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-bold'>Home</li>
        <li className='p-4 font-bold'>About</li>
        <li className='p-4 font-bold'>Services</li>
        <li className='p-4 font-bold'>Tools</li>
        <li className='p-4 font-bold mr-10'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden mr-6'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-black ease-in-out duration-500 z-20' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#E9D06C] m-4'>Yark</h1>
          <li className='p-4 border-b border-gray-600 font-bold'>Home</li>
          <li className='p-4 border-b border-gray-600 font-bold'>About</li>
          <li className='p-4 border-b border-gray-600 font-bold'>Services</li>
          <li className='p-4 border-b border-gray-600 font-bold'>Tools</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
