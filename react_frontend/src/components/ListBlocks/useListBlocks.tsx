/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-pascal-case */
import { MAIN_PATHES, PATH, PERF_TYPE } from 'api/consts'
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler'
import { getAccountProps } from 'app/getAccountProps'
import { add2favorite } from 'app/home_page/add2favorite'
import { add2keep } from 'app/home_page/add2keep'
import { removeFromFavorite } from 'app/home_page/remove.from.favorite'
import { removeFromKeep } from 'app/home_page/remove.from.keep'
import { getItemList } from 'app/hooks/getItemList'
import { Item_Perform_BTN } from 'PAGES/Adminka/components/item.perform.btn/item.perform.btn'
import { LastModify_DIV } from 'PAGES/Home_page/components/last_modify.div/last_modify.div'
import { ListItem } from 'PAGES/Home_page/components/list.item/list.item'
import { enum_ListBlocks_sortBy, TchangeSortBy, useSortBy } from './hooks/useSortBy'
import { SortButtons } from './sort.btn/SortButtons'
import { useState } from 'react'
import './perf_btn_wrapper.scss'

/**
 * Функция обрезает текст до 12 символов
 */
const trimText = (text: string) => {
	var sliced = text.slice(0, 12)
	if (sliced.length < text.length) sliced += '...'
	return sliced
}

interface SortOptions {
	SortBy: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
	SortType: [string, keyof typeof enum_ListBlocks_sortBy][][]
}

interface SortButtonsHookProps {
	changeSortBy: TchangeSortBy
	sortOptions?: SortOptions
}

/**
 * функция возвращает две кнокпи сортировки
 */
function getSortButtons({ changeSortBy, sortOptions }: SortButtonsHookProps) {
	if (sortOptions) {
		const { SortBy, SortType } = sortOptions
		return <SortButtons {...{ SortBy, SortType, changeSortBy }} />
	} else return undefined
}

interface Props {
	path: keyof typeof MAIN_PATHES
	isAuthorized: boolean
	sortOptions?: SortOptions
}

/**
 * Хук возращает список элементов с возможностью сортировки
 */
