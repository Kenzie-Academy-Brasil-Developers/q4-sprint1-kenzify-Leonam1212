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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const configs_1 = require("../configs");
const userLoginService = (password, { username }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = configs_1.KENZIFYDB.find((_) => _.username === username);
    if (!user) {
        return undefined; // Exibir json de error
    }
    const hashedPassword = yield bcrypt_1.default.compare(password, user.password);
    if (!hashedPassword) {
        return undefined; // Exibir json de error
    }
    const token = jsonwebtoken_1.default.sign({ username }, configs_1.config.secretKey, {
        expiresIn: configs_1.config.expiresIn,
    });
    return token;
});
exports.default = userLoginService;
