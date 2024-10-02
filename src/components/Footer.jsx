import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <div className="flex items-center ml-8">
          <Link to="/">
          <img src={logo} alt="Yark Logo" className="h-28 w-auto cursor-pointer" />
          </Link>
        </div>
        <p className='py-4'>Expert financial planning for a secure future.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={30} />
          </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>
              <a href="/tools" className='hover:underline'>Analytics</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>
              <a href="/contact" className='hover:underline'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>
              <a href="/about" className='hover:underline'>About</a>
            </li>
            <li className='py-2 text-sm'>
              <a href="/blog" className='hover:underline'>Blog</a>
            </li>
            <li className='py-2 text-sm'>
              <a href="/jobs" className='hover:underline'>Jobs</a>
            </li>
            <li className='py-2 text-sm'>
              <a href="/careers" className='hover:underline'>Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>
              <a href="/register" className='hover:underline'>Join Club</a>
            </li>
            <li className='py-2 text-sm'>
              <a href="/policy" className='hover:underline'>Policy</a>
            </li>
            <li className='py-2 text-sm'>
              <a href="/terms" className='hover:underline'>Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
