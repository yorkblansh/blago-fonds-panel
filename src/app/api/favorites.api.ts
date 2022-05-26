import { ReqResLog } from '../typings/interfaces'
import { JsonDB_Methods } from '../services/jsondb.services'

export class FavoritesAPI {
	public static getFavorites = ({ req, res, logger }: ReqResLog) => {
		const { user_name } = req.body
		logger.log('returned FAVORITES')
		JsonDB_Methods.getFavorites({
			user_name,
			cb: favorites => {
				res.send({ organizes: favorites })
			},
		})
	}

	public static getFavoriteOrgNames = ({ req, res, logger }: ReqResLog) => {
		const { user_name } = req.body
		const { obj_keys } = JsonDB_Methods.getFavoriteOrgNames(user_name)
		res.send({ org_names: obj_keys })
	}

	public static add2favorite = ({ req }: ReqResLog) => {
		const { org_name, user_name }: { org_name: string; user_name: string } = req.body
		console.dir('SMTH ADDED TO FAVORITE')
		console.dir(req.body)
		JsonDB_Methods.add2favorite({ org_name, user_name, perf_type: 'BY_USER' })
	}

	public static remove_from_favorite = ({ req, res, logger }: ReqResLog) => {
		const { org_name, user_name }: { org_name: string; user_name: string } = req.body
		console.dir('SMTH REMOVED FROM FAVORITE')

		JsonDB_Methods.removeFromFavorite({ org_name, user_name, perf_type: 'BY_USER' })
	}
}
