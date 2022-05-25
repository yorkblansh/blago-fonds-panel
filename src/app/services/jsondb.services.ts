import { Iuser_types } from '../../../react_frontend/src/api/consts'
import { I_obj } from '../api/adminka/adminka.data.perform.mware'
import async from 'async'
import { Organize } from '../typings/interfaces'
import { jsondb } from '../models/jsondb.contract'

interface IaddORremove_favorite {
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
		const org_names = Object.keys(organizes)

		/**
		 * получаем массив чисел - keep_counter - счетчик закладок для каждой организации
		 */
		const keep_count: number[] = org_names.map(name => {
			return jsondb.getData(`/organizes/${name}/keep_counter`)
		})

		return org_names.map((org_name, i) => [org_name, keep_count[i]])
	}

	/**
	 * Функция принмает логин пользователя и возвращает массив имен организаций, добавленных пользователем
	 */
	public static getKeepedOrgNames(user_name: string) {
		const keep: { OrgName: string } = jsondb.getData(`/users/${user_name}/keep`)
		const obj_keys = Object.keys(keep)
		return { obj_keys, keep }
	}

	public static getKeeped = ({ user_name, cb }: { user_name: string; cb }): any => {
		const { obj_keys, keep } = this.getKeepedOrgNames(user_name)
		// eslint-disable-next-line prefer-const
		let end_obj = {}
		async.each(
			obj_keys,
			(key, _cb) => {
				end_obj[keep[key]] = jsondb.getData(`/organizes/${keep[key]}`)
				_cb()
			},
			err => {
				// if (err) console.dir(err);
				// console.dir(end_obj);
				cb(end_obj)
			},
		)
	}

	public static get_keep_count_byOrgName = (org_name: string) => {
		const keep_count: number = jsondb.getData(`/organizes/${org_name}/keep_counter`)
		return { keep_count }
	}

	public static incrORdecr_keep_counter = (org_name: string, perf_type: 'INCREMENT' | 'DECREMENT') => {
		const _push = (keep_count: number) => jsondb.push(`/organizes/${org_name}/keep_counter`, keep_count, true)
		const { keep_count } = this.get_keep_count_byOrgName(org_name)
		perf_type === 'INCREMENT' && _push(keep_count + 1)
		perf_type === 'DECREMENT' && _push(keep_count - 1)
	}

	public static add2keeped = ({ user_name, org_name, perf_type }: IaddORremove_favorite) => {
		if (perf_type === 'BY_USER') this.incrORdecr_keep_counter(org_name, 'INCREMENT')
		jsondb.push(`/users/${user_name}/keep/${org_name}`, org_name, true)
	}

	public static remove_from_keeped = ({ user_name, org_name, perf_type }: IaddORremove_favorite) => {
		if (perf_type === 'BY_USER') this.incrORdecr_keep_counter(org_name, 'DECREMENT')
		jsondb.delete(`/users/${user_name}/keep/${org_name}`)
	}

	public static getOrganizes_favorite_counts = () => {
		const organizes = jsondb.getData(`/organizes`)
		const org_names = Object.keys(organizes)

		/**
		 * getting array of numbers - favorite_counter of each organize
		 */
		const favorite_count: number[] = org_names.map((org_name): number => {
			return jsondb.getData(`/organizes/${org_name}/favorite_counter`)
		})

		/**
		 * end_pairs - contains array of pairs [org_name, it`s favorite count]
		 */
		const end_pairs: (string | number)[][] = org_names.map((org_name, i) => {
			return [org_name, favorite_count[i]]
		})
		return { end_pairs }
	}

	public static getFavorites_ONLY_NAME_STRINGS = (user_name: string) => {
		const favorites = jsondb.getData(`/users/${user_name}/favorites`)
		const obj_keys = Object.keys(favorites)
		return { obj_keys, favorites }
	}

	public static getFavorites = ({ user_name, cb }: { user_name: string; cb }): any => {
		const { obj_keys, favorites } = this.getFavorites_ONLY_NAME_STRINGS(user_name)
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

	public static get_favorite_count_byOrgName = (org_name: string) => {
		const favorite_count: number = jsondb.getData(`/organizes/${org_name}/favorite_counter`)
		return { favorite_count }
	}

	public static incrORdecr_favorite_counter = (org_name: string, perf_type: 'INCREMENT' | 'DECREMENT') => {
		const _push = (favorite_counter: number) =>
			jsondb.push(`/organizes/${org_name}/favorite_counter`, favorite_counter, true)
		const { favorite_count } = this.get_favorite_count_byOrgName(org_name)
		perf_type === 'INCREMENT' && _push(favorite_count + 1)
		perf_type === 'DECREMENT' && _push(favorite_count - 1)
	}

	public static add2favorite = ({ user_name, org_name, perf_type }: IaddORremove_favorite) => {
		if (perf_type === 'BY_USER') this.incrORdecr_favorite_counter(org_name, 'INCREMENT')
		jsondb.push(`/users/${user_name}/favorites/${org_name}`, org_name, true)
	}

	public static remove_from_favorite = ({ user_name, org_name, perf_type }: IaddORremove_favorite) => {
		if (perf_type === 'BY_USER') this.incrORdecr_favorite_counter(org_name, 'DECREMENT')
		jsondb.delete(`/users/${user_name}/favorites/${org_name}`)
	}

	public static adminka_create_data = (obj: I_obj) => {
		jsondb.push(`/organizes/${obj.name}`, obj, true)
		jsondb.push(`/organizes/${obj.name}/favorite_counter`, 0, true)
		jsondb.push(`/organizes/${obj.name}/keep_counter`, 0, true)
	}

	public static adminka_remove_data = ({ name }: { name: string }) => {
		jsondb.delete(`/organizes/${name}`)
	}

	public static get_users_ONLY_NAME_STRINGS = () => {
		const users_names = Object.keys(jsondb.getData('/users'))
		return { users_names }
	}

	public static adminka_modify_data = (obj: I_obj) => {
		const { users_names } = this.get_users_ONLY_NAME_STRINGS()
		const { favorite_count } = this.get_favorite_count_byOrgName(obj.old_name)
		const { keep_count } = this.get_keep_count_byOrgName(obj.old_name)

		if (favorite_count !== 0) {
			users_names.forEach(user_name => {
				if (user_name !== 'admin') {
					this.remove_from_favorite({ user_name, org_name: obj.old_name, perf_type: 'BY_SYSTEM' })
					this.add2favorite({ user_name, org_name: obj.name, perf_type: 'BY_SYSTEM' })
				}
			})
		}

		if (keep_count !== 0) {
			users_names.forEach(user_name => {
				if (user_name !== 'admin') {
					this.remove_from_keeped({ user_name, org_name: obj.old_name, perf_type: 'BY_SYSTEM' })
					this.add2keeped({ user_name, org_name: obj.name, perf_type: 'BY_SYSTEM' })
				}
			})
		}

		jsondb.delete(`/organizes/${obj.old_name}`)
		obj['favorite_counter'] = favorite_count
		obj['keep_count'] = keep_count
		try {
			console.dir('TRYING TO PUSH')
			jsondb.push(`/organizes/${obj.name}`, obj, true)
		} catch (error) {
			console.dir('ERRRRROOOORRR')
			// console.error(error);
		}
		jsondb.push(`/organizes/${obj.name}/favorite_counter`, favorite_count, true)
		jsondb.push(`/organizes/${obj.name}/keep_counter`, keep_count, true)
		// }
	}

	public static reg_new_user = ({ login, password }: { login: string; password: string }) => {
		jsondb.push(`/users/${login}`, { login, password, user_type: 'default', keep: {}, favorites: {} })
	}

	public static getUser = (user_login: string, cb: (props: getUser_cbProps) => void) => {
		let json_data: { login: string; password: string; user_type: Iuser_types } = {
			login: 'null',
			password: 'null',
			user_type: 'default',
		}
		try {
			json_data = jsondb.getData(`/users/${user_login}`)
			const { login, password, user_type } = json_data
			let is_user_exist = false
			let _login = 'NONE'
			if (json_data.login != undefined) {
				is_user_exist = true
				_login = login
			} else {
				is_user_exist = false
				_login = 'NONE'
			}
			cb({ is_user_exist, login: _login, password, user_type })
		} catch (error) {
			console.dir('USER IS    FREE    TO REG!!')
			cb({ is_user_exist: false, ...json_data })
		}
	}
}
