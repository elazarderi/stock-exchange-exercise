import { IOffer } from "./offer.interface";
import { ITraderOwn } from "./trader-own.interface";

export interface ITrader {
    id: number;
    name: string;
    money: number;

    offers?: IOffer[];
    traderOwns?: ITraderOwn[];
}