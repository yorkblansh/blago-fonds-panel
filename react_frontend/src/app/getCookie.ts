import cookie from 'cookie';

export const getCookie = () => {
   let cookies;
   try {
      cookies = cookie.parse(document.cookie);
   } catch (error) {
      console.dir(error);
   }
   return cookies;
};
