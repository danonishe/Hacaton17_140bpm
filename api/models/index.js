import { Sequelize } from "sequelize";
import Place from "./place.js";
import FavPlace from "./favPlace.js";
import Feedback from "./feedback.js";
import User from "./user.js";
import "dotenv/config"

const { DB_USER, DB_PWD, DB_HOST, DB_PORT } = process.env;

export const models = {
    Place,
    FavPlace,
    Feedback,
    User
};
export const sequelize = new Sequelize(process.env.DB_NAME, DB_USER, DB_PWD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    // dialectOptions: { multipleStatements: true },
    define: {
        // charset: 'utf8mb4',
        // collate: 'utf8mb4_unicode_ci',
        timestamps: true,
        underscored: true,
    },
    logging: false,
});