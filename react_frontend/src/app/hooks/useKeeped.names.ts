/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import { sendForm } from '../home_page/axios.fns'

export const useKeepedNames = (user_name: string) => {
	// sendForm({ path: '/get_favorites_names' }, (get_favorites_names) => {});

	const [keeped_names, update_favorites_names_List] = useState([''])

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			sendForm({ path: '/get_keeped_names', data: { user_name } }, (a) => {
				update_favorites_names_List(a.data.org_names)
			})
		} else if (process.env.NODE_ENV === 'development') {
			// updateList(dev_data.organizes);
		}
	}, [update_favorites_names_List, user_name])
	return { keeped_names }
}
