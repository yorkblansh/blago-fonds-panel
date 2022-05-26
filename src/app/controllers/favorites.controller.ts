import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'
import { FavoritesAPI } from '../api/favorites.api'

export class Favorites_Controller {
	public static perform(req: IRequest, res: IResponse): void {
		const logger: ILogger = req.app.locals.logger
		FavoritesAPI.getFavorites({ req, res, logger })
	}

	public static get_favorite_org_names = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		FavoritesAPI.getFavoriteOrgNames({ res, req, logger })
	}

	public static add2favorite = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		FavoritesAPI.add2favorite({ req, res, logger })
	}

	public static remove_from_favorite = (req: IRequest, res: IResponse) => {
		const logger: ILogger = req.app.locals.logger
		FavoritesAPI.remove_from_favorite({ req, res, logger })
	}
}
