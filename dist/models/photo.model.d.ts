/// <reference types="node" />
import { Model, Sequelize } from 'sequelize';
export declare class Photo extends Model {
    id: number;
    userId: number;
    image: Buffer;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export declare const PhotoModelInit: (sequelize: Sequelize) => void;
