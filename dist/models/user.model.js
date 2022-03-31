"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class UserModel {
    constructor({ username, password }) {
        this.id = (0, uuid_1.v4)();
        this.username = username;
        this.password = password;
        this.playlist = {};
    }
}
exports.default = UserModel;
