import FavPlace from "../models/favPlace.js";
import Place from "../models/place.js";
import User from "../models/user.js";

import { AppErrorAlreadyExists, AppErrorInvalid, AppErrorMissing, AppErrorNotExist } from "../utils/errors.js";

export default {
    async createFavPlace(req, res){
        const favPlace = req.body;

        if(!favPlace.userId) throw new AppErrorMissing('userId');
        if(!favPlace.placeId) throw new AppErrorMissing('placeId');
        
        const existFavPlace = await FavPlace.findOne({where: {
            userId: favPlace.userId,
            placeId: favPlace.placeId,
        }});

        const existPlace = await Place.findOne({where: {id: favPlace.placeId}});
        const existUser = await User.findOne({where: {id: favPlace.userId}});

        if(!existPlace) throw new AppErrorNotExist('place');
        if(!existUser) throw new AppErrorNotExist('user');
        if(existFavPlace) throw new AppErrorAlreadyExists('favPlace');
        
        const newPlace = await FavPlace.create({
            userId: favPlace.userId,
            placeId: favPlace.placeId
        });

        res.json({newPlace});
    },
     
    async deleteFavPlaceById(req, res){
        const userId = req.body.userId;
        const placeId = req.body.placeId;
        if(!userId) throw new AppErrorMissing('userId');

        const existFavPlace = await FavPlace.findOne({
            where: {
                userId: userId,
                placeId: placeId,
            }
        })

        if(!existFavPlace) throw new AppErrorNotExist('FavPlace');

        await existFavPlace.destroy();

        res.json({status: "ok"});

    },
     
    async getFavPlaceByIdAndUserId(req, res){
        const userId = req.body.userId;
        const placeId = req.body.placeId;

        if(!userId) throw new AppErrorMissing('userId');
        if(!placeId) throw new AppErrorMissing('placeId');

        const existFavPlace = await FavPlace.findOne({
            where: {
                userId: userId,
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

    async getPlacesForUser(req, res){
        const {userId} = req.params;

        const existFavPlaces = await FavPlace.findAll({
            where: {
                userId: userId,
            },
            include: {
                model: Place,
                as: 'placesFav',
            }
        });

        res.json({existFavPlaces});
    }
}
