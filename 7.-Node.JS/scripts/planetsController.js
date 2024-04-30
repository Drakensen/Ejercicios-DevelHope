"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
const joi_1 = __importDefault(require("joi"));
const planetSchema = joi_1.default.object({
    id: joi_1.default.number().integer().required(),
    name: joi_1.default.string().required()
});
let planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' },
];
const result = planetSchema.validate(planets);
const getAll = (req, res) => {
    res.status(200).json(planets);
};
exports.getAll = getAll;
const getOneById = (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    res.status(200).json(planet);
};
exports.getOneById = getOneById;
const create = (req, res) => {
    const { error } = planetSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: "Invalid request body", error: error.details });
    }
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];
    res.status(201).json(newPlanet);
};
exports.create = create;
const updateById = (req, res) => {
    const { error } = planetSchema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: "Invalid request body", error: error.details });
    }
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map(p => p.id === Number(id) ? (Object.assign(Object.assign({}, p), { name })) : p);
    console.log(planets);
    res.status(200).json({ msg: "The planet was updated" });
};
exports.updateById = updateById;
const deleteById = (req, res) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
    res.status(200).json({ msg: "The planet was deleted" });
};
exports.deleteById = deleteById;
