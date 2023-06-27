import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import * as dotenv from 'dotenv';
import {router} from "./routes";
import cors from "cors";
import {sequelize} from "./lib/db";
import { Server } from "socket.io";
import http from "http";
import {socketController} from "./services/sockets.service"; 
const app = express();
const server = http.createServer(app);
const io = new Server(server,
  {
    cors: {
      origin: "http://localhost:4200",
      credentials: false
    }
  }
);
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
// Configurar cors()
app.use(cors({
  origin: 'http://localhost:4200',
}));
//Routes
app.use(router);

io.on('connection',socketController)
//Starting Server
server.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
//Sync DB
sequelize.sync({force: false});