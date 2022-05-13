/* eslint-disable react/jsx-pascal-case */
import './item.perform.btn.style.scss'
import { PERF_TYPE } from 'api/consts'
import { FunctionComponent, SVGProps } from 'react'
import { SvgPerformBtn, SVG_MAP } from './svg'
import { FavoriteCounter_div } from 'PAGES/components/favorite.counter.div/favorite.counter.div'

export interface Item_Config_BTNprops {
	favorite_counter?: number
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

export const Item_Perform_BTN = ({ type, Label, _onClick, favorite_counter }: Item_Config_BTNprops) => {
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
					{favorite_counter ? <FavoriteCounter_div {...{ favorite_counter }} /> : null}
					<SvgPerformBtn height="50" width="50" select_svg={select_svg ? select_svg : 'unlike'} />
				</div>
			)}
		</>
	)
}
