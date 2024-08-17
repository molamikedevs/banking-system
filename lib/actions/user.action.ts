'use server'

import { ID } from 'node-appwrite'
import { createAdminClient, createSessionClient } from '../appwrite'
import { cookies } from 'next/headers'
import { parseStringify } from '../utils'

//sign up route
export const signUp = async (userData: SignUpParams) => {
	const { email, firstName, lastName, password } = userData
	try {
		const { account } = await createAdminClient()

		const newUserAccount = await account.create(
			ID.unique(),
			email,
			password,
			`${firstName} ${lastName}`
		)

		const session = await account.createEmailPasswordSession(email, password)

		cookies().set('appwrite-session', session.secret, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
		})

		return parseStringify(newUserAccount)
	} catch (error) {
		console.error('Error during signup:', error)
		throw error // Rethrow the error after logging it
	}
}

//sign in route
export const signIn = async ({ email, password }: signInProps) => {
	try {
		const { account } = await createAdminClient()
		const response = await account.createEmailPasswordSession(email, password)

		return parseStringify(response)
	} catch (error) {
		console.error('Error', error)
	}
}

// get logged in user information route
export const getLoggedInUser = async () => {
	try {
		const { account } = await createSessionClient()
		const result = await account.get()

		const user = await account.get()
		return parseStringify(user)
	} catch (error) {
		return null
	}
}

//logout user route
export const logoutAccount = async () => {
	try {
		const { account } = await createSessionClient()

		cookies().delete('appwrite-session')

		await account.deleteSession('current')
	} catch (error) {
		return null
	}
}
