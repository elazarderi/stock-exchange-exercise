import express from "express";
import path from "path";
import * as dotenv from 'dotenv';
import connection from "./instances/sequelize.instance";
import { router } from "./routes";

dotenv.config({ path: __dirname + '/../.env' });

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.use('/', router);

app.use(express.static(path.join(__dirname, "public")));

// start the express server
const start = async (): Promise<void> => {
    try {
        await connection.sync();
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
void start();