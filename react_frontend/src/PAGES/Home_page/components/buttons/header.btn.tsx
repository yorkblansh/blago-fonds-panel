import { MAIN_PATHES } from 'api/consts';
import './header.btn.style.scss';
import './dropdown.btn.style.scss';

type _path = keyof typeof MAIN_PATHES | '/logout';

interface IHeader_BTN {
	(props: { label: string; path: _path; dropdown?: [{ path: _path; label: string }] }): JSX.Element;
}

export const Header_BTN: IHeader_BTN = ({ label, path, dropdown }) => {
	return (
		<>
			<div className="dropdown">
				<button
					onClick={() => {
						!dropdown && (document.location.href = path);
					}}
					className="header-btn dropbtn"
					children={<div>{label}</div>}
				/>
				{dropdown && (
					<div className="dropdown-content">
						{dropdown.map(({ path, label }) => {
							return <a href={path}>{label}</a>;
						})}
						{/* <a href={path}>Выйти</a> */}
					</div>
				)}
			</div>
		</>
	);
};
