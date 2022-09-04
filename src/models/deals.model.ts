import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { IDeal, IOffer } from "../types";
import { Offer } from ".";

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

    @ForeignKey(() => Offer)
    @Column
    sellerOfferId!: number;

    @BelongsTo(() => Offer)
    sellerOffer!: IOffer;

    @ForeignKey(() => Offer)
    @Column
    buyerOfferId!: number;

    @BelongsTo(() => Offer)
    buyerOffer!: IOffer;

    @Column
    price!: number;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    date!: Date;
}