import { Request, Response } from "express";
import Joi from "joi";
import pgPromise from "pg-promise";
import { db } from "./getPlanets";

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

const getAll = async (req: Request, res: Response) => {
    const planets = await db.many(`SELECT * FROM planets`)
    res.status(200).json(planets)
}

const getOneById = async(req: Request, res: Response) => {
    const { id } = req.params;
    const planet = await db.one(`SELECT * FROM planets WHERE id=$1`, Number(id))

    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' })
    }

    res.status(200).json(planet)
}

const create = async(req: Request, res: Response) => {

    const { name } = req.body as Planet
    const newPlanet = {  name }
    const validateNewPlanet = planetSchema.validate(newPlanet)

    if (validateNewPlanet.error) {
        return res
            .status(400)
            .json({ msg: validateNewPlanet.error.details[0].message })
    } else {
        await db.none(`INSERT INTO planets (name) VALUES ($1)`, name)
        res.status(201).json({ msg: "The planet was created" })
    }
    res.status(201).json(newPlanet)
}

const updateById = async(req: Request, res: Response) => {
    const { id } = req.params
    const { name } = req.body

    await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name])

    res.status(200).json({ msg: "The planet was updated" })
}

const deleteById = async(req: Request, res: Response) => {
    const { id } = req.params
    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id))

    res.status(200).json({ msg: "The planet was deleted" })
}

export { getAll, getOneById, create, updateById, deleteById }