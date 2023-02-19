import { DataTypes, Model } from "sequelize";
import { sequelize } from "@/lib/db";
import {User} from "@/models/User";
import { Room } from "@/models/Room";

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
    createAt: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    finishedAt: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
  foreignKey: "fk_user",
  as: "User",
});
// Establece la relación entre UserRoom y Room
UserRoom.belongsTo(Room, {
    foreignKey: "fk_room",
    as: "Room",
  });
