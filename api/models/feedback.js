import { DataTypes, Model } from "sequelize";

export default class Feedback extends Model {
    static initialize(sequelize) {
        Feedback.init(
            {
                text: { type: DataTypes.STRING, allowNull: false },
                mark: { type: DataTypes.SMALLINT, allowNull: false },
            },
            {
                sequelize,
                schema: 'public',
                modelName: 'Feedback',
                tableName: 'feedbacks',
                paranoid: true,
            }
        );
    }
}

