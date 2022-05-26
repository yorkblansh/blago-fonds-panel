import { Organize, ReqResLog } from '../../typings/interfaces'
import { JsonDB_Methods } from '../../services/jsondb.services'

export class AdminkaPerformData {
	public static modifyData = ({ req, logger }: ReqResLog) => {
		// logger.log(req.body);
		const { info, link1, link2, name, index, last_modify, old_name }: Organize = req.body
		JsonDB_Methods.modifyItem({ info, link1, link2, name, index, last_modify, old_name })
	}

	public static createData = ({ req, logger }: ReqResLog) => {
		// logger.log(req.body);
		const { info, link1, link2, name, last_modify }: Organize = req.body
		JsonDB_Methods.createItem({ info, last_modify, link1, link2, name })
	}

	public static removeData = ({ req, logger }: ReqResLog) => {
		// logger.log(req.body);
		const { name }: Organize = req.body
		JsonDB_Methods.removeItem({ name })
	}
}
