import { API, MAIN_PATHES } from 'api/consts'
import './header.btn.style.scss'
import './dropdown.btn.style.scss'

type _path = keyof typeof MAIN_PATHES | keyof typeof API

interface IHeader_BTN {
	label: string
	path: _path
	dropdown_list?: [{ click_link: _path; label: string }]
	favorite_count?: number | string
}

export const Header_BTN = ({ label, path, dropdown_list: dropdown, favorite_count }: IHeader_BTN) => {
	return (
		<>
			<div className="dropdown">
				<button
					onClick={() => {
						!dropdown && (document.location.href = path)
					}}
					className="header-btn "
					children={
						<div>
							<div>{label}</div>
							{favorite_count ? <div className="header-btn--fav_count_color">{favorite_count}</div> : null}
						</div>
					}
				/>
				{dropdown && (
					<div className="dropdown-content-user_btn">
						{dropdown.map(({ click_link, label }) => {
							return <a href={click_link}>{label}</a>
						})}
						{/* <a href={path}>Выйти</a> */}
					</div>
				)}
			</div>
		</>
	)
}
