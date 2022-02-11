import { enum_ListBlocks_sortBy, TchangeSortBy } from 'PAGES/modules/hooks/useSortBy';
import { useState } from 'react';
import './btn.style.scss';
import './dropdown.btn.style.scss';

interface ISortBTNS {
	(props: {
		Dropdown_list?: [a: string, b: keyof typeof enum_ListBlocks_sortBy][];
		changeSortBy: TchangeSortBy;
		isSortTypes_list?: boolean;
	}): { SortBTNs: JSX.Element };
}

export const SortBTNS_Contract: ISortBTNS = ({ Dropdown_list, changeSortBy, isSortTypes_list }) => {
	let [Label, setLabel] = useState('По названию');
	let [targetItem, setArrows] = useState('');

	let lil_mass: [string, keyof typeof enum_ListBlocks_sortBy][] = [
		['От А до Я', 'ALPHABET'],
		['От Я до А', 'ALPHABET'],
	];

	let [sortTypesItems, set_sortTypeItems] = useState(lil_mass);

	let mass: [string, keyof typeof enum_ListBlocks_sortBy][][] = [
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
	];

	let SortBTNs = (
		<>
			<div className="dropdown--types">
				<button
					className="header-btn dropbtn--types"
					children={<div>{`Тип сортировки: ${sortTypesItems[0][0]}`}</div>}
				/>
				{isSortTypes_list && (
					<div className="dropdown-content--types">
						{sortTypesItems
							.map((sort_typeItem) => ({
								label: sort_typeItem[0],
								click_action: () => {
									let _sortType: 'A_z' | 'Z_a';
									if (sort_typeItem[0] === 'От А до Я') _sortType = 'A_z';
									else if (sort_typeItem[0] === 'От Я до А') _sortType = 'Z_a';
									else _sortType = 'Z_a';

									changeSortBy({ sortBy: sort_typeItem[1], sortType: _sortType });
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
								set_sortTypeItems(mass[i]);
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
