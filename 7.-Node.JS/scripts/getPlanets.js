"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const joi_1 = __importDefault(require("joi"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
let planets = [
    {
        id: 1,
        name: 'Earth',
    },
    {
        id: 2,
        name: 'Mars',
    },
];
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
const planetSchema = joi_1.default.object({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required()
});
const result = planetSchema.validate(planets);
app.get('/api/planets', (req, res) => {
    res.status(200).json(planets);
});
app.get('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    res.status(200).json(planet);
});
app.post('/api/planets', (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];
    res.status(201).json(newPlanet);
    if (result.error) {
        console.error('Invalid planet object:', result.error.message);
    }
    else {
        console.log('Valid planet object:', planets);
    }
});
app.put('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map(p => p.id === Number(id) ? (Object.assign(Object.assign({}, p), { name })) : p);
    console.log(planets);
    res.status(200).json({ msg: "The planet was updated" });
    if (result.error) {
        console.error('Invalid planet object:', result.error.message);
    }
    else {
        console.log('Valid planet object:', planets);
    }
});
app.delete("/api/planets/:id", (req, res) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
    res.status(200).json({ msg: "The planet was deleted" });
});
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
