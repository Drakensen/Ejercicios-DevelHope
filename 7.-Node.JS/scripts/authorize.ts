import { Request, Response, NextFunction } from "express"
import passport from 'passport'
import jwt from 'jsonwebtoken'

const authorize = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate ("jwt", {session: false}, (err, user) => {
        if (!user || err) {
            res.status(401).json({ msg: "Unathorized." })
        } else {
            req.user = user
            next()
        }
    }) (req, res, next)
}

export default authorize