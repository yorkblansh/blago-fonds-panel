import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { AdminkaAPI } from '../api/adminka/adminka.api'

export class Adminka_Controller {
	public static show(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		AdminkaAPI({ req, res, logger })
	}
}
