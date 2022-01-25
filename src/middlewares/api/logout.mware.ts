import { IMware } from '../typings/mware.interfaces';

export class LogOut_mware {
   public static perform: IMware = ({ logger, req, res }) => {
      logger.log('logged OUT');
      res.clearCookie('admin_key');
      res.redirect('/');
   };
}
