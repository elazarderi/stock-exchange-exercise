import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { IOffer, ITrader, ITraderOwn } from "../types";
import { Offer } from "./offers.model";
import { TraderOwn } from "./traders-owns.model";

@Table({
    timestamps: false,
    tableName: 'traders'
})
export class Trader extends Model implements ITrader {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        defaultValue: 0,
    })
    money!: number;

    @HasMany(() => Offer)
    offers? : IOffer[];

    @HasMany(() => TraderOwn)
    traderOwns?: ITraderOwn[];
}