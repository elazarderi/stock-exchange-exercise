import { Request, Response } from "express";
import { Offer, Trader } from "../models";
import { IOffer, TOfferType } from "../types";
import { balanceOffers } from "../services/offers.service";

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
                where: { shareId, isPerformed: false, isDeleted: false }
            });

            res.send(offers);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    },

    makeOffer: async (req: Request, res: Response) => {
        try {
            const { shareId, traderId, type, price }:
                { shareId: number, traderId: number, type: TOfferType, price: number } = req.body;
            if (!(shareId && traderId && type && price)) throw Error('share, trader, price or type not provided!');
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
            await Offer.create(offer).then(async createdOffer => {
                await balanceOffers(createdOffer, price);
            });

            res.send(offer);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    },

    deleteOffer: async (req: Request, res: Response) => {
        const offerId = req.params.id;
        if (!offerId) throw Error('share id not provided!');

        const result = await Offer.update({ isDeleted: true }, { where: { id: offerId } });
        res.send(result);
    }
}