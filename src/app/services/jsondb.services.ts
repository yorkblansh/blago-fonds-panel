import { Iuser_types } from '../../../react_frontend/src/api/consts'
import async from 'async'
import { Organize, User } from '../typings/interfaces'
import { jsondb } from '../models/jsondb.contract'

interface FavoriteActionProps {
	user_name: string
	org_name: string
	perf_type: 'BY_USER' | 'BY_SYSTEM'
}

/**
 * getUser callback props
 */
export interface getUser_cbProps {
	is_user_exist: boolean
	login: string
	password: string
	user_type: Iuser_types
}

/**
 * Класс содержит основные методы взаимодействия с базой данных
 */
export class JsonDB_Methods {
	/**
	 * Функция запрашивает все организации из бд и возвращает их
	 */
	public static getOrgs(): { organizes: Organize[] } {
		return jsondb.getData(`/organizes`)
	}

	/**
	 * Функция возвращает коллекция вида
	 * [
	 * 		[название_организации, счетчик_закладок],
	 * 	...
	 * ]
	 */
	public static getKeepCounts(): (string | number)[][] {
		const organizes: { organizes: Organize[] } = jsondb.getData(`/organizes`)
		const org_names = Object.keys(organizes) // имена организаций

		/**
		 * получаем массив чисел - keep_counter - счетчик закладок для каждой организации
		 */
		const keep_count: number[] = org_names.map(name => {
			return jsondb.getData(`/organizes/${name}/keep_counter`)
		})

		return org_names.map((org_name, i) => [org_name, keep_count[i]])
	}

	/**
	 * Функция принмает логин пользователя и возвращает
	 * массив имен организаций, добавленных пользователем в закладки
	 */
	public static getKeepedOrgNames(user_name: string) {
		const keep: { OrgName: string } = jsondb.getData(`/users/${user_name}/keep`)
		const obj_keys = Object.keys(keep)
		return { obj_keys, keep }
	}

	/**
	 * Функция принимает логин пользователя и
	 * возвращает добавленные в закладки организации
	 */
	public static getKeeped(user_name: string, cb): void {
		const { obj_keys, keep } = this.getKeepedOrgNames(user_name)
		// eslint-disable-next-line prefer-const
		let end_obj = {}

		async.each(
			obj_keys,
			(key, _cb) => {
				end_obj[keep[key]] = jsondb.getData(`/organizes/${keep[key]}`)
				_cb()
			},
			err => cb(end_obj),
		)
	}

	/**
	 * Функция принимает название организации и
	 * возвращает ее счетчик закладок
	 */
	public static getOrgKeepCount(org_name: string): number {
		return jsondb.getData(`/organizes/${org_name}/keep_counter`)
	}

	/**
	 * Функция принимает название организации и тип изменения
	 * счетчика закладок (увеличение или уменьшение счетчика)
	 *
	 * Изменяет значение счетчика
	 */
	public static editKeepCounter(org_name: string, edit_type: 'INCREMENT' | 'DECREMENT') {
		const updateKeepCount = (keep_count: number) =>
			jsondb.push(`/organizes/${org_name}/keep_counter`, keep_count, true) // функция обновляет счетчик закладок

		const keep_count = this.getOrgKeepCount(org_name) // запись счетчика в переменную
		edit_type === 'INCREMENT' && updateKeepCount(keep_count + 1) // увеличиваем ++
		edit_type === 'DECREMENT' && updateKeepCount(keep_count - 1) // уменьшаем --
	}

	/**
	 * Функция принимает {пользователя, название организации, тип выполнения}
	 *
	 * Добавляет организацию в закладки к пользователю
	 */
	public static add2keeped({ user_name, org_name, perf_type }: FavoriteActionProps) {
		if (perf_type === 'BY_USER') this.editKeepCounter(org_name, 'INCREMENT')
		jsondb.push(`/users/${user_name}/keep/${org_name}`, org_name, true)
	}

	/**
	 * Функция принимает {пользователя, название организации, тип выполнения}
	 *
	 * Удаляет организацию из закладок пользователя
	 */
	public static removeFromKeeped({ user_name, org_name, perf_type }: FavoriteActionProps) {
		if (perf_type === 'BY_USER') this.editKeepCounter(org_name, 'DECREMENT')
		jsondb.delete(`/users/${user_name}/keep/${org_name}`)
	}

	public static getFavoriteCounts(): (string | number)[][] {
		const organizes: Organize[] = jsondb.getData(`/organizes`)
		const orgNames = Object.keys(organizes)

		/**
		 * получаем массив чисел - favorite_count - счетчик закладок для каждой организации
		 */
		const favorite_count: number[] = orgNames.map((name): number => {
			return jsondb.getData(`/organizes/${name}/favorite_counter`)
		})

		return orgNames.map((org_name, i) => [org_name, favorite_count[i]])
	}

	/**
	 * Функция принмает логин пользователя и возвращает массив
	 * имен организаций, добавленных пользователем в лайки
	 */
	public static getFavoriteOrgNames = (user_name: string) => {
		const favorites = jsondb.getData(`/users/${user_name}/favorites`)
		const obj_keys = Object.keys(favorites)
		return { obj_keys, favorites }
	}

	public static getFavorites = ({ user_name, cb }: { user_name: string; cb }): any => {
		const { obj_keys, favorites } = this.getFavoriteOrgNames(user_name)
		// eslint-disable-next-line prefer-const
		let end_obj = {}
		async.each(
			obj_keys,
			(key, _cb) => {
				end_obj[favorites[key]] = jsondb.getData(`/organizes/${favorites[key]}`)
				_cb()
			},
			err => {
				// if (err) console.dir(err);
				// console.dir(end_obj);
				cb(end_obj)
			},
		)
	}

