import {
	BarControllerChartOptions,
	ChartData,
	ChartOptions,
	CoreChartOptions,
	DatasetChartOptions,
	ElementChartOptions,
	PluginChartOptions,
	ScaleChartOptions,
} from 'chart.js';
import { _DeepPartialObject } from 'chart.js/types/utils';

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export type IBarData_object = ChartData<'bar', number[], unknown>;
export type IBarOptions_object = ChartOptions<'bar'>;

export interface IBarData {
	(props: { labels: string[]; numeric_values: number[]; DatasetLabel: string }): { bar_data: IBarData_object };
}
export const BarData: IBarData = ({ labels, numeric_values, DatasetLabel }) => {
	const bar_data: IBarData_object = {
		labels,
		datasets: [
			{
				label: DatasetLabel,
				data: numeric_values,
				backgroundColor: 'blue',
			},
		],
		// 	// {
		// 	// 	label: 'Dataset 2',
		// 	// 	data: [1, 2, 3, 5],
		// 	// 	backgroundColor: 'rgba(53, 162, 235, 0.5)',
		// 	// },
		// ],
	};
	return { bar_data };
};

export interface IBarOptions {
	(props: { title_text?: string }): { bar_options: IBarOptions_object };
}
export const BarOptions: IBarOptions = ({ title_text }) => {
	const bar_options: IBarOptions_object = {
		responsive: true,
		color: 'blue',
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: title_text ? true : false,
				text: title_text ? title_text : '',
			},
		},
	};
	return { bar_options };
};
