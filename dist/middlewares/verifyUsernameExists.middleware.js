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
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../configs");
const verifyUsernameExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.validated;
    const user = configs_1.KENZIFYDB.find((u) => u.username === username);
    if (user) {
        return res.status(422).json({ message: 'You can not use this username.' });
    }
    return next();
});
exports.default = verifyUsernameExists;
