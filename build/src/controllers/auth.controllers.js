"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var user_model_1 = require("../models/user.model");
var email_1 = require("../utils/email");
var authController = {
    logIn: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, user, validPassword, token, photo, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, user_model_1.User.findOne({ where: { email: email } })];
                    case 2:
                        user = _b.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(401).json({ message: 'Email or password is incorrect.' })];
                        }
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
                    case 3:
                        validPassword = _b.sent();
                        if (!validPassword) {
                            return [2 /*return*/, res.status(401).json({ message: 'Email or password is incorrect.' })];
                        }
                        token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '168h' });
                        return [4 /*yield*/, user.getPhoto()];
                    case 4:
                        photo = _b.sent();
                        return [2 /*return*/, res.json({ token: token, photo: photo })];
                    case 5:
                        error_1 = _b.sent();
                        console.error(error_1);
                        return [2 /*return*/, res.status(500).json({ message: 'Internal server error.' })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    register: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, cpf, birthDate, mobile, photo, state, city, email, password, existingUser, newUser, _b, savedUser, error_2;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = req.body, name = _a.name, cpf = _a.cpf, birthDate = _a.birthDate, mobile = _a.mobile, photo = _a.photo, state = _a.state, city = _a.city, email = _a.email, password = _a.password;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, user_model_1.User.findOne({ where: { email: email } })];
                    case 2:
                        existingUser = _d.sent();
                        if (existingUser) {
                            return [2 /*return*/, res.status(400).json({ message: 'User already exists.' })];
                        }
                        _b = user_model_1.User.bind;
                        _c = {
                            name: name,
                            cpf: cpf,
                            birthDate: birthDate,
                            mobile: mobile,
                            photo: photo,
                            state: state,
                            city: city,
                            email: email
                        };
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 3:
                        newUser = new (_b.apply(user_model_1.User, [void 0, (_c.password = _d.sent(),
                                _c)]))();
                        return [4 /*yield*/, newUser.save()];
                    case 4:
                        savedUser = _d.sent();
                        return [4 /*yield*/, (0, email_1.sendActivationEmail)(savedUser.email)];
                    case 5:
                        _d.sent();
                        return [2 /*return*/, res.status(201).json({ message: 'User created successfully.' })];
                    case 6:
                        error_2 = _d.sent();
                        console.error(error_2);
                        return [2 /*return*/, res.status(500).json({ message: 'Internal server error.' })];
                    case 7: return [2 /*return*/];
                }
            });
        });
    },
};
exports.default = authController;
