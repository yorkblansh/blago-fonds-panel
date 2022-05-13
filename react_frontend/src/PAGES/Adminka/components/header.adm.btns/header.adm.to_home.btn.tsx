import './header.adm.to_home.btn.style.scss'
import { API, MAIN_PATHES } from 'api/consts'

export interface Header_ADM_BTNprops {
	Label: string
	path: keyof typeof API | keyof typeof MAIN_PATHES
}

export const Header_ADM_BTN = ({ Label, path }: Header_ADM_BTNprops) => {
	return (
		<>
			<div
				onClick={() => {
					document.location.href = path
				}}
				children={<div>{Label}</div>}
				className="adm-header-home_btn"
			/>
		</>
	)
}
