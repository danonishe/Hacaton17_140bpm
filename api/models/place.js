import { DataTypes, Model } from "sequelize";

export default class Place extends Model {
    static initialize(sequelize) {
        Place.init(
            {
                name: { type: DataTypes.STRING, allowNull: false },
                description: { type: DataTypes.STRING, allowNull: true },
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

