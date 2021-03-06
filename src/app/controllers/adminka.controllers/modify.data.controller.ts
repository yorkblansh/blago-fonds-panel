import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../../LOGS/Logger'
import { AdminkaPerformData } from '../../api/adminka/adminka.data.perform.mware'

export class ModifyData_Controller {
	public static perform = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		AdminkaPerformData.modifyData({ req, res, logger })
	}
}
