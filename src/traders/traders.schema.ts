import mongoose from "mongoose";
import { ITraders } from "../types/traders.interface";

const TradersSchema = new mongoose.Schema<ITraders>({
    id: String,
    name: String,
    money: Number
});

const Traders = mongoose.model('Traders', TradersSchema);

export  default Traders;