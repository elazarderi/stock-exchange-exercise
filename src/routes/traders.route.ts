import * as express from "express";
import { ITrader } from "../types/index";
import { Trader } from "../models/index";

export const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        const traders: ITrader[] = await Trader.findAll();
        res.send(traders);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;