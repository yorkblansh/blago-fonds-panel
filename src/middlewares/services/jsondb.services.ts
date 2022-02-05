import { Iuser_types } from '../../../react_frontend/src/api/consts';
import { I_obj } from '../api/adminka/adminka.data.perform.mware';
import { JsonDB_Contract } from '../models/jsondb.contract';
import { Ijson_data_HOME_PAGE } from '../typings/json.data.home_page.interface';
import async from 'async';

interface IaddORremove_favorite {
   (props: { user_name: string; org_name: string }): void;
}

export class JsonDB_Services {
   public static home_page_dataPerform = () => {
      const { jsondb } = JsonDB_Contract();
      const json_data: Ijson_data_HOME_PAGE = jsondb.getData(`/organizes`);
      const json_data_HOME_PAGE = json_data;
      console.dir('MUST GET ORGSSSS');
      console.dir(json_data);
      return { json_data_HOME_PAGE };
   };

   public static getFavorites_ONLY_NAME_STRINGS = (user_name: string) => {
      const { jsondb } = JsonDB_Contract();
      const favorites = jsondb.getData(`/users/${user_name}/favorites`);
      const obj_keys = Object.keys(favorites);
      return { obj_keys, favorites };
   };

   public static getFavorites = ({ user_name, cb }: { user_name: string; cb }): any => {
      const { jsondb } = JsonDB_Contract();
      const { obj_keys, favorites } = this.getFavorites_ONLY_NAME_STRINGS(user_name);
      // eslint-disable-next-line prefer-const
      let end_obj = {};
      async.each(
         obj_keys,
         (key, _cb) => {
            end_obj[favorites[key]] = jsondb.getData(`/organizes/${favorites[key]}`);
            _cb();
         },
         (err) => {
            if (err) console.dir(err);
            console.dir(end_obj);
            cb(end_obj);
         },
      );

      // return { favorites: end_favorites };
      // for (const key in favorites) {
      //    end_obj[favorites[key]] = jsondb.getData(`/organizes/${favorites[key]}`);
      //    // console.dir(favorites[key]);
      //    // console.dir(jsondb.getData(`/organizes/${favorites[key]}`));
      // }
   };

   public static add2favorite: IaddORremove_favorite = ({ user_name, org_name }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/users/${user_name}/favorites/${org_name}`, org_name, true);
   };

   public static remove_from_favorite: IaddORremove_favorite = ({ user_name, org_name }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.delete(`/users/${user_name}/favorites/${org_name}`);
   };

   public static adminka_create_data = (obj: I_obj) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/organizes/${obj.name}`, obj, true);
   };

   public static adminka_remove_data = ({ name }: { name: string }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.delete(`/organizes/${name}`);
   };

   public static get_users_ONLY_NAME_STRINGS = () => {
      const { jsondb } = JsonDB_Contract();
      const users_names = Object.keys(jsondb.getData('/users'));
      return { users_names };
   };

   public static adminka_modify_data = (obj: I_obj) => {
      const { jsondb } = JsonDB_Contract();
      if (obj.old_name) {
         const { users_names } = this.get_users_ONLY_NAME_STRINGS();
         users_names.forEach((user_name) => {
            this.remove_from_favorite({ user_name, org_name: obj.old_name });
            this.add2favorite({ user_name, org_name: obj.name });
         });
         jsondb.delete(`/organizes/${obj.old_name}`);
         jsondb.push(`/organizes/${obj.name}`, obj, true);
      }
   };

   public static reg_new_user = ({ login, password }: { login: string; password: string }) => {
      const { jsondb } = JsonDB_Contract();
      jsondb.push(`/users/${login}`, { login, password, user_type: 'default' });
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
