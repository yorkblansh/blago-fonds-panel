/* eslint-disable react/jsx-pascal-case */
import { MAIN_PATHES, PATH, PERF_TYPE } from 'api/consts'
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler'
import { getAccountProps } from 'app/getAccountProps'
import { add2favorite } from 'app/home_page/add2favorite'
import { removeFromFavorite } from 'app/home_page/remove.from.favorite'
import { Ilist_elements, LIST, useItemList } from 'app/hooks/useItemList'
import { Item_Perform_BTN } from 'PAGES/Adminka/components/item.perform.btn/item.perform.btn'
import { FavoriteCounter_div } from 'PAGES/components/favorite.counter.div/favorite.counter.div'
import { LastModify_DIV } from 'PAGES/Home_page/components/last_modify.div/last_modify.div'
import { ListItem } from 'PAGES/Home_page/components/list.item/list.item'
import { enum_ListBlocks_sortBy, TchangeSortBy, useSortBy } from './hooks/useSortBy'
import { SortBTNS_Contract } from './sort.btn/sort.btn.contract'

interface ListBlocksProps {
	path: keyof typeof MAIN_PATHES
	is_authorized: boolean
	SortButtons?: {
		SortBy_list: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
		SortType_list: [string, keyof typeof enum_ListBlocks_sortBy][][]
	}
}

export interface DynObjName {
	[key: string]: Ilist_elements
}

const isSortButtons = (props: {
	changeSortBy: TchangeSortBy
	SortButtons?: {
		SortBy_list: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
		SortType_list: [string, keyof typeof enum_ListBlocks_sortBy][][]
	}
}): { SortBTNs: JSX.Element | undefined } => {
	let { SortButtons, changeSortBy } = props
	if (SortButtons) {
		let { SortBy_list, SortType_list } = SortButtons
		let { SortBTNs } = SortBTNS_Contract({ changeSortBy, SortBy_list, SortType_list })
		return { SortBTNs }
	} else return { SortBTNs: undefined }
}

export const ListBlocks_Contract = ({ path, is_authorized, SortButtons }: ListBlocksProps) => {
	const { list } = useItemList(path)
	const { favorites_names, user_name } = getAccountProps()
	let { SORT, changeSortBy, sorted_list } = useSortBy({ sortBy: 'ALPHABET', sortType: 'A_z' })
	let { SortBTNs } = isSortButtons({ SortButtons, changeSortBy })

	let ListBlocks = sorted_list(list, SORT.sortBy, SORT.sortType).map((organisation, i) => {
		const isRenderFavoriteBtns = (path === '/' || path === '/favorites') && is_authorized,
			isRenderAdminkaBtns = path === '/adminka',
			isLiked = favorites_names.some((org_name) => org_name === organisation.name),
			BTN_TYPES: (keyof typeof PERF_TYPE)[] = ['REMOVE', 'MODIFY'],
			isRenderCounter = organisation.favorite_counter !== 0
		return (
			<div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
				<div className="home-page--wrapper--element--data">
					<ListItem Label="Название" index={i} value={organisation.name} />
					<ListItem link Label="Ссылка1" index={i} value={organisation.link1} />
					<ListItem link Label="Ссылка2" index={i} value={organisation.link2} />
					<ListItem Label="Доп. информация" index={i} value={organisation.info} />
				</div>
				<div className="home-page--wrapper--element--buttons">
					{isRenderAdminkaBtns && //? Если компонент рендериться в админке, то рисуем кнопки
						BTN_TYPES.map((TYPE) => {
							return (
								<Item_Perform_BTN
									_onClick={() => {
										DisplayModalToogler(i, true, TYPE)
									}}
									Label={(TYPE === 'MODIFY' && 'Изменить') || (TYPE === 'REMOVE' && 'Удалить') || ''}
									type={TYPE}
								/>
							)
						})}
					{isRenderFavoriteBtns && (
						<Item_Perform_BTN
							_onClick={() => {
								isLiked
									? removeFromFavorite(organisation.name, user_name)
									: add2favorite(organisation.name, user_name)
								document.location.href = PATH(path)
							}}
							Label={isLiked ? 'Убрать из избранного' : 'Добавить визбранное'}
							type={isLiked ? 'REMOVE_FROM_FAVORITE' : 'ADD_2_FAVORITE'}
						/>
					)}
					{isRenderCounter && <FavoriteCounter_div favorite_counter={organisation.favorite_counter} />}
					<LastModify_DIV text={`Последнее изменение: ${organisation.last_modify}`} />
				</div>
			</div>
		)
	})

	return { ListBlocks, list, changeSortBy, SortBTNs }
}
