import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/db";
import {User} from "./User";
import { Room } from "./Room";

export class UserRoom extends Model {
  public id_user_room!:string;
  public createAt!:string;
  public finishedAt!:string;
  public fk_user!:number;
  public fk_room!:number;

}

UserRoom.init(
  {
    id_user_room: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fk_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fk_room: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "UserRoom",
    tableName: "user_room",
  }
);

// Establece la relación entre UserRoom y User
UserRoom.belongsTo(User, {
  as: 'user',
  foreignKey: "fk_user",
});
// Establece la relación entre UserRoom y Room
UserRoom.belongsTo(Room, {
    foreignKey: "fk_room",
  });
