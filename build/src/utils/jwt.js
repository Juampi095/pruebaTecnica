"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generateToken = function (user) {
    return jsonwebtoken_1.default.sign(user, process.env.JWT_SECRET, {
        expiresIn: "168h",
    });
};
exports.generateToken = generateToken;
var verifyToken = function (token) {
    return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
};
exports.verifyToken = verifyToken;
