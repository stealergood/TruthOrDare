import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

export const Truth = db.define('truth', {
    question: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export const Dare = db.define('dare', {
    question: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

