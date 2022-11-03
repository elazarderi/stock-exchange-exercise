import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { IShare, ITrader, ITraderOwn } from "../types";
import { Trader, Share } from ".";

@Table({
    timestamps: false,
    tableName: 'tradersOwns'
})
export class TraderOwn extends Model implements ITraderOwn {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @ForeignKey(() => Trader)
    @Column
    traderId!: number;

    @BelongsTo(() => Trader)
    trader?: ITrader;

    @ForeignKey(() => Share)
    @Column
    shareId!: number;

    @BelongsTo(() => Share)
    share?: IShare;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    isDeleted!: boolean;
}