import { useState } from 'react';
import { enum_ListBlocks_sortBy } from '../list.sort';

export type changeSortBy_arg = keyof typeof enum_ListBlocks_sortBy;

interface IuseSortBy {
	(defaultSortMode: keyof typeof enum_ListBlocks_sortBy): {
		sortBy: keyof typeof enum_ListBlocks_sortBy;
		changeSortBy: (arg: changeSortBy_arg) => void;
	};
}

export const useSortBy: IuseSortBy = (defaultSortMode) => {
	// let _sortBy: keyof typeof enum_sortBy;
	let [sortBy, changeSortBy]: any = useState(defaultSortMode);
	return { sortBy, changeSortBy };
};
