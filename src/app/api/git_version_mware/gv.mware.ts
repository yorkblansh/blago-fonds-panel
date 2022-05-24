import { ReqResLog } from '../../typings/interfaces'
import shelljs from 'shelljs'

export function GV_mware({ req, res, logger }: ReqResLog) {
	const isAdmin = req.cookies.admin_key
	const soft_ver = shelljs.exec('git describe').toString()
	// const _soft_ver = soft_ver.substring(0, soft_ver.length - 12)

	isAdmin ? res.send({ version: soft_ver }) : console.log()
}
