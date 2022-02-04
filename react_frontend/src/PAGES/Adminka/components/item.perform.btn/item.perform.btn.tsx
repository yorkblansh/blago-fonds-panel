import './item.perform.btn.style.scss';
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler';
import { PERF_TYPE } from 'api/consts';
import { add2favorite } from 'app/home_page/add2favorite';
export interface I_Item_Config_BTN {
	(props: { type: keyof typeof PERF_TYPE; index: number; Label: string; org_name?: string }): JSX.Element;
}

export const Item_Perform_BTN: I_Item_Config_BTN = ({ type, index, Label, org_name }) => {
	return (
		<div
			children={<div>{Label}</div>}
			className="adm-edit-btn"
			onClick={() => {
				DisplayModalToogler(index, true, type);
				type === 'ADD_2_FAVORITE' && add2favorite(org_name);
			}}
		/>
	);
};
