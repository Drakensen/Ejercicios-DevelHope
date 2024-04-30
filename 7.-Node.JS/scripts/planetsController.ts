import { Request, Response } from "express";
import Joi from "joi";

type Planet = {
    id: number
    name: string
};

const planetSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().required()
})

type Planets = Planet[]

let planets: Planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' },
]

const result = planetSchema.validate(planets)

const getAll = (req: Request, res: Response) => {
    res.status(200).json(planets)
}

const getOneById = (req: Request, res: Response) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id))

    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' })
    }

    res.status(200).json(planet)
}

const create = (req: Request, res: Response) => {
    const { error } = planetSchema.validate(req.body)
    if (error) {
        return res.status(400).send({ message: "Invalid request body", error: error.details })
    }

    const { id, name } = req.body as Planet
    const newPlanet = { id, name }
    planets = [...planets, newPlanet]
    res.status(201).json(newPlanet)
}

const updateById = (req: Request, res: Response) => {
    const { error } = planetSchema.validate(req.body)
    if (error) {
        return res.status(400).send({ message: "Invalid request body", error: error.details })
    }

    const {id} = req.params
    const {name} = req.body
    planets = planets.map (p => p.id === Number (id) ? ({...p, name}) : p)

    console.log(planets)

    res.status(200).json({msg: "The planet was updated"})
}

const deleteById = (req: Request, res: Response) => {
    const {id} = req.params

    planets = planets.filter((p) => p.id !== Number(id))

    res.status(200).json({ msg: "The planet was deleted" })
}

export { getAll, getOneById, create, updateById, deleteById }