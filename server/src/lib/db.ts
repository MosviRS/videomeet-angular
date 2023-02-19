import { Sequelize } from 'sequelize';
import {DATABASE} from '../config/constants';
export const sequelize = new Sequelize(DATABASE.database,DATABASE.user,DATABASE.password,{
    host: DATABASE.host,
    dialect: 'postgres'
});