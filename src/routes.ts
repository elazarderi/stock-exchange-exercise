import * as express from "express";

export const router = express.Router();

import tradersRoutes from './traders/traders.route';
import sharesRoutes from './shares/shares.routes';

router.get('/', (req, res) => {
    res.send('Hello world!');
});

router.use('/traders', tradersRoutes);
router.use('/shares', sharesRoutes);