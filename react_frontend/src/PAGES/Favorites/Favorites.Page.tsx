/* eslint-disable react/jsx-pascal-case */
import { PATH } from 'api/consts';
import { getAccountProps } from 'app/getAccountProps';
import { Bar_Chart } from 'PAGES/components/bar.chart/bar.chart';
import { Header_BTN } from 'PAGES/Home_page/components/buttons/header.btn';
import { Header } from 'PAGES/Home_page/components/header/header';
import { ListBlocks_Contract } from 'PAGES/Home_page/components/modules/list.blocks.contract';

export const FAVORITES_PAGE = () => {
	let { is_authorized } = getAccountProps();
	let { ListBlocks } = ListBlocks_Contract({ path: '/favorites', is_authorized });

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
				{is_authorized && <div className="home-page--wrapper" id="home-page--wrapper" children={ListBlocks} />}
			</div>
		</>
	);
};
