/* eslint-disable react/jsx-pascal-case */
import { PATH } from 'api/consts'
import { getAccountProps } from 'app/getAccountProps'
import { useListBlocks } from 'components/ListBlocks/useListBlocks'
import { sort_options } from 'config/SortButtons'
import { Header_BTN } from 'PAGES/Home_page/components/buttons/header.btn'
import { Header } from 'PAGES/Home_page/components/header/header'

export const KEEPED_PAGE = () => {
	const { is_authorized } = getAccountProps()
	const { ListBlocks, SortButtons } = useListBlocks({ path: '/keeped', is_authorized, sort_options })
	const isListBlocks = ListBlocks?.length !== 0

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
