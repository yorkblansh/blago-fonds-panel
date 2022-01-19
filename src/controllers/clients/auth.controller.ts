import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';

class auth {
   public static show(req: IRequest, res: IResponse): void {
      return res.sendFile(__dirname + '/build/index.html');
   }

   public static perform(req: IRequest, res: IResponse): void {
    
   }
}

export default auth;
