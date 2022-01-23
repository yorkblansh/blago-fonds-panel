import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export const JsonDB_Service = () => {
   const db = new JsonDB(new Config('myDataBase', true, false, '/'));
   return { db };
};
