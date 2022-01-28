import { IMware } from '../../typings/mware.interfaces';
import { JsonDB_Services } from '../../services/jsondb.services';
export type I_obj = {
   name: string;
   link1: string;
   link2: string;
   info: string;
   index?: string;
};

export class AdminkaPerformData {
   public static AdminkaModifyData_mware: IMware = ({ req, logger }) => {
      logger.log(req.body);
      const { info, link1, link2, name, index }: I_obj = req.body;
      JsonDB_Services.adminka_modify_data({ info, link1, link2, name, index });
   };

   public static AdminkaCreateData_mware: IMware = ({ req, logger }) => {
      logger.log(req.body);
      const { info, link1, link2, name }: I_obj = req.body;
      JsonDB_Services.adminka_create_data({ info, link1, link2, name });
   };

   public static AdminkaRemoveData_mware: IMware = ({ req, logger }) => {
      logger.log(req.body);
      const { index }: I_obj = req.body;
      JsonDB_Services.adminka_remove_data({ index });
   };
}
