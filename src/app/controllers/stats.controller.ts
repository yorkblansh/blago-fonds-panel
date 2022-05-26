import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { StatsAPI } from '../api/stats.api'

export class Stats_Controller {
	public static get_stats(req: IRequest, res: IResponse) {
		const logger: ILogger = req.app.locals.logger
		StatsAPI.get_stats({ req, res, logger })
	}
}
