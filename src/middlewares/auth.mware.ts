import { sendStatic } from './send_static_file.mw';
import { IMware } from './typings/mware.interfaces';

export class Auth_mware {
   public static show: IMware = ({ res, logger, req }) => {
      logger.log('home page returned');
      return sendStatic(res);
   };
   public static perform: IMware = ({ req, res }) => {
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
}
