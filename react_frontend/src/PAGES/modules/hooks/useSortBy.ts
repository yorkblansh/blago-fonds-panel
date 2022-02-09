import { useState } from 'react';
import { enum_sortBy } from '../list.sort';

export type changeSortBy_arg = keyof typeof enum_sortBy;

interface IuseSortBy {
	(): { sortBy: keyof typeof enum_sortBy; changeSortBy: (arg: changeSortBy_arg) => void };
}

export const useSortBy: IuseSortBy = () => {
	// let _sortBy: keyof typeof enum_sortBy;
	let [sortBy, changeSortBy]: any = useState('');
	return { sortBy, changeSortBy };
};
