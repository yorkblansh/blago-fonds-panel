import { I_obj } from '../api/adminka/adminka.data.perform.mware';
import { JsonDB_Contract } from '../models/jsondb.contract';
import { Ijson_data_HOME_PAGE } from '../typings/json.data.home_page.interface';

export class JsonDB_Services {
   public static home_page_dataPerform = () => {
      const { jsondb } = JsonDB_Contract();
      const json_data: Ijson_data_HOME_PAGE = jsondb.getData(`/organizes`);
      const json_data_HOME_PAGE = json_data;
      console.dir(json_data);
      return { json_data_HOME_PAGE };
   };

   public static adminka_create_data = ({ info, link1, link2, name }: I_obj) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/organizes[]/${name}`, { info, link1, link2, name }, true);
   };

   public static adminka_remove_data = ({ index }: { index: string | number }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.delete(`/organizes[${index}]`);
   };

   public static adminka_modify_data = ({ info, link1, link2, name, index }: I_obj) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.delete(`/organizes[${index}]`);
      jsondb.push(
         `/organizes[]/${name}`,
         {
            info,
            link1,
            link2,
            name,
         },
         true,
      );
   };
}
