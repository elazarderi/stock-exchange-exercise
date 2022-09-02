import { Sequelize } from "sequelize-typescript";
import config from 'config';
import { Share } from "../shares/shares.model";
import * as dotenv from 'dotenv';
import { Trader } from "../traders/traders.model";

dotenv.config({ path: __dirname + '/../../.env' });

const connection = new Sequelize(
    config.get('dbConfig.name') as string,
    config.get('dbConfig.user') as string,
    process.env.DB_PASSWORD as string,
    {
        host: config.get('dbConfig.host') as string,
        dialect: 'mysql',
        models: [Share, Trader],
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export default connection;