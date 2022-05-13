/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react'
import { sendForm } from './home_page/axios.fns'

export const getStatsData = () => {
	// const _type: [string[], number[]] = [[''], [1]];
	const [stats_data, update_data] = useState([])
	// let { org_names, favorite_counters } = _reducer(stats_data);
	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			sendForm({ path: '/get_stats' }, (a) => {
				update_data(a.data.end_pairs)
			})
		} else if (process.env.NODE_ENV === 'development') {
			// updateList(dev_data.organizes);
		}
	}, [update_data])
	// return { stats_data };
	return {
		org_names: stats_data.map((stat: string[]) => stat[0]),
		favorite_counters: stats_data.map((stat: number[]) => stat[1]),
	}
}
