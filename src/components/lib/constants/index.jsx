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
		key: 'MyDocuments',
		label: 'My Documents',
		path: '/dashboard/documents',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'invetments',
		label: 'Invetments',
		path: '/dashboard/investments',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'goalVector',
		label: 'Goal Vector',
		path: '/dashboard/goal',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Premium Calculating Tools',
		label: 'Premium Calculating Tools',
		path: '/dashboard/tools',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'BudgetTracker',
		label: 'BudgetTracker',
		path: '/dashboard/budget',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'CoupleGoals',
		label: 'Couple Goals',
		path: '/dashboard/couple',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'L(earn)',
		label: 'L(earn)',
		path: '/dashboard/learn',
		icon: <HiOutlineShoppingCart />
	},
]