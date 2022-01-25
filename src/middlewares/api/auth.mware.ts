import { sendStatic } from './send_static_file.mw';
import { IMware } from './typings/mware.interfaces';

export class Auth_mware {
   public static show: IMware = ({ res, logger }) => {
      logger.log('AUTH page returned');
      return sendStatic(res);
   };
   public static perform: IMware = ({ req, res }) => {
      console.dir(req.body);
      const login = req.body['login-input'];
      const password = req.body['password-input'];
      console.log(`login: ${login}, password: ${password}`);

      if (login === 'asdfg' && password === '123456789') {
         res.cookie(
            'admin_key',
            { a_k: '789456123' },
            {
               expires: new Date(Date.now() + 172800000),
            },
         );
         console.dir('go to ADMINKA');
         res.redirect('/adminka');
      } else {
         console.log('not found user, return user to home page ');

         res.redirect('/auth');
      }
   };
}
