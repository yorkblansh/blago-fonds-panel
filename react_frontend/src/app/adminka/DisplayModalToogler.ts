import { PERF_TYPE } from 'api/consts'

export const DisplayModalToogler = (
	index: string | number,
	display_status: boolean,
	type: keyof typeof PERF_TYPE,
) => {
	if (display_status === true) {
		document
			.getElementById(`modal-perform-menu_${type}_${index}`)
			?.setAttribute(
				'style',
				'display: flex; width:100%; height:100%; flex-direction: column;justify-content: center; position:absolute; bottom:0; flex-direction: column;',
			)
	} else {
		document.getElementById(`modal-perform-menu_${type}_${index}`)?.setAttribute('style', 'display: none')
	}
	// console.dir(type);
	// console.dir(index);
}
