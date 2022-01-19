import { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';

interface Dotenvs {
    port: string;
    db_host: string;
    db_password: string;
    db_user: string;
    database: string;
}

class Locals {
    public static config(): Dotenvs {
        dotenv.config({ path: path.join(__dirname, '../../.env') });

        const port = process.env.PORT || '5001';

        const db_user = process.env.db_user || 'USER HERE';
        const db_password = process.env.db_password || 'PASS HERE';
        const db_host = process.env.db_host || 'localhost';

        const database = process.env.database || 'DB NAME HERE';

        return {
            port,
            db_host,
            db_password,
            db_user,
            database,
        };
    }

    /**
     * Injects your config to the app's locals
     */
    public static init(_express: Application): Application {
        _express.locals.app = this.config();
        return _express;
    }
}

export default Locals;
