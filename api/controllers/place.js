import Place from "../models/place.js";
import { AppErrorAlreadyExists, AppErrorInvalid, AppErrorMissing, AppErrorNotExist } from "../utils/errors.js"


export default {

    async createPlace({body: {name, description}}, res){
        if (!name) throw new AppErrorMissing("name");
        if (!description) throw new AppErrorMissing("description");

        if (name.length <=3) throw new AppErrorInvalid('name');
        
        const CheckPlace = await Place.findOne({ where: {name: name}});
        if (CheckPlace) throw new AppErrorAlreadyExists('place');
        
        const place = await Place.create({
            name,
            description,
        });

        res.json({place});
    },

    async updatePlace(req, res){

        const { id } = req.params;
        const updatePlace = req.body;

        if(!updatePlace.name) throw new AppErrorMissing('name');
        if(!updatePlace.description) throw new AppErrorMissing('description');

        const existPlace = await Place.findOne({where: {id: id}});

        if(!existPlace) throw new AppErrorNotExist("place");

        await existPlace.update({
            name: updatePlace.name, 
            description: updatePlace.description
        });

        res.json({existPlace});
    },

    async getPlaces(req, res){

        const existPlaces = await Place.findAll();
        
        res.json({existPlaces});

    },

    async getPlaceById(req, res){
        const {id} = req.params;
        const existPlace = await Place.findOne({where: {id: id}});

        if(!existPlace) throw new AppErrorNotExist("place");
        
        res.json({existPlace});
    },
    
    async deletePlaceById(req, res){
        const {id} = req.params;

        const existPlace = await Place.findOne({where: {id: id}});

        if(!existPlace) throw new AppErrorNotExist("place");

        await Place.destroy({where: {id: id}});

        res.json({status: "ok"});
    }
}