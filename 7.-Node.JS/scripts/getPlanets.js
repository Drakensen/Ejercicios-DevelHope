"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const planetsController_js_1 = require("./planetsController.js");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
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
