import { IMware } from '../typings/mware.interfaces';
import { sendStatic } from '../send_static_file.mw';
import { JsonDB_Services } from '../services/jsondb.services';

export class Home_page_mware {
   public static show: IMware = ({ res, logger }) => {
      logger.log('home page returned');
      return sendStatic(res);
   };
   public static perform: IMware = ({ res, logger }) => {
      logger.log('home page perform');
      const { json_data_HOME_PAGE } = JsonDB_Services.home_page_dataPerform();
      res.send({ organizes: json_data_HOME_PAGE });
   };
   public static add2favorite: IMware = ({ req }) => {
      const { org_name, user_name }: { org_name: string; user_name: string } = req.body;
      console.dir(req.body);
      JsonDB_Services.add2favorite({ org_name, user_name });
   };
}
