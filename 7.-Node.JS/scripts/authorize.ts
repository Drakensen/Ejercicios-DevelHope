import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import { users } from 'users'

const authorize = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("jwt", {session: false}, {err, user} => {
        if (!user || err) {
            res.status(401).json({ msg: "Unathorized." })
        } else {
            req.user = user
            next()
        }
    }) (req, res, next)
}

export default authorize