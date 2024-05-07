"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-error");
const morgan_1 = __importDefault(require("morgan"));
const users_js_1 = require("./users.js");
const authorize_js_1 = __importDefault(require("./authorize.js"));
const app = (0, express_1.default)();
const port = 3000;
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.post("/login", users_js_1.login);
app.post("/signup", users_js_1.signUp);
app.get("/logout", authorize_js_1.default, users_js_1.logout);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
