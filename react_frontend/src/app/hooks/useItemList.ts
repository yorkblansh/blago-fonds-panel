import { useEffect, useState } from 'react';
import { getItemsPageData } from '../home_page/axios.fns';
import { dev_data } from '../DEV_DATA';
import { MAIN_PATHES, REST_API } from 'api/consts';
import { getAccountProps } from 'app/getAccountProps';

export type Ilist_elements = {
	name: string;
	link1: string;
	link2: string;
	info: string;
	last_modify: string;
};

export type Ilist = {
	name: Ilist_elements;
}[];

export const useItemList = (path: keyof typeof MAIN_PATHES) => {
	let { user_name } = getAccountProps();

	let bb = { organizes: { name: '', link1: '', link2: '', info: '', last_modify: '' } };
	const aa: any[] | never[] = [];
	const [list, updateList] = useState(bb);

	let _path: any;
	if (path === '/') _path = REST_API('/home');
	if (path === '/favorites') _path = REST_API('/favorites_api');
	if (path === '/adminka') _path = REST_API('/home');

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			getItemsPageData({ path: _path, user_name }, (a) => {
				updateList(a.data.organizes);
			});
		} else if (process.env.NODE_ENV === 'development') {
			// updateList(dev_data.organizes);
		}
	}, [_path, path, updateList, user_name]);
	return { list: Object.values(list) };
};
