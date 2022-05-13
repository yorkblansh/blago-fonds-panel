import './list.item.wrapper.style.scss'

export interface ListItemProps {
	index: string | number
	value: string
	Label: string
	link?: boolean
}

export const ListItem = ({ index, value, Label, link }: ListItemProps) => {
	return (
		<div className="list-item--wrapper">
			<div className="list-item--wrapper--label" id={`item_label_${index}`}>
				{Label}
			</div>
			<div
				onClick={(e) => link && (window.open(value,'_blank'))}
				className={`list-item--wrapper--body ${link && 'list-item--wrapper--body--link'}`}
				key={`item_name_${index}`}
				id={`item_${index}`}
				children={value}
			/>
		</div>
	)
}
