import { getCookie } from './getCookie';

export const getAccountProps = () => {
   let user_key: string;
   let cookies: any = getCookie();
   let is_authorized = false;
   user_key = cookies?.user_key;

   if (user_key) {
      is_authorized = true;
   } else {
      is_authorized = false;
   }
   return { is_authorized, user_key };
};
