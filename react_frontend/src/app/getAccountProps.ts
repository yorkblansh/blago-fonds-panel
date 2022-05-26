/* eslint-disable react-hooks/rules-of-hooks */
import { env } from 'process'
import { getCookie } from './getCookie'
import { useFavoritesNames } from './hooks/useFavorites.names.list'
import { useKeepedNames } from './hooks/useKeeped.names'

export const getAccountProps = () => {
	let userName: string

	let user_key: string
	let cookies: any = getCookie()
	let isAuthorized = false
	if (process.env.NODE_ENV === 'production') {
		user_key = cookies?.user_key
		userName = cookies?.user_name
		if (user_key) {
			isAuthorized = true
		} else {
			isAuthorized = false
		}
	} else if (process.env.NODE_ENV === 'development') {
		isAuthorized = true
		userName = 'test_user'
		user_key = 'keykey'
	} else {
		user_key = 'keykey'
		isAuthorized = false
		userName = 'test_user'
	}
	let isAdmin = userName === 'admin' && true
	const { favorites_names } = useFavoritesNames(userName)
	const { keeped_names } = useKeepedNames(userName)
	return {
		isAuthorized,
		user_key,
		userName,
		favoritesNames: favorites_names,
		keepedNames: keeped_names,
		isAdmin,
	}
}
