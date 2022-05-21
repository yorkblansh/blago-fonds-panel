/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import { MAIN_PATHES, PATH, PERF_TYPE } from 'api/consts'
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler'
import { getAccountProps } from 'app/getAccountProps'
import { add2favorite } from 'app/home_page/add2favorite'
import { add2keep } from 'app/home_page/add2keep'
import { removeFromFavorite } from 'app/home_page/remove.from.favorite'
import { removeFromKeep } from 'app/home_page/remove.from.keep'
import { useItemList } from 'app/hooks/useItemList'
import { Item_Perform_BTN } from 'PAGES/Adminka/components/item.perform.btn/item.perform.btn'
import { LastModify_DIV } from 'PAGES/Home_page/components/last_modify.div/last_modify.div'
import { ListItem } from 'PAGES/Home_page/components/list.item/list.item'
import { enum_ListBlocks_sortBy, TchangeSortBy, useSortBy } from './hooks/useSortBy'
import { SortBTNS_Contract } from './sort.btn/sort.btn.contract'
import './perf_btn_wrapper.scss'
import { useState } from 'react'
// import { useOpenItemState } from './hooks/useOpenItemState'

interface ListBlocksProps {
	path: keyof typeof MAIN_PATHES
	is_authorized: boolean
	sort_options?: {
		SortBy_list: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
		SortType_list: [string, keyof typeof enum_ListBlocks_sortBy][][]
	}
}

const isSortButtons = (props: {
	changeSortBy: TchangeSortBy
	sort_options?: {
		SortBy_list: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
		SortType_list: [string, keyof typeof enum_ListBlocks_sortBy][][]
	}
}): { SortButtons: JSX.Element | undefined } => {
	let { sort_options: SortButtons, changeSortBy } = props
	if (SortButtons) {
		let { SortBy_list, SortType_list } = SortButtons
		let { SortBTNs } = SortBTNS_Contract({ changeSortBy, SortBy_list, SortType_list })
		return { SortButtons: SortBTNs }
	} else return { SortButtons: undefined }
}

export const useListBlocks = ({ path, is_authorized, sort_options }: ListBlocksProps) => {
	const [a, b] = useState(true)
	const { list } = useItemList(path)
	const { favorites_names, keeped_names, user_name } = getAccountProps()
	const { SORT, changeSortBy, sorted_list } = useSortBy({ sortBy: 'ALPHABET', sortType: 'A_z' })
	const { SortButtons } = isSortButtons({ sort_options, changeSortBy })
	// const { setOpenItem } = useOpenItemState()

	const ListBlocks = sorted_list(list, SORT.sortBy, SORT.sortType).map((organisation, i) => {
		const isRenderFavoriteBtns = path === '/' || path === '/favorites' || path === '/keeped',
			isRenderAdminkaBtns = path === '/adminka',
			isLiked = favorites_names.some((org_name) => org_name === organisation.name),
			isKeeped = keeped_names.some((org_name) => org_name === organisation.name),
			BTN_TYPES: (keyof typeof PERF_TYPE)[] = ['REMOVE', 'MODIFY']
		// isRenderCounter = organisation.favorite_counter !== 0,
		// isRenderKeepCounter = organisation
		const kk = (text: string) => {
			var sliced = text.slice(0, 12)
			if (sliced.length < text.length) sliced += '...'
			return sliced
		}
		// console.dir(`${organisation.name} IS KEEPED: ${isKeeped}`)
		return (
			<div
				/**
				 * Item of list
				 */
				onMouseLeave={() => {
					const el: any = document.getElementById(`open_item_${i}`)
					el.style.display = 'none'
				}}
				onMouseEnter={() => {
					const el: any = document.getElementById(`open_item_${i}`)
					el.style.display = 'flex'
				}}
				key={`element_${i}`}
				className="home-page--wrapper--element"
				id={`home-page--wrapper--element_${i}`}>
				<div
					/**
					 * Info Block
					 */
					className="home-page--wrapper--element--data">
					<ListItem link Label="Ссылка на сайт фонда" index={i} value={organisation.link1} />
					<ListItem link Label="Ссылка на отчёты деятельности фонда" index={i} value={organisation.link2} />
					<ListItem
						info
						Label="Доп. информация"
						index={i}
						value={a ? kk(organisation.info) : organisation.info}
					/>
				</div>

				<div className="home-page--wrapper--element--org_name">
					<ListItem isOrgName Label="Название" index={i} value={organisation.name} />
					<div
						onClick={() => {
							if (a) {
								list.map((_ell, _i): void => {
									if (_i !== i) {
										const el: any = document.getElementById(`home-page--wrapper--element_${_i}`)
										el.style.display = 'none'
										// el.style.height = '100vh'
										b(false)
									}
								})
							} else {
								list.map((_ell, _i): void => {
									if (_i !== i) {
										const el: any = document.getElementById(`home-page--wrapper--element_${_i}`)
										el.style.display = 'flex'
										// el.style.height = '100vh'
										b(true)
									}
								})
							}
						}}
						id={`open_item_${i}`}
						style={{ display: 'none' }}
						className="home-page--wrapper--element--open_item">
						{a ? 'развернуть' : 'назад ↩️'}
					</div>
				</div>

				<div
					/**
					 * Like buttons
					 */
					className="home-page--wrapper--element--buttons">
					{isRenderAdminkaBtns && //? Если компонент рендериться в админке, то рисуем кнопки
						BTN_TYPES.map((TYPE) => {
							return (
								<Item_Perform_BTN
									onClick={() => {
										DisplayModalToogler(i, true, TYPE)
									}}
									Label={(TYPE === 'MODIFY' && 'Изменить') || (TYPE === 'REMOVE' && 'Удалить') || ''}
									type={TYPE}
								/>
							)
						})}
					{isRenderFavoriteBtns && (
						<div className="perf_btn_wrapper">
							<Item_Perform_BTN
								/**
								 * 💙 Like / Unlike button
								 */
								counter={organisation.favorite_counter}
								onClick={() => {
									if (is_authorized) {
										document.location.href = PATH(path)

										isLiked
											? removeFromFavorite(organisation.name, user_name)
											: add2favorite(organisation.name, user_name)
									} else document.location.href = PATH('/auth')
								}}
								Label={isLiked ? 'Убрать из избранного' : 'Добавить визбранное'}
								type={isLiked ? 'REMOVE_FROM_FAVORITE' : 'ADD_2_FAVORITE'}
							/>
							<Item_Perform_BTN
								/**
								 * 👛 Keep / Unkeep button
								 */
								counter={organisation.keep_counter}
								onClick={() => {
									if (is_authorized) {
										document.location.href = PATH(path)

										isKeeped
											? removeFromKeep(organisation.name, user_name)
											: add2keep(organisation.name, user_name)
									} else document.location.href = PATH('/auth')
								}}
								Label={isKeeped ? 'Убрать из закладки' : 'Добавить в закладки'}
								type={isKeeped ? 'REMOVE_FROM_KEEPED' : 'ADD_2_KEEPED'}
							/>
						</div>
					)}
					<LastModify_DIV text={`Последнее изменение: ${organisation.last_modify}`} />
				</div>
			</div>
		)
	})

	return {
		ListBlocks,
		list,
		changeSortBy,
		SortButtons,
	}
}
