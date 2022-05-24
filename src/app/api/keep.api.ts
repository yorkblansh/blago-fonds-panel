import { JsonDB_Methods } from '../services/jsondb.services'
import { ReqResLog } from '../typings/interfaces'

export class KeepAPI {
	public static getKeeped = ({ req, res, logger }: ReqResLog) => {
		const { user_name } = req.body
		logger.log('returned FAVORITES')
		JsonDB_Methods.getKeeped({
			user_name,
			cb: keeped => {
				res.send({ organizes: keeped })
			},
		})
	}

	public static get_keeped_org_names = ({ req, res, logger }: ReqResLog) => {
		const { user_name } = req.body
		const { obj_keys } = JsonDB_Methods.getKeeped_ONLY_NAME_STRINGS(user_name)
		res.send({ org_names: obj_keys })
	}

	public static add2keep = ({ req }: ReqResLog) => {
		const { org_name, user_name }: { org_name: string; user_name: string } = req.body
		console.dir('SMTH ADDED TO KEEPED')
		console.dir(req.body)
		JsonDB_Methods.add2keeped({ org_name, user_name, perf_type: 'BY_USER' })
	}

	public static remove_from_keep = ({ req, res, logger }: ReqResLog) => {
		const { org_name, user_name }: { org_name: string; user_name: string } = req.body
		console.dir('SMTH REMOVED FROM KEEPED')

		JsonDB_Methods.remove_from_keeped({ org_name, user_name, perf_type: 'BY_USER' })
	}
}
