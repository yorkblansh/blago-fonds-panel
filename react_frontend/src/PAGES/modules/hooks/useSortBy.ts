import { useState } from 'react';
import { Ilist } from 'app/hooks/useItemList';
export enum enum_ListBlocks_sortBy {
	'FAVORITE',
	'ALPHABET',
	'LAST_MODIFY',
}
export type TchangeSortBy = (sort: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' }) => void;

interface IuseSortBy {
	(props: { defaultSortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' }): {
		SORT: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' };
		changeSortBy: (sort: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' }) => void;
		sorted_list: (
			list: Ilist,
			sort: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' },
		) => Ilist;
	};
}

export const useSortBy: IuseSortBy = (defaultSortMode) => {
	let [SORT, changeSortBy]: any = useState(defaultSortMode);

	const sorted_list = (
		list: Ilist,
		sort: { sortBy: keyof typeof enum_ListBlocks_sortBy; sortType: 'A_z' | 'Z_a' },
	): Ilist => {
		let { sortBy, sortType } = sort;
		const _return_sorted_list: any = () => {
			if (sortBy === 'FAVORITE') return list.sort((a, b) => b['favorite_counter'] - a['favorite_counter']);
			else if (sortBy === 'ALPHABET')
				return list.sort((a, b) => {
					var nameA = a.name.toLowerCase(),
						nameB = b.name.toLowerCase();
					// if (nameA < nameB) return -1; //сортируем строки по возрастанию
					// if (nameA > nameB) return 1; //По убыванию
					if (sortType === 'A_z') return -1;
					if (sortType === 'Z_a') return 1;
					return 0; // Никакой сортировки
				});
			else if (sortBy === 'LAST_MODIFY')
				return list.sort((a, b) => {
					var dateA = new Date(a.last_modify).getTime(),
						dateB = new Date(b.last_modify).getTime();
					console.table([dateA, dateB]);
					// return dateA - dateB;
					return dateA > dateB ? -1 : dateA < dateB ? 1 : 0;
				});
			else if (sortBy === 'DEFAULT') return list;
		};
		return _return_sorted_list();
	};
	return { SORT, changeSortBy, sorted_list };
};
