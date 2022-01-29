import { IMware } from '../../typings/mware.interfaces';
import simpleGit, { SimpleGit, CleanOptions } from 'simple-git';

export const GV_mware: IMware = ({ req, res, logger }) => {
   if (req.cookies.admin_key) {
      const git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);
      logger.log(req.cookies);
      res.send({
         version: git.tag(),
      });
   } else {
      logger.log('нет куков');
      res.redirect('/auth');
   }
};
