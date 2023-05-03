import express from "express";
import dotenv from "dotenv";
import db from "./config/database.js";
import UsersRouter from "./router/index.js";
dotenv.config();
db.sync();

const app = express();

try{
    db.authenticate();
    console.log('Connection database successfully.');
}
catch(error){
    console.error('Unable to connect to the database:', error);
};
app.use(express.json())
app.use('/', UsersRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});