import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { LogOutAPI } from '../api/logout.api'

export class LogOut_Controller {
	public static perform(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		LogOutAPI.perform({ req, res, logger })
	}
}
