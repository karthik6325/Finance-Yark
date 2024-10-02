import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_LINKS } from './lib/constants/index';
import { useLogin } from '../context/loginContext'; // Import useLogin
import { useNavigate } from 'react-router-dom';
import { RxChatBubble } from "react-icons/rx";
import logo from '../assets/logo.png';

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white';

export default function Sidebar() {
	const { setLoginUser } = useLogin(); // Destructure setLoginUser from useLogin
	const navigate = useNavigate();

	const handleLogout = () => {
		setLoginUser(''); // Set user token to null on logout
		localStorage.removeItem('userToken'); // Optionally, remove the token from localStorage
	};

	const handleChange = () => {
		navigate('/');
	}

	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
			<div onClick={handleChange} className='cursor-pointer'>
			<div className="flex items-center ml-8">
				<Link to="/">
				<img src={logo} alt="Yark Logo" className="h-28 w-auto cursor-pointer" />
				</Link>
			</div>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
			<div onClick={handleLogout} className={classNames(linkClass, 'cursor-pointer')}>
					<span className="text-xl">
						<RxChatBubble />
					</span>
					Refer
				</div>
				<div onClick={handleLogout} className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	);
}

function SidebarLink({ link }) {
	const { pathname } = useLocation();

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	);
}
