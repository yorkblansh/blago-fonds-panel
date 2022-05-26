/* eslint-disable react/jsx-pascal-case */
import { PATH } from 'api/consts'
import { getAccountProps } from 'app/getAccountProps'
import { Bar_Chart } from 'components/bar.chart/bar.chart'
import { useListBlocks } from 'components/ListBlocks/useListBlocks'
import { sortOptions } from 'config/SortButtons'
import { Header_BTN } from 'PAGES/Home_page/components/buttons/header.btn'
import { Header } from 'PAGES/Home_page/components/header/header'

export const FAVORITES_PAGE = () => {
	let { isAuthorized: is_authorized } = getAccountProps()
	let { ListBlocks, SortButtons } = useListBlocks({ path: '/favorites', isAuthorized: is_authorized,sortOptions: sortOptions })
	let isListBlocks = ListBlocks?.length !== 0

	console.dir(ListBlocks)
	return (
		<>
			<Header
				Buttons={
					is_authorized
						? [<Header_BTN path={PATH('/')} label="На главную" />]
						: [<Header_BTN path="/auth" label="Вернуться на страницу авторизации" />]
				}
			/>
			<div className="dropdown-wrapper" children={SortButtons} />
			<div className="home-page" id="home-page">
				{is_authorized && isListBlocks && (
					<div className="home-page--wrapper" id="home-page--wrapper" children={ListBlocks} />
				)}
			</div>
		</>
	)
}
