import { IDeal } from "./deal.interface";
import { IOffer } from "./offer.interface";

export interface IShare {
    id: number;
    name: string;
    currentPrice: number;
    amount: number;

    offers?: IOffer[];
}

export type IShareDeals = (IShare | null) & IDeal;