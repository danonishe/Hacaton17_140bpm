import {AppErrorAlreadyExists, AppErrorMissing, AppErrorNotExist} from "../utils/errors.js";
import Feedback from "../models/feedback.js";
import Place from "../models/place.js";

export default {
    async create({ body: { placeId, text, mark}, user  }, res){
        if (!placeId) throw new AppErrorMissing('placeId');
        if (!text) throw new AppErrorMissing('text');
        if (!mark) throw new AppErrorMissing('mark');
        if (!user) throw new AppErrorMissing('user');

        const checkFeedback = await Feedback.findOne({ where: { placeId,  userId: user.id } });
        if (checkFeedback) throw new AppErrorAlreadyExists('Feedback');

        const feedback = await Feedback.create({
            userId: user.id,
            placeId,
            mark,
            text
        });

        res.json({ feedback });
    },

    async get(req, res){
        const feedbacks = await Feedback.findAll({
            include: {
                model: Place,
                as: 'placesFeedback'
            },
        });

        res.json({ feedbacks });
    },

    async getByUserId({ user }, res){
        if (!user) throw new AppErrorMissing('user');

        const feedbacks = await Feedback.findAll( {
            where: {
                userId: user.id
            },
            include: {
                model: Place,
                as: 'placesFeedback'
            },
        });

        res.json({ feedbacks });
    },

    async updateUser({ body: { placeId, mark, text }, user }, res){
        if (!user) throw new AppErrorMissing('uesr');

        const feedback = await Feedback.findOne({ where: { userId: user.id, placeId } });
        if (!feedback) throw new AppErrorNotExist('feedback');

        await feedback.update({ mark, text });

        res.json({ feedback });
    },

    async getByPlaceId({ params: { placeId } }, res){
        if (!placeId) throw AppErrorMissing('placeId');
        const feedbacks = await Feedback.findAll({
            where: {
                placeId
            },
            include: {
                model: Place,
                as: 'placesFeedback'
            },
        });

        res.json({ feedbacks });
    },
}