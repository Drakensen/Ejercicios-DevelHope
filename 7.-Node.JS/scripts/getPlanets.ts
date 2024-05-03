import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import pgPromise from 'pg-promise'
import multer from 'multer'
import {
    getAll,
    getOneById,
    create,
    updateById,
    deleteById,
    createImage
} from "./planetsController.js"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

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
            name TEXT NOT NULL,
            image TEXT
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
app.use("/uploads", express.static("uploads"))
app.use("/static", express.static("static"))

app.get('/api/planets', getAll)
app.get('/api/planets/:id', getOneById)
app.post('/api/planets', create)
app.put('/api/planets/:id', updateById)
app.delete("/api/planets/:id", deleteById)
app.post("/api/planets/:id/image", upload.single("image"), createImage)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})