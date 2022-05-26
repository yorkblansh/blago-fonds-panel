/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import { enum_ListBlocks_sortBy, TchangeSortBy } from '../hooks/useSortBy'
import './btn.style.scss'
import './dropdown.btn.style.scss'
import { useSortType } from './useSortType'

interface Props {
	SortBy: [a: string, b: keyof typeof enum_ListBlocks_sortBy][]
	changeSortBy: TchangeSortBy
	SortType: [string, keyof typeof enum_ListBlocks_sortBy][][]
}

export const SortButtons = ({ SortBy: SortBy_list, changeSortBy, SortType: SortType_list }: Props) => {
	let [Label, setLabel] = useState('По названию')
	let [targetItem, setArrows] = useState('')
	let [sortTypesItems, set_sortTypeItems] = useState(SortType_list[2])

	return (
		<>
			<div className="dropdown--types">
				<button className=" dropbtn--types" children={<div>{`Тип сортировки: ${sortTypesItems[0][0]}`}</div>} />
				{SortType_list && (
					<div className="dropdown-content--types">
						{sortTypesItems
							.map((sort_typeItem) => ({
								label: sort_typeItem[0],
								click_action: () => {
									changeSortBy({ sortBy: sort_typeItem[1], sortType: useSortType(sort_typeItem[0]) })
								},
							}))
							.map(({ label, click_action }) => (
								<a onClick={() => click_action()} children={label} />
							))}
					</div>
				)}
			</div>
			<div className="dropdown">
				<button
					className=" dropbtn"
					children={
						<div>
							<div>{`Сорировать: ${Label}`}</div>
							{/* {favorite_count && <div className="header-btn--fav_count_color">{favorite_count}</div>} */}
						</div>
					}
				/>
				{SortBy_list && (
					<div className="dropdown-content">
						{SortBy_list.map((drpdwn_item, i) => ({
							label: `${(targetItem === drpdwn_item[0] && '>>') || ''} ${drpdwn_item[0]}`,
							click_action: () => {
								changeSortBy({ sortBy: drpdwn_item[1], sortType: 'A_z' })
								setLabel(drpdwn_item[0])
								setArrows(drpdwn_item[0])
								set_sortTypeItems(SortType_list[i])
							},
						})).map(({ click_action, label }) => (
							<a onClick={() => click_action()} children={label} />
						))}
					</div>
				)}
			</div>
		</>
	)
}
