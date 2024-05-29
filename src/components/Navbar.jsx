// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    console.log(nav);
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 px-4 text-white w-full bg-white bg-opacity-20'>
      <h1 className='w-full text-3xl font-bold text-[#E9D06C] ml-6'>Yark</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-bold'>
          <Link to="/">Home</Link>
        </li>
        <li className='p-4 font-bold'>
          <Link to="/about">About</Link>
        </li>
        <li className='p-4 font-bold'>
          <Link to="/services">Services</Link>
        </li>
        <li className='p-4 font-bold'>
          <Link to="/tools">Tools</Link>
        </li>
        <li className='p-4 font-bold'>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className='p-4 font-bold mr-10'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden mr-6'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-black ease-in-out duration-500 z-20' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#E9D06C] m-4'>Yark</h1>
        <li className='p-4 border-b border-gray-600 font-bold'>
          <Link to="/" onClick={handleNav}>Home</Link>
        </li>
        <li className='p-4 border-b border-gray-600 font-bold'>
          <Link to="/about" onClick={handleNav}>About</Link>
        </li>
        <li className='p-4 border-b border-gray-600 font-bold'>
          <Link to="/services" onClick={handleNav}>Services</Link>
        </li>
        <li className='p-4 border-b border-gray-600 font-bold'>
          <Link to="/tools" onClick={handleNav}>Tools</Link>
        </li>
        <li className='p-4 border-b border-gray-600 font-bold'>
          <Link to="/services" onClick={handleNav}>Blogs</Link>
        </li>
        <li className='p-4'>
          <Link to="/contact" onClick={handleNav}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
