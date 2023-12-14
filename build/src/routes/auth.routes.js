"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_controllers_1 = __importDefault(require("../controllers/auth.controllers"));
var router = express_1.default.Router();
router.post('/register', auth_controllers_1.default.register);
router.post('/signin', auth_controllers_1.default.logIn);
exports.default = router;
