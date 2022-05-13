import './item.perform.btn.style.scss'
import { PERF_TYPE } from 'api/consts'
export interface Item_Config_BTNprops {
	type: keyof typeof PERF_TYPE
	Label: string
	_onClick: () => void
}

export const Item_Perform_BTN = ({ type, Label, _onClick }: Item_Config_BTNprops) => {
	return (
		<div className={`adm-edit-btn btn--${type}`} onClick={() => _onClick()}>
			<div>{Label}</div>
		</div>
	)
}
