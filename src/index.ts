import express from "express";
import path from "path";
import cors from 'cors';
import * as dotenv from 'dotenv';
import connection from "./db/sequelize.instance";
import { router } from "./routes";

dotenv.config({ path: __dirname + '/../.env' });

const app = express();
const port = process.env.SERVER_PORT;

app.use(cors());

app.use(express.json());

app.use('/api/', router);

app.use(express.static(path.join(__dirname, "public")));

// start the express server
const start = async (): Promise<void> => {
    try {
        // use { force: true } to create the database at the first time
        // await connection.sync({ force: true });
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