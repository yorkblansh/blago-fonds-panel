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
		const { json_data_HOME_PAGE } = JsonDB_Methods.home_page_dataPerform()
		res.send({ organizes: json_data_HOME_PAGE })
	}
}
