import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'
import { ILogger } from '../../LOGS/Logger'

export interface ReqResLog {
	req: IRequest
	res: IResponse
	logger: ILogger
}
