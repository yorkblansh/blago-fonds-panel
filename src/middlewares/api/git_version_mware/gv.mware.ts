import { IMware } from '../../typings/mware.interfaces';
import simpleGit, { SimpleGit, CleanOptions } from 'simple-git';
const git: SimpleGit = simpleGit().clean(CleanOptions.FORCE);

export const GV_mware: IMware = ({ req, res, logger }) => {
   console.dir('GIT TAG');
   console.dir(git.tags());
   if (req.cookies.admin_key) {
      res.send({
         version: git.tag(),
      });
   }
};
