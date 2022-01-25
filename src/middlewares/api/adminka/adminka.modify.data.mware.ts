import { IMware } from '../../typings/mware.interfaces';

export const AdminkaModifyData_mware: IMware = ({ req, res, logger }) => {
   logger.log(req.body);
};
