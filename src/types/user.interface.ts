import { ITrader } from "./trader.interface";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    traderId: number;

    trader?: ITrader;
}