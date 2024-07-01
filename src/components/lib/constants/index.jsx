import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'profile',
		label: 'Profile',
		path: '/dashboard/profile',
		icon: <HiOutlineCube />
	},
	{
		key: 'invetments',
		label: 'Invetments',
		path: '/dashboard/investments',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'admin',
		label: 'Admin Pannel',
		path: '/dashboard/admin',
		icon: <HiOutlineShoppingCart />
	},
]