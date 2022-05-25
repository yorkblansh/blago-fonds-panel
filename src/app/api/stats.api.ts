import { JsonDB_Methods } from '../services/jsondb.services'
import { ReqResLog } from '../typings/interfaces'

export class StatsAPI {
	public static get_stats = ({ res }: ReqResLog) => {
		const end_pairs = JsonDB_Methods.getFavoriteCounts()
		res.send({ end_pairs })
	}
}
