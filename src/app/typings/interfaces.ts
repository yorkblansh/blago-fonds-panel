import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'

export interface ReqResLog {
	req: IRequest
	res: IResponse
	logger: ILogger
}

export interface Organize {
	name: string
	link1: string
	link2: string
	info: string
	index?: string
	last_modify: string
	old_name?: string
	favorite_counter?: number
	keep_count?: number
}

export interface User {
	login: string
	password: string
	user_type: 'default' | 'admin'
	keep: { [name: string]: string }[]
	favorites: { [name: string]: string }[]
}
