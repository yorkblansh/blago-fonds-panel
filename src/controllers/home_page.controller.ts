import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { PATH } from '../../react_frontend/src/api/consts'
import { ILogger } from '../LOGS/Logger'
import { Home_page_mware } from '../app/api/home_page.mware'
export class Home_page_Controller {
	public static show = (req: IRequest, res: IResponse): void => {
		const logger: ILogger = req.app.locals.logger
		if (req.cookies.admin_key) {
			if (req.cookies.admin_key.a_k === '789456123') {
				res.redirect(PATH('/adminka'))
			} else {
				return
			}
		} else {
			Home_page_mware.show({ req, res, logger })
		}
	}
	public static perform = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		Home_page_mware.perform({ req, res, logger })
	}
	public static add2favorite = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		Home_page_mware.add2favorite({ req, res, logger })
	}

	public static remove_from_favorite = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		Home_page_mware.remove_from_favorite({ req, res, logger })
	}
}
