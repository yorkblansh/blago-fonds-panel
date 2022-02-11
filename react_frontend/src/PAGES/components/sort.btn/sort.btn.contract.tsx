import { changeSortBy_arg } from 'PAGES/modules/hooks/useSortBy';
import { useState } from 'react';
import './btn.style.scss';
import './dropdown.btn.style.scss';

interface ISortBTNS {
	(props: {
		isDropdown_list?: boolean;
		changeSortBy: (arg: changeSortBy_arg) => void;
		isSortTypes_list?: boolean;
	}): { SortBTN: JSX.Element };
}

export const SortBTNS_Contract: ISortBTNS = ({
	isDropdown_list: dropdown_list,
	changeSortBy,
	isSortTypes_list: sort_types_list,
}) => {
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
				{dropdown_list && (
					<div className="dropdown-content">
						{dropdown_list_data([
							['По лайкам', 'FAVORITE'],
							['По дате изменения', 'LAST_MODIFY'],
							['По названию', 'ALPHABET'],
						])
							.map((drpdwn_item) => ({
								label: `${(targetItem === drpdwn_item[0] && '>>') || ''} ${drpdwn_item[0]}`,
								click_action: () => {
									changeSortBy(drpdwn_item[1]);
									setLabel(drpdwn_item[0]);
									setArrows(drpdwn_item[0]);
								},
							}))
							.map(({ click_action, label }) => (
								<a onClick={() => click_action()} children={label} />
							))}
					</div>
				)}
			</div>
		</>
	);
	return { SortBTN };
};
