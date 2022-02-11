import './btn.style.scss';
import './dropdown.btn.style.scss';

interface ISortBTNS {
	(props: {
		label: string;
		dropdown_list: {
			click_action: () => void;
			label: string;
		}[];

		second_label: string;
		sort_types_list: {
			click_action: () => void;
			label: string;
		}[];
	}): JSX.Element;
}

export const SortBTNS: ISortBTNS = ({ label, dropdown_list, second_label }) => {
	return (
		<div className="dropdown-wrapper">
			<div className="dropdown--type">
				<button className="dropbtn" children={<div>{`${second_label}: От А до Я`}</div>} />
			</div>

			<div className="dropdown">
				<button
					// onClick={() => {
					// 	!dropdown && ();
					// }}
					className="header-btn dropbtn"
					children={
						<div>
							<div>{label}</div>
							{/* {favorite_count && <div className="header-btn--fav_count_color">{favorite_count}</div>} */}
						</div>
					}
				/>
				{dropdown_list && (
					<div className="dropdown-content">
						{dropdown_list.map(({ click_action, label }) => {
							return <a onClick={() => click_action()}>{label}</a>;
						})}
					</div>
				)}
			</div>
		</div>
	);
};
