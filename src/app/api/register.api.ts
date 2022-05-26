import { PATH } from '../../../react_frontend/src/api/consts'
import { sendStatic } from '../../server/send_static_file.mw'
import { JsonDB_Methods } from '../services/jsondb.services'
import { ReqResLog } from '../typings/interfaces'

interface registerUserProps {
	login?: string
	password?: string
	res: ReqResLog['res']
	error_message?: string
}

export class RegisterAPI {
	public static show = ({ res, logger }: ReqResLog) => {
		logger.log('REGISTER page returned')
		return sendStatic(res)
	}

	public static perform = ({ req, res }: ReqResLog) => {
		console.dir(req.body)
		const login = req.body['login-input_/register']
		const password = req.body['password-input_/register']

		console.log(`login: ${login}, password: ${password}`)
		JsonDB_Methods.getUser(login, ({ is_user_exist }) => {
			is_user_exist
				? this.catchError({ error_message: 'Имя пользователя занято!', res })
				: this.registerUser({ login, password, res })
		})
	}

	private static registerUser({ login, password, res }: registerUserProps) {
		res.redirect(PATH('/auth'))
		JsonDB_Methods.registerUser({ login, password })
	}

	private static catchError({ error_message, res }: registerUserProps) {
		res.send(`<h1>${error_message}</h1>`).redirect(PATH('/register'))
	}
}
