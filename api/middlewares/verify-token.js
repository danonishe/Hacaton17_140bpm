import jwt from '../utils/jwt.js';
import { AppErrorInvalid, asyncRoute } from '../utils/errors.js';
import User from "../models/user.js";

async function general(req, res, next) {
    const authorization =  req.cookies['auth._token.local'];
    if (authorization?.split(' ')[0] !== 'Bearer') throw new AppErrorInvalid('token', 401);
    try {
        req.user = jwt.verify(authorization.split(' ')[1]);
    } catch (e) {
        console.log(e);
        throw new AppErrorInvalid('token', 401);
    }

    next();
}

async function verifyUser(req, res, next) {
    const user = await User.findByPk(req.user.id);
    if (!user || req.user.iat !== +user.iat) throw new AppErrorInvalid('token', 401);

    req.user = user;
    next();
}

export default {
    general: asyncRoute(general),
    user: verifyUser,
};