import { PATH } from '../../../react_frontend/src/api/consts'
import { sendStatic } from '../../server/send_static_file.mw'
import { JsonDB_Services } from '../services/jsondb.services'
import { IMware } from '../typings/mware.interfaces'

export class Register_mware {
	public static show: IMware = ({ res, logger }) => {
		logger.log('REGISTER page returned')
		return sendStatic(res)
	}
	public static perform: IMware = ({ req, res }) => {
		console.dir(req.body)
		const login = req.body['login-input_/register']
		const password = req.body['password-input_/register']

		const NEXT = () => {
			res.redirect(PATH('/auth'))
			JsonDB_Services.reg_new_user({ login, password })
		}

		const FAIL = () => {
			res.send('<h1>Имя пользователя занято!</h1>').redirect(PATH('/register'))
		}

		console.log(`login: ${login}, password: ${password}`)
		JsonDB_Services.get_user(login, ({ is_user_exist }) => {
			// console.dir(a)
			is_user_exist ? FAIL() : NEXT()
		})
	}
}
