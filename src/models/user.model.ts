import { Model, Sequelize } from 'sequelize';

const sequelize = new Sequelize("users", "root", "BracoBalto//2323", {
    host: 'localhost',
    dialect: "mysql",
    port: 3306
});

async function testConnection() {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log(error)
    }
}
testConnection();

export class User extends Model {
    public id!: number;
    public name!: string;
    public cpf!: string;
    public dateOfBirth!: Date;
    public mobilePhone!: string;
    public state!: string;
    public city!: string;
    public asset!: string;
    public email!: string;
    public password!: string;
    public photoId!: number;
    public isActive!: boolean;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    getPhoto: any;
}

export const UserModelInit = (sequelize: Sequelize, DataTypes: typeof DataTypes) => {
    User.init(
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
                allowNull: false,
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
            photoId: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                references: {
                    model: 'Photos',
                    key: 'id',
                },
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
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
            tableName: 'my_table',
            sequelize,
        }
    );
};

export class Photo extends Model {
    public id!: number;
    public userId!: number;
    public image!: Buffer;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const PhotoModelInit = (sequelize: Sequelize, DataTypes: DataTypes) => {
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