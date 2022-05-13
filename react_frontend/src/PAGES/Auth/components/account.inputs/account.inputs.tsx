import { MAIN_PATHES } from 'api/consts'
import './inputs.style.scss'

interface IAccount_Input {
	(props: { input_type: 'login' | 'password'; Label: string; path: keyof typeof MAIN_PATHES }): JSX.Element
}

export const Account_Input: IAccount_Input = ({ input_type, Label, path }) => {
	let _type = useTypeContract(input_type)
	let end_input_type = `input_type--${input_type}`
	return (
		<>
			<div className="input_type--label">{Label}</div>
			<input
				className={end_input_type}
				name={`${input_type}-input_${path}`}
				type={_type}
				id={`${input_type}-input_${path}`}
			/>
		</>
	)
}

const useTypeContract = (input_type: string) => {
	let _type: 'text' | 'password' = 'text'
	if (input_type === 'login') {
		_type = 'text'
	} else if (input_type === 'password') {
		_type = 'password'
	}
	return _type
}
