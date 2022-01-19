import { Request as IRequest } from 'express';
import { Response as IResponse } from 'express';

export interface Iauth_api {
   (obj: { req: IRequest; res: IResponse }): void;
}

export const auth_api: Iauth_api = ({ req, res }) => {
   console.dir(req.body);
   const user_is_admin = true;
   const login = req.body.login;
   const password = req.body.password;
   console.log(`login: ${login}, password: ${password}`);

   //Запрос в бд ----
   if (user_is_admin) {
      //еще какие то действия

      res.redirect('/adminka');
   } else {
      console.log('not found user, return user to home page ');

      res.redirect('/auth');
   }
};
