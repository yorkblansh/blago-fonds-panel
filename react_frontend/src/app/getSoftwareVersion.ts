/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import { get_SoftwareVersion } from './home_page/axios.fns'

export const getSoftwareVersion = () => {
	const [software_version, updateVER] = useState('')
	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			get_SoftwareVersion((version) => {
				// console.dir(version);
				updateVER(version)
			})
		} else if (process.env.NODE_ENV === 'development') {
			//  updateList(dev_data.organizes);
		}
	}, [updateVER])
	return { software_version }
}
