import { Request, Response } from "express";
import { Deal, Offer, Share, Trader } from "../models";
import { IDeal } from "../types";

export const DealsController = {

    getDealsByShareId: async (req: Request, res: Response) => {
        try {
            const id = req.params.shareId;
            if (!id) throw Error('id not provided!');

            const deals: IDeal[] = await Deal.findAll({
                include: [
                    {
                        model: Offer,
                        as: 'buyerOffer',
                        include: [{
                            model: Trader,
                            as: 'offeredTrader'
                        }],
                        where: { shareId: id }
                    },
                    {
                        model: Offer,
                        as: 'sellerOffer',
                        include: [{
                            model: Trader,
                            as: 'offeredTrader'
                        }],
                        where: { shareId: id }
                    }
                ],
                limit: 10,
                subQuery: false,
                order: [['date', 'ASC']]
            });

            res.send(deals);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    getDealsByTraderId: async (req: Request, res: Response) => {
        try {
            const id = req.params.traderId;
            if (!id) throw Error('id not provided!');

            const deals: IDeal[] = await Deal.findAll({
                include: [
                    {
                        model: Offer,
                        as: 'buyerOffer',
                        include: [{
                            model: Share,
                            as: 'share'
                        }],
                        where: { offeredTraderId: id },
                        required: false
                    },
                    {
                        model: Offer,
                        as: 'sellerOffer',
                        include: [{
                            model: Share,
                            as: 'share'
                        }],
                        where: { offeredTraderId: id },
                        required: false
                    }
                ],
                limit: 8,
                subQuery: false,
                order: [['date', 'ASC']]
            });

            res.send(deals.filter(d => d.buyerOffer || d.sellerOffer));
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}