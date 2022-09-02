import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { TOfferType } from "../types/offer-type.type";
import { IOffer } from "../types/offer.interface";
import { IShare } from "../types/share.interface";
import { Share } from "./shares.model";

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