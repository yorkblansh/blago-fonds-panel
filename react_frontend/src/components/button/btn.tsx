interface IBTN {
	(props: { Label: string }): JSX.Element
}

export const BTN: IBTN = ({ Label }) => {
	return (
		<button
		//  onClick={}
		>
			{Label}
		</button>
	)
}
