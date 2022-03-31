"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserShape = exports.createUserShape = void 0;
const createUser_shape_1 = __importDefault(require("./createUser.shape"));
exports.createUserShape = createUser_shape_1.default;
const loginUser_shape_1 = __importDefault(require("./loginUser.shape"));
exports.loginUserShape = loginUser_shape_1.default;
