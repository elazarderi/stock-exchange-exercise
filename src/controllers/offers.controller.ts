import { Request, Response } from "express";
import { Op, Transaction } from "sequelize";
import connection from "../db/sequelize.instance";
import { Deal, Offer, Share, Trader } from "../models";
import { IDeal, IOffer, TOfferType } from "../types";
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

            const offer: Partial<IOffer> = {
                type: type,
                offeredType: 'trader',
                offeredTraderId: traderId,
                shareId: shareId,
                isPerformed: false,
                requestDate: new Date(),
                isDeleted: false
            }
            let transaction: Transaction;
            try {
                transaction = await connection.transaction();
                await Offer.create(offer, { transaction }).then(async createdOffer => {
                    const machOffer: IOffer = await Offer.findOne({
                        where: {
                            shareId: createdOffer.shareId,
                            type: { [Op.not]: createdOffer.type },
                            isPerformed: false,
                            isDeleted: false
                        }
                    });
                    if (machOffer) {
                        const buyOffer: IOffer = [createdOffer, machOffer].find(o => o.type == 'buy');
                        const sellOffer: IOffer = [createdOffer, machOffer].find(o => o.type == 'sell');
                        const deal: Partial<IDeal> = {
                            date: new Date(),
                            sellerOfferId: sellOffer.id,
                            buyerOfferId: buyOffer.id,
                            price
                        }
                        await Deal.create(deal, { transaction });
                        await Offer.update({ isPerformed: true }, { where: { id: { [Op.in]: [createdOffer.id, machOffer.id] } }, transaction });

                        if (buyOffer.offeredType == 'trader') {
                            await Trader.findOne({ where: { id: buyOffer.offeredTraderId }, transaction }).then(async trader => {
                                await Trader.update({ money: trader.money - (+price) }, { where: { id: trader.id }, transaction });
                            });
                        } else {
                            await Share.findOne({ where: { id: buyOffer.shareId }, transaction }).then(async share => {
                                await Share.update({ amount: share.amount + 1 }, { where: { id: buyOffer.shareId }, transaction });
                            });
                        }
                        if (sellOffer.offeredType == 'trader') {
                            await Trader.findOne({ where: { id: sellOffer.offeredTraderId }, transaction }).then(async trader => {
                                await Trader.update({ money: trader.money + (+price) }, { where: { id: trader.id }, transaction });
                            });
                        } else {
                            await Share.findOne({ where: { id: sellOffer.shareId }, transaction }).then(async share => {
                                await Share.update({ amount: share.amount - 1 }, { where: { id: sellOffer.shareId }, transaction });
                            });
                        }
                    }
                    await transaction.commit();
                });
            } catch (error) {
                if (transaction) await transaction.rollback();
                throw Error("Deal does not created properly");
            };
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