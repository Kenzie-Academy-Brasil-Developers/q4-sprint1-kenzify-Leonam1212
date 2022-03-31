"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs");
const models_1 = require("../models");
const createUserController = (req, res) => {
    const user = Object.assign({}, req.validated);
    if (configs_1.KENZIFYDB.find((_) => _.username === user.username)) {
        return res.status(409).json({ error: 'User already exists' });
    }
    const newUser = Object.assign(new models_1.UserModel(user), user);
    configs_1.KENZIFYDB.push(newUser);
    console.log('DATABASE', newUser);
    console.log(configs_1.KENZIFYDB);
    return res
        .status(201)
        .json({
        id: newUser.id,
        username: newUser.username,
        playlist: newUser.playlist,
    });
};
exports.default = createUserController;
