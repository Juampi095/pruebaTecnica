import { DataTypes, Model, Sequelize } from 'sequelize';



export class User extends Model {
    declare id: number;
    public name!: string;
    public cpf!: string;
    public dateOfBirth!: Date;
    public mobilePhone!: string;
    public state!: string;
    public city!: string;
    public email!: string;
    public password!: string;
    public photoId!: number;
    public isActive!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    getPhoto: any;
}

export interface UserInt {
    id: number;
    name: string;
    cpf: string;
    dateOfBirth: Date;
    mobilePhone: string;
    state: string;
    city: string;
    email: string;
    password: string;
    photoId: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    getPhoto: any;
}

module.exports = (sequelize: Sequelize) => {
    sequelize.define('user',
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            dateOfBirth: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            mobilePhone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            state: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            asset: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: ''
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            }
        }
    );
};


