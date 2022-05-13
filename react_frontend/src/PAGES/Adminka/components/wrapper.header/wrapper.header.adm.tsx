import './wrapper.header.adm.style.scss'

export interface IHeaderWR_Adminka {
	(props: { ExitBtn: JSX.Element; HomeBtn: JSX.Element }): JSX.Element
}

export const HeaderWR_Adminka: IHeaderWR_Adminka = ({ ExitBtn, HomeBtn }) => {
	return (
		<div className="adminka--wrapper--header">
			{HomeBtn}
			{ExitBtn}
		</div>
	)
}
