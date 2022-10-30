import { Column, DataType, Model, Table } from "sequelize-typescript";
import { IUser } from "../types";

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
}