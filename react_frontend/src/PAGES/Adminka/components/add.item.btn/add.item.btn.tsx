import { DisplayModalToogler } from 'app/adminka/DisplayModalToogler'
import { perform_submit } from 'app/adminka/perform.submit'
import './add.item.btn.style.scss'

interface IAdd_Item_Btn {
	(props: { Label: string }): JSX.Element
}

export const Add_Item_Btn: IAdd_Item_Btn = ({ Label }) => {
	return (
		<div>
			<button
				onClick={(e) => {
					DisplayModalToogler('create', true, 'CREATE')
				}}
				className="adminka--add-item-btn"
				children={<div>{Label}</div>}
			/>
		</div>
	)
}
