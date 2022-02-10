import { useState } from 'react';
import { Ilist } from 'app/hooks/useItemList';
export enum enum_ListBlocks_sortBy {
	'FAVORITE',
	'ALPHABET',
	'LAST_MODIFY',
}
export type changeSortBy_arg = keyof typeof enum_ListBlocks_sortBy;

interface IuseSortBy {
	(defaultSortMode: keyof typeof enum_ListBlocks_sortBy): {
		sortBy: keyof typeof enum_ListBlocks_sortBy;
		changeSortBy: (arg: changeSortBy_arg) => void;
		sorted_list: (list: Ilist, sortBy: keyof typeof enum_ListBlocks_sortBy) => Ilist;
	};
}

export const useSortBy: IuseSortBy = (defaultSortMode) => {
	const sorted_list = (list: Ilist, sortBy: keyof typeof enum_ListBlocks_sortBy): Ilist => {
		const _return_sorted_list: any = () => {
			if (sortBy === 'FAVORITE') return list.sort((a, b) => b['favorite_counter'] - a['favorite_counter']);
			else if (sortBy === 'ALPHABET')
				return list.sort((a, b) => {
					var nameA = a.name.toLowerCase(),
						nameB = b.name.toLowerCase();
					if (nameA < nameB) return -1; //сортируем строки по возрастанию
					if (nameA > nameB) return 1; //По убыванию
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
	let [sortBy, changeSortBy]: any = useState(defaultSortMode);
	return { sortBy, changeSortBy, sorted_list };
};
