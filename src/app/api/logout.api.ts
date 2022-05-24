import { COOKIES } from '../../../react_frontend/src/api/consts'
import { ReqResLog } from '../typings/interfaces'

export class LogOutAPI {
	public static perform = ({ logger, res }: ReqResLog) => {
		logger.log('logged OUT')
		try {
			res.clearCookie(COOKIES('admin_key'))
			res.clearCookie(COOKIES('user_key'))
			res.clearCookie(COOKIES('user_name'))
		} catch (error) {
			logger.log(error)
		}
		res.redirect('/')
	}
}
