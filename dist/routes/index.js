"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const shapes_1 = require("../shapes");
const router = (0, express_1.Router)();
// ROTAS
router.post('/user/register', (0, middlewares_1.validateShape)(shapes_1.createUserShape), middlewares_1.verifyUsernameExists, controllers_1.createUserController);
router.post('/user/login', (0, middlewares_1.validateShape)(shapes_1.loginUserShape), controllers_1.loginUserController);
exports.default = router;
