import { DataTypes, Model} from "sequelize";
import { SequelizeGeometryType } from 'sequelize-geometry';
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
                location: {
                    type: Sequeli,
                    allowNull: true,
                }
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

