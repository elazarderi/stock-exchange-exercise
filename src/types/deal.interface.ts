import { TDealPreformerType } from "./deal-preformer-type.type";

export interface IDeal {
    id: number;
    shareId: number;
    sellerOfferId: number;
    buyerOfferId: string;
    price: number;
    date: Date;
}