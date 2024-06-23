import React from 'react'
import DashboardStatsGrid from '../components/pageComponents/dashboardPage/DashboardStatsGrid'
import TransactionChart from '../components/pageComponents/dashboardPage/TransactionChart'
import BuyerProfilePieChart from '../components/pageComponents/dashboardPage/BuyerProfilePieChart'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4 bg-white">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
		</div>
	)
}
