import { Application } from 'express';
import { CRONER_SERVICE } from './modules/croner/croner';
import { JsonDB_Service } from './services/jsondb';
import { adminka_api } from './api/adminka.api';
//import Express from '../server/Express';
// import CORS from './CORS';
// import Http from './Http';
// import Views from './Views';
// import Statics from './Statics';
// import CsrfToken from './CsrfToken';
// import StatusMonitor from './StatusMonitor';
//import Locals from '../server/Locals';

// import { Logger } from '../logger/Logger';

class Kernel {
   public static init(express: Application): void {
      const { CRONER } = this.Contracts(express);
      CRONER.start_jobs(); //? Запуск задач по расписанию
      JsonDB_Service();
   }

   private static Contracts = (express: Application): ReturnTypeof_Contaract => {
      const CRONER = new CRONER_SERVICE(express);

      return {
         CRONER,
      };
   };
}
type ReturnTypeof_Contaract = {
   CRONER: CRONER_SERVICE;
};

export default Kernel;
