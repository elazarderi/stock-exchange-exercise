import { Request, Response } from "express";
import { Trader } from "../models";
import { ITrader } from "../types";

export const TradersController = {

    getTraders: async (req: Request, res: Response) => {
        try {
            const traders: ITrader[] = await Trader.findAll();
            res.send(traders);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

