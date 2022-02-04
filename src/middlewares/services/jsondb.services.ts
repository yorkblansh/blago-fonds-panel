import { Iuser_types } from '../../../react_frontend/src/api/consts';
import { I_obj } from '../api/adminka/adminka.data.perform.mware';
import { JsonDB_Contract } from '../models/jsondb.contract';
import { Ijson_data_HOME_PAGE } from '../typings/json.data.home_page.interface';

interface Iadd2favorite {
   (props: { user_name: string; org_name: string }): void;
}

export class JsonDB_Services {
   public static home_page_dataPerform = () => {
      const { jsondb } = JsonDB_Contract();
      const json_data: Ijson_data_HOME_PAGE = jsondb.getData(`/organizes`);
      const json_data_HOME_PAGE = json_data;
      console.dir(json_data);
      return { json_data_HOME_PAGE };
   };

   public static getFavorites = ({ user_name }: { user_name: string }) => {
      const { jsondb } = JsonDB_Contract();
      const favorites = jsondb.getData(`/users/${user_name}/favorites`);

      return { favorites };
   };

   public static add2favorite: Iadd2favorite = ({ user_name, org_name }) => {
      const { jsondb } = JsonDB_Contract();
      // try {
      //    jsondb.delete(`/users/${user_name}/favorites[${jsondb.getIndex(`/users/${user_name}/favorites`, org_name)}]`);
      // } catch (error) {
      //    console.dir(error);
      // }

      jsondb.push(`/users/${user_name}/favorites/${org_name}`, org_name, true);
   };

   public static adminka_create_data = (obj: I_obj) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/organizes[]/${obj.name}`, obj, true);
   };

   public static adminka_remove_data = ({ index }: { index: string | number }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.delete(`/organizes[${index}]`);
   };

   public static adminka_modify_data = (obj: I_obj) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.delete(`/organizes[${obj.index}]`);
      jsondb.push(`/organizes[]/${obj.name}`, obj, true);
   };

   public static reg_new_user = ({ login, password }: { login: string; password: string }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/users/${login}`, { login, password });
   };

   public static get_user = (
      user_login: string,
      cb: (props: { is_user_exist: boolean; login: string; password: string; user_type: Iuser_types }) => void,
   ) => {
      const { jsondb } = JsonDB_Contract();
      let json_data: { login: string; password: string; user_type: Iuser_types };
      try {
         json_data = jsondb.getData(`/users/${user_login}`);
         const { login, password, user_type } = json_data;
         let is_user_exist = false;
         let _login = 'NONE';
         if (json_data.login != undefined) {
            is_user_exist = true;
            _login = login;
         } else {
            is_user_exist = false;
            _login = 'NONE';
         }
         cb({ is_user_exist, login: _login, password, user_type });
      } catch (error) {
         console.dir(error);
      }

      // return { login: json_data.login, password: json_data.password };
   };
}
