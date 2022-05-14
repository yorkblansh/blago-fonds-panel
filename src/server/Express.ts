import express from 'express'
import http from 'http'
import Routes from './Routes'
import { Kernel } from '../app/Kernel'
import coockie_parser from 'cookie-parser'

class Express {
	/**
	 ** Create the express object //? Создания нужных обьектов для старта сервера
	 */

	public _express: express.Application
	public lk_express: express.Application
	public server_for_client: http.Server

	/**
	 ** Initializes the express server
	 */
	public constructor() {
		this.lk_express = express()
		this._express = express()

		this.server_for_client = http.createServer(this._express) //? HTTP сервер для клиентов

		this.mountMiddlewares() //? Монтировка "бизнес-логики" (middlewares из одноименной папки)
		this.mountRoutes() //? Монтировка путей: /, /auth, /register и т.д
	}

	/**
	 ** Mounts all the defined middlewares
	 */
	private mountMiddlewares(): void {
		Kernel.init(this._express)
	}

	/**
	 * Mounts all the defined routes //? Тут монтируются web страницы
	 */
	private mountRoutes(): void {
		// this._express.set('view engine', 'ejs'); //?Выбор шаблонизатора
		//this._express.set('views', __dirname + '../../../views'); //? Говорим, что наш "html" находится в папке views
		this._express.use(coockie_parser())

		// //? 🠗🠕 Подключаем всякие вспомогательные примочки для декодирования
		this._express.use(express.json()) // for parsing application/json
		this._express.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

		//  this._express =
		Routes.mountWeb(this._express)
		//	this.express = Routes.mountApi(this.express);
	}

	/**
	 * Starts the express server
	 */
	public init(): void {
		this.server_for_client.listen(5020, () => {
			console.log('Server started on port 5020')
		})
	}
}

/**
 ** Export the express module
 **/
export default new Express()
