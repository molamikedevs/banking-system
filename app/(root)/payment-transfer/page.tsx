import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const Transfer = async () => {
	const loggedIn = await getLoggedInUser()
	const accounts = await getAccounts({
		userId: loggedIn?.$id,
	})

	if (!accounts) return

	const accountsData = accounts?.data

	return (
		<section className="payment-transfer">
			<HeaderBox
				title="Payment Transfer"
				subtext="Please provide your bank details and any relevant notes for the transfer."
			/>

			<section className="size-full pt-5">
				<PaymentTransferForm accounts={accountsData} />
			</section>
		</section>
	)
}

export default Transfer
