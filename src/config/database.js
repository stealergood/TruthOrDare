import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const db = new Sequelize(process.env.MYSQLDATABSE, process.env.MYSQLUSERNAME, process.env.MYSQLPASSWORD, {
    database: process.env.MYSQLDATABSE,
    username: process.env.MYSQLUSERNAME,
    password: process.env.MYSQLPASSWORD,
    dialect: 'mysql',
    port: process.env.MYSQLPORT,
    host: process.env.MYSQLHOST,
});

export default db;