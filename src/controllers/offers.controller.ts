import { Request, Response } from "express";
import { Offer, Trader } from "../models";
import { IOffer, TOfferType } from "../types";

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
    },

    makeOffer: async (req: Request, res: Response) => {
        try {
            const { shareId, traderId, type }: { shareId: number, traderId: number, type: TOfferType } = req.body;
            if (!(shareId && traderId && type)) throw Error('share, trader of type not provided!');
            console.log(shareId, traderId, type);

            const offer: Partial<IOffer> = {
                type: type,
                offeredType: 'trader',
                offeredTraderId: traderId,
                shareId: shareId,
                isPerformed: false,
                requestDate: new Date(),
                isDeleted: false
            }
            await Offer.create(offer);

        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}