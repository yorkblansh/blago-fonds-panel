/* eslint-disable react/jsx-pascal-case */
import { PATH, REST_API } from 'api/consts'
import { getAccountProps } from 'app/getAccountProps'
import { Header_BTN } from './components/buttons/header.btn'
import { Header } from './components/header/header'
import './home.page.style.scss'
import { useItemList } from 'app/hooks/useItemList'
import { SortButtons } from 'config/SortButtons'
import { ItemList } from 'components/ListBlocks/list.blocks.contract'

export const HOME_PAGE = () => {
	let { is_authorized, user_name } = getAccountProps()
	let { ListBlocks, SortBTNs } = ItemList({ path: '/', is_authorized, sort_options: SortButtons })
	let { list_length: favorite_list_length } = useItemList('/favorites')
	let { list_length: keep_list_length } = useItemList('/keeped')
	return (
		<>
			<Header
				Buttons={
					is_authorized
						? [
								<Header_BTN path={PATH('/stats')} label="Перейти в статистику" />,
								<Header_BTN
									path={PATH('/favorites')} // Лайки
									label="Понравилось"
									favorite_count={favorite_list_length}
								/>,
								<Header_BTN
									path={PATH('/keeped')} // Закладки
									label="Закладки"
									favorite_count={keep_list_length}
								/>,
								<Header_BTN
									path={REST_API('/logout')}
									label={user_name}
									dropdown_list={[{ label: 'Выйти', click_link: '/logout' }]}
								/>,
						  ]
						: [
								<Header_BTN path="/auth" label="Войти в профиль" />,
								<Header_BTN path="/register" label="Регистрация" />,
						  ]
				}
			/>
			<div className="home-page" id="home-page">
				<div className="dropdown-wrapper" children={SortBTNs} />
				<div className="home-page--wrapper" id="home-page--wrapper" children={ListBlocks} />
			</div>
		</>
	)
}
