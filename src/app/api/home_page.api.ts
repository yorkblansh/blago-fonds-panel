import { ReqResLog } from '../typings/interfaces'
import { sendStatic } from '../../server/send_static_file.mw'
import { JsonDB_Methods } from '../services/jsondb.services'

export class HomePageAPI {
	public static show = ({ req, res, logger }: ReqResLog) => {
		logger.log('home page returned')
		return sendStatic(res)
	}

	public static perform = ({ res, logger }: ReqResLog) => {
		logger.log('home page perform')
		const organizes = JsonDB_Methods.getOrgs()
		res.send({ organizes })
	}
}
