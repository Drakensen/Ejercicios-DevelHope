import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import Joi from 'joi'
import pgPromise from 'pg-promise'
import {
    getAll,
    getOneById,
    create,
    updateById,
    deleteById
} from "./planetsController.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001
const pg = pgPromise()
export const db = pg("postgres://postgres:1192@localhost:3000/Planets")

db.connect()
  .then((obj: any) => {
    obj.done();
    console.log("Connected to the database");
  })
  .catch((error: any) => {
    console.error("Error connecting to the database:", error.message || error);
  });

const setupDB = async () => {
    await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT NOT NULL
        )
    `)

    await db.none(`INSERT INTO planets (name) VALUES ('EARTH')`)
    await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)

    const planets = await db.many(`SELECT * FROM planets`)
    console.log(planets)
}
setupDB()

app.use(morgan('dev'))
app.use(express.json())

app.get('/api/planets', getAll)

app.get('/api/planets/:id', getOneById)

app.post('/api/planets', create)

app.put('/api/planets/:id', updateById)

app.delete("/api/planets/:id", deleteById)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})