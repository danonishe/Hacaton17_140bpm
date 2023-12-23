import {AppErrorInvalid, AppErrorMissing} from "../utils/errors.js";
import Place from "../models/place.js";

export default {
    async addFavTypes({ body: { types }, user }, res){
        if (!types) throw new AppErrorMissing('types');
        if (!user) throw new AppErrorMissing('user');
        if (!(types instanceof Array)) throw new AppErrorInvalid('types');

        user.update({ favTypes: types });

        res.json({ user });
    },

    async getSuggestedPlaces({ user }, res){
        if (!user) throw new AppErrorMissing('user');
        if (!user.favTypes) throw new AppErrorMissing('userTypes');

        const places = await Place.findAll({ where: { type: user.favTypes } });

        res.json({ places });
    }
}