import { ITrader, IShare } from ".";

export interface ITraderOwn {
    id: number;
    traderId: number;
    shareId: number;
    isDeleted: boolean;

    trader?: ITrader;
    share?: IShare;
}