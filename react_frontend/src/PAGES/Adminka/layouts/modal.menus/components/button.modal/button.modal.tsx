import './button.modal.style.scss'
import { PERF_TYPE } from 'api/consts'
import { perform_submit } from 'app/adminka/perform.submit'
import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler'

interface IButton_Modal {
	(props: {
		index: number | string
		button_type: 'CLOSE' | 'SAVE'
		modal_type: keyof typeof PERF_TYPE
		Label: string
	}): JSX.Element
}

export const Button_Modal: IButton_Modal = ({ index, button_type, Label, modal_type }) => {
	return (
		<>
			<button
				type="button"
				onClick={(e) => {
					if (button_type === 'SAVE') {
						perform_submit(index, modal_type)
					}
					DisplayModalToogler(index, false, modal_type)
				}}
				className={`modal-btn--${button_type}`}
				id={`${button_type}_btn_${index}`}>
				{Label}
			</button>
		</>
	)
}
