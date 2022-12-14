import { Request, Response } from "express";
import { Deal, Offer, Share } from "../models";
import { IDeal, IShare } from "../types";

export const SharesController = {

    getShares: async (req: Request, res: Response) => {
        try {
            const shares: IShare[] = await Share.findAll();
            res.send(shares);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getShareById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            if (!id) throw Error('id not provided!');

            const share: Promise<IShare | null> = Share.findOne({
                include: [
                    {
                        model: Offer,
                        as: 'offers',
                        where: { isPerformed: false }
                    }
                ],
                where: { id },
            });

            const deals: Promise<IDeal[]> = Deal.findAll({
                include: [
                    {
                        model: Offer,
                        as: 'buyerOffer',
                        where: { shareId: id }
                    },
                    {
                        model: Offer,
                        as: 'sellerOffer',
                        where: { shareId: id }
                    }
                ],
                limit: 10,
                subQuery: false,
                order: [['date', 'ASC']]
            });

            const shareDeals: Map<IShare | null, IDeal[]> = await Promise.all([share, deals]).then(([s, d]) => {
                return new Map<IShare | null, IDeal[]>().set(s, d);
            });

            res.send(...shareDeals);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
}