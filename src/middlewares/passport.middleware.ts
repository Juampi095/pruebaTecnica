import { Request } from 'express';
import { Strategy } from 'passport-jwt';
import { User } from '../models/user.model';

const cookieExtractor = (req: Request): string | null => {
    let cookie = null
    if (req && req.cookies) {
        cookie = req.cookies.Authorization
    }
    return cookie
}

const opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.JWT_SECRET as string
}

const passportMiddleware = new Strategy(opts, async (payload, done) => {
    try {
        const user = await User.findOne({ where: { email: payload.email } })
        if (user !== null) return done(null, user)
        return done(null, false)
    } catch (error) {
        return done(error)
    }
})

export default passportMiddleware;