import { ReqResLog } from '../../typings/interfaces'
import { JsonDB_Methods } from '../../services/jsondb.services'

export type I_obj = {
	name: string
	link1: string
	link2: string
	info: string
	index?: string
	last_modify: string
	old_name?: string
}

export class AdminkaPerformData {
	public static modifyData = ({ req, logger }: ReqResLog) => {
		// logger.log(req.body);
		const { info, link1, link2, name, index, last_modify, old_name }: I_obj = req.body
		JsonDB_Methods.adminka_modify_data({ info, link1, link2, name, index, last_modify, old_name })
	}

	public static createData = ({ req, logger }: ReqResLog) => {
		// logger.log(req.body);
		const { info, link1, link2, name, last_modify }: I_obj = req.body
		JsonDB_Methods.adminka_create_data({ info, last_modify, link1, link2, name })
	}

	public static removeData = ({ req, logger }: ReqResLog) => {
		// logger.log(req.body);
		const { name }: I_obj = req.body
		JsonDB_Methods.adminka_remove_data({ name })
	}
}
