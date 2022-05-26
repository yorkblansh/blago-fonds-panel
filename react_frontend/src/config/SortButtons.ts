import { enum_ListBlocks_sortBy } from 'components/ListBlocks/hooks/useSortBy'

export type TSortButtons = {
	SortBy: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
	SortType: [string, keyof typeof enum_ListBlocks_sortBy][][]
}

export const sortOptions: TSortButtons = {
	SortBy: [
		['По лайкам', 'FAVORITE'],
		['По дате изменения', 'LAST_MODIFY'],
		['По названию', 'ALPHABET'],
	],
	SortType: [
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