	/**
	 * Функция принимает название организации и
	 * возвращает ее счетчик закладок
	 */
	public static getOrgFavoriteCount(org_name: string): number {
		return jsondb.getData(`/organizes/${org_name}/favorite_counter`)
	}

	/**
	 * Функция принимает название организации и тип изменения
	 * счетчика лайков (увеличение или уменьшение счетчика)
	 *
	 * Изменяет значение счетчика
	 */
	public static editFavoriteCounter(org_name: string, edit_type: 'INCREMENT' | 'DECREMENT') {
		const updateFavoriteCount = (favorite_counter: number) =>
			jsondb.push(`/organizes/${org_name}/favorite_counter`, favorite_counter, true)

		const favorite_count = this.getOrgFavoriteCount(org_name)
		edit_type === 'INCREMENT' && updateFavoriteCount(favorite_count + 1)
		edit_type === 'DECREMENT' && updateFavoriteCount(favorite_count - 1)
	}

	/**
	 * Функция принимает {пользователя, название организации, тип выполнения}
	 *
	 * Добавляет организацию в лайки к пользователю
	 */
	public static add2favorite({ user_name, org_name, perf_type }: FavoriteActionProps) {
		if (perf_type === 'BY_USER') this.editFavoriteCounter(org_name, 'INCREMENT')
		jsondb.push(`/users/${user_name}/favorites/${org_name}`, org_name, true)
	}

	/**
	 * Функция принимает {пользователя, название организации, тип выполнения}
	 *
	 * Удаляет организацию из лайков пользователя
	 */
	public static removeFromFavorite = ({ user_name, org_name, perf_type }: FavoriteActionProps) => {
		if (perf_type === 'BY_USER') this.editFavoriteCounter(org_name, 'DECREMENT')
		jsondb.delete(`/users/${user_name}/favorites/${org_name}`)
	}

	/**
	 * Функция создает новый элемент, действие доступно только в админке
	 */
	public static createItem = (org: Organize) => {
		jsondb.push(`/organizes/${org.name}`, org, true) // создает запись в JSON бд
		jsondb.push(`/organizes/${org.name}/favorite_counter`, 0, true)
		jsondb.push(`/organizes/${org.name}/keep_counter`, 0, true)
	}

	/**
	 * Функция удаляет элемент, действие доступно только в админке
	 */
	public static removeItem({ name }: { name: string }) {
		jsondb.delete(`/organizes/${name}`)
	}

	/**
	 * Функция запрашивает всех пользователей из бд и возвращает их
	 */
	public static getUsers(): { users: User[] } {
		return jsondb.getData('/users')
	}

	/**
	 * Функция изменяет элемент, действие доступно только в админке
	 */
	public static modifyItem(org: Organize) {
		const users_names = Object.keys(this.getUsers()) // получение имен организаций
		const favorite_count = this.getOrgFavoriteCount(org.old_name) // получение счетчика лайков
		const keep_count = this.getOrgKeepCount(org.old_name) // получение счетчика закладок

		if (favorite_count !== 0) {
			users_names.forEach(user_name => {
				if (user_name !== 'admin') {
					// провряем что пользователь - админ и удаляем старые данные
					this.removeFromFavorite({ user_name, org_name: org.old_name, perf_type: 'BY_SYSTEM' })
					this.add2favorite({ user_name, org_name: org.name, perf_type: 'BY_SYSTEM' })
				}
			})
		}

		if (keep_count !== 0) {
			users_names.forEach(user_name => {
				if (user_name !== 'admin') {
					this.removeFromKeeped({ user_name, org_name: org.old_name, perf_type: 'BY_SYSTEM' })
					this.add2keeped({ user_name, org_name: org.name, perf_type: 'BY_SYSTEM' })
				}
			})
		}

		jsondb.delete(`/organizes/${org.old_name}`) // удаляет старый экземпляр

		const newOrg: Organize = org
		newOrg.favorite_counter = favorite_count
		newOrg.keep_count = keep_count

		try {
			// пробуем добавить организацию
			console.dir('TRYING TO PUSH')
			jsondb.push(`/organizes/${newOrg.name}`, newOrg, true)
		} catch (error) {
			console.dir(`Error while modifying ${org.old_name}`)
		}

		/**
		 * добавляем новые данные
		 */
		jsondb.push(`/organizes/${newOrg.name}/favorite_counter`, favorite_count, true)
		jsondb.push(`/organizes/${newOrg.name}/keep_counter`, keep_count, true)
	}

	/**
	 * Функция принимает логин и пароль, регистрирует пользователя
	 */
	public static registerUser({ login, password }: { login: string; password: string }) {
		jsondb.push(`/users/${login}`, {
			// отправляем данные в json db
			login,
			password,
			user_type: 'default',
			keep: {},
			favorites: {},
		})
	}

	/**
	 * Функция принимает логин, возвращает пользователя
	 * или вовращает ошибку если пользователя не существует
	 */
	public static getUser = (user_login: string, cb: (props: getUser_cbProps) => void) => {
		let json_data: { login: string; password: string; user_type: Iuser_types } = {
			login: 'null',
			password: 'null',
			user_type: 'default',
		}

		try {
			// пробуем получить пользователя
			json_data = jsondb.getData(`/users/${user_login}`)
			const { login, password, user_type } = json_data
			let is_user_exist = false
			let _login = 'NONE'
			if (json_data.login != undefined) {
				// если логин существует
				is_user_exist = true
				_login = login
			} else {
				// если пользователь не найден
				is_user_exist = false
				_login = 'NONE'
			}
			cb({ is_user_exist, login: _login, password, user_type })
		} catch (error) {
			/**
			 * если непредвиденная ошибка - возаращаем значения по умолчанию
			 */
			cb({ is_user_exist: false, ...json_data })
		}
	}
}
