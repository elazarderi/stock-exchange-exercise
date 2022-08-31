import mongoose from "mongoose";
import { IShares } from "../types/shares.interface";

const sharesSchema = new mongoose.Schema<IShares>({
    id: String,
    name: String,
    currentPrice: Number,
    amount: Number
});

const Shares = mongoose.model('Shares', sharesSchema);

export default Shares;