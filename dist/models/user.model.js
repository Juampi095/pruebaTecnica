"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModelInit = exports.User = void 0;
var sequelize_1 = require("sequelize");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return User;
}(sequelize_1.Model));
exports.User = User;
var UserModelInit = function (sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        dateOfBirth: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        mobilePhone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        asset: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        photoId: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            allowNull: true,
            references: {
                model: 'Photos',
                key: 'id',
            },
        },
        isActive: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'my_table',
        modelName: 'User',
        sequelize: sequelize,
    });
};
exports.UserModelInit = UserModelInit;
//# sourceMappingURL=user.model.js.map