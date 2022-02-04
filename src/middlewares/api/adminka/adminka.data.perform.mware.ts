import { IMware } from '../../typings/mware.interfaces';
import { JsonDB_Services } from '../../services/jsondb.services';
export type I_obj = {
   name: string;
   link1: string;
   link2: string;
   info: string;
   index?: string;
   last_modify: string;
};

export class AdminkaPerformData {
   public static AdminkaModifyData_mware: IMware = ({ req, logger }) => {
      logger.log(req.body);
      const { info, link1, link2, name, index, last_modify }: I_obj = req.body;
      JsonDB_Services.adminka_modify_data({ info, link1, link2, name, index, last_modify });
   };

   public static AdminkaCreateData_mware: IMware = ({ req, logger }) => {
      logger.log(req.body);
      const { info, link1, link2, name, last_modify }: I_obj = req.body;
      JsonDB_Services.adminka_create_data({ info, last_modify, link1, link2, name });
   };

   public static AdminkaRemoveData_mware: IMware = ({ req, logger }) => {
      logger.log(req.body);
      const { index }: I_obj = req.body;
      JsonDB_Services.adminka_remove_data({ index });
   };
}
