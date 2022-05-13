/* eslint-disable react/jsx-pascal-case */
import { PATH } from 'api/consts'
import { getAccountProps } from 'app/getAccountProps'
import { Header_BTN } from 'PAGES/Home_page/components/buttons/header.btn'
import { Header } from 'PAGES/Home_page/components/header/header'
import { ListBlocks_Contract } from 'PAGES/modules/ListBlocks/list.blocks.contract'

export const KEEPED_PAGE = () => {
	const { is_authorized } = getAccountProps()
	const { ListBlocks } = ListBlocks_Contract({ path: '/keeped', is_authorized })
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
			<div className="home-page" id="home-page">
				{is_authorized && isListBlocks && (
					<div className="home-page--wrapper" id="home-page--wrapper" children={ListBlocks} />
				)}
			</div>
		</>
	)
}
