import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { KeepAPI } from '../api/keep.api'

export class Keep_Controller {
	public static perform(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		KeepAPI.getKeeped({ req, res, logger })
	}

	public static get_keep_org_names = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		KeepAPI.get_keeped_org_names({ res, req, logger })
	}

	public static add2keep = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		KeepAPI.add2keep({ req, res, logger })
	}

	public static remove_from_keep = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		KeepAPI.remove_from_keep({ req, res, logger })
	}
}
