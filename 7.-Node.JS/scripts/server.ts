import express from 'express'
import 'express-async-error'
import morgan from 'morgan'
import { login, signUp, logout } from "./users.js"
import authorize from "./authorize.js"

const app = express()
const port = 3000

app.use(morgan("dev"))
app.use(express.json())



app.post("/login", login)
app.post("/signup", signUp)
app.get("/logout", authorize, logout)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})