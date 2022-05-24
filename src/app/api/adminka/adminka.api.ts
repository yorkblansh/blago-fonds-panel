import { sendStatic } from '../../../server/send_static_file.mw'
import { ReqResLog } from '../../typings/interfaces'

export const AdminkaAPI = ({ req, res, logger }: ReqResLog) => {
	const isAdminVerified = req.cookies.admin_key.a_k === '789456123'
	const fail = () => {
		logger.log('нет куков')
		res.redirect('/auth')
	}

	isAdminVerified ? sendStatic(res) : fail()
}
