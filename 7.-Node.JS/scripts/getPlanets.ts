import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import Joi from 'joi'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

type Planet = {
    id: number
    name: string
};

type Planets = Planet[]

let planets: Planets = [
    {
    id: 1,
    name: 'Earth',
    },
    {
    id: 2,
    name: 'Mars',
    },
];

app.use(morgan('dev'))
app.use(express.json())

const planetSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
})

const result = planetSchema.validate(planets)

app.get('/api/planets', (req, res) => {
    res.status(200).json(planets)
})

app.get('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id))

    if (!planet) {
        return res.status(404).json({ message: 'Planet not found' })
    }

    res.status(200).json(planet)
});

app.post('/api/planets', (req, res) => {
    const { id, name } = req.body as Planet
    const newPlanet = { id, name }
    planets = [...planets, newPlanet]
    res.status(201).json(newPlanet)

    if (result.error) {
        console.error('Invalid planet object:', result.error.message);
    } else {
        console.log('Valid planet object:', planets);
    }
});

app.put('/api/planets/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    planets = planets.map (p => p.id === Number (id) ? ({...p, name}) : p)

    console.log(planets)

    res.status(200).json({msg: "The planet was updated"})

    if (result.error) {
        console.error('Invalid planet object:', result.error.message);
    } else {
        console.log('Valid planet object:', planets);
    }
})

app.delete("/api/planets/:id", (req, res) => {
    const {id} = req.params

    planets = planets.filter((p) => p.id !== Number(id))

    res.status(200).json({ msg: "The planet was deleted" })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})