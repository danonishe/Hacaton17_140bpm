import User from "../models/user.js";
import {AppErrorAlreadyExists, AppErrorInvalid, AppErrorMissing} from "../utils/errors.js";
import jwt from '../utils/jwt.js';

export default {
    async register({body: {login, password, name}}, res){
        if (!login) throw new AppErrorMissing("login");
        if (!password) throw new AppErrorMissing("password");
        if (!name) throw new AppErrorMissing('name');

        if (name.length <= 3 || name.length >= 15) throw new AppErrorInvalid('name');
        if (login.length <= 3 || login.length >= 15 || !/^\S+@\S+\.\S+$/.test(login)) throw new AppErrorInvalid("login");
        if (password.length <= 3 || login.length >= 15 || !/[a-z]/.test(password) || !/[A-Z]/.test(password) ||
            !/[1-9]/.test(password)) throw new AppErrorInvalid("password");

        const CheckUser = await User.findOne({ where: { login: login } });
        if (CheckUser) throw new AppErrorAlreadyExists("user");

        const user = await User.create({
            login,
            password,
            name,
        });
        const { jwt: token, iat } = jwt.generate({ id: user.id }, { expiresIn: '15m' });
        await user.update({ iat });
        res.json({ token });
    },

    async login({ body: { login, password } }, res){
        if (!login) throw new AppErrorMissing("login");
        if (!password) throw new AppErrorMissing("password");

        const user = await User.findOne({ where: { login: login } });
        console.log(user.login, user.validatePassword(password));
        if (!user || !user.validatePassword(password)) throw new AppErrorInvalid("login or password");
        if (!user) throw new AppErrorInvalid("login or password");

        const { jwt: token, iat } = jwt.generate({ id: user.id }, { expiresIn: '15m' });
        await user.update({ iat });
        res.json({ user, token });
    },

    async self({ user }, res){
        res.json({ user });
    }
}