import { TDealPreformerType } from "./dealPreformerType.type";

export interface IDeal {
    id: string;
    shareId: string;
    sellerId: string;
    sellerType: TDealPreformerType;
    buyerId: string;
    buyerType: TDealPreformerType;
    price: number;
    date: Date;
}