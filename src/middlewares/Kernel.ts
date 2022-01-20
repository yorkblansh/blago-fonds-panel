import { Application } from 'express';
import { JsonDB_Service } from './services/jsondb';
import { ILogger, Logger } from '../logger/Logger';

export class Kernel {
   public static init(express: Application): void {
      const { logger } = this.Contracts(express);
      express.locals.logger = logger;
      JsonDB_Service();
   }

   private static Contracts: IKernel_Contracts = (express) => {
      const logger = new Logger();

      return {
         logger,
      };
   };
}
interface IKernel_Contracts {
   (express: Application): { logger: ILogger };
}
