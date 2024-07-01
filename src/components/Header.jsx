import React, { useState, Fragment } from 'react';
import { Menu, Popover, Transition } from '@headlessui/react';
import { HiOutlineBell, HiOutlineChatAlt, HiUserCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useLogin } from '../context/loginContext';

export default function Header() {
  const navigate = useNavigate();
  const { setLoginUser } = useLogin();
  const userMembership = 'Bronze'; // Set the membership status
  const [popupOpen, setPopupOpen] = useState(false);

  const handleLogout = () => {
    setLoginUser('');
    localStorage.removeItem('userToken');
    navigate('/login');
  };


  const getButtonColor = (membership) => {
    switch (membership) {
      case 'Bronze':
        return { main: '#CD7F32', secondary: '#eaa057' };
      case 'Silver':
        return { main: '#C0C0C0', secondary: '#d3d3d3' }; // Silver colors
      case 'Gold':
        return { main: '#FFD700', secondary: '#ffec8b' }; // Gold colors
      case 'Platinum':
        return { main: '#808080', secondary: '#c4c4c4' }; // Platinum colors
      default:
        return { main: '#CD7F32', secondary: '#eaa057' }; // Default to bronze
    }
  };

  const colors = getButtonColor(userMembership);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-end">
      <div className="flex items-center gap-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && 'bg-gray-100',
                  'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Messages</strong>
                    <div className="mt-2 py-1 text-sm">This is messages panel.</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && 'bg-gray-100',
                  'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Notifications</strong>
                    <div className="mt-2 py-1 text-sm">This is notification panel.</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <div className="flex items-center gap-2">
          <div onClick={openPopup} className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium rounded-lg shadow-2xl group cursor-pointer"
            style={{ backgroundColor: colors.main }}>
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 rounded-full blur-md ease" style={{ backgroundColor: colors.main }}></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 rounded-full blur-md" style={{ backgroundColor: colors.main }}></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 rounded-full blur-md" style={{ backgroundColor: colors.secondary }}></span>
            </span>
            <span className="relative font-bold">{userMembership}</span>
          </div>
        </div>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <HiUserCircle className="h-10 w-10 rounded-full text-gray-300" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => console.log('Navigate to profile')}
                    className={`${
                      active && 'bg-gray-100'
                    } active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200`}
                  >
                    Your Profile
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
      </div>
      {popupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold items-center">Membership Details</h2>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Silver Membership Card */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-center bg-gray-300 text-gray-700 rounded-full w-12 h-12">
                  <HiOutlineBell className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mt-4">Silver Membership</h3>
                <p className="text-sm mt-2">Benefits:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>1 Sitting</li>
                </ul>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
                  onClick={() => {}}
                >
                  Upgrade Now
                </button>
              </div>

              {/* Gold Membership Card */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-center bg-yellow-400 text-yellow-900 rounded-full w-12 h-12">
                  <HiOutlineBell className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mt-4">Gold Membership</h3>
                <p className="text-sm mt-2">Benefits:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>2 Sitting</li>
                </ul>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
                  onClick={() => {}}
                >
                  Upgrade Now
                </button>
              </div>

              {/* Diamond Membership Card */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-center bg-blue-500 text-white rounded-full w-12 h-12">
                  <HiOutlineBell className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mt-4">Diamond Membership</h3>
                <p className="text-sm mt-2">Benefits:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>3 Sitting</li>
                </ul>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
                  onClick={() => {}}
                >
                  Upgrade Now
                </button>
              </div>

              {/* Platinum Membership Card */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-center bg-gray-800 text-gray-300 rounded-full w-12 h-12">
                  <HiOutlineBell className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mt-4">Platinum Membership</h3>
                <p className="text-sm mt-2">Benefits:</p>
                <ul className="list-disc list-inside mt-1">
                  <li>4 Sitting</li>
                </ul>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
                  onClick={() => {}}
                >
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
