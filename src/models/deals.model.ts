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
    @BelongsTo(() => Offer, { foreignKey: 'sellerOfferId', as: 'sellerOffer' })
    sellerOffer!: IOffer;

    @ForeignKey(() => Offer)
    @Column
    buyerOfferId!: number;
    @BelongsTo(() => Offer, { foreignKey: 'buyerOfferId', as: 'buyerOffer' })
    buyerOffer!: IOffer;

    @Column
    price!: number;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    date!: Date;
}