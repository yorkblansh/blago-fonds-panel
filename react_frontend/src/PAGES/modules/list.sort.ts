import { Ilist } from 'app/hooks/useItemList';

export enum enum_sortBy {
	'FAVORITE',
	'DEFAULT',
}

export const sorted_list = (list: Ilist, sortBy: keyof typeof enum_sortBy) => {
	if (sortBy === 'FAVORITE') {
		list.sort((a, b) => {
			return a['favorite_counter'] - b['favorite_counter'];
		});
	} else if (sortBy === 'DEFAULT') {
		return list;
	}
};
