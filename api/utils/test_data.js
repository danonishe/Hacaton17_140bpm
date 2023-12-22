import User from "../models/user.js";

const users = [
    {
        'login': 'test1@mail.com',
        'password': '123QWEqwe',
        'name': 'test1',
    },
    {
        'login': 'test2@mail.com',
        'password': '123QWEqwe',
        'name': 'test2',
    },
    {
        'login': 'test3@mail.com',
        'password': '123QWEqwe',
        'name': 'test3',
    },
]
async function createTestUsers() {
    for (const u of users) {
        const user = await User.findOne({where: {login: u.login}});
        if (!user) {
            await User.create({
                login: u.login,
                password: u.password,
                name: u.name,
            })
        }
    }
}

export default {
    createTestUsers,
}