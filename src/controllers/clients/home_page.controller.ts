import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { ILogger } from '../../logger/Logger';
import { Home_page_mware } from '../../middlewares/home_page.mware';
import path from 'path';
export class Home_page_Controller {
   public static show(req: IRequest, res: IResponse): void {
      //  const logger: ILogger = req.app.locals.logger;
      // Home_page_mware({ req, res, logger });
      // BuildScript.build_script(res);
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
      // res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
      //  res.sendFile(path.resolve(__dirname + '/build', 'index.html'));
   }
}
