import { DataTypes, Model } from "sequelize";
import { sequelize } from "@/lib/db";

export class User extends Model {
  public id_user!: number;
  public name!: string;
}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);
