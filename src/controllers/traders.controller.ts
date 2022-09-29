import { Request, Response } from "express";
import { Deal, Offer, Trader, TraderOwn } from "../models";
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

    getTraderStatus: async (req: Request, res: Response) => {
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
                where: { id }
            });
            res.send(trader);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getTraderDeals: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            if (!id) throw Error('id not provided!');

            const trader: ITrader | null = await Trader.findOne({
                include: [{
                    model: Offer,
                    as: 'offers',
                    where: {
                        isPerformed: true,
                        isDeleted: false
                    },
                    include: [{
                        model: Deal,
                        as: 'deal',
                        required: true
                    }],
                    limit: 8
                }],
                where: { id }
            });
            res.send(trader);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}