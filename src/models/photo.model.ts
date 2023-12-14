import { DataTypes, Model, Sequelize } from 'sequelize';


export class Photo extends Model {
    declare id: number;
    public userId!: number;
    public image!: Buffer;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

module.exports = (sequelize: Sequelize) => {
    sequelize.define('photo',
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            /*             userId: {
                            type: DataTypes.INTEGER.UNSIGNED,
                            allowNull: false,
                            references: {
                                model: 'user',
                                key: 'id',
                            },
                        }, */
            image: {
                type: DataTypes.BLOB('long'),
                allowNull: false,
            }
        }
    );
};

/* export const PhotoTable = new PhotoModelInit(sequelize); */