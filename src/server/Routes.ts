import { Application } from 'express'
import { WEBrouter } from '../routes/RestApi'
import express from 'express'
import path from 'path'
//import apiRouter from './../routes/Api';

class Routes {
	public mountWeb(_express: Application): void {
		_express.use('/', WEBrouter, express.static(path.join(__dirname, 'build')))
		_express.get('*', (req, res) => {
			res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
		})
	}

	// public mountApi(_express: Application): Application {
	// 	const apiPrefix = Locals.config().apiPrefix;
	// 	Log.info('Routes :: Mounting API Routes...');

	// 	return _express.use(`/${apiPrefix}`, apiRouter);
	// }
}

export default new Routes()
