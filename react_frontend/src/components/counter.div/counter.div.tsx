import { PERF_TYPE } from 'api/consts'
import './counter.style.scss'

interface Counter_divProps {
	counter: string | number
	type: keyof typeof PERF_TYPE
}

export const Counter_div = ({ counter, type }: Counter_divProps) => {
	const backgroundColor =
		type === 'REMOVE_FROM_FAVORITE' ? 'rgb(255 167 167)' : type === 'REMOVE_FROM_KEEPED' ? '#e7d500' : 'white'
	return (
		<div style={{ backgroundColor }} className="counter">
			<div>{counter}</div>
		</div>
	)
}
