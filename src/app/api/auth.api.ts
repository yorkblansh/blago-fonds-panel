import md5 from 'md5'
import { COOKIES, PATH } from '../../../react_frontend/src/api/consts'
import { sendStatic } from '../../server/send_static_file.mw'
import { getUser_cbProps, JsonDB_Methods } from '../services/jsondb.services'
import { ReqResLog } from '../typings/interfaces'

interface userCheckProps {
	inputs: { user_login: string; user_password: string }
	db_payload: getUser_cbProps
	res: ReqResLog['res']
}

interface performAuthProps {
	isUserMatch: boolean
	res: ReqResLog['res']
	login?: string
}

export class AuthAPI {
	public static show = ({ res, logger }: ReqResLog) => {
		logger.log('AUTH page returned')
		return sendStatic(res)
	}

	public static perform = ({ req, res, logger }: ReqResLog) => {
		const user_login = req.body['login-input_/auth']
		const user_password = req.body['password-input_/auth']

		JsonDB_Methods.getUser(user_login, db_payload => {
			this.userCheck({ db_payload, res, inputs: { user_login, user_password } })
		})
		res.redirect(PATH('/auth'))
	}

	private static userCheck({ inputs, db_payload, res }: userCheckProps) {
		const { is_user_exist, login, password, user_type } = db_payload
		const { user_login, user_password } = inputs
		const isUserMatch = user_login === login && user_password === password
		const isAdmin = user_type === 'admin'
		const isDefaultUser = user_type === 'default'

		if (is_user_exist) {
			if (isAdmin) this.adminAuth({ isUserMatch, res })
			else if (isDefaultUser) this.defaultUserAuth({ isUserMatch, res, login })
			else res.redirect(PATH('/auth'))
		} else res.redirect(PATH('/auth'))
	}

	private static adminAuth({ isUserMatch, res }: performAuthProps) {
		if (isUserMatch) {
			res.cookie(
				COOKIES('admin_key'),
				{ a_k: '789456123' },
				{
					expires: new Date(Date.now() + 172800000),
				},
			)
			console.dir('go to ADMINKA')
			res.redirect('/adminka')
		} else res.redirect(PATH('/auth'))
	}

	private static defaultUserAuth({ isUserMatch, res, login }: performAuthProps) {
		if (isUserMatch) {
			const expires = new Date(Date.now() + 172800000)
			const md5_expires = md5(new Date(Date.now() + 172800000).toString())

			res.cookie(COOKIES('user_key'), md5_expires, { expires })
			res.cookie(COOKIES('user_name'), login, { expires })
			res.redirect(PATH('/'))
		} else res.redirect(PATH('/auth'))
	}
}
