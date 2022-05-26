import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { AuthAPI } from '../api/auth.api'

export class Auth_Controller {
	public static show(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		AuthAPI.show({ req, res, logger })
	}

	public static perform(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		AuthAPI.perform({ req, res, logger })
	}
}
