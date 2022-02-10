import { Ilist } from 'app/hooks/useItemList';

export enum enum_ListBlocks_sortBy {
	'FAVORITE',
	'DEFAULT',
	'ALPHABET',
	'LAST_MODIFY',
}

export const sorted_list = (list: Ilist, sortBy: keyof typeof enum_ListBlocks_sortBy): Ilist => {
	const _return_sorted_list: any = () => {
		if (sortBy === 'FAVORITE') {
			return list.sort((a, b) => a['favorite_counter'] - b['favorite_counter']);
		} else if (sortBy === 'ALPHABET') {
			return list.sort((a, b) => {
				var nameA = a.name.toLowerCase(),
					nameB = b.name.toLowerCase();
				if (nameA < nameB) return -1; //сортируем строки по возрастанию
				if (nameA > nameB) return 1; //По убыванию
				return 0; // Никакой сортировки
			});
		} else if (sortBy === 'LAST_MODIFY') {
			// return list.sort((a, b) => {
			// 	var dateA = new Date(a.last_modify).,
			// 		dateB = new Date(b.last_modify);
			// 	return dateA - dateB; //сортировка по возрастающей дате
			// });

			return list.sort((a, b) => {
				var dateA = new Date(a.last_modify).getUTCMilliseconds(),
					dateB = new Date(b.last_modify).getUTCMilliseconds();
				return dateA - dateB;
				// return a > b ? -1 : a < b ? 1 : 0;
			});
		} else if (sortBy === 'DEFAULT') {
			return list;
		}
	};
	return _return_sorted_list();
};
