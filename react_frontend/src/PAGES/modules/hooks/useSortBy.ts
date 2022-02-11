import { useState } from 'react';
import { Ilist } from 'app/hooks/useItemList';
export enum enum_ListBlocks_sortBy {
	'FAVORITE',
	'ALPHABET',
	'LAST_MODIFY',
}
export type TchangeSortBy = (sort: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' }) => void;

interface IuseSortBy {
	(defaultSortBy: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' }): {
		SORT: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' };
		changeSortBy: (sort: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' }) => void;
		sorted_list: (list: Ilist, sortBy: keyof typeof enum_ListBlocks_sortBy, sortType: 'A_z' | 'Z_a') => Ilist;
	};
}

export const useSortBy: IuseSortBy = (defaultSortMode) => {
	const sorted_list = (list: Ilist, sortBy: keyof typeof enum_ListBlocks_sortBy, sortType: 'A_z' | 'Z_a'): Ilist => {
		const _return_sorted_list: any = () => {
			if (sortBy === 'FAVORITE')
				return list.sort((a, b) => {
					let c;
					if (sortType === 'A_z') c = b['favorite_counter'] - a['favorite_counter'];
					else if (sortType === 'Z_a') c = a['favorite_counter'] - b['favorite_counter'];
					else c = b['favorite_counter'] - a['favorite_counter'];
					return c;
				});
			else if (sortBy === 'ALPHABET') {
				let a__z = list.sort((a, b) => {
					var nameA = a.name.toLowerCase(),
						nameB = b.name.toLowerCase();
					if (nameA < nameB) return -1; //сортируем строки по возрастанию
					if (nameA > nameB) return 1; //По убыванию
					return 0; // Никакой сортировки
				});
				if (sortType === 'A_z') return a__z;
				else if (sortType === 'Z_a') return a__z.reverse();
			} else if (sortBy === 'LAST_MODIFY') {
				let a__z = list.sort((a, b) => {
					var dateA = new Date(a.last_modify).getTime(),
						dateB = new Date(b.last_modify).getTime();
					// return dateA - dateB;
					return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
				});
				if (sortType === 'A_z') return a__z;
				else if (sortType === 'Z_a') return a__z.reverse();
			} else if (sortBy === 'DEFAULT') return list;
		};
		return _return_sorted_list();
	};

	let [SORT, changeSortBy]: any = useState(defaultSortMode);
	return { SORT, changeSortBy, sorted_list };
};
