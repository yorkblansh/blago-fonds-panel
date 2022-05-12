import './header.style.scss';

export interface HeaderProps {
	AuthBtn?: JSX.Element;
	RegisterBtn?: JSX.Element;
	Buttons: JSX.Element[];
	reg_or_auth?: boolean;
}

export const Header = ({ AuthBtn, RegisterBtn, Buttons, reg_or_auth }: HeaderProps) => {
	return (
		<div className={`header--wrapper ${reg_or_auth && 'header--wrapper--pos_absolute'}`} id="header--wrapper">
			<div className="header--wrapper--title">
				<div> Панель мониторинга благотворительных фондов</div>
			</div>
			<div className="header--wrapper--btns">
				{Buttons.map((btn, i) => {
					return <div id={`header--wrapper--element${i}`} children={btn} />;
				})}
			</div>
		</div>
	);
};
