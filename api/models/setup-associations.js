import { models } from "./index.js";
const { FavPlace, Place, Feedback, User } = models;

export default function () {
    User.belongsToMany(Place, {
        through: FavPlace,
        foreignKey: { name: 'userId', allowNull: false },
        as: 'placesFav'
    });
    Place.belongsToMany(User, {
        through: FavPlace,
        foreignKey: { name: 'placeId', allowNull: false },
        as: 'usersFav'
    });
    // User.hasMany(FavPlace, { foreignKey: { name: 'userId', allowNull: false }, as: 'favPlace' });
    // FavPlace.belongsTo(User, { foreignKey: { name: 'usersId', allowNull: false }, as: 'usersFav' });
    Place.hasMany(FavPlace, { foreignKey: { name: 'placeId', allowNull: false }, as: 'favPlace' });
    FavPlace.belongsTo(Place, { foreignKey: { name: 'placeId', allowNull: false }, as: 'placesFav' });

    User.belongsToMany(Place, {
        through: Feedback,
        foreignKey: { name: 'userId', allowNull: false },
        as: 'placesFeedback'
    });
    Place.belongsToMany(User, {
        through: Feedback,
        foreignKey: { name: 'placeId', allowNull: false },
        as: 'usersFeedback'
    });
    // User.hasMany(Feedback, { foreignKey: { name: 'usersId', allowNull: false }, as: 'feedback'});
    // Feedback.belongsTo(User, { foreignKey: { name: 'usersId', allowNull: false }, as: 'usersFeedback' });
    Place.hasMany(Feedback, { foreignKey: { name: 'placeId', allowNull: false }, as: 'feedback' });
    Feedback.belongsTo(Place, { foreignKey: { name: 'placeId', allowNull: false }, as: 'placesFeedback' });
}