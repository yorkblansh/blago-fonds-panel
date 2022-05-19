import { useEffect, useState } from 'react'
import { getItemsPageData } from '../home_page/axios.fns'
import { dev_data } from '../DEV_DATA'
import { API, MAIN_PATHES, REST_API } from 'api/consts'
import { getAccountProps } from 'app/getAccountProps'

export type Ilist = {
	name: string
	link1: string
	link2: string
	info: string
	last_modify: string
	favorite_counter: number
	keep_counter: number
}[]

export const LIST = {
	organizes: {
		name: '',
		link1: '',
		link2: '',
		info: '',
		last_modify: '',
		favorite_counter: 0,
		keep_counter: 0,
	},
}

interface Options {
	fond_name?: string
}

const PATH_MAP: { [x in keyof typeof MAIN_PATHES]?: keyof typeof API } = {
	'/': '/home',
	'/favorites': '/favorites_api',
	'/adminka': '/home',
	'/keeped': '/keep_api',
	'/fonds': '/fonds',
}

export const useItemList = (path: keyof typeof MAIN_PATHES, options?: Options) => {
	let { user_name } = getAccountProps()
	const fond_name = options ? (options.fond_name ? options.fond_name : undefined) : undefined
	const [list, updateList] = useState(LIST)
	const _path: any = PATH_MAP[path]
	// let _path: any
	// if (path === '/') _path = REST_API('/home')
	// if (path === '/favorites') _path = REST_API('/favorites_api')
	// if (path === '/adminka') _path = REST_API('/home')
	// if (path === '/keeped') _path = REST_API('/keep_api')
	// if (path === '/fonds') _path = REST_API('/fonds')

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			getItemsPageData({ path: _path, user_name, fond_name }, (a) => {
				updateList(a.data.organizes)
			})
		} else if (process.env.NODE_ENV === 'development') {
			// updateList(dev_data.organizes);
		}
	}, [_path, fond_name, path, updateList, user_name])
	return { list: Object.values(list), list_length: Object.values(list).length }
}
