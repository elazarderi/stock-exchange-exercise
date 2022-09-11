import { Request, Response } from "express";
import { Deal, Offer, Share } from "../models";
import { IShare } from "../types";

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
            const share: IShare | null = await Share.findOne({
                include: [
                    {
                        model: Offer, 
                        as: 'offers',
                        where: { isPerformed: false }
                    },
                ],
                where: { id }
            });
            res.send(share);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

