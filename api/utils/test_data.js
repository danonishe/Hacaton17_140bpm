import User from "../models/user.js";
import Place from "../models/place.js";
import Feedback from "../models/feedback.js";

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
];
const places = [
    {
        'name': 'Парк культуры',
        'description': 'Большой крутой зеленый',
        'type': 1
    },
    {
        'name': 'Картинная галлерея',
        'description': 'Картины бомбовые, бэкендеры тоже',
        'type': 4
    },
    {
        'name': 'Храм',
        'description': 'Золотые купола..',
        'type': 2
    },
    {
        'name': 'Шаурма',
        'description': 'Балдежная шаурма для балдежных людей',
        'type': 3
    },
];
const feedbacks = [
    {
        'userId': 1,
        'placeId': 1,
        'text': 'Отлично',
        'mark': 5,
    },
    {
        'userId': 1,
        'placeId': 2,
        'text': 'Плохо',
        'mark': 2,
    },
    {
        'userId': 2,
        'placeId': 1,
        'text': 'Пойдет',
        'mark': 4,
    },
    {
        'userId': 2,
        'placeId': 3,
        'text': 'Сойдет',
        'mark': 3,
    }
];
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

async function createTestPlaces() {
    for (const p of places) {
        const place = await Place.findOne({where: {name: p.name}});
        if (!place) {
            await Place.create({
                name: p.name,
                description: p.description,
                type: p.type,
            })
        }
    }
}

async function createTestFeedbacks(){
    for (const f of feedbacks) {
        const feedback = await Feedback.findOne({where: {placeId: f.placeId, userId: f.userId}});
        if (!feedback) {
            await Feedback.create({
                placeId: f.placeId,
                userId: f.userId,
                text: f.text,
                mark: f.mark,
            })
        }
    }
}

export default {
    createTestUsers,
    createTestPlaces,
    createTestFeedbacks
}