import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { _DeepPartialObject } from 'chart.js/types/utils'
import { IBarData, IBarData_object } from './bar.chart.conf'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface IBar_Chart {
	(props: {
		bar_options: any
		bar_data: IBarData_object
		other_props?: { height: string | number; width: string | number }
	}): JSX.Element
}
export const Bar_Chart: IBar_Chart = ({ bar_data, bar_options, other_props }) => {
	return <Bar options={bar_options} data={bar_data} {...other_props} />
}
