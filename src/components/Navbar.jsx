import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { useLogin } from '../context/loginContext';
import { HiUserCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { userToken, setLoginUser } = useLogin();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(nav);
  //   console.log(userToken);
  // }, [nav, userToken]);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleChange1 = () => {
    navigate('/dashboard');
  }

  const handleChange2 = () => {
    navigate('/dashboard/profile');
  }


  const handleLogout = () => {
    setLoginUser('');
    localStorage.removeItem('userToken');
  };

  return (
    <div className='flex justify-between items-center h-36 px-4 text-white w-full bg-white bg-opacity-20'>
      <div className='flex items-center'>
      <div className="flex items-center ml-8">
        <Link to="/">
          <img src={logo} alt="Yark Logo" className="h-28 w-auto cursor-pointer" />
        </Link>
      </div>
        <ul className='hidden md:flex ml-40'>
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
          <li className='p-4 font-bold'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className='hidden md:flex items-center'>
        {userToken && userToken !== '' ? (
          <>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                  <span className="sr-only">Open user menu</span>
                  <HiUserCircle className="h-10 w-10 rounded-full text-gray-300" />
                </Menu.Button>
              </div>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right z-40 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                    {({ active }) => (
                      <div onClick={handleChange1}
                        className={`${
                          active && 'bg-gray-100'
                        } active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200`}
                      >
                        Your Dashboard
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div  onClick={handleChange2}
                        className={`${
                          active && 'bg-gray-100'
                        } active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200`}
                      >
                        Your Profile
                      <Link to="/dashboard/profile"></Link>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={handleLogout}
                        className={`${
                          active && 'bg-gray-100'
                        } active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200`}
                      >
                        Sign out
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <>
            <div className='p-4 font-bold mr-4'>
              <Link to="/login">Login</Link>
            </div>
            <button className='text-black bg-yellow-500 font-bold py-2 px-4 rounded mr-6'>
              <Link to="/register">Join the Club</Link>
            </button>
          </>
        )}
      </div>
      <div onClick={handleNav} className='block md:hidden mr-6 z-40'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-grey-900 bg-black ease-in-out duration-500 z-40' : 'ease-in-out duration-500 fixed left-[-100%] z-20'}>
        <div className="flex items-center ml-8">
          <Link to="/">
            <img src={logo} alt="Yark Logo" className="h-28 w-auto cursor-pointer" />
          </Link>
        </div>
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
          <Link to="/blogs" onClick={handleNav}>Blogs</Link>
        </li>
        <li className='p-4 border-b border-gray-600 font-bold'>
          <Link to="/contact" onClick={handleNav}>Contact</Link>
        </li>
        <div className='p-4 border-b border-gray-600 font-bold'>
          {userToken ? (
            <button
              className='text-black bg-yellow-500 font-bold py-2 px-4 rounded'
              onClick={handleLogout}
            >
              Sign out
            </button>
          ) : (
            <>
              <div className='p-4 font-bold'>
                <Link to="/login" onClick={handleNav}>Login</Link>
              </div>
              <button className='text-black bg-yellow-500 font-bold py-2 px-4 rounded'>
                <Link to="/register" onClick={handleNav}>Join the Club</Link>
              </button>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
