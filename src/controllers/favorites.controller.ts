import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../LOGS/Logger';
import { Favorites_mware } from '../middlewares/api/favorites.mware';

export class Favorites_Controller {
   public static perform(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Favorites_mware.perform({ req, res, logger });
   }
}
