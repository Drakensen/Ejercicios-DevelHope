"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
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
});

app.put('/api/planets/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    planets = planets.map (p => p.id === Number (id) ? ({...p, name}) : p)

    console.log(planets);

    res.status(200).json({msg: "The planet was updated"})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});