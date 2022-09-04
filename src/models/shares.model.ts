import { Table, Model, Column, DataType } from "sequelize-typescript";
import { IShare } from "../types/index";

@Table({
    timestamps: false,
    tableName: 'shares'
})
export class Share extends Model implements IShare {
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
    currentPrice!: number;
    
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        defaultValue: 0,
    })
    amount!: number;
}