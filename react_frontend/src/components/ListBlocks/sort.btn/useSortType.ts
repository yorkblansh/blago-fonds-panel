export const useSortType = (sort_typeItem: string) => {
	let _sortType: 'A_z' | 'Z_a'
	if (
		sort_typeItem === 'От А до Я' ||
		sort_typeItem === 'Сначла последние' ||
		sort_typeItem === 'От Большего к Меньшему'
	)
		_sortType = 'A_z'
	else if (
		sort_typeItem === 'От Я до А' ||
		sort_typeItem === 'От Меньшему к Большего' ||
		sort_typeItem === 'Сначла первые'
	)
		_sortType = 'Z_a'
	else _sortType = 'Z_a'
	return _sortType
}
