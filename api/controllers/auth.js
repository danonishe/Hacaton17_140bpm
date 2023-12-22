import User from "../models/user.js";
import {AppErrorAlreadyExists, AppErrorInvalid, AppErrorMissing} from "../utils/errors.js";

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

        res.json({ user });
    },

    async login({ body: { login, password } }, res){
        if (!login) throw new AppErrorMissing("login");
        if (!password) throw new AppErrorMissing("password");

        const CheckUser = await User.findOne({ where: { login: login } });
        if (!CheckUser || !CheckUser.validatePassword(password)) throw new AppErrorInvalid("login or password");

        res.json({ status: 'OK' });
    }
}