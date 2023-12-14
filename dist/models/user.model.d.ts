import { Model, Sequelize } from 'sequelize';
export declare class User extends Model {
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
    readonly createdAt: Date;
    readonly updatedAt: Date;
    getPhoto: any;
}
export declare const UserModelInit: (sequelize: Sequelize) => void;
