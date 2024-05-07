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
exports.logout = exports.signUp = exports.login = void 0;
const db_1 = require("./db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = db_1.db.one(`SELECT * FROM users WHERE username=$1`, username);
    if (user && user.password === password) {
        const payload = {
            id: user.id,
            username,
        };
        const { SECRET } = process.env;
        const token = jsonwebtoken_1.default.sign(payload, SECRET);
        yield db_1.db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user.id, token]);
        res.status(200).json({ id: user.id, username, token });
    }
    else {
        res.status(400).json({ msg: "Username or password incorrect." });
    }
});
exports.login = login;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = db_1.db.oneOrNone(`SELECT * FROM users WHERE username=$1`, username);
    if (user) {
        res.status(400).json({ msg: "Username already exists." });
    }
    else {
        const { id } = yield db_1.db.one(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`, [username, password]);
        res.status(201).json({ id, msg: "User created successfully." });
    }
});
exports.signUp = signUp;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    yield db_1.db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user === null || user === void 0 ? void 0 : user.id, null]);
    res.status(200).json({ msg: "User logged out successfully." });
});
exports.logout = logout;
