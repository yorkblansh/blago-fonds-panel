import { IMware } from '../typings/mware.interfaces';
import { JsonDB_Services } from '../services/jsondb.services';

export class Favorites_mware {
   public static perform: IMware = ({ res, logger }) => {
      logger.log('returned FAVORITES');
      const { favorites } = JsonDB_Services.getFavorites();
      res.send({ favorites });
   };
}
