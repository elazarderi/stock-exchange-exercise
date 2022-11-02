import { Sequelize } from "sequelize-typescript";
import config from 'config';
import * as dotenv from 'dotenv';
import { Deal, Offer, TraderOwn, Trader, Share, User } from "../models";

dotenv.config({ path: __dirname + '/../../.env' });

const connection = new Sequelize(
    config.get('dbConfig.name') as string,
    config.get('dbConfig.user') as string,
    process.env.DB_PASSWORD as string,
    {
        host: config.get('dbConfig.host') as string,
        dialect: 'mysql',
        models: [Share, Trader, Offer, Deal, TraderOwn, User],
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logQueryParameters: true
    }
);

export default connection;