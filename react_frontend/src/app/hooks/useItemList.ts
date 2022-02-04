import { useEffect, useState } from 'react';
import { getItemsPageData } from '../home_page/axios.fns';
import { dev_data } from '../DEV_DATA';
import { MAIN_PATHES } from 'api/consts';
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

export const useItemList = (path: keyof typeof MAIN_PATHES, data?: { user_name: string }) => {
	let bb = [{ name: { name: '', link1: '', link2: '', info: '', last_modify: '' } }];
	const aa: any[] | never[] = [];
	const [list, updateList] = useState(bb);

	useEffect(() => {
		if (process.env.NODE_ENV === 'production') {
			getItemsPageData({ path, data }, (a) => {
				updateList(a.data.organizes);
			});
		} else if (process.env.NODE_ENV === 'development') {
			updateList(dev_data.organizes);
		}
	}, [data, path, updateList]);
	return { list };
};
