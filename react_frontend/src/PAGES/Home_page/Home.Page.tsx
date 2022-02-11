/* eslint-disable react/jsx-pascal-case */
import { PATH, REST_API } from 'api/consts';
import { getAccountProps } from 'app/getAccountProps';
import { Header_BTN } from './components/buttons/header.btn';
import { Header } from './components/header/header';
import { ListBlocks_Contract } from '../modules/list.blocks.contract';
import './home.page.style.scss';
import { useItemList } from 'app/hooks/useItemList';
import { SortBTNS } from 'PAGES/components/dropdown.btn/dropdown.btn';
import { useState } from 'react';
import { changeSortBy_arg } from 'PAGES/modules/hooks/useSortBy';
import { BTN } from 'PAGES/components/button/btn';

export const HOME_PAGE = () => {
	let { is_authorized, user_name } = getAccountProps();
	let { ListBlocks, changeSortBy } = ListBlocks_Contract({ path: '/', is_authorized });
	let { list_length: favorite_list_length } = useItemList('/favorites');
	let [Label, setLabel] = useState('По названию');
	let [targetItem, setArrows] = useState('');
	const dropdown_list_data = (bbb: [a: string, b: changeSortBy_arg][]) => bbb;
	const sorttype_list_data = (bbb: [a: string, b: changeSortBy_arg][]) => bbb;
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
				<SortBTNS
					label={`Сорировать: ${Label}`}
					dropdown_list={dropdown_list_data([
						['По лайкам', 'FAVORITE'],
						['По дате изменения', 'LAST_MODIFY'],
						['По названию', 'ALPHABET'],
					]).map((drpdwn_item) => {
						return {
							label: `${(targetItem === drpdwn_item[0] && '>>') || ''} ${drpdwn_item[0]}`,
							click_action: () => {
								changeSortBy(drpdwn_item[1]);
								setLabel(drpdwn_item[0]);
								setArrows(drpdwn_item[0]);
							},
						};
					})}
					second_label="Тип сортировки"
					sort_types_list={sorttype_list_data([
						['От А до Я', ''],
						['От Я до А', ''],
						['От Большего к Меньшему', ''],
						['От Меньшему к Большего', ''],
						['']
					])}
				/>

				<div className="home-page--wrapper" id="home-page--wrapper" children={ListBlocks} />
			</div>
		</>
	);
};
