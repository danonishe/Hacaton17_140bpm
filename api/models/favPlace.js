import {Model} from 'sequelize';

export default class FavPlace extends Model {
    static initialize(sequelize) {
        FavPlace.init(
            {},
            {
                sequelize,
                schema: 'public',
                modelName: 'FavPlace',
                tableName: 'favorite_place',
                timestamps: false,
            }
        );
    }
}
