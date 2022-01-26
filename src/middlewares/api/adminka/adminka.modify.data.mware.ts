import { IMware } from '../../typings/mware.interfaces';
import { JsonDB_Contract } from '../../models/jsondb.contract';
type I_obj = {
   name: string;
   link1: string;
   link2: string;
   info: string;
};

export const AdminkaModifyData_mware: IMware = ({ req, res, logger }) => {
   logger.log(req.body);
   const { jsondb } = JsonDB_Contract();
   const { info, link1, link2, name }: I_obj = req.body;
   jsondb.push('/organizes', [
      {
         name,
         link1,
         link2,
         info,
      },
   ]);
};
