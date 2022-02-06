/* eslint-disable react/jsx-pascal-case */
import { Bar_Chart } from 'PAGES/components/bar.chart/bar.chart';
import { Header_BTN } from 'PAGES/Home_page/components/buttons/header.btn';
import { Header } from 'PAGES/Home_page/components/header/header';
import { PATH } from 'api/consts';
import { BarOptions, BarData } from 'PAGES/components/bar.chart/bar.chart.conf';
import { getAccountProps } from 'app/getAccountProps';
import { getStatsData } from 'app/getStats.data';

export const STATS_PAGE = () => {
	let { is_authorized, is_admin } = getAccountProps();
	let { org_names, favorite_counters } = getStatsData();

	let { bar_options } = BarOptions({ title_text: 'TITLE text' });
	let { bar_data } = BarData({
		DatasetLabel: 'Голоса',
		labels: org_names,
		numeric_values: favorite_counters,
	});
	return (
		<div>
			<Header
				Buttons={
					is_authorized
						? [<Header_BTN path={PATH('/')} label="На главную" />]
						: [<Header_BTN path="/auth" label="Вернуться на страницу авторизации" />]
				}
			/>
			<Bar_Chart bar_options={bar_options} bar_data={bar_data} other_props={{ height: 20, width: 50 }} />;
		</div>
	);
};
