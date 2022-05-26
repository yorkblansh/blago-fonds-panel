import { Request as IRequest } from 'express'
import { Response as IResponse } from 'express'

export class CertainFond_Controller {
	public static show(req: IRequest, res: IResponse) {
		const { name } = req.params
		res.send(name)
	}
}
