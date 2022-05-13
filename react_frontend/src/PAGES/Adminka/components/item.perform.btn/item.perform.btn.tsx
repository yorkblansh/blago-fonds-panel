import './item.perform.btn.style.scss'
import { PERF_TYPE } from 'api/consts'
import { FunctionComponent, SVGProps } from 'react'
import { SvgPerformBtn, SVG_MAP } from './svg'

export interface Item_Config_BTNprops {
	type: keyof typeof PERF_TYPE
	Label: string
	_onClick: () => void
	Icon?: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
}

const PERFORM_BTN_ICON_MAP: { [x in keyof typeof PERF_TYPE]?: keyof typeof SVG_MAP } = {
	ADD_2_FAVORITE: 'like',
	REMOVE_FROM_FAVORITE: 'unlike',
	REMOVE: 'check_no',
	CREATE: 'check_yes',
}

export const Item_Perform_BTN = ({ type, Label, _onClick, Icon }: Item_Config_BTNprops) => {
	const select_svg = PERFORM_BTN_ICON_MAP[type]
	const isAdmin = type === 'CREATE' || type === 'MODIFY' || type === 'REMOVE'
	return (
		<>
			{isAdmin ? (
				<div className={`adm-edit-btn btn--${type}`} style={{ borderWidth: 3 }} onClick={() => _onClick()}>
					<div>{Label}</div>
				</div>
			) : (
				<div className={`adm-edit-btn btn--${type}`} style={{ borderWidth: 0 }} onClick={() => _onClick()}>
					<SvgPerformBtn height="50" width="50" select_svg={select_svg ? select_svg : 'unlike'} />
				</div>
			)}
		</>
	)
}
