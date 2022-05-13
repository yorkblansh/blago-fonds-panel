import './item.perform.btn.style.scss'
import { PERF_TYPE } from 'api/consts'
export interface I_Item_Config_BTN {
	(props: { type: keyof typeof PERF_TYPE; Label: string; _onClick: () => void }): JSX.Element
}

export const Item_Perform_BTN: I_Item_Config_BTN = ({ type, Label, _onClick }) => {
	return (
		<div className={`adm-edit-btn btn--${type}`} onClick={() => _onClick()}>
			<div>{Label}</div>
		</div>
	)
}
