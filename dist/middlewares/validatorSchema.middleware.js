"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
var zod_1 = __importDefault(require("zod"));
var hasSpecialCharacter = function (value) {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
};
exports.userSchema = zod_1.default.object({
    email: zod_1.default
        .string()
        .email()
        .refine(function (value) { return value.includes("@"); }, "The email must contain the '@' character."),
    password: zod_1.default
        .string()
        .min(8)
        .max(20)
        .refine(function (value) { return hasSpecialCharacter(value); }, {
        message: "The password must be at least 8 characters containing at least 1 letter, 1 number, and 1 special character.",
        path: [],
    }),
});
//# sourceMappingURL=validatorSchema.middleware.js.map