export const useListBlocks = ({ path, isAuthorized, sortOptions }: Props) => {
	const [isViewCollapsed, toggleView] = useState(true) // хук позвляющий свернуть / развернуть конкретный элменет
	const { list } = getItemList(path) // функция возвращает список фондов из бэкенда

	/**
	 * Функция возвращает пользовательские данные:
	 * - имена лайкнутых организаций
	 * - имена организаций добавленных в закладки
	 * - имя пользователя
	 */
	const { favoritesNames, keepedNames, userName } = getAccountProps()

	/**
	 * Хук позволяющий сортировать элементы по установленным условиям
	 */
	const { SORT, changeSortBy, getSortedList } = useSortBy({ sortBy: 'ALPHABET', sortType: 'A_z' })

	/**
	 * прокидываем функции сортировки в кнопки
	 */
	const SortButtons = getSortButtons({ sortOptions, changeSortBy })

	/**
	 * переменная хранит отсортированные элементы
	 */
	const ListBlocks = getSortedList(list, SORT.sortBy, SORT.sortType).map((org, index) => {
		/**
		 * Несколько условий для отображения
		 */
		const isRenderFavoriteBtns = path === '/' || path === '/favorites' || path === '/keeped'
		const isAdminka = path === '/adminka'
		const isLiked = favoritesNames.some((orgName) => orgName === org.name)
		const isKeeped = keepedNames.some((orgName) => orgName === org.name)

		/**
		 * Массив хранит типы кнопок отображаемых в админке
		 */
		const adminButtonTypes: (keyof typeof PERF_TYPE)[] = ['REMOVE', 'MODIFY']

		/**
		 * Функция делает кнопку скрытия / разкрытия видимой при наведении
		 */
		const onItemHover = (type: 'leave' | 'enter') => {
			const el: any = document.getElementById(`open_item_${index}`)
			el.style.display = type === 'leave' ? 'none' : 'flex'
		}

		/**
		 * Функция сворачивает или разворачивает текущий элемент
		 */
		const toggleItemView = () => {
			list.map((element, _index): void => {
				if (_index !== index) {
					const el: any = document.getElementById(`home-page--wrapper--element_${_index}`)
					el.style.display = isViewCollapsed ? 'none' : 'flex'
					toggleView(isViewCollapsed ? false : true)
				}
			})
		}

		/**
		 * Функция ставит или снимает лайки и закладки
		 */
		const onPerfButtonClick = (btnType: 'like' | 'keep') => {
			if (isAuthorized) {
				document.location.href = PATH(path) // после нажатия перезагружет страницу

				if (btnType === 'like') {
					isLiked ? removeFromFavorite(org.name, userName) : add2favorite(org.name, userName)
				} else if (btnType === 'keep') {
					isKeeped ? removeFromKeep(org.name, userName) : add2keep(org.name, userName)
				}
				// 	btnType === 'like' && isLiked
				// 		? removeFromFavorite(org.name, userName)
				// 		: add2favorite(org.name, userName)
				// btnType === 'keep' && isKeeped ? removeFromKeep(org.name, userName) : add2keep(org.name, userName)
			} else document.location.href = PATH('/auth') // если пользователь не авторизован, переходим на стр. авторизации
		}

		return (
			<div
				/**
				 * 🟫 Элемент в списке 🟫
				 */

				/**
				 * реагируем на наведение мыши
				 */
				onMouseLeave={() => onItemHover('leave')}
				onMouseEnter={() => onItemHover('enter')}
				key={`element_${index}`}
				className="home-page--wrapper--element"
				id={`home-page--wrapper--element_${index}`}>
				<div className="home-page--wrapper--element--main_info">
					<div className="home-page--wrapper--element--org_name">
						<ListItem
							// назвние фонда
							isOrgName
							Label="Название"
							index={index}
							value={org.name}
						/>

						<div
							// кнопка "развернуть" или "назад"
							onClick={() => toggleItemView()}
							id={`open_item_${index}`}
							style={{ display: 'none' }}
							className="home-page--wrapper--element--open_item">
							{isViewCollapsed ? 'развернуть' : 'назад ↩️'}
						</div>
					</div>

					<div className="home-page--wrapper--element--buttons">
						{isAdminka && // Если компонент рендериться в админке, то рисуем кнопки
							adminButtonTypes.map((type) => (
								<Item_Perform_BTN
									onClick={() => DisplayModalToogler(index, true, type)}
									Label={(type === 'MODIFY' && 'Изменить') || (type === 'REMOVE' && 'Удалить') || ''}
									{...{ type }}
								/>
							))}

						{isRenderFavoriteBtns && ( // рендер кнопок лайков и закладок
							<div className="perf_btn_wrapper">
								<Item_Perform_BTN
									/**
									 * 💙 Like / Unlike button
									 */
									counter={org.favorite_counter}
									onClick={() => onPerfButtonClick('like')}
									Label={isLiked ? 'Убрать из избранного' : 'Добавить визбранное'}
									type={isLiked ? 'REMOVE_FROM_FAVORITE' : 'ADD_2_FAVORITE'}
								/>

								<Item_Perform_BTN
									/**
									 * 👛 Keep / Unkeep button
									 */
									counter={org.keep_counter}
									onClick={() => onPerfButtonClick('keep')}
									Label={isKeeped ? 'Убрать из закладки' : 'Добавить в закладки'}
									type={isKeeped ? 'REMOVE_FROM_KEEPED' : 'ADD_2_KEEPED'}
								/>
							</div>
						)}
						{isAdminka && <LastModify_DIV text={`Последнее изменение: ${org.last_modify}`} />}
					</div>
				</div>

				<div
					/**
					 * ℹ️ Info Block
					 */
					style={{ display: isViewCollapsed ? 'none' : 'flex' }}
					className="home-page--wrapper--element--data">
					<ListItem link Label="Ссылка на сайт фонда" index={index} value={org.link1} />
					<ListItem link Label="Ссылка на отчёты деятельности фонда" index={index} value={org.link2} />
					<ListItem
						info
						Label="Доп. информация"
						index={index}
						value={
							// если элемент свернут - обрезаем текст
							isViewCollapsed ? trimText(org.info) : org.info
						}
					/>
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
