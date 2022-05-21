import './list.item.wrapper.style.scss'

export interface ListItemProps {
	index: string | number
	value: string
	Label: string
	link?: boolean
	isOrgName?: boolean
	info?: boolean
}

export const ListItem = ({ index, value, Label, link, isOrgName, info }: ListItemProps) => {
	return (
		<div
			style={
				isOrgName
					? {
							display: 'flex',
							position: 'relative',
							flexDirection: 'row',
							height: 'fit-content',
							width: 'fit-content',
					  }
					: {}
			}
			className="list-item--wrapper">
			{!isOrgName ? (
				<div
					onClick={(e) => link && window.open(value, '_blank')}
					className="list-item--wrapper--label"
					id={`item_label_${index}`}>
					{`${Label} ${link ? '🔗' : ''} `}
				</div>
			) : null}

			{info || isOrgName ? (
				<div
					className={`list-item--wrapper--body ${
						link &&
						//	'list-item--wrapper--body--link'
						''
					}`}
					key={`item_name_${index}`}
					id={`item_${index}`}
					children={
						isOrgName ? (
							<div style={{ fontSize: '25px', whiteSpace: 'nowrap' }}>{value}</div>
						) : value.length <= 1 ? (
							'Пусто'
						) : (
							value
						)
					}
				/>
			) : null}
		</div>
	)
}
