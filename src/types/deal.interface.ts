import { IOffer } from ".";

export interface IDeal {
    id: number;
    sellerOfferId?: number;
    buyerOfferId?: number;
    price: number;
    date: Date;

    sellerOffer?: IOffer;
    buyerOffer?: IOffer;
}