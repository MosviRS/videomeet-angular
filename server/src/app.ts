import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from 'dotenv';
import {router} from "./routes";
import {sequelize} from "./lib/db";
const app = express();
//Set enviroment variables
const NODE_ENV= process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
dotenv.config({
  path: `${__dirname}/../.env.${NODE_ENV}`
});
//Settings
app.set('port',PORT);

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

//Routes
app.use(router);
//Starting Server
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
//Sync DB
sequelize.sync({force: false});