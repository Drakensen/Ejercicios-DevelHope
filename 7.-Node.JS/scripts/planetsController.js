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
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
const joi_1 = __importDefault(require("joi"));
const getPlanets_1 = require("./getPlanets");
const planetSchema = joi_1.default.object({
    id: joi_1.default.number().integer().required(),
    name: joi_1.default.string().required()
});
let planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' },
];
const result = planetSchema.validate(planets);
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const planets = yield getPlanets_1.db.many(`SELECT * FROM planets`);
    res.status(200).json(planets);
});
exports.getAll = getAll;
const getOneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const planet = yield getPlanets_1.db.one(`SELECT * FROM planets WHERE id=$1`, Number(id));
    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' });
    }
    res.status(200).json(planet);
});
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
