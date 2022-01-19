import { Application } from 'express';
import express from 'express';
import path from 'path';

import webRouter from '../routes/RestApi';

//import apiRouter from './../routes/Api';

class Routes {
   public mountWeb(_express: Application): Application {
      //_express.use(express.static(path.join(__dirname, 'build')));//?Выбор папки статики
      return _express.use('/', webRouter, express.static(path.join(__dirname, 'build')));
   }

   // public mountApi(_express: Application): Application {
   // 	const apiPrefix = Locals.config().apiPrefix;
   // 	Log.info('Routes :: Mounting API Routes...');

   // 	return _express.use(`/${apiPrefix}`, apiRouter);
   // }
}

export default new Routes();
