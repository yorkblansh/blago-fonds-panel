import { IMware } from '../typings/mware.interfaces';
import { JsonDB_Services } from '../services/jsondb.services';

export class Favorites_mware {
   public static perform: IMware = ({ req, res, logger }) => {
      const { user_name } = req.body;
      logger.log('returned FAVORITES');
      const { favorites } = JsonDB_Services.getFavorites({ user_name });
      res.send({ favorites });
   };
}
