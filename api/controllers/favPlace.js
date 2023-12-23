import FavPlace from "../models/favPlace.js";
import Place from "../models/place.js";
import User from "../models/user.js";

import { AppErrorAlreadyExists, AppErrorInvalid, AppErrorMissing, AppErrorNotExist } from "../utils/errors.js";

export default {
    async createFavPlace(req, res){
        const user = req.user;
        if(!user) throw new AppErrorMissing('user');
        const {placeId} = req.params;

        const existFavPlace = await FavPlace.findOne({where: {
            userId: user.id,
            placeId: placeId,
        }});

        const existPlace = await Place.findOne({where: {id: placeId}});
        const existUser = await User.findOne({where: {id: user.id}});

        if(!existPlace) throw new AppErrorNotExist('place');
        if(!existUser) throw new AppErrorNotExist('user');
        if(existFavPlace) throw new AppErrorAlreadyExists('favPlace');
        
        const newPlace = await FavPlace.create({
            userId: user.id,
            placeId: placeId,
        });

        res.json({newPlace});
    },
     
    async deleteFavPlaceById(req, res){
        const user = req.user;
        if(!user) throw new AppErrorMissing('user');
        const {placeId} = req.params;

        const existFavPlace = await FavPlace.findOne({
            where: {
                userId: user.id,
                placeId: placeId,
            }
        })

        if(!existFavPlace) throw new AppErrorNotExist('FavPlace');

        await existFavPlace.destroy();

        res.json({status: "ok"});

    },
     
    async getFavPlaceByIdAndUserId(req, res){
        const user = req.user;
        if(!user) throw new AppErrorMissing('user');
        const {placeId} = req.params;

        if(!placeId) throw new AppErrorMissing('placeId');

        const existFavPlace = await FavPlace.findOne({
            where: {
                userId: user.id,
                placeId: placeId,
            },
            include: {
                model: Place,
                as: 'placesFav',
            }
        });

        if(!existFavPlace) throw new AppErrorNotExist('FavPlace');

        res.json(existFavPlace);

    },

    async getPlacesForUser({user}, res){
        if(!user) throw new AppErrorMissing('user');

        const existFavPlaces = await FavPlace.findAll({
            where: {
                userId: user.id
            },
            include: {
                model: Place,
                as: 'placesFav',
            }
        });

        res.json({existFavPlaces});
    }
}
