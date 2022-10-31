import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ITrader, IUser } from "../types";
import { Trader } from "./traders.model";

@Table({
    timestamps: false,
    tableName: 'users'
})
export class User extends Model implements IUser {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id!: number;
    
    @Column
    firstName: string;
    
    @Column
    lastName: string;
    
    @Column
    userName: string;
    
    @Column
    password: string;

    @ForeignKey(() => Trader)
    @Column
    traderId: number;

    @BelongsTo(() => Trader)
    trader?: ITrader;
}