import { sendStatic } from '../send_static_file.mw';
import { JsonDB_Services } from '../services/jsondb.services';
import { IMware } from '../typings/mware.interfaces';

export class Register_mware {
   public static show: IMware = ({ res, logger }) => {
      logger.log('REGISTER page returned');
      return sendStatic(res);
   };
   public static perform: IMware = ({ req, res }) => {
      console.dir(req.body);
      const login = req.body['login-input_auth'];
      const password = req.body['password-input_auth'];
      console.log(`login: ${login}, password: ${password}`);

      JsonDB_Services.reg_new_user({ login, password });
   };
}
