import { Request, Response } from "express";
import { Offer, Trader, TraderOwn } from "../models";
import { ITrader } from "../types";

export const TradersController = {

    getTraders: async (req: Request, res: Response) => {
        try {
            const traders: ITrader[] = await Trader.findAll();
            res.send(traders);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getTradersNames: async (req: Request, res: Response) => {
        try {
            const tradersNames: ITrader[] = await Trader.findAll({
                attributes: ['name']
            });
            res.send(tradersNames);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getTradersById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            if (!id) throw Error('id not provided!');

            const trader: ITrader | null = await Trader.findOne({
                include: [
                    {
                        model: Offer,
                        as: 'offers',
                        where: {
                            isPerformed: false,
                            isDeleted: false
                        },
                        required: false
                    },
                    {
                        model: TraderOwn,
                        as: 'traderOwns',
                        required: false
                    }
                ],
                where: {
                    id
                }
            });
            res.send(trader);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getTradersDetails: async (req: Request, res: Response) => {
        const id = req.params.id;
        if (!id) throw Error('id not provided!');

        // const deals: I
    }
}