import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';

class register {
   public static show(req: IRequest, res: IResponse): void {
      return res.sendFile(__dirname + '/build/index.html');
   }
}

export default register;
