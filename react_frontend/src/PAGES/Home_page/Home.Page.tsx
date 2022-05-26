/* eslint-disable react/jsx-pascal-case */
import { PATH, REST_API } from 'api/consts'
import { getAccountProps } from 'app/getAccountProps'
import { Header_BTN } from './components/buttons/header.btn'
import { Header } from './components/header/header'
import './home.page.style.scss'
import { getItemList } from 'app/hooks/getItemList'
import { sortOptions } from 'config/SortButtons'
import { useListBlocks } from 'components/ListBlocks/useListBlocks'

export const HOME_PAGE = () => {
	const { isAuthorized, userName } = getAccountProps() // получаем информацию об акаунте

	/**
	 * Передаем данные о странице в хук для вывода данных
	 */
	const { ListBlocks, SortButtons } = useListBlocks({ path: '/', isAuthorized, sortOptions })

	const { listLength: favoriteListLength } = getItemList('/favorites') // получаем колличество лайкнутых орагнизаций
	const { listLength: keepListLength } = getItemList('/keeped') // получаем кол-во организаций в закладках

	/**
	 * Создаем условие для рендера кнопок в хедере
	 */
	const HeaderButtons = isAuthorized
		? [
				<Header_BTN path={PATH('/stats')} label="Перейти в статистику" />,
				<Header_BTN
					path={PATH('/favorites')} // Лайки
					label="Понравилось"
					favorite_count={favoriteListLength}
				/>,
				<Header_BTN
					path={PATH('/keeped')} // Закладки
					label="Закладки"
					favorite_count={keepListLength}
				/>,
				<Header_BTN
					path={REST_API('/logout')}
					label={userName}
					dropdown_list={[{ label: 'Выйти', click_link: '/logout' }]}
				/>,
		  ]
		: [<Header_BTN path="/auth" label="Войти в профиль" />, <Header_BTN path="/register" label="Регистрация" />]

	return (
		<>
			<Header
				Buttons={HeaderButtons} // передаем кнопки в хедер
			/>
			<div className="home-page" id="home-page">
				<div className="dropdown-wrapper" children={SortButtons} />
				<div className="home-page--wrapper" id="home-page--wrapper" children={ListBlocks} />
			</div>
		</>
	)
}
