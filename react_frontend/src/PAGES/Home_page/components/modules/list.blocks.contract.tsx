/* eslint-disable react/jsx-pascal-case */
import { MAIN_PATHES } from 'api/consts';
import { getAccountProps } from 'app/getAccountProps';
import { Ilist, Ilist_elements, useItemList } from 'app/hooks/useItemList';
import { Item_Perform_BTN } from 'PAGES/Adminka/components/item.perform.btn/item.perform.btn';
import { LastModify_DIV } from '../last_modify.div/last_modify.div';
import { ListItem } from '../list.item/list.item';

interface IListBlocks_Contract {
	(props: { path: keyof typeof MAIN_PATHES; is_authorized: boolean; user_name?: string }): {
		ListBlocks: JSX.Element[];
		list: Ilist;
	};
}

export interface DynObjName {
	[key: string]: Ilist_elements;
}

export const ListBlocks_Contract: IListBlocks_Contract = ({ path, is_authorized, user_name }) => {
	const { list } = useItemList(path, { user_name });

	let ListBlocks: JSX.Element[] = list.map((value: DynObjName, i) => {
		let [KEY] = Object.keys(value);
		return (
			<div key={`element_${i}`} className="home-page--wrapper--element" id="home-page--wrapper--element">
				<div className="home-page--wrapper--element--data">
					<ListItem Label="Название" index={i} value={value[KEY].name} />
					<ListItem link Label="Ссылка1" index={i} value={value[KEY].link1} />
					<ListItem link Label="Ссылка2" index={i} value={value[KEY].link2} />
					<ListItem Label="Доп. информация" index={i} value={value[KEY].info} />
				</div>
				{path === '/adminka' && ( //? Если компонент рендериться в админке, то рисуем кнопки
					<div className="home-page--wrapper--element--buttons">
						<Item_Perform_BTN Label="Изменить" index={i} type="MODIFY" />
						<Item_Perform_BTN Label="Удалить" index={i} type="REMOVE" />
						<LastModify_DIV text={`Последнее изменение: ${value[KEY].last_modify}`} />
					</div>
				)}
				{path === '/' && is_authorized && (
					<div className="home-page--wrapper--element--buttons">
						<Item_Perform_BTN
							org_name={value[KEY].name}
							Label="Добавить визбранное"
							index={i}
							type="ADD_2_FAVORITE"
						/>
						<LastModify_DIV text={`Последнее изменение: ${value[KEY].last_modify}`} />
					</div>
				)}
			</div>
		);
	});

	return { ListBlocks, list };
};
