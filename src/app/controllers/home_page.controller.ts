import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { PATH } from '../../../react_frontend/src/api/consts'
import { ILogger } from '../../LOGS/Logger'
import { FavoritesAPI } from '../api/favorites.api'
import { HomePageAPI } from '../api/home_page.api'

export class Home_page_Controller {
	public static show = (req: IRequest, res: IResponse): void => {
		const isAdmin = req.cookies.admin_key && req.cookies.admin_key.a_k === '789456123'
		const logger: ILogger = req.app.locals.logger

		if (isAdmin) res.redirect(PATH('/adminka'))
		else HomePageAPI.show({ req, res, logger })
	}

	public static perform = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		HomePageAPI.perform({ req, res, logger })
	}
}
