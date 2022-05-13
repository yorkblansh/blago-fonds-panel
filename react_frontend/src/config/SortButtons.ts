import { enum_ListBlocks_sortBy } from 'PAGES/modules/ListBlocks/hooks/useSortBy'

export type TSortButtons = {
	SortBy_list: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
	SortType_list: [string, keyof typeof enum_ListBlocks_sortBy][][]
}

export const SortButtons: TSortButtons = {
	SortBy_list: [
		['По лайкам', 'FAVORITE'],
		['По дате изменения', 'LAST_MODIFY'],
		['По названию', 'ALPHABET'],
	],
	SortType_list: [
		[
			['От Большего к Меньшему', 'FAVORITE'],
			['От Меньшему к Большего', 'FAVORITE'],
		],
		[
			['Сначла последние', 'LAST_MODIFY'],
			['Сначла первые', 'LAST_MODIFY'],
		],
		[
			['От А до Я', 'ALPHABET'],
			['От Я до А', 'ALPHABET'],
		],
	],
}
