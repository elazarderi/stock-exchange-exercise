import * as express from "express";
import { Model } from "mongoose";
import { ITraders } from "../types/traders.interface";
import Traders from './traders.schema'

export const router = express.Router();

router.get('/all', async (req, res) => {
    const traders = await Traders.find({}).exec();
    try {
        res.send(traders);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;