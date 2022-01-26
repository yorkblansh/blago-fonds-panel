import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../../LOGS/Logger';
import { AdminkaModifyData_mware } from '../../middlewares/api/adminka/adminka.modify.data.mware';

export class ModifyData_Controller {
   public static perform = (req: IRequest, res: IResponse) => {
      const logger: ILogger = req.app.locals.logger;
      AdminkaModifyData_mware({ req, res, logger });
   };
}