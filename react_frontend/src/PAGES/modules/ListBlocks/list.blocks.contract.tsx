/* eslint-disable react/jsx-pascal-case */
import { MAIN_PATHES, PATH, PERF_TYPE } from 'api/consts';
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler';
import { getAccountProps } from 'app/getAccountProps';
import { add2favorite } from 'app/home_page/add2favorite';
import { removeFromFavorite } from 'app/home_page/remove.from.favorite';
import { Ilist_elements, useItemList } from 'app/hooks/useItemList';
import { Item_Perform_BTN } from 'PAGES/Adminka/components/item.perform.btn/item.perform.btn';
import { FavoriteCounter_div } from 'PAGES/components/favorite.counter.div/favorite.counter.div';
import { LastModify_DIV } from 'PAGES/Home_page/components/last_modify.div/last_modify.div';
import { ListItem } from 'PAGES/Home_page/components/list.item/list.item';

import { TchangeSortBy, useSortBy } from './hooks/useSortBy';

interface IListBlocks_Contract {
	(props: { path: keyof typeof MAIN_PATHES; is_authorized: boolean }): {
		ListBlocks: JSX.Element[];
		list: any;
		changeSortBy: TchangeSortBy;
	};
}

export interface DynObjName {
	[key: string]: Ilist_elements;
}

export const ListBlocks_Contract: IListBlocks_Contract = ({ path, is_authorized }) => {
	const { list, list_length } = useItemList(path);
	const { favorites_names, user_name } = getAccountProps();
	let { SORT, changeSortBy, sorted_list } = useSortBy({ sortBy: 'ALPHABET', sortType: 'A_z' });
	console.table(SORT);
	let ListBlocks = sorted_list(list, SORT.sortBy, SORT.sortType).map((organisation, i) => {
		console.dir(organisation.favorite_counter);
		const isRenderFavoriteBtns = (path === '/' || path === '/favorites') && is_authorized,
			isRenderAdminkaBtns = path === '/adminka',
			is_aFavoriteOrg = favorites_names.some((org_name) => org_name === organisation.name),
			BTN_TYPES: (keyof typeof PERF_TYPE)[] = ['REMOVE', 'MODIFY'],
			isRenderCounter = organisation.favorite_counter !== 0;
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
										DisplayModalToogler(i, true, TYPE);
									}}
									Label={(TYPE === 'MODIFY' && 'Изменить') || (TYPE === 'REMOVE' && 'Удалить') || ''}
									type={TYPE}
								/>
							);
						})}
					{isRenderFavoriteBtns && (
						<Item_Perform_BTN
							_onClick={() => {
								is_aFavoriteOrg
									? removeFromFavorite(organisation.name, user_name)
									: add2favorite(organisation.name, user_name);
								document.location.href = PATH(path);
							}}
							Label={is_aFavoriteOrg ? 'Убрать из избранного' : 'Добавить визбранное'}
							type={is_aFavoriteOrg ? 'REMOVE_FROM_FAVORITE' : 'ADD_2_FAVORITE'}
						/>
					)}
					{isRenderCounter && <FavoriteCounter_div favorite_counter={organisation.favorite_counter} />}
					<LastModify_DIV text={`Последнее изменение: ${organisation.last_modify}`} />
				</div>
			</div>
		);
	});

	return { ListBlocks, list, changeSortBy };
};
