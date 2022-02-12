/* eslint-disable react/jsx-pascal-case */
import { PATH, REST_API } from 'api/consts';
import { getAccountProps } from 'app/getAccountProps';
import { Header_BTN } from './components/buttons/header.btn';
import { Header } from './components/header/header';
import { ListBlocks_Contract } from 'PAGES/modules/ListBlocks/list.blocks.contract';
import './home.page.style.scss';
import { useItemList } from 'app/hooks/useItemList';
import { SortBTNS_Contract } from 'PAGES/modules/ListBlocks/sort.btn/sort.btn.contract';

export const HOME_PAGE = () => {
	let { is_authorized, user_name } = getAccountProps();
	let { ListBlocks, SortBTNs } = ListBlocks_Contract({ path: '/', is_authorized });
	let { list_length: favorite_list_length } = useItemList('/favorites');
	return (
		<>
			<Header
				Buttons={
					is_authorized
						? [
								<Header_BTN path={PATH('/stats')} label="Перейти в статистику" />,
								<Header_BTN
									path={PATH('/favorites')}
									label="Избранные"
									favorite_count={favorite_list_length}
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
	);
};
