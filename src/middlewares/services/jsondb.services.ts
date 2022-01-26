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
}
