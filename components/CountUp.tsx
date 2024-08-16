'use client'

import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<div className="w-full">
			<p className="total-balance-amount flex-center gap-2">
				<CountUp
					end={amount}
					decimal=","
					decimals={2}
					prefix="$"
					duration={2}
				/>
			</p>
		</div>
	)
}

export default AnimatedCounter
