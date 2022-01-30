export enum FORM_INPUTS {
   'name',
   'link1',
   'link2',
   'info',
}

export enum MAIN_PATHES {
   '/home',
   '/adminka',
   '/auth',
   '/',
   '/logout',

   '/register',
}

export enum API {
   '/modify_data_api',
   '/remove_data_api',
   '/create_data_api',
}

export enum PERF_TYPE {
   'MODIFY',
   'REMOVE',
   'CREATE',
}

export const PATH = (path: keyof typeof MAIN_PATHES) => path;
