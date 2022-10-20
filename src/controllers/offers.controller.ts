import { Request, Response } from "express";
import { Offer, Trader } from "../models";
import { IOffer } from "../types";

export const OffersController = {

    getOffersByShareId: async (req: Request, res: Response) => {
        try {
            const shareId = req.params.shareId;
            if (!shareId) throw Error('share id not provided!');

            const offers: IOffer[] = await Offer.findAll({
                include: [{
                    model: Trader,
                    as: 'offeredTrader'
                }],
                where: { shareId, isPerformed: false }
            });

            res.send(offers);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
}