import express from "express";
import path from "path";
import mongoose, { ConnectOptions } from 'mongoose';
import * as dotenv from 'dotenv';
import { router } from "./routes";

dotenv.config({ path: __dirname + '/../.env' });

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.use('/', router);

app.use(express.static(path.join(__dirname, "public")));

// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

mongoose.connect(process.env.MONGO_URI!, {
    useNewUrlParser: true, dbName: "stock-exchange", useUnifiedTopology: true
} as ConnectOptions)
    .then(() => console.log('database connected successfully'))
    .catch((err) => console.log(err));