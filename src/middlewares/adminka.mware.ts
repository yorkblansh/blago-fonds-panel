import { IMware } from './typings/mware.interfaces';

export const Adminka_mware: IMware = ({ req, res, logger }) => {
   console.dir(req.cookies);

   if (req.cookies.admin_key) {
      console.log('IN PARAM YES');
      //затем кидаем дополнительные куки для админа и отдаем статику
      res.sendFile(__dirname + '/build/index.html');
   } else {
      res.redirect('/auth');
   }
};
