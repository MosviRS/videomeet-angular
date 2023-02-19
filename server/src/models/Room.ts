import { DataTypes, Model } from "sequelize";
import { sequelize } from "../lib/db";

export class Room extends Model {
  public id_room!: number;
  public title!: string;
  public subject!: string;
  public uuid!:string;
}
Room.init(
  {
    id_room: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false,
      unique: true
    }
  },
  {
    sequelize,
    modelName: "Room",
    tableName: "rooms",
  }
);
