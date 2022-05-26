import { Application } from 'express'
import { ILogger, Logger } from '../LOGS/Logger'

export class Kernel {
	public static init(express: Application): void {
		const { logger } = this.Contracts()
		express.locals.logger = logger
		// express.locals.jsondb_service = JsonDB_Contract()
	}

	private static Contracts: IKernel_Contracts = () => {
		const logger = new Logger()

		return { logger }
	}
}
interface IKernel_Contracts {
	(): { logger: ILogger }
}
