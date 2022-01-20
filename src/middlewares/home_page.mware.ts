import { IMware } from './typings/mware.interfaces';

export const Home_page_mware: IMware = ({ req, res, logger }) => {
   logger.log('home page returned');
   return res.sendFile(__dirname + '/build/index.html');
};
