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
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const planetsController_js_1 = require("./planetsController.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const pg = (0, pg_promise_1.default)();
exports.db = pg("postgres://postgres:1192@localhost:3000/Planets");
exports.db.connect()
    .then((obj) => {
    obj.done();
    console.log("Connected to the database");
})
    .catch((error) => {
    console.error("Error connecting to the database:", error.message || error);
});
const setupDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield exports.db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL
        )
    `);
    yield exports.db.none(`INSERT INTO planets (name) VALUES ('EARTH')`);
    yield exports.db.none(`INSERT INTO planets (name) VALUES ('Mars')`);
    const planets = yield exports.db.many(`SELECT * FROM planets`);
    console.log(planets);
});
setupDB();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.get('/api/planets', planetsController_js_1.getAll);
app.get('/api/planets/:id', planetsController_js_1.getOneById);
app.post('/api/planets', planetsController_js_1.create);
app.put('/api/planets/:id', planetsController_js_1.updateById);
app.delete("/api/planets/:id", planetsController_js_1.deleteById);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
