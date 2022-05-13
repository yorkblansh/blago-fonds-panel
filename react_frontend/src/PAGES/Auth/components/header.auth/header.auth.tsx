import './header.auth.style.scss'

export interface IHeader_Auth {
	(props: { Header_BTN: JSX.Element }): JSX.Element
}

export const Header_Auth: IHeader_Auth = ({ Header_BTN }) => {
	return (
		<div className="auth--header">
			<div className="auth--bolvanka" />
			<div className="auth--bolvanka" />
			{Header_BTN}
			{/* <div className="auth--go-to-home" /> */}
		</div>
	)
}
