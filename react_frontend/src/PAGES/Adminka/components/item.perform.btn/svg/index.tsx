import check_yes from './check_yes.svg'
import check_no from './check_no.svg'
import like from './like.svg'
import unlike from './unlike.svg'

interface SvgPerformBtnProps {
	select_svg: keyof typeof SVG_MAP
	height?: string | number
	width?: string | number
}

export const SVG_MAP = {
	like,
	unlike,
	check_yes,
	check_no,
}

export const SvgPerformBtn = ({ select_svg, height, width }: SvgPerformBtnProps) => {
	return <img {...{ height, width }} src={SVG_MAP[select_svg]} alt={select_svg} />
}
