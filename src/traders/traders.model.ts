import { Table, Model, Column, DataType } from "sequelize-typescript";
import { ITrader } from "../types/trader.interface";

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
}