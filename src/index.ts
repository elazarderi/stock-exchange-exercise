console.log('Hello world!')

import mongoose, { ConnectOptions } from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true } as ConnectOptions)
    .then(() => console.log('success')).catch((err) => console.log(err));