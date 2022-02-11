import { changeSortBy_arg } from 'PAGES/modules/hooks/useSortBy';
import { useState } from 'react';
import './btn.style.scss';
import './dropdown.btn.style.scss';

interface ISortBTNS {
	(props: {
		Dropdown_list?: [a: string, b: changeSortBy_arg][];
		changeSortBy: (arg: changeSortBy_arg) => void;
		isSortTypes_list?: boolean;
	}): { SortBTNs: JSX.Element };
}

export const SortBTNS_Contract: ISortBTNS = ({ Dropdown_list, changeSortBy, isSortTypes_list }) => {
	const dropdown_list_data = (array_arg: [a: string, b: changeSortBy_arg][]) => array_arg;
	const sorttype_list_data = (array_arg: [a: string, b: changeSortBy_arg][]) => array_arg;

	let [Label, setLabel] = useState('По названию');
	let [targetItem, setArrows] = useState('');
	let SortBTN = (
		<>
			<div className="dropdown--type">
				<button className="dropbtn" children={<div>{`Тип сортировки: От А до Я`}</div>} />
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
						{Dropdown_list.map((drpdwn_item) => ({
							label: `${(targetItem === drpdwn_item[0] && '>>') || ''} ${drpdwn_item[0]}`,
							click_action: () => {
								changeSortBy(drpdwn_item[1]);
								setLabel(drpdwn_item[0]);
								setArrows(drpdwn_item[0]);
							},
						})).map(({ click_action, label }) => (
							<a onClick={() => click_action()} children={label} />
						))}
					</div>
				)}
				{isSortTypes_list && (
					<div className="dropdown-content">
						{[
							['От А до Я', 'ALPHABET'],
							['От Я до А', 'ALPHABET'],
							['От Большего к Меньшему', 'FAVORITE'],
							['От Меньшему к Большего', 'FAVORITE'],
							['Сначла последние', 'LAST_MODIFY'],
							['Сначла первые', 'LAST_MODIFY'],
						]
							.map((sort_typeItem) => ({
								label: sort_typeItem[0],
								click_action: () => console.dir(123),
							}))
							.map(({ label, click_action }) => (
								<a onClick={() => click_action()} children={label} />
							))}
					</div>
				)}
			</div>
		</>
	);
	return { SortBTNs: SortBTN };
};
