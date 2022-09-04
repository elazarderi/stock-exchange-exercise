import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { IDeal } from "../types/deal.interface";
import { IOffer } from "../types/offer.interface";
import { IShare } from "../types/share.interface";
import { Offer } from "./offers.model";
import { Share } from "./shares.model";

@Table({
    timestamps: false,
    tableName: 'deals'
})
export class Deal extends Model implements IDeal {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @ForeignKey(() => Share)
    @Column
    shareId!: number;

    @BelongsTo(() => Share)
    share!: IShare;

    @ForeignKey(() => Offer)
    @Column
    sellerOfferId!: number;

    @BelongsTo(() => Offer)
    @Column sellerOffer!: IOffer;

    @ForeignKey(() => Offer)
    @Column
    buyerOfferId!: string;

    @BelongsTo(() => Offer)
    @Column
    buyerOffer!: IOffer;

    @Column
    price!: number;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    date!: Date;
}