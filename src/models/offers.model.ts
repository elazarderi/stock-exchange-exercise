import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { TDealPreformerType, TOfferType, IOffer, IShare, ITrader } from "../types";
import { Share, Trader } from ".";

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

    @Column
    type!: TOfferType;

    @Column
    offeredType!: TDealPreformerType;

    @ForeignKey(() => Trader)
    @Column
    offeredTraderId?: number;

    @BelongsTo(() => Trader)
    offeredTrader?: ITrader;

    @ForeignKey(() => Share)
    @Column
    shareId!: number;

    @BelongsTo(() => Share)
    share?: IShare;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isPerformed!: boolean;

    @Column({
        type:DataType.DATE,
        defaultValue: new Date()
    })
    requestDate!: Date;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isDeleted!: boolean;
}