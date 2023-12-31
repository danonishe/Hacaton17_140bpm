import { DataTypes, Model} from "sequelize";
import placeTypes from "../config/place-types.js";

export default class Place extends Model {
    static initialize(sequelize) {
        Place.init(
            {
                name: { type: DataTypes.STRING, allowNull: false },
                description: { type: DataTypes.STRING, allowNull: true },
                type: {
                    type: DataTypes.SMALLINT,
                    allowNull: false,
                    validate: { isIn: [Object.values(placeTypes)] },
                },
                latitude: {
                    type: DataTypes.DOUBLE,
                    allowNull: true,
                },
                longitude:{
                    type: DataTypes.DOUBLE,
                    allowNull: true,
                },
                imgUrl: { type: DataTypes.STRING, allowNull: true },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Place',
                tableName: 'places',
                paranoid: true,
            }
        );
    }
}

