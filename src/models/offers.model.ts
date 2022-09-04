import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { TDealPreformerType } from "../types/deal-preformer-type.type";
import { TOfferType } from "../types/offer-type.type";
import { IOffer } from "../types/offer.interface";
import { IShare } from "../types/share.interface";
import { ITrader } from "../types/trader.interface";
import { Share } from "./shares.model";
import { Trader } from "./traders.model";

@Table({
    timestamps: false,
    tableName: 'offers'
})
export class Offer extends Model implements IOffer {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @ForeignKey(() => Trader)
    @Column
    offeredId!: number;

    @BelongsTo(() => Trader)
    offered!: ITrader;

    @Column
    offeredType!: TDealPreformerType;

    @Column
    type!: TOfferType;

    @ForeignKey(() => Share)
    @Column
    shareId!: number;

    @BelongsTo(() => Share)
    share!: IShare;

    @Column
    isPerformed!: boolean;

    @Column
    requestDate!: Date;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isDeleted!: boolean;
}