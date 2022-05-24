import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { RegisterAPI } from '../api/register.api'
export class Register_Controller {
	public static show(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		RegisterAPI.show({ req, res, logger })
	}
	public static perform(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		RegisterAPI.perform({ req, res, logger })
	}
}
