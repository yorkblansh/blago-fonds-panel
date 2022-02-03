import { IMware } from '../typings/mware.interfaces';

export class LogOut_mware {
   public static perform: IMware = ({ logger, req, res }) => {
      logger.log('logged OUT');
      try {
         res.clearCookie('admin_key');
         res.clearCookie('user_key');
      } catch (error) {
         logger.log(error);
      }
      res.redirect('/');
   };
}
