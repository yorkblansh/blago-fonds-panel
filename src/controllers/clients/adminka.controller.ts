import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';
import { adminka_api } from '../../middlewares/api/adminka.api';

class Adminka_Controller {
   public static show(req: IRequest, res: IResponse): void {
      adminka_api({ req, res });
   }
}

export { Adminka_Controller };
