import { Application } from 'express';
import { JsonDB_Service } from './services/jsondb.contract';
import { ILogger, Logger } from '../LOGS/Logger';

export class Kernel {
   public static init(express: Application): void {
      const { logger } = this.Contracts();
      express.locals.logger = logger;
      express.locals.jsondb_service = JsonDB_Service();
   }

   private static Contracts: IKernel_Contracts = () => {
      const logger = new Logger();

      return {
         logger,
      };
   };
}
interface IKernel_Contracts {
   (): { logger: ILogger };
}
