import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
	const loggedIn = {
		firstName: 'Donald',
		lastName: 'Trump',
		email: 'donaldjtrump@gmail.com',
	}
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn.lastName || 'Guest'}
						subtext="Access and manage your account and transactions efficiently"
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.0}
					/>
				</header>
				Transactions
			</div>
			<RightSidebar
				user={loggedIn}
				banks={[{ currentBalance: 1250.0 }, { currentBalance: 234.6 }]}
				transactions={[]}
			/>
		</section>
	)
}

export default Home
