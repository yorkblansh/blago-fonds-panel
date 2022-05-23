import { sendStatic } from '../../server/send_static_file.mw'
import { IMware } from '../typings/mware.interfaces'

export const Adminka_mware: IMware = ({ req, res, logger }) => {
	const isAdminVerified = req.cookies.admin_key.a_k === '789456123'
	const fail = () => {
		logger.log('нет куков')
		res.redirect('/auth')
	}

	isAdminVerified ? sendStatic(res) : fail()
}
