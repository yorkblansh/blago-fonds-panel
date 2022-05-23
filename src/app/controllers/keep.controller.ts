import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { Home_page_mware } from '../api/home_page.api'
import { Keep_API } from '../api/keep.api'

export class Keep_Controller {
	public static perform(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		Keep_API.getKeeped({ req, res, logger })
	}

	public static get_keep_org_names = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		Keep_API.get_keeped_org_names({ res, req, logger })
	}

	public static add2keep = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		Keep_API.add2keep({ req, res, logger })
	}

	public static remove_from_keep = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		Keep_API.remove_from_keep({ req, res, logger })
	}
}
