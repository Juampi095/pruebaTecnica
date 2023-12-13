import { DataTypes, Model, Sequelize } from 'sequelize';


export class Photo extends Model {
    public id!: number;
    public userId!: number;
    public image!: Buffer;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const PhotoModelInit = (sequelize: Sequelize) => {
    Photo.init(
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id',
                },
            },
            image: {
                type: DataTypes.BLOB('long'),
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'Photos',
            sequelize,
        }
    );
};