import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';

export interface Iadminka_api {
   (obj: { req: IRequest; res: IResponse }): void;
}

export const adminka_api: Iadminka_api = ({ req, res }) => {
   console.dir(req.cookies);

   if (req.cookies.admin_key) {
      console.log('IN PARAM YES');
      //затем кидаем дополнительные куки для админа и отдаем статику
      res.sendFile(__dirname + '/build/index.html');
   } else {
      res.redirect('/auth');
   }
};
