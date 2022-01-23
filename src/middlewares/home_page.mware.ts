import { IMware } from './typings/mware.interfaces';
import { sendStatic } from './send_static_file.mw';

export const Home_page_mware: IMware = ({ req, res, logger }) => {
   logger.log('home page returned');
   return sendStatic(res);
};
