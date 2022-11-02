import { Op, Transaction } from "sequelize";
import connection from "../db/sequelize.instance";
import { Deal, Offer } from "../models";
import { IDeal, IOffer, TOfferType } from "../types";

export const balanceOffers = async (createdOffer: IOffer, price: number): Promise<void> => {

    const machOffer: IOffer = await Offer.findOne({
        where: {
            shareId: createdOffer.shareId, type: { [Op.not]: createdOffer.type }
        }
    });
    if (machOffer) {
        const deal: Partial<IDeal> = {
            date: new Date(),
            sellerOfferId: [createdOffer, machOffer].find(o => o.type == 'sell').id,
            buyerOfferId: [createdOffer, machOffer].find(o => o.type == 'buy').id,
            price
        }
        let transaction: Transaction;
        try {
            transaction = await connection.transaction();
            await Deal.create(deal, { transaction });
            await Offer.update({ isPerformed: true }, { where: { id: { [Op.in]: [createdOffer.id, machOffer.id] } }, transaction });
            await transaction.commit();
        } catch (error) {
            if (transaction) await transaction.rollback();
            throw Error("Deal does not created properly");
        }
    }
}