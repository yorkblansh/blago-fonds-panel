import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../../logger/Logger';
import { Auth_mware } from '../../middlewares/auth.mware';

class auth {
   public static show(req: IRequest, res: IResponse): void {
      return res.sendFile(__dirname + '/build/index.html');
   }

   public static perform(req: IRequest, res: IResponse): void {
      const logger: ILogger = req.app.locals.logger;
      Auth_mware({ req, res, logger });
   }
}

export default auth;
