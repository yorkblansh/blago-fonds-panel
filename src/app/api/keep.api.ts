import { JsonDB_Services } from '../services/jsondb.services'
import { IMware } from '../typings/mware.interfaces'

export class Keep_API {
	public static getKeeped: IMware = ({ req, res, logger }) => {
		const { user_name } = req.body
		logger.log('returned FAVORITES')
		JsonDB_Services.getKeeped({
			user_name,
			cb: (keeped) => {
				res.send({ organizes: keeped })
			},
		})
	}

	public static get_keeped_org_names: IMware = ({ req, res, logger }) => {
		const { user_name } = req.body
		const { obj_keys } = JsonDB_Services.getKeeped_ONLY_NAME_STRINGS(user_name)
		res.send({ org_names: obj_keys })
	}

	public static add2keep: IMware = ({ req }) => {
		const { org_name, user_name }: { org_name: string; user_name: string } = req.body
		console.dir('SMTH ADDED TO KEEPED')
		console.dir(req.body)
		JsonDB_Services.add2keeped({ org_name, user_name, perf_type: 'BY_USER' })
	}

	public static remove_from_keep: IMware = ({ req, res, logger }) => {
		const { org_name, user_name }: { org_name: string; user_name: string } = req.body
		console.dir('SMTH REMOVED FROM KEEPED')

		JsonDB_Services.remove_from_keeped({ org_name, user_name, perf_type: 'BY_USER' })
	}
}
