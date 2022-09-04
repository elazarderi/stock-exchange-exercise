import { ITrader, IShare } from ".";

export interface ITraderOwn {
    id: number;
    traderId: number;
    shareId: number;

    trader?: ITrader;
    share?: IShare;
}