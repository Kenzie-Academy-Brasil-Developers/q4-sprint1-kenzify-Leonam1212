"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.KENZIFYDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const KENZIFYDB = [];
exports.KENZIFYDB = KENZIFYDB;
const config = {
    secretKey: process.env.SECRET_KEY,
    expiresIn: (_a = process.env.EXPIRES_IN) !== null && _a !== void 0 ? _a : '1h'
};
exports.config = config;
