import { enum_ListBlocks_sortBy, TchangeSortBy } from 'PAGES/modules/ListBlocks/hooks/useSortBy';
import { useState } from 'react';
import './btn.style.scss';
import './dropdown.btn.style.scss';
import { _sortType } from './_sortType.fn';

interface ISortBTNS {
	(props: {
		Dropdown_list: [a: string, b: keyof typeof enum_ListBlocks_sortBy][];
		changeSortBy: TchangeSortBy;
		SortTypes_list: [string, keyof typeof enum_ListBlocks_sortBy][][];
	}): { SortBTNs: JSX.Element };
}

export const SortBTNS_Contract: ISortBTNS = ({ Dropdown_list, changeSortBy, SortTypes_list }) => {
	let [Label, setLabel] = useState('По названию');
	let [targetItem, setArrows] = useState('');

	// let lil_mass: [string, keyof typeof enum_ListBlocks_sortBy][] = [
	// 	['От А до Я', 'ALPHABET'],
	// 	['От Я до А', 'ALPHABET'],
	// ];
	let [sortTypesItems, set_sortTypeItems] = useState(SortTypes_list[2]);

	let SortBTNs = (
		<>
			<div className="dropdown--types">
				<button
					className="header-btn dropbtn--types"
					children={<div>{`Тип сортировки: ${sortTypesItems[0][0]}`}</div>}
				/>
				{SortTypes_list && (
					<div className="dropdown-content--types">
						{sortTypesItems
							.map((sort_typeItem) => ({
								label: sort_typeItem[0],
								click_action: () => {
									changeSortBy({ sortBy: sort_typeItem[1], sortType: _sortType(sort_typeItem[0]) });
								},
							}))
							.map(({ label, click_action }) => (
								<a onClick={() => click_action()} children={label} />
							))}
					</div>
				)}
			</div>
			<div className="dropdown">
				<button
					className="header-btn dropbtn"
					children={
						<div>
							<div>{`Сорировать: ${Label}`}</div>
							{/* {favorite_count && <div className="header-btn--fav_count_color">{favorite_count}</div>} */}
						</div>
					}
				/>
				{Dropdown_list && (
					<div className="dropdown-content">
						{Dropdown_list.map((drpdwn_item, i) => ({
							label: `${(targetItem === drpdwn_item[0] && '>>') || ''} ${drpdwn_item[0]}`,
							click_action: () => {
								changeSortBy({ sortBy: drpdwn_item[1], sortType: 'A_z' });
								setLabel(drpdwn_item[0]);
								setArrows(drpdwn_item[0]);
								set_sortTypeItems(SortTypes_list[i]);
							},
						})).map(({ click_action, label }) => (
							<a onClick={() => click_action()} children={label} />
						))}
					</div>
				)}
			</div>
		</>
	);
	return { SortBTNs };
};
