import cron from 'cron';
import { Application } from 'express';

export class CRONER_SERVICE {
   constructor(private exress: Application) {}

   private getNOW_TIME = (): string => {
      const Sec = '00';
      //var Sec;
      let Hour: string;
      let Min: string;
      if (new Date().getMinutes().toString().length == 1) {
         Min = `0${new Date().getMinutes().toString()}`;
      } else {
         Min = new Date().getMinutes().toString();
      }
      if (new Date().getHours().toString().length == 1) {
         Hour = `0${new Date().getHours().toString()}`;
      } else {
         Hour = new Date().getHours().toString();
      }
      const now_time = `${Hour}:${Min}:${Sec}`.trim();
      return now_time;
   };

   public start_jobs = (): void => {
      console.log('Before job instantiation');
      //    first was    0 */0.5 * * * *
      //   0/1 0 0 ? * * *         0/1 * * * * *    <this is right
      const job = new cron.CronJob('0 */1 * * * *', () => {
         console.dir('cron is here');
         //? Запуск крон задач
      });

      console.log('After job instantiation');
      job.start();
   };
}

/** Export the ScoketIO module */
