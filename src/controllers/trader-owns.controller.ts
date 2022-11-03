import { Request, Response } from "express";
import { TraderOwn } from "../models";
import { ITraderOwn } from "../types";

export const TraderOwnsController = {

    getOwnsOfTrader: async (req: Request, res: Response) => {
        try {
            const { traderId, shareId } = req.params;
            if (!(traderId && shareId)) throw Error('id not provided!');

            const traderOwns: ITraderOwn[] = await TraderOwn.findAll({ where: { traderId, shareId } });
            res.send(traderOwns);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}