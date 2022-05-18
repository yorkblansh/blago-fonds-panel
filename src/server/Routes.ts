import { Application } from 'express'
import { WEBrouter } from '../routes/RestApi'
import express from 'express'
import path from 'path'
import { sendStatic } from './send_static_file.mw'
//import apiRouter from './../routes/Api';

class Routes {
	public mountWeb(_express: Application): void {
		_express.use('/', WEBrouter, express.static(path.join(__dirname, 'build')))
		_express.get('*', (req, res) => {
			sendStatic(res)
		})
	}
}

export default new Routes()
